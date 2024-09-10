import "../CSS/Clases.css"
import Semana from "../Components/Calendario/Semana"
import Contacto from "../Components/Contacto"
import NavBar from "../Components/NavBar"
import Texto from "../Components/Texto"
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

const Clases = () => {
    return (
        <div className="clases-page">
            <header className="header-navbar">
                <NavBar/>
            </header>
            <div>
                <Texto texto="clases"/>
                <div className="tabs-container">
                    <Tabs className="tabs dark text-foreground" 
                          size="lg"
                          radius="full"
                          variant="bordered"
                          color="warning"
                          aria-label="Options">
                        <Tab key="gimnasio" title="Gimnasio">
                            <Semana gimnasio={true}/>
                        </Tab>
                        <Tab key="boxeo" title="Boxeo / Defensa Personal">
                            <Semana gimnasio={false}/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default Clases