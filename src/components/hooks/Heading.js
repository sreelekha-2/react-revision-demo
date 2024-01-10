import React, { useContext } from "react";
import { ThemeContext } from "../../context";

const Heading = () => {

    const theme = useContext(ThemeContext)
    const headingStyle = 'heading-' + theme
    return (
        <div>
            <h2 className={headingStyle}>Hello Sreelekha</h2>
        </div>
    )
}

export default Heading;