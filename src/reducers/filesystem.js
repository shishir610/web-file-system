const initialState = [
    {
        name: "Apps",
        type: "folder",
        children: []
    },
    {
        name: "Pictures",
        type: "folder",
        children: []
    },
    {
        name: "Videos",
        type: "folder",
        children: []
    },
    {
        name: "Docs",
        type: "folder",
        children: [
            {
                name: "Work",
                type: "folder",
                children: []
            },
            {
                name: "c.pdf",
                type: "file",
                children: []
            },
            {
                name: "d.docx",
                type: "file",
                children: []
            },
        ]
    },
    {
        name: "a.pdf",
        type: "file",
        children: []
    },
    {
        name: "b.jpg",
        type: "file",
        children: []
    },
]

const filesystemReducer = (state = initialState, action) => {
    const { type, payload } = action;

    // switch (type) {

    // }
    return initialState
}

export default filesystemReducer