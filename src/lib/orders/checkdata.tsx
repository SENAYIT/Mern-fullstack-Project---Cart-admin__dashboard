// for the customers id - getting by orders status

[
  {
    all_orders: {
      data: [
        {
          _id: "ord-001",
          customer: "cust-001",
          products: [
            { product: "prod-001", quantity: 2 },
            { product: "prod-002", quantity: 1 },
          ],
          totalPrice: 159.97,
          payment: "Pending",
          status: "pending",
          createdAt: "2026-07-31T10:00:00.000Z",
          updatedAt: "2026-07-31T10:00:00.000Z",
        },
        {
          _id: "ord-002",
          customer: "cust-001",
          products: [{ product: "prod-003", quantity: 3 }],
          totalPrice: 89.99,
          payment: "Pending",
          status: "pending",
          createdAt: "2026-07-31T11:30:00.000Z",
          updatedAt: "2026-07-31T11:30:00.000Z",
        },
      ],
      total: 2,
    },
  },
  { new_Orders: { data: [], total: 0 } },
  {
    pending_orders: {
      data: [
        {
          _id: "ord-001",
          customer: "cust-001",
          products: [
            { product: "prod-001", quantity: 2 },
            { product: "prod-002", quantity: 1 },
          ],
          totalPrice: 159.97,
          payment: "Pending",
          status: "pending",
          createdAt: "2026-07-31T10:00:00.000Z",
          updatedAt: "2026-07-31T10:00:00.000Z",
        },
        {
          _id: "ord-002",
          customer: "cust-001",
          products: [{ product: "prod-003", quantity: 3 }],
          totalPrice: 89.99,
          payment: "Pending",
          status: "pending",
          createdAt: "2026-07-31T11:30:00.000Z",
          updatedAt: "2026-07-31T11:30:00.000Z",
        },
      ],
      total: 2,
    },
  },
  { completed_orders: { data: [], total: 0 } },
  { cancelled_orders: { data: [], total: 0 } },
];

//  for the  customers orders payment status

// fetch customer's order by customers payemnte statemen is
[
  {
    all_orders: {
      data: [
        {
          _id: "ord-001",
          customer: "cust-001",
          products: [
            { product: "prod-001", quantity: 2 },
            { product: "prod-002", quantity: 1 },
          ],
          totalPrice: 159.97,
          payment: "Pending",
          status: "pending",
          createdAt: "2026-07-31T10:00:00.000Z",
          updatedAt: "2026-07-31T10:00:00.000Z",
        },
        {
          _id: "ord-002",
          customer: "cust-001",
          products: [{ product: "prod-003", quantity: 3 }],
          totalPrice: 89.99,
          payment: "Pending",
          status: "pending",
          createdAt: "2026-07-31T11:30:00.000Z",
          updatedAt: "2026-07-31T11:30:00.000Z",
        },
      ],
      total: 2,
    },
  },
  { paid_Orders_payment: { data: [], total: 0 } },
  {
    pending_orders_payment: {
      data: [
        {
          _id: "ord-001",
          customer: "cust-001",
          products: [
            { product: "prod-001", quantity: 2 },
            { product: "prod-002", quantity: 1 },
          ],
          totalPrice: 159.97,
          payment: "Pending",
          status: "pending",
          createdAt: "2026-07-31T10:00:00.000Z",
          updatedAt: "2026-07-31T10:00:00.000Z",
        },
        {
          _id: "ord-002",
          customer: "cust-001",
          products: [{ product: "prod-003", quantity: 3 }],
          totalPrice: 89.99,
          payment: "Pending",
          status: "pending",
          createdAt: "2026-07-31T11:30:00.000Z",
          updatedAt: "2026-07-31T11:30:00.000Z",
        },
      ],
      total: 2,
    },
  },
  { notPayed_orders_payment: { data: [], total: 0 } },
];

// for the customers payment balanc in status

// fetch customers total payment status in orders Payment :
[{ paid_payment: 300 }, { pending_payment: 100 }, { notPayed_payment: 200 }];
