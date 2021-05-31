import React, { Fragment, useRef } from 'react';

const ListItem = ({ item, hasChildren }) => {
    const divRef = useRef(null)

    const handleClick = () => {
        const { current } = divRef
        if (current !== null) {
            if (current.style.maxHeight) {
                current.style.maxHeight = ''
            }
            else {
                current.style.maxHeight = current.scrollHeight + 'px';
            }
        }
    }

    console.log(item)

    return (
        <Fragment>
            <a>
                <div className={`px-8 py-4 ${item.name === "Apps" && 'bg-grey-200'} text-black-100 flex`}>
                    <div className="w-6/12 font-main">
                        {item.name}
                    </div>
                    {hasChildren && (
                        <div className="flex w-6/12 justify-end">
                            <img src="icons/dropdown.svg" />
                        </div>
                    )}
                </div>
            </a>
            {hasChildren && (
                <div ref={divRef} className="expand">
                    STUFF IN HERE
                </div>
            )}
        </Fragment>
    );
}

export default ListItem;