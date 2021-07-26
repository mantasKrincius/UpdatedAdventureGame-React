import React, {createContext, useContext, useEffect, useState} from "react";
import Modal from "../Modal/Modal";
import '../Modal/modalStyle.css'
import '../Quests/QuestCard.css'
import {Button} from "../AddinionalComponents/Button";
import {NpcContext} from "../Npc/NpcProvider";
import {PlayerCardContext} from "../PlayerCard/PlayerProvider";
import {SkillButton} from "../Skills/SkillButton";


export const QuestContext = createContext([])

export function QuestProvider(props) {
    const [updatedQuest, setUpdatedQuest] = useState([])
    return (
        <QuestContext.Provider value={[updatedQuest, setUpdatedQuest]}>
            {props.children}
        </QuestContext.Provider>
    )
}

export default function Quests({location}) {
    const [npcCard] = useContext(NpcContext)
    const [updatedQuest, setUpdatedQuest] = useContext(QuestContext)
    const [playerCard, setPlayerCard] = useContext(PlayerCardContext)

    function challenge({name, quest, id, questItem, questDescription, questDone, questReward, questTarget}) {

        if (updatedQuest.find(({id: currentId}) => currentId === id)) return;
        setUpdatedQuest((updatedQuestOld) => [...updatedQuestOld, {
            name: name,
            quest: quest,
            id: id,
            questItem: questItem,
            questDescription: questDescription,
            questDone: questDone,
            questReward: questReward,
            questTarget: questTarget,
        }]);
    }

    function healing() {

        if (playerCard.gold >= 5 && playerCard.hp !== playerCard.maxHp) {
            setPlayerCard(prev => ({
                ...prev,
                hp: playerCard.hp + 10,
                gold: playerCard.gold - 10
            }))
            if (playerCard.hp > playerCard.maxHp) {
                setPlayerCard(prev => ({
                    ...prev,
                    hp: playerCard.hp = playerCard.maxHp
                }))
            }

        }
    }

    function npcProfession({proffesion}) {
        if (proffesion === "healer" && playerCard.gold >= 10 && playerCard.hp !== playerCard.maxHp) {
            setPlayerCard(prev => ({
                ...prev,
                hp: playerCard.hp + 10,
                gold: playerCard.gold - 10
            }))
        }
    }


    return (
        <>
            {npcCard.filter(loc => loc.location === `${location}`).map((quest) =>

                <NpcCardComponent key={quest.id}
                                  quest={quest}
                                  challenge={challenge}
                                  healing={healing}
                                  npcProfession={npcProfession}
                                  updatedQuest={updatedQuest}/>)}

        </>
    );
}

function NpcCardComponent({quest, challenge, updatedQuest, npcProfession}) {
    const [show, setShow] = useState(false)

    return <div>
        <div style={{padding: "10px"}}>
            <h3>{quest.name}</h3>
            <div>
                <img src={quest.img} style={{borderRadius: "50%"}}/>
            </div>

            {/*todo: pabaigti koreguoti modala*/}

            <Modal onClose={() => setShow(false)} show={show}>
                <p className="questCard">{quest.questDescription}</p>
                {updatedQuest.filter(({id: oldId}) => oldId === quest.id).map(({quest}) => <>
                    <p className="quest">{quest}</p>
                </>)}
                {quest.proffesion === "skillTeacher" ? <SkillButton/> : <Button
                    btnType={"button"}
                    data={quest.proffesion ? () => npcProfession(quest) : () => challenge(quest)}
                    name={quest.proffesion === "healer" ? "Heal" : "Accept Quest"}/>}
            </Modal>
            <Button data={() => setShow(true)} name="Talk"/>

        </div>
    </div>
}

//data ir name
// {quest.proffesion === "healer" ? healing :
// quest.proffesion === "healer" ? "Heal" :