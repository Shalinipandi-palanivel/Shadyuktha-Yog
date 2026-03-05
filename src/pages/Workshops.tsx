import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import FlipWorkshopCard from "@/components/FlipWorkshopCard.tsx";
import workshopBanner from "@/assets/workshop.png";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Building,
  CheckCircle,
  Clock,
  Calendar,
} from "lucide-react";
import corporateImg from "@/assets/corporate-yoga.jpg";
import collegeImg from "@/assets/college-yoga.jpg";
import foundationImg from "@/assets/foundation-yoga.png";
import pranayamaImg from "@/assets/Pranayama-workshop.png";
import kriyaImg from "@/assets/kriya-yoga.jpg";
import backPainImg from "@/assets/backpain.jpg";
import anxietyImg from "@/assets/stress.jpg";
import awakeningImg from "@/assets/awakening.png";
import sunImg from "@/assets/Surynamaskar.png";
import workshop from "@/assets/workshop.jpg";

const specializedWorkshops = [
  {
    title: "Fundamentals of Yoga",
    duration: "1 Day",
    hours: "2 Hours",
    image: foundationImg,
    fee: { india: "₹700", international: "$15" },
    description: [
      "Beginner-friendly introduction to yoga postures, breathing, and mindfulness.",
      "Learn proper alignment in basic asanas and the importance of breath awareness.",
      "Create a short daily practice for flexibility, posture, and mental clarity.",
      "Ideal for newcomers seeking a strong foundation in yoga.",
    ],
  },
  {
    title: "Pranayama",
    duration: "1 Day",
    hours: "2 Hours",
    image: pranayamaImg,
    fee: { india: "₹1,500", international: "$40" },
    description: [
      "Learn essential breathing techniques for energy, focus, and relaxation.",
      "Includes Ujjayi, Nadi Shodhana, Kapalabhati, and Bhramari pranayamas.",
      "Regulate breath to reduce stress and enhance concentration.",
      "Practical guidance to incorporate pranayama into daily routines.",
    ],
  },
  {
    title: "Kriya Yoga",
    duration: "1 Day",
    hours: "2 Hours",
    image: kriyaImg,
    fee: { india: "₹2,000", international: "$60" },
    description: [
      "Practice cleansing techniques and dynamic sequences for vitality.",
      "Step-by-step sequences with proper breath coordination.",
      "Detoxify internal systems and promote mental clarity.",
      "Recommended for those seeking deeper energetic awareness.",
    ],
  },
  {
    title: "Yoga Therapy – Back Pain",
    duration: "1 Day",
    hours: "1 Hour and 30 Minutes",
    image: backPainImg,
    fee: { india: "₹1,500", international: "$60" },
    description: [
      "Targeted yoga therapy to relieve and prevent back pain.",
      "Strengthen core muscles and improve spinal alignment.",
      "Includes gentle asanas, corrective stretches, and breathing techniques.",
      "Ideal for office workers, athletes, or chronic back discomfort.",
    ],
  },
  {
    title: "Yoga Therapy – Anxiety & Stress",
    duration: "1 Day",
    hours: "1 Hour and 30 Minutes",
    image: anxietyImg,
    fee: { india: "₹1,500", international: "$60" },
    description: [
      "Therapeutic sequences and breathing for mental wellness.",
      "Learn stress-reducing asanas, mindfulness, and calming pranayamas.",
      "Manage anxiety, improve emotional balance, and cultivate inner peace.",
      "Suitable for high-stress environments.",
    ],
  },
  {
    title: "Kundalini Awakening",
    duration: "1 Day",
    hours: "2 Hours",
    image: awakeningImg,
    fee: { india: "₹2,000", international: "$90" },
    description: [
      "Enhance body awareness, energy flow, and presence.",
      "Includes gentle spinal movements, breathwork, and guided energy practices.",
      "Increase vitality, improve focus, and connect deeply with inner energy.",
      "Precautions and alignment tips provided for safe practice.",
    ],
  },
  {
    title: "Sun Salutation Workshop",
    duration: "1 Day",
    hours: "1.5 Hours",
    image: sunImg,
    fee: { india: "₹1,000", international: "$80" },
    description: [
      "Learn the classical Surya Namaskar sequence for vitality and energy balance.",
      "Practice each pose with detailed alignment and breath flow.",
      "Includes modifications for beginners and advanced variations for experienced practitioners.",
      "Ideal for daily practice integration to improve strength, flexibility, and mental clarity.",
    ],
  },
];
const workshopPackages = [
  {
    duration: "1 Day Workshop",
    hours: "3–4 Hours",
    corporate: {
      india: "₹25,000",
      international: "$300",
    },
    college: {
      india: "₹20,000",
      international: "$250",
    },
    includes: [
      "Introduction to Yoga & Mindfulness",
      "Desk Yoga / Campus Yoga Session",
      "Pranayama for Stress Relief",
      "Guided Relaxation",
      "Certificate of Participation",
    ],
  },
  {
    duration: "3 Day Workshop",
    hours: "3–4 Hours / Day",
    corporate: {
      india: "₹40,000",
      international: "$500",
    },
    college: {
      india: "₹35,000",
      international: "$400",
    },
    includes: [
      "Day 1: Foundation & Awareness",
      "Day 2: Strength & Flexibility",
      "Day 3: Pranayama & Meditation",
      "Daily Relaxation Techniques",
      "Participant Handbook",
      "Certificate of Participation",
    ],
  },
  {
    duration: "5 Day Workshop",
    hours: "3–4 Hours / Day",
    corporate: {
      india: "₹60,000",
      international: "$900",
    },
    college: {
      india: "₹40,000",
      international: "$700",
    },
    includes: [
      "Comprehensive Yoga Journey",
      "Asana Progression (Beginner to Intermediate)",
      "Pranayama & Meditation Deepening",
      "Team Building Through Partner Yoga",
      "Ergonomics & Posture Correction",
      "Certificate of Participation",
    ],
  },
];

