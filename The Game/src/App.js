import React, {useContext, useEffect} from "react";
import "./App.css"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Quests from "./Components/Quests/Quest";
import QuestLog from "./Components/Quests/QuestLog";
import Header from "./Components/AddinionalComponents/Header";
import InventoryCard from "./Components/Inventory/InventoryCard";
import PlayerCard from "./Components/PlayerCard/PlayerCard";
import Story from "./Components/Story/Story";
import {PlayerCardContext, PlayerProvider} from "./Components/PlayerCard/PlayerProvider";
import {CityProvider} from "./Components/Locations/CityProvider";
import {CreatureProvider} from "./Components/Creatures/CreatureProvider";
import {Teleport} from "./Components/Locations/Teleport";
import {Gateway} from "./Components/Locations/Gateway";
import {Arena} from "./Components/Arena/ArenaComponent";
import {NpcProvider} from "./Components/Npc/NpcProvider";
import {QuestProvider} from "./Components/Quests/Quest";
import {UpdatedCreatureProvider} from "./Components/UpdatedCreature/UpdatedCreatureProvider";

const routes = {
    home: "",
    city: "/city",
    adventures: "/adventures",
    arena: "/arena",
    gateway: "/location/Gateway",
    questbook: "/questBook",
    inventory: "/inventory"
};

function App() {
    const [playerCard, setPlayerCard] = useContext(PlayerCardContext)
    return (
        <UpdatedCreatureProvider>
            <QuestProvider>
                <PlayerProvider>
                    <CityProvider>
                        <BrowserRouter>
                            <div className="App">
                                <div className="container">
                                    <Header name="Welcome to the Game"/>
                                    <div>
                                        <Link to={routes.city} style={{margin: "10px"}}>
                                            <button style={{padding: "5px 20px"}}>Town</button>
                                        </Link>
                                        <Link to={routes.adventures} style={{margin: "10px"}}>
                                            <button style={{padding: "5px 20px"}}>Adventure guild</button>
                                        </Link>
                                        <Link to={routes.arena} style={{margin: "10px"}}>
                                            <button style={{padding: "5px 20px"}}>Arena</button>
                                        </Link>
                                        <Link to={routes.questbook} style={{margin: "10px"}}>
                                            <button style={{padding: "5px 20px"}}>Quest Book</button>
                                        </Link>
                                        <Link to={routes.inventory} style={{margin: "10px"}}>
                                            <button style={{padding: "5px 20px"}}>Inventory</button>
                                        </Link>
                                    </div>
                                    <Switch>
                                        <Route path={routes.city}>
                                            <NpcProvider>
                                                <div className="background">
                                                    <div className="d-flex">
                                                        <PlayerCard/>
                                                        <Quests location="city"/>
                                                    </div>
                                                </div>
                                            </NpcProvider>
                                        </Route>
                                        <Route path={routes.adventures}>
                                            <div className="background">
                                                <div className="d-flex">
                                                    <div style={{flexGrow: "0"}}>
                                                        <PlayerCard/>
                                                    </div>
                                                    <div style={{flexGrow: "1"}}>
                                                        <Teleport/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Route>
                                        <Route path={routes.arena}>
                                            <CreatureProvider>
                                                <div className="background">
                                                    <div className="d-flex">
                                                        <PlayerCard/>
                                                        <Arena location="arena"/>
                                                    </div>

                                                </div>
                                            </CreatureProvider>
                                        </Route>
                                        <Route path={routes.questbook}>
                                            <div className="background">
                                                <div style={{display: "flex"}}>
                                                    <div>
                                                        <PlayerCard/>
                                                    </div>
                                                    <div style={{flexGrow: "1"}}>
                                                        <QuestLog/>
                                                    </div>
                                                </div>
                                            </div>

                                        </Route>
                                        {/*Extra locations*/}
                                        <Route path={routes.gateway}>
                                            <NpcProvider>
                                                <div className="background">
                                                    <div className="d-flex">
                                                        <PlayerCard/>
                                                        <Gateway/>
                                                        <Quests location="gateway"/>
                                                    </div>
                                                </div>
                                            </NpcProvider>
                                        </Route>
                                        <Route path={routes.inventory}>
                                            <div className="background">
                                                <CreatureProvider>
                                                    <div style={{display: "flex"}}>
                                                        <PlayerCard/>
                                                        <div style={{flexGrow: "1"}}>
                                                            <InventoryCard/>
                                                        </div>
                                                    </div>
                                                </CreatureProvider>
                                            </div>
                                        </Route>
                                        <Route path={routes.home}>
                                            <Story/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </BrowserRouter>
                    </CityProvider>
                </PlayerProvider>
            </QuestProvider>
        </UpdatedCreatureProvider>
    );
}

export default App;
