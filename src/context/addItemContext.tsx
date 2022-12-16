import { createContext, ReactNode, useState } from "react";
import * as React from 'react';
import { ItemState } from "../components/addItemPage/AddItemPage";

type photoCtx = {
    input?: ItemState;
    setInput?: React.Dispatch<React.SetStateAction<ItemState>>
    files?: File[];
    dragAddHandle?: (type?: "main") => (evt: React.DragEvent) => void;
    fileSelectHandle?: (type?: "main") => (evt: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputChange?: (prop: keyof ItemState) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    removeFile?: (idx: number) => void;
    mainFile?: File;
    setMainFile?: React.Dispatch<React.SetStateAction<File>>;

};
export const AddItemContext = createContext<photoCtx>({});

export const AddItemProvider = ({ children }: { children: ReactNode }) => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [mainFile, setMainFile] = React.useState<File>(null!);

    const [input, setInput] = React.useState<ItemState>({
        name: "",
        category: "cleansing-Foam",
        price: 0,
        amount: 0,
        country: "대한민국",
        description: "",
        status: "Active",
        available: "Available"
    })
    const dragAddHandle = (type?: "main") => (evt: React.DragEvent) => {
        evt.preventDefault();
        evt.stopPropagation();
        if (type !== "main") {
            const data = Array.from(evt.dataTransfer.files);
            setFiles(c => [...c, ...data])
        } else {
            setMainFile(evt.dataTransfer.files[0])
        }
    }

    const fileSelectHandle = (type?: "main") => (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (evt.target.files) {
            if (type !== "main") {
                const data = Array.from(evt.target.files);
                setFiles(c => [...c, ...data])
            } else {
                setMainFile(evt.target.files[0])
            }
        }
    }


    const removeFile = (idx: number) => {
        let newone = files.filter((file, index) => idx !== index)
        setFiles([...newone]);
    }
    const handleInputChange =
        (prop: keyof ItemState) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setInput({ ...input, [prop]: event.target?.value });
        };

    return (
        <AddItemContext.Provider value={{
            files, dragAddHandle, fileSelectHandle, input, setInput, handleInputChange,
            mainFile, setMainFile, removeFile
        }}>
            {children}
        </AddItemContext.Provider>
    );
};
