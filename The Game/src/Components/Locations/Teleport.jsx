import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import {PlayerCardContext} from "../PlayerCard/PlayerProvider";
import {CityContext} from "./CityProvider";


export function Teleport() {
    const history = useHistory();
    const [playerCard] = useContext(PlayerCardContext)
    const [cityCard] = useContext(CityContext)

    function handleClick2(req, loc) {
        if (playerCard.level < req) {
            alert(`Go kill more monster to get more exp, this place could be deadly for you. Need level ${req} `)
        } else {
            history.push(loc)
        }
    }

    return (
        <>
            {cityCard.map((location) => (
                <div key={location.id}>
                    <p>Location name: {location.name}</p>
                    <p>Location rumours: {location.rumours}</p>
                    <p>Requiments: {location.level} lvl</p>
                    <button type="button" onClick={() => handleClick2(location.level, location.path)}>
                        Port
                    </button>
                </div>
            ))}

        </>
    );
}