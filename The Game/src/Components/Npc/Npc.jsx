import React from "react";


const Npc = ({quest, name, src}) => {

    return (
        <div style={{textAlign: "center", padding: "10px"}}>
            <div>
                <img src={src} style={{borderRadius: "20px"}}/>
            </div>
            <h5>Name: {name}</h5>
            <h5>Quest: {quest}</h5>

        </div>
    )
}

export default Npc;