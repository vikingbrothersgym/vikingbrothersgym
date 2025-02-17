import { useNavigate } from "react-router-dom"
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import "../CSS/NoticiaPreview.css"
import constants from "../constants/Constants"

const NoticiaPreview = ({ultimas, not }) => {
    const navigate = useNavigate()
    return (
        <Card 
          className="card bg-primary m-0 mb-7 "
        >
            <CardHeader className="text-third pb-0 pt-2 px-4 flex-col items-center">
              <p className="text-white font-bold mr-7"> {not.date} </p>
              <h4 className="font-bold text-xl text-center text-large m-0 mr-7"> {not.title} </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex-col items-center">
                <div className="mr-6">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={not.image}
                  width={270}
                />
                </div>
                <Button 
                  className="bg-black border-0 text-third font-bold text-lg mt-2 mr-7 hover:bg-third hover:text-black"
                  onClick={() => navigate(constants.root + "noticia/" + not.id)}
                >
                    Leer más
                </Button>
            </CardBody>
        </Card>
    )
}

export default NoticiaPreview