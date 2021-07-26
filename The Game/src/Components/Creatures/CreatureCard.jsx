import React, {useContext} from "react";
import {CreatureContext} from "./CreatureProvider";
import Creature from "./Creature";

const CreatureCard = () => {
    const [creatureCard] = useContext(CreatureContext)
    console.log(creatureCard)
    return (
        <div>
            {creatureCard.map(creature => (
                <Creature hp={creature.hp} name={creature.name} key={creature.id}/>
            ))}
        </div>

    )
}

export default CreatureCard