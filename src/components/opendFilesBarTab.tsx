import { useDispatch, useSelector } from "react-redux"
import { IFile } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon"
import CloseIcon from "./SVG/Close"
import {  setClickedFile, setOpenedFiles, setTabIdToRemove } from "../app/features/fileTreeSlice"
import { RootState } from "../app/store"

interface IProps{
    file: IFile
}
const OpenedFilesBarTab = ({file}:IProps) => {
  
  const {clickedFile,openedFiles} = useSelector((state: RootState) => state.tree)
  const dispatch = useDispatch();
  const clickHandler = () => {
    const {name,content} =  file;
    dispatch(setClickedFile({fileContent: content,filename: name,activeTabId:file.id}))

  }
  const onRemove = (id:string) => {
    const filteredFiles = openedFiles.filter(file => file.id !== id);
    const lastTab = filteredFiles[filteredFiles.length -1];
    dispatch(setOpenedFiles(filteredFiles))
    if(clickedFile.activeTabId === id && lastTab){
      dispatch(setClickedFile({
        activeTabId: lastTab.id, 
        fileContent: lastTab.content,
        filename: lastTab.name
      }));
    }
   

  }

  return (
    <div onClick={clickHandler}
      onContextMenu={(e) => {
            e.preventDefault();
            dispatch(setTabIdToRemove(file.id))            
        }}
      className={`flex items-center p-2 border-t-2 ${ 
      file.id === clickedFile.activeTabId ? 'border-[#cf6ccf]': 'border-transparent'}`}>
        <RenderFileIcon filename={file.name}/>
        <span className="cursor-pointer  duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
            {file.name}
        </span>   
        <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex space-x-1 justify-center items-center w-fit mr-2 p-1 rounded-md"
          onClick={(e) =>{
            e.stopPropagation();
            onRemove(file.id)
          }}
          
        >
            <CloseIcon />
        </span>
    </div>
  )
}

export default OpenedFilesBarTab