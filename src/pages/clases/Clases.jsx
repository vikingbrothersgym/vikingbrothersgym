import "./Clases.css"
import Schedule from "@components/calendar/Schedule"
import Footer from "@components/footer/Footer"
import NavBar from "@components/navbar/NavBar"
import { horarios as timetableGym } from "../../constants/lessons/horarios";
import { horarios as timetableBoxing } from "../../constants/lessons/boxeo";
import Lifestyle from "../../components/lifestyle-component/LifestyleComponent";
import Tabs from "../../components/common/tabs/Tabs";
import Tab from "../../components/common/tabs/Tab";
import constants from "../../constants/Constants";
import { useLocation } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { PiBoxingGloveBold } from "react-icons/pi";
import { useEffect, useState } from "react";

const Clases = () => {
    const location = useLocation();

    const timetable = location.pathname.endsWith("boxeo")
        ? timetableBoxing
        : timetableGym;

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
                <div className="tabs-container mb-3">
                    <Tabs>
                        <Tab to={'/clases'} end>
                            <FaRegStar />
                            Gimnasio
                        </Tab>
                        <Tab to={'/clases/boxeo'}>
                            <PiBoxingGloveBold />
                            Boxeo
                        </Tab>
                    </Tabs>
                </div>

                <Schedule key={location.pathname} timetable={timetable} />
            </div>
            <Lifestyle/>

            <Footer />
        </div>
    )
}

export default Clases