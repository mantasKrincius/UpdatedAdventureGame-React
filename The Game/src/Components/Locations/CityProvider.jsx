import React, {createContext, useState} from "react";

export const CityContext = createContext()

export const CityProvider = props => {
    const [cityCard, setCityCard] = useState([{
        // add cityCards to api for future
        id: 1,
        name: "Forbiden Gateway",
        rumours: "Someone heard that here you can find new enemies, quests and even spell scrolls",
        level: 12,
        path: "/location/Gateway"
    }, {
        id: 2,
        name: "Under maintenance",
        rumours: "Under maintenance",
        level: 20,
        path: "/location/SnakesCave"
    }])
    return (
        <CityContext.Provider value={[cityCard, setCityCard]}>
            {props.children}
        </CityContext.Provider>
    )
}