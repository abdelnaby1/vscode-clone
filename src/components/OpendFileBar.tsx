import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import OpenedFilesBarTab from "./opendFilesBarTab"
import { useState } from "react"
import DropMenu from "./ui/DropMenu"

const OpenedFileBar = () => {
  const {openedFiles} = useSelector((state: RootState) => state.tree)
  const [menuPosition,setMenuPosition] = useState({x:0,y:0});
  const [showMenu, setShowMenu] = useState(false);
  const onContextMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    console.log(e.clientX, e.clientY);
    setMenuPosition({x: e.clientX, y: e.clientY})
    setShowMenu(true);
    
  }
  return (
    openedFiles.length > 0  ? (
    <div className="w-full border-b border-gray-500 bg-neutral-900">
        <div onContextMenu={onContextMenuHandler} className="flex w-fit items-center ">
            {openedFiles.map((file) => (
                <OpenedFilesBarTab key={file.id} file={file} />
            ))}
        </div>
    {showMenu && <DropMenu setShowMenu={setShowMenu} position={menuPosition} />}
    </div>
    ): null
  )
}

export default OpenedFileBar