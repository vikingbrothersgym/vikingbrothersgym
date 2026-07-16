import "./Clases.css"
import Schedule from "@components/calendar/Schedule"
import Contacto from "@components/footer/Footer"
import NavBar from "@components/navbar/NavBar"
import {Tabs, Tab} from "@nextui-org/react";
import { horarios as timetableGym } from "../../constants/lessons/horarios";
import { horarios as timetableBoxing } from "../../constants/lessons/boxeo";
import Lifestyle from "../../components/lifestyle-component/LifestyleComponent";

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
                            <Schedule timetable={timetableGym} />
                        </Tab>
                        <Tab key="boxeo" title="Boxeo / Defensa Personal">
                            <Schedule timetable={timetableBoxing}/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <Lifestyle/>
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default Clases