import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleOneUp } from '../../actions';

const Navbar = () => {
    const path = useSelector(state => state.currentpath)
    const dispatch = useDispatch()

    return (
        <div className="flex items-center">
            <img
                src="./icons/upArrow.png"
                style={{ width: '20px', height: '20px' }}
                className="cursor-pointer"
                onClick={() => dispatch(handleOneUp())}
            />
            <div className="ml-8 flex-auto">
                {path.map((item, i) => {
                    const last = i === path.length - 1
                    return (
                        <Fragment>
                            <a>
                                <span className={`text-2xl ${last ? 'text-black-100' : 'text-grey-300'}`}>{item}</span>
                            </a>
                            <span className="text-2xl text-grey-300">{!last && ' / '}</span>
                        </Fragment>
                    )
                })}
            </div>
            <div className="flex-auto flex justify-end">
                <div className="z-10">
                    <i className="fa fa-search pt-3" style={{ color: 'grey' }} aria-hidden="true"></i>
                </div>
                <input className="border-2 -ml-7 pl-10 rounded-xl h-10 text-grey-300" placeholder="Search for anything">
                </input>
            </div>
        </div>
    );
}

export default Navbar;