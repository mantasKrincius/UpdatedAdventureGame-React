import React from "react";
import "./PlayerCard.css"
import ProgressBar from "../AddinionalComponents/ProgessBar";


const Player = ({name, attack, defense, hp, gold, level, reqlvl, exp, maxHp, mp, maxMp}) => {
    let expBarPer = Math.floor(exp / reqlvl * 100)
    let hpBar = Math.floor(hp * 100 / maxHp)
    let mpBar = Math.floor(mp * 100 / maxMp)

    const testData = [
        {bgcolor: "#46f60f", completed: {hpBar}},
        {bgcolor: "#0034ef", completed: {mpBar}},
        {bgcolor: "#ef6c00", completed: {expBarPer}},

    ];

    return (

        <div>
            <div className="playerInfoDecoration">
                <h3>Name: {name}</h3>
                <h3>Level: {level}</h3>
                <h3>Attack: {attack}</h3>
                <h3>Defense: {defense}</h3>
                <h3>Gold: {gold}</h3>
                {testData.map((item, id) => (
                    <ProgressBar key={id} bgcolor={item.bgcolor} completed={item.completed.hp}
                                 expBar={item.completed.expBarPer} hpBar={item.completed.hpBar}
                                 mpBar={item.completed.mpBar}/>
                ))}

            </div>

        </div>
    )
}

export default Player
