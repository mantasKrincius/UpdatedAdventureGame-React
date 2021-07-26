import React, {createContext, useState} from "react";

export const NpcContext = createContext([{}])

export const NpcProvider = props => {
    const [npcCard, setNpcCard] = useState([{
        // add NpcCard to api for future
        // add function to give the answer to the question
        // add NpcCard to api for future
        id: 1,
        name: "Jonathan",
        questItem: "vibratorius",
        quest: "Kill 10 Mercenaries",
        questReward: 100,
        questTarget: 10,
        path: "/location/Gateway",
        img: "https://avatarfiles.alphacoders.com/946/thumb-94633.jpg",
        location: "city",
        questDescription: "Good day, stranger, nice to see a new face in our town of Antharas, by the edge of the world. We dont have a lot what to offer for travelers, but you can find: a healer Leon, who can heal you when you need it, by the corner of the street, there is Adventure Guild, if you need some challenges... And for sure we have Arena. If you want to prove yourself, ill recommend to go there and fight with some of mercenaries...  ",
        questDone: false,
    }, {
        id: 2,
        name: "Myles",
        questItem: "vibratorius",
        quest: "Kill Arena Champion",
        questReward: 150,
        questTarget: 1,
        path: "/location/Gateway",
        img: "https://avatarfiles.alphacoders.com/520/thumb-52086.jpg",
        location: "city",
        questDescription: "My son... My dear son... He wanted to be a gladiator... But that bastard... He killed... He killed him... Even crowd asked him to keep him alive... Please, please, kill current Arena Champion",
        questDone: false,
    }, {
        // add NpcCard to api for future
        id: 3,
        name: "Leon",
        proffesion: "healer",
        path: "/location/Gateway",
        img: "https://avatarfiles.alphacoders.com/276/thumb-276560.jpg",
        location: "city",
        questDescription: "Im a healer, if you came here, that means probably you need my service",
    }, {
        id: 4,
        name: "George",
        proffesion: "skillTeacher",
        path: "/player",
        img: "https://avatarfiles.alphacoders.com/198/thumb-198784.png",
        location: "gateway",
        questDescription: `What do you need? I have some spell scroll, if you have enough gold and enough power to use it... Falling Sky: powerful damage spell, Healing: powerful healing spell you, Demons Laugh: special scroll, heal you and damage enemy`,
    }, {
        id: 5,
        name: "Vincent",
        questItem: "vibratorius",
        quest: "Kill 10 wolf",
        questReward: 10, //hp
        questTarget: 10,
        path: "/location/Gateway",
        img: "https://avatarfiles.alphacoders.com/879/thumb-87963.png",
        location: "gateway",
        questDescription: "Wild forest... What are you doing here? Are you mad... This forest full of hungry and angry wolfs... ",
        questDone: false,
    }])
    return (
        <NpcContext.Provider value={[npcCard, setNpcCard]}>
            {props.children}
        </NpcContext.Provider>
    )
}