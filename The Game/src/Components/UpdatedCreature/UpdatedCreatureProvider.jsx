import React, {createContext, useState} from "react";


export const UpdatedCreatureContext = createContext({})

export function UpdatedCreatureProvider(props) {
    //nerodo pradinio varianto, kai nera paselectino prieso...
    const [updatedCreature, setUpdatedCreature] = useState({
        name: "No Target",
        hp: "No Target",
        attack: "No Target",
        defense: "No Target",
        level: "No Target",
        exp: 0,
        gold: "",
        img: "https://avatarfiles.alphacoders.com/613/thumb-61339.jpg"
    })
    return (
        <UpdatedCreatureContext.Provider value={[updatedCreature, setUpdatedCreature]}>
            {props.children}
        </UpdatedCreatureContext.Provider>
    )
}