import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleOneUp, handleSearchQuery, handleSearchToggle } from '../../actions';

const Navbar = ({ searchActive }) => {
    const path = useSelector(state => state.currentpath)
    const dispatch = useDispatch()
    const root = useSelector(state => state.filesystem)

    return (
        <div className="flex items-center flex-wrap">
            {!searchActive && <img
                src="./icons/upArrow.png"
                style={{ width: '20px', height: '20px' }}
                className="cursor-pointer mt-6 ml-4"
                onClick={() => dispatch(handleOneUp())}
            />}
            <div className="ml-2 md:ml-8 mt-6 flex-auto hidden md:block">
                {searchActive ?
                    <span className='text-lg md:text-2xl text-black-100'>Search Results...</span> :
                    path.map((item, i) => {
                        const last = i === path.length - 1
                        return (
                            <Fragment>
                                <span className={`text-2xl ${last ? 'text-black-100' : 'text-grey-300'}`}>{item}</span>
                                <span className="text-2xl text-grey-300">{!last && ' / '}</span>
                            </Fragment>
                        )
                    })}
            </div>
            <div className="flex-auto flex md:justify-end ml-8 md:ml-0 mt-6 md:mt-0">
                <div className="z-10">
                    <i className="fa fa-search pt-3" style={{ color: 'grey' }} aria-hidden="true"></i>
                </div>
                <input className="border-2 -ml-7 pl-10 xs-l-w-full rounded-xl h-10 text-grey-300 text-sm md:text-lg" placeholder="Search for anything"
                    onFocus={() => dispatch(handleSearchToggle(true))}
                    onChange={(event) => dispatch(handleSearchQuery(event.target.value, root))}
                >
                </input>
                {searchActive && (
                    <div className="z-10">
                        <i className="fas fa-times cursor-pointer pt-3 -ml-7"
                            style={{ color: 'grey' }}
                            aria-hidden="true"
                            onClick={() => dispatch(handleSearchToggle(false))}
                        ></i>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;