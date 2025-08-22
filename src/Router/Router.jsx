import {Route, BrowserRouter, Routes} from "react-router-dom"
import constants from "@constants/Constants";
import Home from "@pages/home/Home";
import Informacion from "@pages/informacion/Informacion";
import Clases from "@pages/clases/Clases";
import Noticias from "@pages/noticias/Noticias";
import Noticia from "@pages/noticia/Noticia";

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
