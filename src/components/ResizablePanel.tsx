import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
interface IProps{
    defaultLayout?: number[] | undefined
    leftPanel: ReactNode,
    rightPanel: ReactNode,
    showLeftPanel: boolean

}
const ResizablePanel = ({leftPanel,rightPanel,showLeftPanel,defaultLayout = [33, 67],}:IProps) => {
 
    const onLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
    };
  return (
   <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition">
    {showLeftPanel && <>
            <Panel collapsible defaultSize={defaultLayout[0]}>{leftPanel}</Panel>
            <PanelResizeHandle className="border-r border-[#ffffff1f]'" />
        </>
    }
        <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  )
}

export default ResizablePanel