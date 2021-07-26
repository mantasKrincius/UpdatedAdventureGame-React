import React, {useContext} from "react";
import {QuestContext} from "./Quest";
import QuestLogCard from "./QuestLogCard";

export default function QuestLog() {
    const [updatedQuest, setUpdatedQuest] = useContext(QuestContext)
    if (updatedQuest && updatedQuest.length > 0) {
        return (
            <>
                {updatedQuest.map(log => (
                    <QuestLogCard name={log.name} quest={log.quest} location={log.location} id={log.id}
                                  questDescription={log.questDescription} questDone={log.questDone}
                                  questTarget={log.questTarget}/>
                ))}
            </>

        )
    } else {
        return (
            <p>No quests, go and find NPC who could give you some work</p>
        )
    }
}
