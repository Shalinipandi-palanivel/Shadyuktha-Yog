import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Download, FileText, BookOpen, ArrowRight } from "lucide-react";
import ycb1 from "@/assets/YCB-Level-1.jpg";
import ycb2 from "@/assets/YCB-_Level-2.jpg";
import ycb3 from "@/assets/YCB_Level-3.jpg";
import heroImg from "@/assets/hero-yoga.jpg";
import brochure from "@/assets/brochure.jpg";

const brochures = [
  {
    title: "Shadyuktha Yog – Complete Brochure",
    desc: "Our comprehensive profile covering all programs, philosophy, pricing, teacher training certifications, therapeutic yoga, and specialized tracks.",
    image: heroImg,
    highlights: [
      "About Us & Core Pillars",
      "All Program Details",
      "Comprehensive Pricing",
      "Levels of Sadhana",
      "YCB Certifications Overview",
    ],
    featured: true,
  },
  {
    title: "YCB Level 1 – Yoga Protocol Instructor",
    desc: "Foundation-level certification course. 200 hours equivalent. Covers foundational Yoga, Pranayama, Common Yoga Protocol, anatomy, and teaching methodology.",
    image: ycb1,
    highlights: [
      "Fee: ₹10,999 + Exam ₹3,450",
      "Duration: 2 Months",
      "Govt. Certificate",
      "Full Syllabus & FAQs",
    ],
    featured: false,
    to: "https://yogacertificationboard.nic.in/wp-content/themes/ycb/pdf/Syllabus_Level_1.pdf",
  },
  {
    title: "YCB Level 2 – Yoga Wellness Instructor",
    desc: "Intermediate-level certification. 400 hours equivalent. Deeper study of philosophy, anatomy, wellness protocols, and preventive healthcare approaches.",
    image: ycb2,
    highlights: [
      "Fee: ₹12,999 + Exam ₹4,540",
      "Duration: 2 Months",
      "Govt. Certificate",
      "Wellness & Prevention Focus",
    ],
    featured: false,
    to: "https://yogacertificationboard.nic.in/wp-content/themes/ycb/pdf/Syllabus_Level_2.pdf",
  },
  {
    title: "YCB Level 3 – Yoga Teacher & Evaluator",
    desc: "Advanced certification. 800 hours equivalent. Master-level philosophical study, advanced pedagogy, evaluation methodology, and leadership training.",
    image: ycb3,
    highlights: [
      "Fee: ₹14,999 + Exam ₹6,220",
      "Duration: 2 Months",
      "Govt. Certificate",
      "Teacher Training & Evaluation",
    ],
    featured: false,
    to: "https://yogacertificationboard.nic.in/wp-content/themes/ycb/pdf/Syllabus_Level_3.pdf",
  },
];

const Brochure = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section
        className="section-padding text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${brochure})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "450px",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimateOnScroll>
            <p className="text-sm text-white font-semibold uppercase tracking-widest opacity-80 mb-2">
              Resources
            </p>
            <h1 className="font-serif text-white text-4xl md:text-6xl font-bold mb-4">
              Our Brochures
            </h1>
            <p className="max-w-2xl text-white mx-auto opacity-90">
              Download our detailed brochures to explore our programs,
              curriculum, pricing, and certification pathways.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Brochure */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-card rounded-3xl border-2 border-primary/20 overflow-hidden shadow-xl">
              <div
                className="aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => openModal(brochures[0].image)}
              >
                <img
                  src={brochures[0].image}
                  alt={brochures[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Main Brochure
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {brochures[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {brochures[0].desc}
                </p>
                <div className="space-y-2 mb-6">
                  {brochures[0].highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 gradient-green text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4" /> Download Brochure
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* YCB Brochures */}
      <section className="section-padding gradient-green-light">
        <div className="mx-auto max-w-5xl">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
              YCB Certification Brochures
            </h2>
            <p className="text-muted-foreground">
              Government-recognized programs aligned with Ministry of AYUSH
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brochures.slice(1).map((b, i) => (
            <AnimateOnScroll
  key={b.title}
  animation="animate-scale-in"
  delay={i * 100}
>
  <div className="bg-card rounded-2xl border border-border overflow-hidden hover-lift h-full flex flex-col group cursor-pointer">
    {/* Image & Preview */}
    <div
      className="aspect-[3/2] overflow-hidden relative group"
      onClick={() => openModal(b.image)}
    >
      <button
        type="button"
        className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center rounded-full bg-white/90 shadow-lg hover:scale-110 transition-transform duration-300 z-10"
        onClick={(e) => {
          e.stopPropagation();
          openModal(b.image);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button>

      <img
        src={b.image}
        alt={b.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
    </div>

    {/* Card Content */}
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <FileText className="w-4 h-4 text-primary" />
        <span className="text-xs font-bold text-primary uppercase">
          Certification
        </span>
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground mb-2">
        {b.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">
        {b.desc}
      </p>
      <div className="space-y-1.5 mb-4">
        {b.highlights.map((h) => (
          <div
            key={h}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <ArrowRight className="w-3 h-3 text-primary shrink-0" />
            {h}
          </div>
        ))}
      </div>

      {/* Request Brochure Button */}
      {b.to && (
        <a
          href={b.to}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm rounded-sm font-semibold text-white bg-primary py-2 px-4 hover:opacity-90"
        >
          <Download className="w-4 h-4" /> Download Brochure
        </a>
      )}
    </div>
  </div>
</AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-green text-primary-foreground text-center">
        <AnimateOnScroll>
          <h2 className="font-serif text-3xl font-bold mb-4">
            Need More Information?
          </h2>
          <p className="opacity-90 max-w-xl mx-auto mb-6">
            Contact us to receive digital copies of all brochures or to schedule
            a consultation about any program.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-background text-primary px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </AnimateOnScroll>
      </section>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-50">
            <img
              src={modalImage}
              alt="Brochure Preview"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Brochure;
