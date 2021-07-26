import React from "react";
import {CreatureProvider} from "../Creatures/CreatureProvider";
import {Arena} from "../Arena/ArenaComponent";


export function Gateway() {
    return (
        <>
            <CreatureProvider>
                <Arena location="gateway"/>
            </CreatureProvider>

        </>
    )
}