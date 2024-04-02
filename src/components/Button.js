import React from "react";

export default function Button({btnClass, btnText}) {
    const handleClick = (e) => {
        e.preventDefault();
    }
    return(
        <button onClick={handleClick} class={`btn ${btnClass}`}>{btnText}</button>
    )
}