import React, {useContext, useEffect, useState} from "react";
import './ArenaComponent.css'
import '../Modal/modalStyle.css'
import Modal from "../Modal/Modal";
import SpellCheker from "../Skills/SkillChecker";
import {Button} from "../AddinionalComponents/Button";
import {PlayerCardContext} from "../PlayerCard/PlayerProvider";
import {CreatureContext} from "../Creatures/CreatureProvider";
import Creature from "../Creatures/Creature";
import {QuestContext} from "../Quests/Quest";
import {random} from "../AddinionalComponents/Helpers";
import {UpdatedCreatureContext} from "../UpdatedCreature/UpdatedCreatureProvider";

export function Arena({location}) {
    const [playerCard, setPlayerCard] = useContext(PlayerCardContext)
    const [creatureCard, setCreatureCard] = useContext(CreatureContext)
    const [updatedQuest, setUpdatedQuest] = useContext(QuestContext)
    const [updatedCreature, setUpdatedCreature] = useContext(UpdatedCreatureContext)
    const [show, setShow] = useState(false)
    const {hp, attack, defense, exp, gold} = playerCard

    function chalange(creatureHp, creatureAttack, creatureId, creatureName, creatureLvl, creaturedefense, creatureLocation, creatureImg,
                      creatureExp, creatureGold, questMark, creatureStatus) {
        if (creatureLocation === location) { //update for future using
            setUpdatedCreature({
                level: creatureLvl,
                location: creatureLocation,
                name: creatureName,
                attack: creatureAttack,
                defense: creaturedefense,
                hp: creatureHp,
                exp: creatureExp,
                gold: creatureGold,
                img: creatureImg,
                questMark: questMark,
                status: creatureStatus
            })
        }
    }


    function atackHandler() {
        //player attack

        let playerAttackCheck = attack + random(1, 10)
        let creaturDefenseCheck = updatedCreature.defense + random(1, 10)
        if (creaturDefenseCheck < playerAttackCheck) {
            setUpdatedCreature(prevState => ({
                ...prevState,
                hp: updatedCreature.hp - playerAttackCheck
            }))
        } else {
            alert(`${updatedCreature.name} You missed, BASTARD!`)
        }
        //creature attack
        let creatureAttackCheck = updatedCreature.attack + random(1, 10)
        let playerDefenseCheck = defense + random(1, 10)
        if (playerDefenseCheck < creatureAttackCheck) {
            setPlayerCard(prevState => ({
                ...prevState,
                hp: hp - creatureAttackCheck,
            }))
        } else {
            alert(`${updatedCreature.name} You missed, Cockeye!`)
        }
    }

/// hp and mp regeneration
    useEffect(() => {
        const interval = setInterval(() => {
            if (playerCard.hp <= playerCard.maxHp)
                setPlayerCard(prevState => ({
                    ...prevState,
                    hp: playerCard.hp + 1
                }))
            if (playerCard.mp <= playerCard.maxMp)
                setPlayerCard(prevState => ({
                    ...prevState,
                    mp: playerCard.mp + 1
                }))
        }, 10000);
        return () =>
            clearInterval(interval);
    }, [playerCard.hp, playerCard.mp]);


    // creature killed
// 100% need to be optimize.
    useEffect(() => {
        if (updatedCreature.hp < 0) {
            setPlayerCard(prevState => ({
                ...prevState,
                gold: updatedCreature.gold + gold,
                exp: updatedCreature.exp + exp
            }))
            //common item
            if (random(1, 5) === 1 && playerCard.inventory.length < 8) {
                setPlayerCard(prevState => ({
                    ...prevState,
                    inventory: [...prevState.inventory, {
                        itemId: random(1, 9999),
                        itemName: "Basic Rune",
                        itemAtt: random(1, playerCard.level),
                        itemDef: random(1, playerCard.level),
                        itemType: "Rune",
                        condition: false
                    }]
                }))
                // unique item
            } else if (random(1, 15) === 15 && playerCard.inventory.length < 8) {
                if (playerCard.inventory.filter((weapon) => weapon.itemType === "Weapon").length < 2)
                    setPlayerCard(prevState => ({
                        ...prevState,
                        inventory: [...prevState.inventory, {
                            itemId: random(1, 9999),
                            itemName: updatedCreature.questMark,
                            itemAtt: random(3, 5) + (playerCard.level / 2),
                            itemType: "Weapon",
                            condition: false
                        }]
                    }))

                //special Item (boss drop)
            } else if (random(1, 25) === 20 && playerCard.inventory.length < 8 && updatedCreature.status === "boss") {
                setPlayerCard(prevState => ({
                    ...prevState,
                    inventory: [...prevState.inventory, {
                        itemId: random(1, 9999),
                        itemName: updatedCreature.questMark,
                        itemAtt: random(3, playerCard.level) + (playerCard.level / 2),
                        itemDef: random(3, playerCard.level) + (playerCard.level / 2),
                        itemType: "Boss item",
                        condition: false
                    }]
                }))
                // quest item for future
                // } else if (random(1, 5) === 10 && playerCard.inventory.length < 10) {
                //     setPlayerCard(prevState => ({
                //         ...prevState,
                //         inventory: [...prevState.inventory, {
                //             itemId: random(1, 9999),
                //             itemName: updatedCreature.questMark,
                //             itemAtt: random(3, 5) + (playerCard.level / 2),
                //             itemDef: random(3, 5),
                //             itemType: "Quest Item",
                //             condition: false
                //         }]
                //     }))
            } else if (random(1, 20) === 20 && playerCard.inventory.length < 8) {
                if (playerCard.inventory.filter((weapon) => weapon.itemType === "Armor").length < 2)
                    setPlayerCard(prevState => ({
                        ...prevState,
                        inventory: [...prevState.inventory, {
                            itemId: random(1, 9999),
                            itemName: updatedCreature.questMark,
                            itemDef: random(3, 5) + (playerCard.level / 2),
                            itemType: "Armor",
                            condition: false
                        }]
                    }))
            }
        }
    }, [updatedCreature.hp])

    //level up
    useEffect(() => {
        if (playerCard.exp >= playerCard.reqExp) {
            setPlayerCard(prevState => ({
                ...prevState,
                level: playerCard.level + 1,
                attack: attack + random(1, 3),
                defense: defense + random(1, 5),
                exp: playerCard.exp - playerCard.reqExp,
                maxHp: playerCard.maxHp + 10,
                reqExp: playerCard.reqExp + 30,
            }))
            if (playerCard.hp >= playerCard.maxHp) {
                setPlayerCard(prev => ({
                    ...prev,
                    hp: playerCard.hp + 10
                }))
            } else {
                setPlayerCard(prev => ({
                    ...prev,
                    hp: playerCard.hp = playerCard.maxHp
                }))
            }
        }
    }, [playerCard.exp])

    //quest

    // need to find a way to use it for all THIS kind of quests
    function updateQuestForCreature(questName, creatureName) {
        updatedQuest.forEach(x => {
            if (x.name === questName && updatedCreature.name === creatureName && updatedCreature.hp <= 0 && x.questDone === false) {
                console.log(x.questTarget)
                setPlayerCard(prevState => ({
                    ...prevState,
                    killQuest: playerCard.killQuest + 1,
                }))

                if (playerCard.killQuest === x.questTarget) {
                    console.log(x.questTarget)
                    setUpdatedQuest((updatedQuestOld) => {
                        const quest = updatedQuestOld.find(q => q.id === x.id)
                        if (quest) {
                            quest.questDone = true
                            return [...updatedQuestOld]
                        }
                        return updatedQuestOld
                    })
                }

                if (playerCard.killQuest === x.questTarget) {
                    setPlayerCard(prevState => ({
                        ...prevState,
                        exp: playerCard.exp + x.questReward,
                        killQuest: 0,
                    }))
                    alert(`${questName} quest is done and you got ${x.questReward} exp`)
                }
            }
        })
    }


    //later on to change from static hardcoding to dynamyc, easy x.name and x.creature above function (no time atm)
    useEffect(() => {
        updateQuestForCreature("Jonathan", "Mercenary")
        updateQuestForCreature("Myles", "Arena Champion")
        updateQuestForCreature("Vincent", "Gray Wolf");
    }, [updatedCreature.hp]) //playerCard.killQuest if ill add it to effect, it will do quest straight to way (why??)


    return (
        <>
            <Modal onClose={() => setShow(false)} show={show} title={updatedCreature.name}>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <p>Hp {updatedCreature.hp}</p>
                    <p>Att {updatedCreature.attack}</p>
                    <p>Gold {updatedCreature.gold}</p>
                    <p>QuestMark {updatedCreature.questMark}</p>
                </div>
                <div>
                    <img style={{borderRadius: "50%"}} src={updatedCreature.img}/>
                </div>
                <SpellCheker/>
                <br/>

                <Button btnType={"button"}
                        disableCondition={hp <= 0 || updatedCreature.hp <= 0 || updatedCreature.name === "No Target" ? "disabled" : ""}
                        data={atackHandler}
                        style={{width: "150px"}}
                        name="Attack"/>
            </Modal>

            {/*Need to optimize*/}

            {creatureCard.filter(loc => loc.location === `${location}`).map((creature) => (
                <div key={creature.id} className="creatureCard">
                    <Creature name={creature.name} src={creature.img}/>
                    <Button
                        btnType={"button"}
                        disableCondition={hp <= 0 || creature.hp <= 0 ? "disabled" : ""}
                        data={() => chalange(creature.hp, creature.attack, creature.id, creature.name,
                            creature.level, creature.defense, creature.location, creature.img, creature.exp, creature.gold, creature.questMark, creature.status)}
                        name="Take a target"/>
                    <Button data={() => setShow(true)} name="Challenge"/>
                </div>
            ))}
        </>
    )
}
