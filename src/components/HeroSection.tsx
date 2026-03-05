import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Award, Calendar } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import heroVid from "@/assets/videos/yoga-flow.mp4";
import heroImg from "@/assets/yoga-hero-1.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState("center"); // center or bottom-right
  const [firstPopupDone, setFirstPopupDone] = useState(false);

  useEffect(() => {
    // Show first popup in center
    setShowPopup(true);

    // After first popup, mark it done
    setFirstPopupDone(true);

    // Show popup every 20 seconds in bottom-right
    const interval = setInterval(() => {
      setPopupPosition("bottom-right");
      setShowPopup(true);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const closePopup = () => setShowPopup(false);
  return (
    <div className="overflow-hidden relative">
      {/* HERO SECTION with Video */}
      <section className="relative h-screen flex items-center justify-center pt-20">
       <div className="absolute inset-0 z-0">
  {/* 🔹 Mobile Background Image */}
  <img
    src={heroImg} // 👈 your fallback image
    alt="Background"
    className="
      block md:hidden
      w-full h-full object-cover
      opacity-40
    "
  />

  {/* 🔹 Desktop / Tablet Video */}
  <video
    src={heroVid}
    autoPlay
    loop
    muted
    playsInline
    className="
      hidden md:block
      w-full h-full object-cover
      opacity-80
    "
  />

  {/* Top–Bottom fade */}
  <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

  {/* Left–Right leafy green shadow */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 via-transparent to-green-300/20" />
</div>

        {/* Main Content */}
        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            <div className="mb-6 inline-block px-4 py-1 bg-accent text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
              Become Govt. Certified Yoga Professional
            </div>
            <h1
              className="font-serif text-5xl md:text-7xl lg:text-8xl 
               font-black tracking-tight leading-tight 
               text-foreground mb-8"
            >
              Online Yoga
              <span
                className="block mt-4 italic font-black 
                   text-primary drop-shadow-lg"
              >
                Certification Course
              </span>
            </h1>
            {/* 
            <p className="font-sans max-w-2xl mx-auto text-lg md:text-xl text-foreground/100 mb-8 leading-relaxed font-medium">
              Join our Online Yoga Certification Course designed for aspiring yoga teachers and immerse yourself in a holistic program, while building the skills and confidence to become a certified yoga teacher.
            </p> */}

            <p className="font-sans max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-5 leading-relaxed font-medium">
              And{" "}
              <span className="text-primary font-bold">
                Integrated Wellness Programs
              </span>{" "}
            </p>

            <p className="font-sans max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed font-medium">
              Upcoming Batch:{" "}
              <span className="text-primary font-bold underline">
                March 15, 2026
              </span>{" "}
              • Registrations Open
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/Shadyuktha-Yog/allprograms">
                <button className="px-8 py-4 bg-primary font-semibold text-primary-foreground rounded-full font-sans tracking-wide hover:bg-secondary hover:text-secondary-foreground hover:font-semibold transition-all w-full sm:w-auto shadow-lg hover:shadow-xl">
                  Explore All Programs
                </button>
              </Link>

              <Link to="/Shadyuktha-Yog/contact">
                <button className="px-8 py-4 bg-secondary font-bold text-secondary-foreground rounded-full font-sans tracking-wide hover:bg-primary hover:text-primary-foreground hover:font-md transition-all w-full sm:w-auto shadow-lg hover:shadow-xl">
                  Enquire Now
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scrolling Marquee */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/10 backdrop-blur-sm py-3 overflow-hidden z-20">
          <div className="animate-marquee-left flex gap-12 whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="flex gap-12 text-sm font-md text-primary"
              >
                <span>🧘 YCB Teacher Training</span>
                <span>🧘 Level based Practice</span>
                <span>🌿 Therapeutic Yoga</span>
                <span>💪 Ashtanga Series</span>
                <span>🌬️ Pranayama Mastery</span>
                <span>👶 Kids Yoga</span>
                <span>🤰 Prenatal and Postnatal Yoga</span>
                <span>🏢 Corporate Workshops</span>
                <span>🎓 College Programs</span>
              </span>
            ))}
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <div
            className={`fixed z-50 w-80 sm:w-96 ${
              popupPosition === "center"
                ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                : "bottom-5 right-5"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-greeny text-white shadow-2xl rounded-xl p-6 border-l-4 border-green-800"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl text-center text-white">
                  Upcoming Yoga Teacher Training Course Batch
                </h4>
                <button
                  className="ml-4 text-white hover:text-gray-200 font-bold"
                  onClick={closePopup}
                >
                  ×
                </button>
              </div>
              <p className="text-white/90 mb-2">
                <strong>Start Date:</strong> March 15, 2026
              </p>
              <p className="text-white/90 mb-2">
                Duration: 2 Months • Online Classes • Limited Seats
              </p>
              <p className="text-white/90 mb-4">
                Enhance your skills with our Online Yoga Teacher Training
                Courses and Integrated Wellness Program.
              </p>
              <Link
                to="/Shadyuktha-Yog/YCBcourse"
                className="inline-block w-full text-center bg-white text-green-600 font-bold rounded-full py-2 hover:bg-green-50 transition-all"
              >
               Explore Courses
              </Link>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
};

export default HeroSection;
