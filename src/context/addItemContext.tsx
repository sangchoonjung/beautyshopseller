import { createContext, ReactNode, useState } from "react";
import * as React from 'react';
import { ItemState } from "../components/addItemPage/AddItemPage";

type photoCtx = {
    input?: ItemState;
    setInput?: React.Dispatch<React.SetStateAction<ItemState>>
    files?: File[];
    dragAddHandle?: React.DragEventHandler;
    fileSelectHandle?: React.ChangeEventHandler<HTMLInputElement>;
    handleInputChange?: (prop: keyof ItemState) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    removeFile?: (t: File) => void;
};
export const AddItemContext = createContext<photoCtx>({});

export const AddItemProvider = ({ children }: { children: ReactNode }) => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [input, setInput] = React.useState<ItemState>({
        name: "",
        category: "cleansing-Foam",
        price: 0,
        amount: 0,
        country: "",
        description: "",
        status: "Active"
    })
    const dragAddHandle: React.DragEventHandler = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        const data = Array.from(evt.dataTransfer.files);
        setFiles(c => [...c, ...data])
    }
    const fileSelectHandle: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        if (evt.target.files) {
            const data = Array.from(evt.target.files);
            setFiles(c => [...c, ...data])
        }
    }

    const handleInputChange =
        (prop: keyof ItemState) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setInput({ ...input, [prop]: event.target?.value });
        };

    return (
        <AddItemContext.Provider value={{
            files, dragAddHandle, fileSelectHandle, input, setInput, handleInputChange
        }}>
            {children}
        </AddItemContext.Provider>
    );
};
