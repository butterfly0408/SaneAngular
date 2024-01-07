export default {
    title: "Category",
    name: "category",
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
            }
        },
        {
            title: "Description",
            name: "description",
            type: "text",
        },
        {
            title: "Parents",
            name: "parents",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "category" }],
                }
            ],
        },
    ]
}