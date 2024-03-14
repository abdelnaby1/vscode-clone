import { IFile } from "../interfaces";
import {v4 as uuid} from "uuid";
export const fileTree: IFile = {
    id: uuid(),
    name: "VS Code Clone",
    isFolder: true,
    children: [ 
        {
            id: uuid(),
            name: "node_modules",
            isFolder: true,
            children: [
                {
                    id: uuid(),
                    name: ".vite",
                    isFolder: true,
                    children: [{ id: uuid(),name: "react.js", isFolder: false}],
                },     
            ]
        },
        {
            id: uuid(),
            name: "public",
            isFolder: true,
            children: [
                { id: uuid(),name: "index.html",isFolder: false}
            ]
        },
        {
            id: uuid(),
            name: "src",
            isFolder: true,
            children: [
                {
                    id: uuid(),
                    name: "utils",
                    isFolder: true,
                    children: [
                        {id: uuid(),name:" functions.ts", isFolder: false,content: `import { IFile } from "../interfaces";

export const doesObjectExist = (arr: IFile[], id: string) => {
    return arr.some((file) => file.id === id);
}`}
                    ]
                },
                {
                    id: uuid(),
                    name:"components",
                    isFolder: true, 
                    children: [
                        {id: uuid(),name:"Button.tsx", isFolder: false},
                        {id: uuid(),name:"Input.tsx", isFolder: false}
                    ]
                }
            ]
        }
    ]
}