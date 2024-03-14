import { IFile } from "../interfaces";

export const doesObjectExist = (arr: IFile[], id: string) => {
    return arr.some((file) => file.id === id);
}