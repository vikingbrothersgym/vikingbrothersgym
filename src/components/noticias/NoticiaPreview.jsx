import { Link, useNavigate } from "react-router-dom"
import {Card, CardHeader, CardBody, Image, Button, CardFooter} from "@nextui-org/react";
import "./NoticiaPreview.css"
import constants from "@constants/Constants"

const NoticiaPreview = ({ultimas, not }) => {
  const navigate = useNavigate()
  return (
    <Card 
      as={Link}
      to={`${constants.root}noticia/${not.id}`}
      className="w-full bg-zinc-900 max-w-sm shadow-lg rounded-2xl hover:opacity-100 hover:scale-[1.02] cursor-pointer animate-fadeIn"
    >
      {/* Imagen */}
      <Image
        alt={not.title}
        src={not.image}
        className="object-cover rounded-t-2xl w-full"
      />

      {/* Contenido */}
      <CardBody className="w-full p-0">
        <h3 className="px-5 text-lg font-semibold text-third">{not.title}</h3>
      </CardBody>

      {/* Footer con la fecha */}
      <CardFooter className="p-4 pt-0 text-base text-gray-300 font-bold">
        {not.date}
      </CardFooter>
    </Card>
  )
}

export default NoticiaPreview;