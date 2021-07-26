import React, {createContext, useContext, useEffect, useState} from "react";
import {Button} from "../AddinionalComponents/Button";
import {PlayerCardContext} from "../PlayerCard/PlayerProvider";

const Inventory = ({itemName, itemAtt, itemDef, itemType, condition, itemId}) => {
    const [playerCard, setPlayerCard] = useContext(PlayerCardContext)

    function equip() {

        setPlayerCard((newItem) => {
            const item = newItem.inventory.find(i => i.itemId === itemId)
            if (item) {
                item.condition = !condition
                return {
                    ...newItem,
                    attack: !condition ? playerCard.attack + itemAtt : playerCard.attack - itemAtt,
                    defense: !condition ? playerCard.defense + itemDef : playerCard.defense - itemDef,
                    // inventory: [...newItem.inventory]
                }
            }
            return newItem
        })
    }

    function sellItem() {
        setPlayerCard((newItem) => {
            const itemSell = newItem.inventory.findIndex(i => i.itemId === itemId)
            if (itemSell >= 0 &&  condition === false) {
                playerCard.gold = playerCard.gold + 10
                newItem.inventory.splice(itemSell, 1)
                return {
                    ...newItem,
                }
            }
            return newItem
        })
    }

    return (
        <table style={{backgroundColor: "gray", width: "100%", margin: "10px", flexGrow:"1"}}>
            <tr>
                <th>Item name</th>
                <th>Attack</th>
                <th>Defesnse</th>
                <th>Item type</th>
                <th>Equip</th>
            </tr>
            <tr>
                <td>{itemName}</td>
                <td>{itemAtt}</td>
                <td>{itemDef}</td>
                <td>{itemType}</td>
                <Button name={!condition ? "Put it ON" : "Take it OFF"} btnType="button" data={equip}/>
                <Button name="Sell item" data={sellItem}/>
            </tr>
        </table>
    )
}

export default Inventory