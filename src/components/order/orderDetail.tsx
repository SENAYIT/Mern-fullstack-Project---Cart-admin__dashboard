import DetailLayout from "../common/detail/detailLayout";
import DetailHeader from "../common/detail/detailHeader";
import InfoCard from "../common/detail/infoCard";
import Timeline from "../common/detail/timeline";
import ActionButtons from "../common/detail/actionButtons";

import { Order } from "@/lib/orders/definitions";
import { Customer } from "@/lib/customers/definitions";
import { fetchCustomerById } from "@/lib/customers/fetchCustomer_byId";
import { CreateOrder, DeleteOrder, UpdateOrder } from "@/ui/orders/buttons";

import ProductTable from "./productTable";
import OrdersProductList from "./orderProductsList";

type DetailProps = {
  order: Order;
};

export default async function OrderDetail({ order }: DetailProps) {
  const { _id, customer, status, totalPrice, products, payment } = order;

  const customerData: Customer | undefined = await fetchCustomerById(customer);
  let customerName = "";
  if (!customerData) {
    return (customerName = "Unknown");
  }
  customerName = customerData.name;

  const totalProducts = products.length;

  return (
    <DetailLayout>
      <DetailHeader
        title={`Order #${_id}`}
        status={status}
        editUrl={`/dashboard/orders/${_id}/edit`}
      />
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <InfoCard
          title="Order Information"
          items={[
            {
              label: "Total Products",
              value: totalProducts,
            },

            {
              label: "Total",
              value: `$${totalPrice}`,
            },
            {
              label: "Payment",
              value: payment,
            },
          ]}
        />
        {!customerData && (
          <InfoCard
            title="Customer Information"
            items={[
              {
                label: "Customer",
                value: customerName,
              },
            ]}
          />
        )}
        {customerData && (
          <InfoCard
            title="Customer Information"
            items={[
              {
                label: "id",
                value: customerData._id,
              },
              {
                label: "Email",
                value: customerData.email,
              },
              {
                label: "Phone Number",
                value: customerData.phoneNumber,
              },
              {
                label: "Status",
                value: customerData.status,
              },
            ]}
          />
        )}
      </div>

      {/* <DataTable columns={productColumns} data={order.products} /> */}

      <OrdersProductList orderProducts={order.products} />
      <Timeline
        items={["Order Created", "Processing", "Completed", "Cancelled"]}
      />

      <ActionButtons>
        <CreateOrder />
        <UpdateOrder id={_id} />
        <DeleteOrder id={_id} />
      </ActionButtons>
    </DetailLayout>
  );
}

// for the structure

// {
//   /* <DetailLayout>

// <DetailHeader {...orderHeader}/>

// <InfoCard {...orderInfo}/>

// <ProductsTable {...products}/>

// <PaymentCard {...payment}/>

// <Timeline {...timeline}/>

// <ActionButtons {...actions}/>

// </DetailLayout> */
// }
