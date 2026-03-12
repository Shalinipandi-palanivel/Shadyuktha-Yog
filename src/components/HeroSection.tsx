import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => setShowPopup(false);

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/yoga-hero-1.jpg"
          alt="Background"
          className="block md:hidden w-full h-full object-cover opacity-40"
        />
        <video
          src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/videos/yoga-flow.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/30 via-background/10 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-transparent to-green-400/20" />
        {/* Floating decorative orbs */}
        {/* <motion.div
          className="absolute w-24 h-24 rounded-full bg-green-200/30 top-20 left-10"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-green-300/40 bottom-32 right-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        /> */}
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-6 flex flex-col items-center justify-center h-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1 bg-accent text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg animate-pulse">
            Become Govt. Certified Yoga Professional
          </div>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight text-foreground"
          >
            Online Yoga
            <span className="block mt-4 italic text-primary drop-shadow-lg">
              Certification Course
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto"
          >
            Upcoming Batch:{" "}
            <span className="text-primary font-bold underline">
              April 01, 2026
            </span>{" "}
            • Registrations Open
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/allprograms">
              <button className="px-6 py-5 w-56 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105">
                Explore All Programs
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-6 py-5 w-56 bg-secondary text-secondary-foreground font-bold rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105">
                Enquire Now
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-primary/10 backdrop-blur-sm py-3 overflow-hidden z-20">
        <div className="animate-marquee-left flex gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex gap-12 text-sm font-md text-primary">
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

      {showPopup && (
        <div className="fixed z-50 w-[92%] sm:w-[90%] md:w-auto max-w-2xl md:max-w-3xl lg:max-w-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-foreground text-white shadow-2xl rounded-3xl p-6 md:p-10 lg:p-20 border-l-4 border-green-800 min-h-[300px] lg:min-h-[420px]"
          >
            {/* Header with underline */}
            <div className="flex justify-between items-start mb-6  ">
              <div className="flex flex-col items-center w-full">
                <h4 className="font-serif text-white lg-text-3xl md:text-2xl font-bold text-center">
                  Upcoming Yoga Teacher Training Batch
                </h4>
                <span className="block w-20 h-1 bg-white mt-3 rounded-full"></span>
              </div>
              <button
                className="ml-4 text-white hover:text-gray-200 font-bold text-3xl"
                onClick={closePopup}
              >
                ×
              </button>
            </div>

            {/* Content */}
            <p className="text-white/90 text-lg md:text-xl mb-3">
              <strong>Start Date:</strong> April 01, 2026
            </p>
            <p className="text-white/90 text-lg md:text-xl mb-3">
              Duration: 2 Months • Online Classes • Limited Seats
            </p>
            <p className="text-white/90 text-lg md:text-xl mb-6">
              Enhance your skills with our Online Yoga Teacher Training Courses
              and Integrated Wellness Program.
            </p>

            {/* CTA Button */}
            <Link
              to="/YCBcourse"
              className="inline-block w-full text-center bg-white text-foreground mt-5 font-bold rounded-full py-4 text-lg md:text-xl hover:bg-green-50 transition-all shadow-lg"
            >
              Explore Courses
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
