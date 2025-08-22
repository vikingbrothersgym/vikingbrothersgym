import React, { useState } from "react";
import "./Dia.css";
import { clases, enum_clases } from "@clases/clases";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import Video from "@components/video/Video";

const Dia = ({ dia, clasesDia = [] }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [clase, setClase] = useState(null);

  return (
    <div className="dia">
      <h1 className="dia-nombre"> {dia} </h1>
      <hr/>
      <ul className="lista">
        {clasesDia.map((tupla, index) => (
          <div className="clase-container" key={index}>
            <div className="clase-dia" key={index}>
                {tupla.clase == enum_clases.NULL && (
                  <div className="clase">
                    <p className="link-clase-vacio" href="">
                      Hora <br/>
                      <span className="nombre-clase">
                          Nombre
                      </span>
                    </p>
                  </div>
                )}

                {tupla.final && (
                  <div
                    className="clase" 
                    onClick={() => {
                     setClase(clases[tupla.clase]);
                     onOpen();
                    }}
                  >
                    <p
                      className="link-clase" 
                      style={{
                      backgroundColor: clases[tupla.clase].color,
                      transition: "backgroundColor 0.3s, color 0.3s"
                      }}
                    >
                      {tupla.inicio} - {tupla.final} <br/> 
                      <span className="nombre-clase"> {clases[tupla.clase].name} </span>
                    </p>
                  </div>
                )}
                
                {!tupla.final && tupla.clase != enum_clases.NULL && (
                  <div 
                   className="clase" 
                   onClick={() => {
                    setClase(clases[tupla.clase]);
                    onOpen();
                   }}
                  >
                    <p 
                     className="link-clase" 
                     style={{
                      backgroundColor: clases[tupla.clase].color,
                      transition: "backgroundColor 0.3s, color 0.3s"
                     }}
                    >
                      {tupla.inicio} <br/>
                      <span className="nombre-clase">
                        {clases[tupla.clase].name}
                      </span>
                    </p>
                  </div>
                )}
            </div>
            <hr className={`hr-${tupla.clase === enum_clases.NULL ? 'no' : 'si'}`}/>
          </div>
        ))}
      </ul>
      <Modal 
       isOpen={isOpen} 
       onOpenChange={onOpenChange} 
       className="bg-primary"
       size="2xl"
       scrollBehavior="inside"
       backdrop="blur"
      >
        <ModalContent className="clases-modal">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-third font-bold text-2xl">
              {clase.name}
            </ModalHeader>
            <ModalBody className="text-[#ffffff]">
              <div className="modal-info justify-around">
                {clase.url != "" &&
                  <Video url={clase.url} w="100"/>
                }
                <div className=" ml-[15px] w-[100%]">
                  {clase.info.map((text, idx) => (
                    <p className="text-lg" key={idx}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <Button className="bg-third border-0 cursor-pointer" onPress={onClose}>
                Volver
              </Button>
            </ModalFooter>
          </>
        )}
        </ModalContent>
    </Modal>

    </div>
  );
};

export default Dia;
