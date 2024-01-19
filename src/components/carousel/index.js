import { useEffect, useState } from "react"
import { data } from "../constants"

const ImageSlider = () => {

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(()=>{
        let timer;
        timer=setTimeout(()=>{
            handleNextClick()
        },3000)

        return ()=>{
            clearTimeout(timer)
        }
    },[activeImageIndex])

    const handlePrevClick = () => {
        // if (activeImageIndex === 0) {
        //     setActiveImageIndex(data.length - 1)
        // } else {
        //     setActiveImageIndex(activeImageIndex - 1)
        // }
        setActiveImageIndex(activeImageIndex === 0 ? data.length - 1 : activeImageIndex - 1)

    }

    const handleNextClick = () => {
        // if (activeImageIndex === data.length - 1) {
        //     setActiveImageIndex(0)
        // }
        // else {

        //     setActiveImageIndex(activeImageIndex + 1)
        // }
        setActiveImageIndex(activeImageIndex === data.length - 1 ? 0 : activeImageIndex + 1)

    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button onClick={handlePrevClick}>Prev</button>
            {data.map((url, i) => {
                return <img key={url} src={url} style={{ width: 400, height: 300, margin: 10, display: activeImageIndex === i ? "block" : "none" }} alt="flower" />
            })}
            <button onClick={handleNextClick}>Next</button>
        </div>
    )
}

export default ImageSlider