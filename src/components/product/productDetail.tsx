import DetailLayout from "../common/detail/detailLayout";
import DetailHeader from "../common/detail/detailHeader";
import InfoCard from "../common/detail/infoCard";
import StatsCard from "../common/detail/statsCard";
import Timeline from "../common/detail/timeline";
import { Product } from "@/lib/products/definitions";
import ActionButtons from "../common/detail/actionButtons";
import AddCartButton from "@/ui/dashboard/addCartButton";
import {
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
} from "@/ui/products/buttons";

export default function ProductDetail({ product }: { product: Product }) {
  const { _id, image, name, description, price, stock, totalSold, status } =
    product;
  return (
    <DetailLayout>
      <DetailHeader
        title={name}
        subtitle={`Product ID: ${_id}`}
        status={status}
        editUrl={`/dashboard/products/${_id}/edit`}
      />

      <InfoCard
        title="Product Information"
        items={[
          {
            label: "Price",
            value: price,
          },
          {
            label: "Stock",
            value: stock,
          },
          {
            label: "Totsl Sold",
            value: totalSold,
          },
        ]}
      />

      <StatsCard
        stats={[
          {
            title: "Total Sold",
            value: totalSold,
          },
        ]}
      />

      <Timeline items={["New", "exited"]} />
      <ActionButtons>
        <AddCartButton productId={product._id} quantity={1} />
        <CreateProduct />
        <UpdateProduct id={_id} />
        <DeleteProduct id={_id} />
      </ActionButtons>
    </DetailLayout>
  );
}

// for the structure
{
  /* <DetailLayout>

<DetailHeader {...productHeader}/>

<InfoCard {...productInfo}/>

<StatsCard {...productStats}/>

<InventoryCard {...inventory}/>

<Timeline {...timeline}/>

<ActionButtons {...actions}/>

</DetailLayout> */
}
