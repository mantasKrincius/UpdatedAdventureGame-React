import React from "react";

export function Button({name, data, btnType, disableCondition, style}) {
    return (
        <button style={{padding: "0 20px", borderRadius: "20px"}} type={btnType} disabled={disableCondition}
                onClick={data}>{name}</button>
    )
}

