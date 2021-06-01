import React, { Fragment } from 'react';

const ListItem = ({ item, itemNumber }) => {
    return (
        <Fragment>
            <div className={`${itemNumber ? 'px-4' : 'px-8'} ${itemNumber ? 'py-2' : 'py-4'} hover:bg-grey-200 text-black-100 flex`}>
                <div className="w-6/12 font-main">
                    {item.name}
                </div>
            </div>
        </Fragment>
    );
}

export default ListItem;