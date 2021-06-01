import React, { Fragment, useRef } from 'react';

const List = ({ item, children, itemNumber }) => {
    const divRef = useRef(null)

    const handleClick = () => {
        const { current } = divRef
        if (current !== null) {
            if (current.style.maxHeight) {
                current.style.maxHeight = ''
            }
            else {
                current.style.maxHeight = '1000px'
            }
        }
    }

    return (
        <Fragment>
            <div className={`px-8 ${itemNumber != 0 && 'pl-4'} py-4 cursor-pointer hover:bg-grey-200 text-black-100 flex`} onClick={handleClick}>
                <div className="w-6/12 font-main">
                    {item.name}
                </div>
                <div className="flex w-6/12 justify-end">
                    <img src="icons/dropdown.svg" />
                </div>
            </div>
            <div ref={divRef} className={`expand pl-2 border-l-2 border-grey-250 ${itemNumber == 0 ? 'ml-8' : 'ml-4'}`}>
                {children}
            </div>
        </Fragment>
    );
}

export default List;