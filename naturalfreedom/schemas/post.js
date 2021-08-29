export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: [],
                }
            ]
        }
    ]
}