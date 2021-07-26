import React, {useContext} from "react";
import Npc from "./Npc";
import {NpcContext} from "./NpcProvider";


const NpcCard = () => {
    const [npcCard] = useContext(NpcContext)

    return (
        <div>
            {npcCard.map(npc => (
                <Npc name={npc.name} quest={npc.quest}s src={npc.img}/>
            ))}
        </div>

    )
}

export default NpcCard