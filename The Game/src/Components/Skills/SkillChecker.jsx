import React, {useContext} from "react";
import {PlayerCardContext} from "../PlayerCard/PlayerProvider";
import {PlayerSpells} from "./PlayerSpells";


const SkillChecker = () => {
    const [playerCard] = useContext(PlayerCardContext)
    return (
        <div>
            {playerCard.spellScrools.map(scroll => (
                <PlayerSpells spellMpCost={scroll.mpCost} spellId={scroll.spellId} spellName={scroll.spellName}
                              spellAtt={scroll.spellAtt}/>
            ))}
        </div>

    )
}

export default SkillChecker