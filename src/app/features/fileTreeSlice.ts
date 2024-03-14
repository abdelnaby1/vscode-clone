import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile{
    filename: string,
    fileContent: string | undefined
    activeTabId: string| null
}
interface IInitialState{
    openedFiles: IFile[],
    clickedFile: IClickedFile,
    tabIdToRemove: string | null
}

const initialState: IInitialState = {
    openedFiles: [],
    clickedFile: {
        filename: "",
        fileContent: "",
        activeTabId: null
    },
    tabIdToRemove: null
}
export const fileTreeSlice = createSlice({
    name: "fileTree",
    initialState,
    reducers: {
        setOpenedFiles: (state,action: PayloadAction<IFile[]>) => {
            state.openedFiles = action.payload
        },
        setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
            state.clickedFile = action.payload

        },
        setTabIdToRemove: (state, action: PayloadAction<string | null>) => {
            state.tabIdToRemove = action.payload
        },
    }
})

export const {setOpenedFiles,setClickedFile,setTabIdToRemove} = fileTreeSlice.actions
export default fileTreeSlice.reducer