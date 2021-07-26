import React from "react";

const City = ({name, rumours, level}) => {

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Rumours: {rumours}</h3>
            <h3>Level: {level}</h3>
        </div>
    )
}

export default City;