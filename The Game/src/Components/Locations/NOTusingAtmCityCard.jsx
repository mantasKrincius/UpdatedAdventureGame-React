import React, {useContext} from "react";
import City from "./City";
import {CityContext} from "./CityProvider";


const CityCard = () => {
    const [cityCard] = useContext(CityContext)

    return (
        <div>
            {cityCard.map(location => (
                <City name={location.name} rumours={location.rumours} level={location.level} key={location.id}/>
            ))}

        </div>

    )
}

export default CityCard