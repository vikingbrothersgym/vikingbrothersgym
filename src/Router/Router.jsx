import {Route, BrowserRouter, Routes} from "react-router-dom"
import constants from "@constants/Constants";
import Home from "@pages/home/Home";
import Informacion from "@pages/informacion/Informacion";
import Clases from "@pages/clases/Clases";
import Noticias from "@pages/noticias/Noticias";
import Noticia from "@pages/noticia/Noticia";
import Blog from "../pages/blog/Blog";
import Nutrition from "../pages/nutrition/Nutrition";
import Training from "../pages/training/Training";
import ServicioPage from "../pages/servicio/ServicioPage";

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/informacion"} element={<Informacion />} />
                <Route path={"/informacion/:serviceSlug"} element={<ServicioPage />} />
                <Route path={"/clases"} element={<Clases />} />
                <Route path={"/clases/boxeo"} element={<Clases />} />
                <Route path={"/blog"} element={<Blog />} />
                <Route path={"/blog/:category"} element={<Blog />} />
                <Route path={"/blog/nutricion/:id"} element={<Nutrition />} />
                <Route path={"/blog/noticias/:id"} element={<Noticia />} />
                <Route path={"/blog/entrenamiento/:id"} element={<Training />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;
