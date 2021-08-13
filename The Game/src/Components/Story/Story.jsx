import React, {useState} from "react";
import Header from "../AddinionalComponents/Header";

export default function Story() {

    return (
        <div style={{color: "white", backgroundColor: "gray"}}>
            <h2>This project is not finished yet. Only demo version for learning purpose</h2>
            <ul style={{backgroundColor: "red"}}>What were planned, but havnt got enough time:
                <li>Optimise and clean all code...</li>
                <li>Story line, similar to the first version of the game, you can find it <a
                    href="https://boring-pike-acba84.netlify.app/">here</a>, where you adding your name
                </li>
                <li>Balance of creatures and player</li>
                <li>API for npc, location, ITEMS</li>
                <li>Player registration with database, where you can see who is highest lvl</li>
                <li>Better design</li>
                <li>More different quests like get item x and bring item to x npc AND by player lvl</li>
                <li>Achievements board, where you can see what you done</li>
                <li>Better inventory system and items drop function</li>
                <li>More context</li>
                <li>Skill system where you can learn skills, not only buy the scrolls</li>
                <li>In game are a lot of bugs what need to sort it out... Especially with killing quest monster... Ill
                    work for it in future
                </li>
                <li>Need to add descriptions and popup messages...</li>
            </ul>
            <ul style={{backgroundColor: "green"}}> But after all im proud of myself. Here you can see what were done in
                pretty short time:
                <li>HP and MP regeneration</li>
                <li>Quests system</li>
                <li>Inventory system</li>
                <li>Item drop, wear, sell system</li>
                <li>Boss items</li>
                <li>Teleportation</li>
                <li>HP, MP, EXP bars</li>
                <li>Quests and items represent</li>
            </ul>
            <ul style={{backgroundColor: "blue"}}> Things what you need to know before you will go to this demo game:
                <li>After you kill monster, check inventory, maybe he dropped something</li>
                <li>If you picked quest, check in Quest Book, make sure that you really have it</li>
                <li>If you run out your HP, go to healer in town or wait till regenerate hp, 10 seconds = 1hp (the same
                    about MP)
                </li>
                <li>Your inventory can store only 8 items(without spell scrolls), make sure you always have 1 spot, cus
                    there is basic items, unique items and boss items and how good they are depends on your level too.
                </li>
            </ul>
        </div>
    )
}
