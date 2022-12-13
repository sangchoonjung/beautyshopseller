
import * as React from 'react';

export function ImageItem({ file }: { file: File }) {
    const [img, setImg] = React.useState<string | null>(null)
    React.useEffect(() => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = rst => setImg(rst.target?.result as string);
    }, [])


    return (

        <img src={img!} alt="uplodedImagePreview" />
    )
}