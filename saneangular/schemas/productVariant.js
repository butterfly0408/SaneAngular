export default {
    title: "Product Variant",
    name: "productVariant",
    type: "object",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Price",
            name: "price",
            type: "number",
        },
        {
            title: "SKU",
            name: "sku",
            type: "string",
        },
        {
            title: "Images",
            name: "images",
            type: "array",
            of: [{ type: "image" }],
        },
    ],
}