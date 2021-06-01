import { DELETE_FILE_FOLDER } from "../actions/alterfilestructure";

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
                children: [
                    {
                        name: "Pictures",
                        type: "folder",
                        children: [
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
                    },
                    {
                        name: "Videos",
                        type: "folder",
                        children: []
                    },
                ]
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

const filesystemReducer = (prevState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_FILE_FOLDER:
            const { currentPath, name } = payload
            var immediateParent = prevState
            var allChildren = prevState
            for (let i = 1; i < currentPath.length; i++) {
                immediateParent = immediateParent.find(o => o.name === currentPath[i])
                if (i != currentPath.length - 1) {
                    immediateParent = immediateParent.children
                }
                allChildren = allChildren.find(o => o.name === currentPath[i]).children
            }
            const index = allChildren.findIndex(item => item.name === name)
            if (index > -1) {
                allChildren.splice(index, 1);
            }
            return prevState
        default:
            return prevState
    }
}

export default filesystemReducer