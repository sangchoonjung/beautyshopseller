import { ImageItem } from "./ImageItem";


export function ImagePreviewBox({ files, size }: { files: File[], size?: "m" | "l" }) {

    return (
        <>
            {files.map((file, index) => {
                return <ImageItem key={index} file={file} size={size} />
            })}
        </>
    )
}