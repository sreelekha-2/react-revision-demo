import React, { memo } from "react";

const Person = ({ changePersonAge }) => {
    console.log("Person render....")
    return (
        <div>
            <button onClick={changePersonAge}>Change Person Age</button>
        </div>
    )
}

export default memo(Person);