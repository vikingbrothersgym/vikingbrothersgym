import { useNavigate } from "react-router-dom"
import "../CSS/NoticiaPreview.css"
import constants from "../constants/Constants"

const NoticiaPreview = ({ultimas, not }) => {
    const navigate = useNavigate()
    return (
        <>
            {ultimas && (
                <a className="not-prev"
                    onClick={() => navigate(constants.root + "noticia/" + not.id)}
                    href="">
                    <div className="im-not-prev-container">
                        <img className="im-not-prev" src={not.image} alt={not.title}/>
                    </div>
                    <div className="not-prev-content">
                        <p> {not.date} </p>
                        <h2 className="not-prev-tit-container">
                            {not.title}
                        </h2>
                    </div>
                </a>
            )}

            {!ultimas && (
                <>
                    <div className="new">
                        <img 
                            className="im-new"
                            src={not.image} 
                            alt={not.title} /> 
                        <p className="title-date-new">
                            <h1 > 
                                <a className="title-new" 
                                    href=""
                                    onClick={() => navigate(constants.root + "noticia/" + not.id)}>
                                    {not.title}
                                </a> 
                            </h1>
                            {not.date}
                        </p>            
                    </div>
                    <hr className="hr-noticias"/>
                </>
            )}

            {/* {ultimas && (
                <div className="not-prev"
                     onClick={() => navigate(constants.root + "noticia/" + not.id)}>
                    <div className="im-not-prev-container">
                        <img className="im-not-prev" src={not.image} alt={not.title}/>
                    </div>
                    <div className="not-prev-content">
                        <p> {not.date} </p>
                        <h2 className="not-prev-tit-container">
                            <a className="not-prev-tit"
                               href=""> 
                                {not.title} 
                            </a>
                        </h2>
                    </div>
                </div>
            )} */}

        </>
    )
}

export default NoticiaPreview