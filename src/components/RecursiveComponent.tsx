import { useState } from 'react'
import { IFile } from '../interfaces'
import RightArrow from './SVG/RightArrow'
import BottomArrow from './SVG/BottomArrow'
import RenderFileIcon from './RenderFileIcon'
import { useDispatch, useSelector } from 'react-redux'
import {  setClickedFile, setOpenedFiles } from '../app/features/fileTreeSlice'
import { RootState } from '../app/store'
import { doesObjectExist } from '../utils/functions'

interface IProps{
  fileTree: IFile
}

const RecursiveComponent = ({fileTree}:IProps) => {
  const {id,name, isFolder,children,content} = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(prev => !prev)

  const {openedFiles} = useSelector((state: RootState) => state.tree)
  const onFileClicked = () => {
    dispatch(setClickedFile({fileContent: content,filename: name,activeTabId:id,}))
    if(doesObjectExist(openedFiles,id)) {
      return;
    }
    dispatch(setOpenedFiles([...openedFiles,fileTree]))
  }

  return (
    <div className='mb-2 ml-2 cursor-pointer'>
     <div className='flex items-center mb-1'>
        {isFolder ? (
          <div onClick={toggle} className='flex items-center'>
            {isOpen ? <BottomArrow /> :  <RightArrow />}
            <RenderFileIcon filename={name} isFolder={isFolder} isOpen={isOpen} />
            <span className='ml-1'>{name}</span>
          </div>
        ): (
          <div className='mr-2 flex items-center' onClick={onFileClicked}>
            <RenderFileIcon filename={name} />
            <span className='ml-2'>{name}</span>
          </div>
        )}
        
     </div>
       {isOpen && children?.map((file,idx) => (
        <RecursiveComponent fileTree={file} key={idx} />
      ))}
    </div>
  )
}

export default RecursiveComponent