export default {
    title: "Product",
    name: "product",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            title: "Default variant",
            name: "defaultProductVariant",
            type: "productVariant",
        },
        {
            title: "Tags",
            name: "tags",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            title: "Blurb",
            name: "blurb",
            type: "string",
        },
        {
            title: "Categories",
            name: "categories",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: { type: "category" },
                },
            ],
        },
        {
            title: "Body",
            name: "body",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
    preview: {
        select: {
            title: "title",
        },
    },
}