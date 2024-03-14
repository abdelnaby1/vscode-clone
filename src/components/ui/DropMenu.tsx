import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setOpenedFiles } from "../../app/features/fileTreeSlice"
import { RootState } from "../../app/store"

interface IProps{
    setShowMenu: (val: boolean) => void
    position: {
        x: number,
        y: number
    }
}
const DropMenu = ({position: {x,y},setShowMenu}:IProps) => {
  const {openedFiles,tabIdToRemove} = useSelector((state: RootState) => state.tree)
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if(menuRef.current && !menuRef.current.contains(event?.target as Node)){
            setShowMenu(false)
        }
    }
    window.addEventListener('click',handleClickOutside)    
    return () => {
        window.removeEventListener('click',handleClickOutside)
    }
  }, [setShowMenu])
  
  const closeAllHandler = () =>{
    dispatch(setOpenedFiles([]))
    setShowMenu(false)
  }
  const onCloseHandler = () => {
    
    const filteredFiles = openedFiles.filter(file => {
        return file.id !== tabIdToRemove
    });
    dispatch(setOpenedFiles(filteredFiles))
    setShowMenu(false)
  }
  return (
    <div ref={menuRef}>
        <ul className="bg-white text-black w-fit px-7 py-2 rounded-md"
            style={{
                position: "absolute",
                left: x,
                top: y
            }}
        >
            <li onClick={onCloseHandler} className="cursor-pointer">Close</li>
            <li onClick={closeAllHandler} className="cursor-pointer">Close All</li>
        </ul>
    </div>
  )
}

export default DropMenu