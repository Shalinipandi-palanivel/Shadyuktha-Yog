import { AnimateOnScroll } from "./AnimateOnScroll";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";
import image from "@/assets/setus.png";

const WhatSetsUsApart = () => {
  const features = [
    "Govt. Certified (YCB): All teacher training programs are aligned with the Yoga Certification Board under Ministry of AYUSH.",
    "DPYT Therapy Model: Our pioneering Dual-Phase Yoga Therapy ensures 24-hour therapeutic support and self-reliance.",
    "100% Online Live Classes: Join from anywhere in the world with real-time interaction and personalized corrections.",
    "Classical + Modern Blend: Traditional Yoga Śāstra integrated with modern anatomy, physiology, and therapeutic science.",
    "Small Batch Size (Max 12): High teacher involvement with real-time corrections for every student.",
    "Progressive Level System: Structured path from Arambha (Beginner) to Uttama (Advanced).",
  ];
  const cardVariants: Variants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      className="relative py-20 overflow-hidden 
      bg-gradient-to-br from-[#e6f4ee] via-white to-[#eef7f2]"
    >
      {/* subtle background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className=" mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — HEADING */}
          <AnimateOnScroll>
            <div className="lg:sticky lg:top-0 flex flex-col items-center justify-center text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Why Choose Us
              </p>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                What Sets Us <span className="text-gradient-green">Apart</span>
              </h2>

              <p className="text-lg text-foreground/75 leading-relaxed max-w-md">
                Our approach is rooted in classical wisdom, strengthened by
                scientific understanding, and delivered through a disciplined,
                student-centered methodology.
              </p>

              <div className="decorative-line mt-5 mb-10" />

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[25rem] h-[20rem] rounded-full overflow-hidden shadow-xl ring-4 ring-primary/20"
              >
                <img
                  src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/setus.png"
                  alt="Holistic Yoga Practice"
                  className="w-full h-full object-cover"
                />

                {/* Soft inner glossy glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-primary/20 pointer-events-none" />
              </motion.div>
            </div>
          </AnimateOnScroll>

          {/* RIGHT — FEATURES */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ perspective: 1000 }} // Important for rotateY
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="relative bg-white rounded-2xl p-6 border border-primary/10 shadow-lg overflow-hidden hover:shadow-xl"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }} // subtle hover effect
              >
                {/* Leafy edge */}
                <div className="absolute inset-y-0 left-0 w-1 bg-primary/40 rounded-l-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/85 leading-relaxed">{f}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
