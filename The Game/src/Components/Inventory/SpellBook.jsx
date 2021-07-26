import React, {createContext, useContext, useEffect, useState} from "react";
import {Button} from "../AddinionalComponents/Button";
import {PlayerCardContext} from "../PlayerCard/PlayerProvider";

const Inventory = ({spellId, spellName, spellAtt, spellMpCost}) => {
    const [playerCard, setPlayerCard] = useContext(PlayerCardContext)

    function sellItem() {
        setPlayerCard((newItem) => {
            const itemSell = newItem.spellScrools.findIndex(i => i.spellId === spellId)
            if (itemSell >= 0) {
                playerCard.gold = playerCard.gold + 10
                newItem.spellScrools.splice(itemSell, 1)
                return {
                    ...newItem,
                }
            }
            return newItem
        })
    }

    return (
        <table style={{backgroundColor: "lightgray", margin: "10px", width: "100%", flexGrow: "1"}}>
            <tr>
                <th>Item name</th>
                <th>Power</th>
                <th>Item type</th>
            </tr>
            <tr>
                <td>{spellName}</td>
                <td>{spellAtt}</td>
                <td>{spellMpCost}</td>
                <Button name="Sell item" data={sellItem}/>
            </tr>
        </table>
    )
}

export default Inventory