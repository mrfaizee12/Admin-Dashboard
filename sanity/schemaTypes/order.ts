export default {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
    },
    {
      name: "city",
      title: "City",
      type: "text",
    },
    {
      name: "total",
      title: "Total Amount",
      type: "number",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Product Name", type: "string" },
            { name: "image", title: "Image", type: "image" },
            { name: "price", title: "Price", type: "number" },
            { name: "quantity", title: "Quantity", type: "number" },
          ],
        },
      ],
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
          list: [
              { title: 'Pending', value: 'pending' },
              { title: 'Success', value: 'success' },
              { title: 'Dispatch', value: 'dispatch' },
          ],
          layout: 'radio' // Optionally, change to 'dropdown' if you prefer a dropdown
      },
      initialValue: 'pending' // Default value
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
      initialValue: (new Date()).toISOString(),
    }
  ],
};