import Box from '@mui/material/Box';

import * as React from 'react';

export function ImageItem({ file, size }: { file: File, size?: "m" | "l" }) {
    const [img, setImg] = React.useState<string | null>(null)
    React.useEffect(() => {
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = rst => setImg(rst.target?.result as string);
        }
    }, [])
    let defaultSx = {
        position: "relative", border: "1px dashed #a7a7a7 ",
        width: '48%',
        aspectRatio: "4/3",
        my: "1%",
        justifyContent: "center", alignItems: "center", display: "flex"
    }
    if (size === "l") {
        defaultSx = { ...defaultSx, width: '72%' }
    }
    return (
        <Box sx={defaultSx}>
            <img style={{
                objectFit: "fill",
                width: '100%', height: '100%', margin: 1
            }} src={img!} alt="uplodedImagePreview" />
        </Box>

    )
}