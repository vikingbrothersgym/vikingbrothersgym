import React, { useEffect, useState } from "react";
import "./Lesson.css";
import { clases, enum_clases } from "@lessons/clases";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import Video from "@components/video/Video";

const Lesson = ({ lesson }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [clase, setClase] = useState();

  useEffect(() => {
    setClase(clases[lesson.lesson_id]);
  }, [])

  if (lesson.lesson_id != enum_clases.NULL) {
    return (
        <>
        <div 
            className="clase-container" 
            onClick={() => onOpen()}
        >
            <p className="link-clase">
                {lesson.start} <br/>
                <span className="nombre-clase">
                    {clases[lesson.lesson_id].name}
                </span>
            </p>
        </div>
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
        </>
    );
  }
};

export default Lesson;
