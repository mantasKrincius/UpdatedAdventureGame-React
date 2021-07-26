import React, {useContext} from "react";
import {PlayerCardContext} from "../PlayerCard/PlayerProvider";
import {random} from "../AddinionalComponents/Helpers";


export function SkillButton({name, data, btnType, disableCondition, style}) {
    const [playerCard, setPlayerCard] = useContext(PlayerCardContext)

    function skill1() {
        if (playerCard.level <= 12 && playerCard.gold >= 10)
            setPlayerCard(prevState => ({
                ...prevState,
                gold: playerCard.gold - 50,
                spellScrools: [...prevState.spellScrools, {
                    spellId: random(1, 9999),
                    spellName: "Falling Sky",
                    spellAtt: random(10, 15),
                    mpCost: 20,
                }]
            }))
    }

    function skill2() {
        if (playerCard.level <= 12 && playerCard.gold >= 10)
            setPlayerCard(prevState => ({
                ...prevState,
                gold: playerCard.gold - 50,
                spellScrools: [...prevState.spellScrools, {
                    spellId: random(1, 9999),
                    spellName: "Angel Touch",
                    spellAtt: random(10, 15),
                    mpCost: 20,
                }]
            }))
    }

    function skill3() {
        if (playerCard.level <= 12 && playerCard.gold >= 10)
            setPlayerCard(prevState => ({
                ...prevState,
                gold: playerCard.gold - 50,
                spellScrools: [...prevState.spellScrools, {
                    spellId: 3,
                    spellName: "Demons Laugh",
                    spellAtt: random(10, 15),
                    mpCost: 20,
                }]
            }))
    }

    return (
        <>
            <button style={style} type={btnType} disabled={disableCondition}
                    onClick={skill1}>Falling Sky
            </button>
            <button style={style} type={btnType} disabled={disableCondition}
                    onClick={skill2}>Angel Touch
            </button>
            <button style={style} type={btnType} disabled={disableCondition}
                    onClick={skill3}>Demons Laugh
            </button>

        </>

    )
}

