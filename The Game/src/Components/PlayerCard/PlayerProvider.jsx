import React, {createContext, useState} from "react";

export const PlayerCardContext = createContext([{
    id: 1,
    name: "Later",
    attack: 10,
    defense: 10,
    hp: 100,
    maxHp: 100,
    mp: 100,
    maxMp: 100,
    reqExp: 50,
    exp: 0,
    gold: 50,
    level: 1,
    killQuest: 0,
    itemsQuest: 0,
    survivalQuest: 0,
    //atkeliauja is arenos komponento
    inventory: [],
    spellScrools: []
}])

export const PlayerProvider = props => {
    const [playerCard, setPlayerCard] = useState({
        id: 1,
        name: "Later",
        attack: 10,
        defense: 10,
        hp: 100,
        maxHp: 100,
        mp: 100,
        maxMp: 100,
        reqExp: 50,
        exp: 0,
        gold: 50,
        level: 1,
        killQuest: 0,
        itemsQuest: 0,
        survivalQuest: 0,
        //atkeliauja is arenos komponento
        inventory: [],
        spellScrools: []
    })

    return (
        <PlayerCardContext.Provider value={[playerCard, setPlayerCard]}>
            {props.children}
        </PlayerCardContext.Provider>
    )
}