const Workshops = () => {
  const [region, setRegion] = useState("india");
  return (
    <main className="pt-20">
      {/* Hero */}
      <section
        className="section-padding text-green-700 text-center relative bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${workshopBanner})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/60"></div>

        <div className="relative z-10">
          <AnimateOnScroll>
            <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-2">
              Our Workshops
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              Yoga for Everyone
            </h1>
            <p className="max-w-2xl mx-auto opacity-90 text-lg">
              Bring wellness to your team or campus with our customized yoga
              workshops. Conducted offline at your premises. Specialized
              workshops are conducted online.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="animate-slide-in-left">
              <img
                src={corporateImg}
                alt="Corporate Yoga"
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-right">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-primary" />
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Corporate Workshops
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Enhance employee well-being, reduce workplace stress, and
                  boost productivity with our tailored corporate yoga programs.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Stress Management & Desk Yoga",
                    "Mindfulness & Meditation",
                    "Team Building Through Partner Yoga",
                    "Pranayama for Focus & Productivity",
                    "Ergonomic Awareness",
                    "Custom Duration: 1, 3, or 5 Day programs",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* College Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/40 via-background to-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll
              animation="animate-slide-in-left"
              className="order-2 lg:order-1"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    College Workshops
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Introduce students to the transformative power of yoga with
                  programs focused on academic stress relief and mental clarity.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Exam Stress Relief",
                    "Classical Yoga Philosophy",
                    "Energy Management",
                    "Fun Group Asana",
                    "Breathing for Better Focus",
                    "Career in Yoga (YCB Paths)",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll
              animation="animate-slide-in-right"
              className="order-1 lg:order-2"
            >
              <img
                src={collegeImg}
                alt="College Yoga"
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      {/* Specialized Workshops Section */}

      <section className="section-padding bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="container mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
              Specialized Workshops
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Explore <span className="text-gradient-green">Our Workshops</span>
            </h2>
            <div className="decorative-line mx-auto mt-6" />
          </AnimateOnScroll>

          {/* Region Tabs for Fee */}
          <div className="flex justify-center mb-6">
            <div className="bg-secondary p-1 rounded-full flex gap-1">
              <button
                onClick={() => setRegion("india")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  region === "india"
                    ? "bg-primary text-white shadow"
                    : "text-muted-foreground"
                }`}
              >
                India
              </button>
              <button
                onClick={() => setRegion("international")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  region === "international"
                    ? "bg-primary text-white shadow"
                    : "text-muted-foreground"
                }`}
              >
                International
              </button>
            </div>
          </div>

          {/* Workshop Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specializedWorkshops.map((workshop, i) => (
              <div key={i} className="w-full">
                <FlipWorkshopCard workshop={workshop} region={region} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="section-padding bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Students Trained", value: "500+" },
              { icon: Building, label: "Corporate Partners", value: "25+" },
              { icon: GraduationCap, label: "College Programs", value: "15+" },
              { icon: CheckCircle, label: "Satisfaction Rate", value: "98%" },
            ].map((stat, i) => (
              <AnimateOnScroll
                key={i}
                animation="animate-flip-in"
                delay={i * 150}
              >
                <div className="text-center p-6 bg-card rounded-2xl border border-border shadow-md">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-serif text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section> */}

      {/* Workshop Packages */}
      <section className="section-padding bg-gradient-to-br from-secondary/40 via-background to-secondary/30">
        <div className="container mx-auto">
          {/* Heading */}
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
              Workshop Packages
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Choose Your <span className="text-gradient-green">Duration</span>
            </h2>
          </AnimateOnScroll>

          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-secondary p-1 rounded-full flex gap-1">
              <button
                onClick={() => setRegion("india")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all
            ${region === "india" ? "bg-primary text-white shadow" : "text-muted-foreground"}`}
              >
                India
              </button>

              <button
                onClick={() => setRegion("international")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all
            ${region === "international" ? "bg-primary text-white shadow" : "text-muted-foreground"}`}
              >
                International
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-sm text-muted-foreground max-w-3xl mx-auto mb-12">
            Pricing vary based on{" "}
            <span className="font-semibold text-foreground">
              batch size, customization, and engagement duration
            </span>
            . Applicable for{" "}
            <span className="font-semibold text-foreground">
              Colleges, Corporates, Institutions, and Organizations
            </span>
            .
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {workshopPackages.map((pkg, i) => (
              <AnimateOnScroll
                key={pkg.duration}
                animation="animate-scale-in"
                delay={i * 150}
              >
                <div
                  className={`bg-card rounded-3xl border-2 ${
                    i === 2
                      ? "border-primary shadow-xl"
                      : "border-border shadow-md"
                  } p-8 hover-lift h-full flex flex-col`}
                >
                  {i === 1 && (
                    <div className="gradient-green text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full self-start mb-4">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {pkg.duration}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Clock className="w-4 h-4" /> {pkg.hours}
                  </div>
{/* 
                  <div className="space-y-3 mb-6">
                    <div className="bg-secondary rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Building className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">
                          Corporate
                        </span>
                      </div>
                      <p className="font-serif text-2xl font-bold text-primary">
                        {pkg.corporate[region]}
                      </p>
                    </div>

                    <div className="bg-secondary rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">
                          College
                        </span>
                      </div>
                      <p className="font-serif text-2xl font-bold text-primary">
                        {pkg.college[region]}
                      </p>
                    </div>
                  </div> */}

                  <div className="flex-1">
                    <p className="text-sm font-bold text-foreground mb-3">
                      Includes:
                    </p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/Shadyuktha-Yog/#contact"
                    className="mt-6 gradient-green text-primary-foreground py-3 rounded-full font-semibold text-center flex items-center justify-center gap-2 hover:opacity-90"
                  >
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Workshops;
