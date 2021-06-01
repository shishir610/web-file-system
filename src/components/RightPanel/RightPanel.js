import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import FFArea from './FFArea';
import Navbar from './Navbar';

const RightPanel = () => {
    const search = useSelector(state => state.search)
    const path = useSelector(state => state.currentpath)

    return (
        <div className="xl:w-4/5 lg:w-3/4 w-full h-auto p-2 md:p-10">
            {!search.searchActive && (
                <div className="block md:hidden px-5 -mb-3 pt-3">
                    {path.map((item, i) => {
                        const last = i === path.length - 1
                        return (
                            <Fragment>
                                <span className={`text-lg ${last ? 'text-black-100' : 'text-grey-300'}`}>{item}</span>
                                <span className="text-lg text-grey-300">{!last && ' / '}</span>
                            </Fragment>
                        )
                    })}
                </div>
            )}
            <Navbar searchActive={search.searchActive} />
            <FFArea searchActive={search.searchActive} searchResults={search.searchResults} />
        </div>
    );
}

export default RightPanel;