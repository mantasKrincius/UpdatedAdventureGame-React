import React from "react";

export default function Header({name}) {
    return (
        <div>
            <h1 style={{color: "white"}}>{name}</h1>
            <h2 style={{color: "red"}}>City of Anthar</h2>
        </div>
    )
}