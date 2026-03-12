import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingWhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/917200448918?text=${encodeURIComponent(
        "Hello! I’d like more info about your yoga programs. Thank you!"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-primary rounded-full 
                 shadow-lg flex items-center justify-center text-white 
                 hover:bg-green-600 hover:scale-110 transition-transform cursor-pointer"
      animate={{
        y: [0, -10, 0, -10, 0], // up-down movement
      }}
      transition={{
        duration: 2,          // total duration of one cycle
        repeat: Infinity,     // repeat forever
        ease: "easeInOut",    // smooth motion
      }}
    >
      <FaWhatsapp className="w-8 h-8" />
    </motion.a>
  );
};

export default FloatingWhatsAppButton;