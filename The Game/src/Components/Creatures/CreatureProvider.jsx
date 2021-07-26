import React, {createContext, useEffect, useState} from "react";

export const CreatureContext = createContext([])

export const CreatureProvider = props => {
    const [creatureCard, setCreatureCard] = useState([])
    useEffect(() => {
        fetch('http://localhost:3100/api/data')
            .then((response) => response.json())
            .then((data) => {
                setCreatureCard(data)
            })
    }, [])
    return (
        <CreatureContext.Provider value={[creatureCard, setCreatureCard]}>
            {props.children}
        </CreatureContext.Provider>
    )
}