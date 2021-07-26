import React from "react";


const Creature = ({name, src, id}) => {
    return (
        <div key={id}>
            <h3 style={{color:"red"}}>{name}</h3>
            <div>
                <img src={src}/>
            </div>
        </div>
    )
}

export default Creature;