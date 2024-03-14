import { extensionIconPaths } from "../constants";
import IconImage from "./IconImage";
import FileIcon from "./SVG/File";

interface IProps{
    filename: string,
    isFolder?: boolean,
    isOpen?: boolean
}


const RenderFileIcon = ({filename, isFolder, isOpen}:IProps) => {
  const extension = filename.split(".").pop();
  if(extension && Object.prototype.hasOwnProperty.call(extensionIconPaths,extension)){
    const iconPath = isFolder ? isOpen ? `${extensionIconPaths[extension]}-open.svg` : `${extensionIconPaths[extension]}.svg` : `${extensionIconPaths[extension]}.svg`;
    return  <IconImage src={iconPath} />
  }
  if(isFolder) return  isOpen ? <IconImage src={`icons/folder-base-open.svg`} />: <IconImage src={`icons/folder-base.svg`} />

  return <FileIcon />
}

export default RenderFileIcon