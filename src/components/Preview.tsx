import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import FileSyntaxHighlighter from "./FileSyntaxHighlighter"
import OpendFileBar from "./OpendFileBar"

const Preview = () => {
  const {clickedFile} = useSelector((state: RootState) => state.tree)
  return (
    <>
        <OpendFileBar />
        {clickedFile.fileContent && <FileSyntaxHighlighter content={clickedFile.fileContent}/>}
    </>
  )
}

export default Preview