import { Box, Typography } from "@mui/material";
import { ImageItem } from "./ImageItem";


export function ImagePreviewBox({ files, dropHandle }: { files: File[], dropHandle: React.DragEventHandler<Element> }) {



    console.log(files.length)
    return (
        <>
            {files.map((file, index) => {
                return <ImageItem key={index} file={file} />
            })}
        </>
    )
}