import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem'
import List from './List'

const constructListItem = (item, itemNumber) => {
    if (item.children.length !== 0) {
        return (
            <List item={item} itemNumber={itemNumber}>
                {item.children.map((item) => constructListItem(item, itemNumber + 1))}
            </List>
        )
    }
    else {
        return <ListItem item={item} itemNumber={itemNumber} />
    }
}

const LeftPanel = () => {
    const FILE_STRUCTURE = useSelector(state => state.filesystem)
    return (
        <div className="bg-grey-100 xl:w-1/5 min-w-max h-auto hidden md:block">
            <p className="text-grey-300 p-8 pb-4 hover:bg-grey-200">
                ROOT
            </p>
            {FILE_STRUCTURE.map((item) => constructListItem(item, 0))}
        </div>
    );
}

export default LeftPanel;