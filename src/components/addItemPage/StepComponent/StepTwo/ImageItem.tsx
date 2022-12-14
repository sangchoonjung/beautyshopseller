import Box from '@mui/material/Box';

import * as React from 'react';

export function ImageItem({ file }: { file: File }) {
    const [img, setImg] = React.useState<string | null>(null)
    React.useEffect(() => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = rst => setImg(rst.target?.result as string);
    }, [])


    return (
        <Box sx={{
            position: "relative", border: "1px dashed #a7a7a7 ",
            width: '48%',
            aspectRatio: "4/3",
            my: "1%",
            justifyContent: "center", alignItems: "center", display: "flex"
        }}>
            <img style={{
                objectFit: "fill",
                width: '100%', height: '100%', margin: 1
            }} src={img!} alt="uplodedImagePreview" />
        </Box>

    )
}