import React, {useContext} from "react";
import {PlayerCardContext} from "../PlayerCard/PlayerProvider";
import Inventory from "./Inventor";
import SpellBook from "./SpellBook";


const InventoryCard = () => {
    const [playerCard] = useContext(PlayerCardContext)
    if (playerCard.inventory && playerCard.inventory.length > 0 || playerCard.spellScrools && playerCard.spellScrools.length > 0) {
        return (
            <div>

                {playerCard.inventory.map(item => (
                    <Inventory itemName={item.itemName} itemAtt={item.itemAtt} itemDef={item.itemDef}
                               itemType={item.itemType} condition={item.condition} itemId={item.itemId}/>
                ))}
                {playerCard.spellScrools.map(scroll => (
                    <SpellBook spellMpCost={scroll.mpCost} spellId={scroll.spellId} spellName={scroll.spellName}
                               spellAtt={scroll.spellAtt}/>
                ))}
            </div>

        )
    } else {
        return (
            <p>Go find some enemies and kill them untill they will drop some items</p>
        )
    }
}
export default InventoryCard