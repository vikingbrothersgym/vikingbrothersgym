import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/react";
import poemas from "../constants/Poemas";
import "../CSS/TextSlider.css"

export default function TextSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % poemas.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 flex items-center w-[40%] h-full mx-auto p-4 text-center text-white">
        {/* <Button 
         onClick={() => {
          setIndex((index - 1 + poemas.length) % poemas.length);
         }}
         className="bg-third border-0 mr-[5px]"
        >
          Anterior
        </Button> */}

      <AnimatePresence mode="wait">
        <motion.p
          key={poemas[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="texto-slider"
        >
          {poemas[index].map((p, idx) => (
            <p key={idx}> {p} </p>
          ))}
        </motion.p>
      </AnimatePresence>
      {/* <Button 
         className="bg-third border-0 ml-[5px]"
         onClick={() => setIndex((index + 1) % poemas.length)}
        >
          Siguiente
        </Button> */}

    </div>
  );
}
