import "./Clases.css"
import Semana from "@components/calendario/Semana"
import Contacto from "@components/footer/Footer"
import NavBar from "@components/navbar/NavBar"
import {Tabs, Tab} from "@nextui-org/react";

const Clases = () => {
    return (
        <div className="clases-page">
            <header className="header-navbar">
                <NavBar/>
            </header>
            <div>
                <div className="centered-container">
                    <p className="text">
                        Pincha en cada clase para ver más detalles
                    </p>
                </div>
                <div className="tabs-container">
                    <Tabs className="tabs dark text-foreground bg-white" 
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