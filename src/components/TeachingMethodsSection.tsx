import { AnimatePresence, motion } from "framer-motion";

// Example images (replace with your own URLs or imports)
import liveClassImg from "../assets/live-online.png";
import theoryImg from "../assets/theory.png";
import peerImg from "../assets/group-practice.png";
import assessmentImg from "../assets/assessment.png";
import doubtImg from "../assets/doubt-clearing.png";
import methodologyImg from "@/assets/teaching-methodology.png";
// import progressImg from "../assets/progress.jpg";

const methods = [
  {
    image: liveClassImg,
    title: "Live Interactive Sessions",
    desc: "Participate in real-time classes via video with instant feedback, personalized corrections, and engaging discussions.",
  },
  {
    image: theoryImg,
    title: "Theory & Philosophy",
    desc: "Deep dive into Yoga Sutras, anatomy, yogic philosophy, and the science behind practices through weekly theory sessions.",
  },
  {
    image: peerImg,
    title: "Peer Practice Groups",
    desc: "Collaborate in small groups to practice together, motivate each other, and share learnings for stronger community support.",
  },
  {
    image: assessmentImg,
    title: "Practical Assessments",
    desc: "Regular evaluations, practical tests, and demonstrations to track your skill development and ensure consistent progress.",
  },
  {
    image: doubtImg,
    title: "Doubt-Clearing Sessions",
    desc: "Dedicated live Q&A sessions where you can ask questions, clarify doubts, and receive personalized guidance.",
  },
  {
    image: methodologyImg, // replace with your teaching methodology image
    title: "Teaching Methodology",
    desc: "Learn how to take classes effectively. Master building strong instructions, managing class control, correcting postures, and delivering confident, engaging sessions.",
  },
];

function ImageStack({ images }: { images: string[] }) {
  return (
    <div className="relative grid grid-cols-3 gap-6">
      {/* Big vertical image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-2xl h-[520px]"
      >
        <img src={images[0]} className="w-full h-full object-cover" alt="" />
      </motion.div>

      {/* Small top */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl overflow-hidden shadow-xl h-[200px]"
      >
        <img src={images[1]} className="w-full h-full object-cover" alt="" />
      </motion.div>

      {/* Small bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-2xl overflow-hidden shadow-xl h-[300px]"
      >
        <img src={images[2]} className="w-full h-full object-cover" alt="" />
      </motion.div>
    </div>
  );
}

function ContentStack({ items }: { items: any[] }) {
  return (
    <div className="space-y-8">
      {items.map((method, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex gap-5 items-start bg-white/70 backdrop-blur rounded-2xl p-6 shadow-md"
        >
          <div className="w-3 h-3 mt-2 rounded-full bg-primary" />
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              {method.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{method.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function TeachingMethodsSection() {
  const firstHalf = methods.slice(0, 3);
  const secondHalf = methods.slice(3, 6);

  return (
    <section className="py-20 gradient-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center mb-12">
          {" "}
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            {" "}
            How You Will Learn{" "}
          </span>{" "}
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
            {" "}
            Online Teaching Methods{" "}
          </h2>{" "}
          <div className="decorative-line mx-auto mt-6" />{" "}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 space-y-28">
        {/* SECTION 1 — Images Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ImageStack images={firstHalf.map((m) => m.image)} />
          <ContentStack items={firstHalf} />
        </div>

        {/* SECTION 2 — Content Left, Images Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-1 order-2">
            <ContentStack items={secondHalf} />
          </div>
          <div className="lg:order-2 order-1">
            <ImageStack images={secondHalf.map((m) => m.image)} />
          </div>
        </div>
      </div>
    </section>
  );
}
