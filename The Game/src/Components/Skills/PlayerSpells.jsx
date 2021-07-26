import React, {useContext, useEffect} from "react";
import {PlayerCardContext} from "../PlayerCard/PlayerProvider";
import {UpdatedCreatureContext} from "../UpdatedCreature/UpdatedCreatureProvider";
import {random} from "../AddinionalComponents/Helpers";

export function PlayerSpells({spellMpCost, spellId, spellName, style, data, btnType, disableCondition, spellAtt}) {
    const [playerCard, setPlayerCard] = useContext(PlayerCardContext)
    const [updatedCreature, setUpdatedCreature] = useContext(UpdatedCreatureContext)

    function spellEffect() {
        if (spellName === "Angel Touch") {
            setPlayerCard((healScroll) => {
                const healingScroll = healScroll.spellScrools.findIndex(i => i.spellId === spellId)
                if (healingScroll >= 0) {
                    playerCard.mp = playerCard.mp - spellMpCost;
                    playerCard.hp = playerCard.hp + random(30, 40);
                    healScroll.spellScrools.splice(healingScroll, 1)
                    return {
                        ...healScroll,
                    }
                }
                return healScroll
            })
        } else if (spellName === "Falling Sky") {
            setPlayerCard((damageScroll) => {
                const damagingScroll = damageScroll.spellScrools.findIndex(i => i.spellId === spellId)
                if (damagingScroll >= 0) {
                    playerCard.mp = playerCard.mp - spellMpCost;
                    updatedCreature.hp = updatedCreature.hp - spellAtt;
                    damageScroll.spellScrools.splice(damagingScroll, 1)
                    return {
                        ...damageScroll,
                    }
                }
                return damageScroll
            })
        } else if (spellName === "Demons Laugh") {
            setPlayerCard((lifeDamageScroll) => {
                const lifeDamagingScroll = lifeDamageScroll.spellScrools.findIndex(i => i.spellId === spellId)
                if (lifeDamagingScroll >= 0) {
                    playerCard.mp = playerCard.mp - spellMpCost;
                    updatedCreature.hp = updatedCreature.hp - spellAtt;
                    playerCard.hp = playerCard.hp + random(20, 30);
                    lifeDamageScroll.spellScrools.splice(lifeDamagingScroll, 1)
                    return {
                        ...lifeDamageScroll,
                    }
                }
                return lifeDamageScroll
            })
        }
    }

    return (
        <div>
            <button style={style} type={btnType} disabled={disableCondition}
                    onClick={spellEffect}>{spellName} / MP {spellMpCost}</button>
        </div>

    )
}


