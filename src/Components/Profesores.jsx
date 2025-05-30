import Video from "./Video"
import "../CSS/Profesores.css"
import { Button } from "@nextui-org/react"
import { useState } from "react"

const Profesores = () => {
    const profes = [
        {
            url: "https://www.youtube.com/watch?v=CX6E4xWbxJY",
            nombre: "Fran Marquino"
        },
        // {
        //     url: "https://www.youtube.com/watch?v=fwjkrcr3Iow",
        //     nombre: "Felipe Panedas"
        // },
        // {
        //     url: "https://www.youtube.com/watch?v=p9N6B0RB1P0&t=90s",
        //     nombre: "José Antonio López Bueno"
        // },
        {
            url: "https://www.youtube.com/watch?v=BHuGHNBE10o",
            nombre: "José María Gómez Chamón"
        },
    ]


    return (
        <div>
        <h1 className="sec-tit"> 
            NUESTROS PROFESIONALES DE <br/>
            <span>
                BOXEO Y KICK BOXING
            </span>
        </h1>
        {/* <div className="profesores flex w-full items-center justify-around text-center">
            {profes.map((v, idx) => (
                <div className="w-full gap-[20px] mt-[20px]">
                    <p 
                        className="text-third bg-primary text-[1.5rem] font-bold p-[5px] mb-[5px] rounded-[5px] mr-[5px]"
                        href=""
                        key={idx}
                    > 
                        {v.nombre} 
                    </p>
                    <div className="video">
                        <Video url={v.url} w=""/>
                    </div>
                </div>
            ))}

        </div> */}

        <div class="media-scroller snaps-inline">
            {profes.map((v) => (
                <div class="media-element md:w-[40vw] w-[90vw]">
                    <p className="text-center text-third font-bold text-[1.5rem]"> {v.nombre} </p>
                    <div className="video md:w-[40vw] w-[90vw]">
                        <Video url={v.url} w="90"/>
                    </div>
                </div>
            
            ))}
        </div>
    </div>

    )
}

export default Profesores