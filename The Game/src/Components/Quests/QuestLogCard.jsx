import React from "react";


const Npc = ({quest, name, id, questDescription, questDone}) => {
    return (
        <div style={{padding: "10px"}}>
            <h5 key={id}>Name: {name}</h5>
            <h5>Quest: {quest}</h5>
            <h5>Description: {questDescription}</h5>
            <h5>Quest Done?: {questDone === false ? "NO" : "YES"}</h5>
        </div>
    )
}

export default Npc;