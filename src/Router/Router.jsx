import {Route, BrowserRouter, Routes} from "react-router-dom"
import constants from "../constants/Constants";
import Home from "../Pages/Home";
import Informacion from "../Pages/Informacion";
import Clases from "../Pages/Clases";
import Noticias from "../Pages/Noticias";
import Noticia from "../Pages/Noticia";

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={constants.root} element={<Home />} />
                <Route path={constants.root + "informacion"} element={<Informacion />} />
                <Route path={constants.root + "clases"} element={<Clases />} />
                <Route path={constants.root + "noticias"} element={<Noticias />} />
                <Route path={constants.root + "noticia/:id"} element={<Noticia />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;
