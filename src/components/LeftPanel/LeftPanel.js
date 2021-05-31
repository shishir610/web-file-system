import React, { Fragment } from 'react';
import ListItem from './ListItem'

const FILE_STRUCTURE = [
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

const constructListItem = (item) => {
    if (item.children.length !== 0) {
        item.children.map(constructListItem)
    }
    return <ListItem item={item} hasChildren={!!item.children.length} />
}

const LeftPanel = () => {
    return (
        <div className="bg-grey-100 w-1/4 h-auto">
            <p className="text-grey-300 p-8 pb-4">
                ROOT
            </p>
            {FILE_STRUCTURE.map(constructListItem)}
        </div>
    );
}

export default LeftPanel;