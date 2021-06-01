import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFolderDoubleClick } from '../../actions';
import { deleteFileOrFolder } from '../../actions/alterfilestructure';
import FFContainer from './FFContainer';
import ModalCreate from './ModalCreate';
import ModalDetails from './ModalDetails';
import PopoverOptions from './PopoverOptions';

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const FFArea = ({ searchActive, searchResults }) => {
    const [selected, setSelected] = useState("")
    const [selectedType, setSelectedType] = useState("")
    const [customContextMenu, setCustomContextMenu] = useState(false)
    const [rClickPos, setRClickPos] = useState([0, 0])
    const [showModalDetails, setShowModalDetails] = useState(false)
    const [showModalCreate, setShowModalCreate] = useState(false)

    var FFList = useSelector(state => state.filesystem)
    const currentPath = useSelector(state => state.currentpath)

    const dispatch = useDispatch()

    console.log(FFList);

    for (let i = 1; i < currentPath.length; i++) {
        console.log(currentPath[i])
        FFList = FFList.find(o => o.name === currentPath[i]).children
    }

    useEffect(() => {
        const clickElsewhere = () => {
            setCustomContextMenu(false)
        }

        window.addEventListener('click', clickElsewhere)

        return () => window.removeEventListener('click', clickElsewhere)
    }, [])

    const handleFFRightClick = (event, name, type) => {
        if (!searchActive) {
            setSelected(name)
            setSelectedType(type)
            setCustomContextMenu(true)
            setRClickPos([event.clientX, event.clientY])
        }
    }

    const handleOpen = () => {
        selectedType === 'folder' &&
            dispatch(handleFolderDoubleClick(selected))
    }

    const handleDelete = () => {
        dispatch(deleteFileOrFolder(currentPath, selected))
    }

    const handleGetInfo = () => {
        setShowModalDetails(true)
    }

    const selectedFileOrFolder = FFList[FFList.findIndex(ele => ele.name === selected)]

    const convertToDate = (date) => {
        if (date) {
            const dateSplit = date.split('-')
            let day = dateSplit[0]
            if (day[day.length - 1] === '1' && (day < 10 || day > 20)) {
                day = Number(day) + 'st'
            } else if (day[day.length - 1] === '2' && (day < 10 || day > 20)) {
                day = Number(day) + 'nd'
            } else if (day[day.length - 1] === '3' && (day < 10 || day > 20)) {
                day = Number(day) + 'rd'
            } else {
                day = Number(day) + 'th'
            }
            return `${day} ${MONTHS[dateSplit[1] - 1]}, ${dateSplit[2]}`
        }
    }

    const FFOrSearch = searchActive ? searchResults : FFList

    return (
        <div className="flex py-6 md:py-10 px-4 flex-wrap justify-center md:justify-start">
            {FFOrSearch.map(item =>
                <FFContainer
                    type={item.type}
                    name={item.name}
                    selected={selected}
                    setSelected={setSelected}
                    handleFFRightClick={handleFFRightClick}
                    searchActive={searchActive}
                />
            )}
            {searchActive && FFOrSearch.length === 0 &&
                <span className='text-2xl text-grey-300 pl-4'>Nothing here yet.</span>
            }
            {!searchActive && (
                <div
                    className="flex justify-center items-center h-32 w-28 border-dashed border-grey-250 border-4 rounded-lg cursor-pointer hover:bg-gray-100"
                    onClick={() => setShowModalCreate(true)}
                >
                    <p className="text-5xl text-grey-250">+</p>
                </div>
            )}
            <ModalDetails
                show={showModalDetails}
                details={[
                    ['Name', selected],
                    ['Size', selectedFileOrFolder?.size],
                    ['Creator name', selectedFileOrFolder?.creator],
                    ['Created time', convertToDate(selectedFileOrFolder?.date)]
                ]}
                name={selected}
                type={selectedType}
                setShowModalDetails={setShowModalDetails}
                FF={FFList}
            />
            <ModalCreate
                show={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
            <PopoverOptions
                customContextMenu={customContextMenu}
                rClickPos={rClickPos}
                open={selectedType === 'folder'}
                handleOpen={handleOpen}
                handleGetInfo={handleGetInfo}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default FFArea;