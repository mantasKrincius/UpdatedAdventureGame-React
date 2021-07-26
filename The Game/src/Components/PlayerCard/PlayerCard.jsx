import React, {useContext} from "react";
import Player from "./Player";
import {PlayerCardContext} from "./PlayerProvider";

const PlayerCard = () => {
    const [playerCard, setPlayerCard] = useContext(PlayerCardContext)

    return (
        <Player gold={playerCard.gold} exp={playerCard.exp} hp={playerCard.hp} attack={playerCard.attack}
                name={playerCard.name} defense={playerCard.defense} level={playerCard.level} maxHp={playerCard.maxHp}
                reqlvl={playerCard.reqExp} mp={playerCard.mp} maxMp={playerCard.maxMp}/>

    )
}

export default PlayerCard