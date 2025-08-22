import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import poemas from "../../constants/Poemas";
import "./TextSlider.css"

export default function TextSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % poemas.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 flex justify-center items-center w-[40%] h-full mx-auto p-4 text-center text-white">
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
    </div>
  );
}
