import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { CheckCircle, Star, Users, User, Globe } from "lucide-react";
import pricing from "@/assets/pricingImg.png";

const coreSadhana = [
  {
    format: "Regular Practice (4 Days/Week)",
    beginner: "₹2,000",
    intermediate: "₹2,500",
    advanced: "₹3,000",
  },
  {
    format: "Regular + Pranayama (4+1 Days/Week)",
    beginner: "₹3,000",
    intermediate: "₹3,500",
    advanced: "₹4,000",
  },
  {
    format: "Daily Sadhana (6 Days/Week)",
    beginner: "₹3,500",
    intermediate: "₹4,000",
    advanced: "₹4,500",
  },
  {
    format: "Daily + Pranayama (6+1 Days/Week)",
    beginner: "₹4,000",
    intermediate: "₹4,500",
    advanced: "₹5,000",
  },
];

const coreSadhanaIntl = [
  {
    format: "Regular Practice (4 Days/Week)",
    beginner: "$40",
    intermediate: "$50",
    advanced: "$60",
  },
  {
    format: "Regular + Pranayama (4+1 Days/Week)",
    beginner: "$55",
    intermediate: "$65",
    advanced: "$75",
  },
  {
    format: "Daily Sadhana (6 Days/Week)",
    beginner: "$65",
    intermediate: "$75",
    advanced: "$85",
  },
  {
    format: "Daily + Pranayama (6+1 Days/Week)",
    beginner: "$75",
    intermediate: "$85",
    advanced: "$95",
  },
];

const threeMonth = [
  {
    format: "5 Asana Days",
    beginner: "₹7,500",
    intermediate: "₹8,500",
    advanced: "₹9,500",
  },
  {
    format: "5 Asana + 1 Grounding Day",
    beginner: "₹8,500",
    intermediate: "₹9,500",
    advanced: "₹10,000",
  },
];

const specialized = [
  {
    name: "Ashtanga Series (5 Days/Week)",
    fee: "₹3,000/month",
    intlFee: "$60/month",
    path: "/programs/ashtanga",
    features: [
      "Ashtanga Primary Series OR Pranayama",
      "5 Days/Week",
      "Live Online",
      "60 Min Sessions",
      "Small Batch Size",
      "Real-time posture corrections",
    ],
  },
  {
    name: "Pranayama Mastery (5 Days/Week)",
    fee: "₹3,000/month",
    intlFee: "$60/month",
    path: "/programs/pranayama",
    features: [
      "Structured Pranayama Techniques",
      "Breath Awareness & Control",
      "Daily 60 Min Online Sessions",
      "Small Group for Personal Attention",
      "Stress Reduction & Focus Enhancement",
      "Energy Regulation & Vitality Boost",
    ],
  },
  {
    name: "Kids Yoga: Glow & Grow (Sat & Sun)",
    fee: "₹1,000/month",
    intlFee: "$25/month",
    path: "/programs/kids-yoga",
    features: [
      "Ages 6-12",
      "2 Days/Week (Sat & Sun)",
      "Live Online",
      "60 Min Sessions",
      "Strength, Focus & Mindfulness",
    ],
  },
  {
    name: "Maternity Yoga (Pre & Post Natal)",
    fee: "₹5,000/month",
    intlFee: "$90/month",
    path: "/programs/prenatal",
    features: [
      "Pre & Post Natal Yoga",
      "4 Days/Week",
      "Live Online or In-Studio",
      "60 Min Sessions",
      "Trimester specific modifications",
      "Breathwork for Birthing",
    ],
  },
];

const ycbCerts = [
  {
    name: "YCB Level 1 – Yoga Protocol Instructor",
    tuition: "₹10,999",
    intlTuition: "$199",
    exam: "₹3,450",
    hours: "200",
    path: "/programs/ycb-level-1",
    features: [
      "Live Online Sessions",
      "Class Management Practice",
      "Morning Self-Practice Guidance",
      "Hands-on Teaching Experience",
    ],
    bgColor: "from-green-400 to-green-200",
  },
  {
    name: "YCB Level 2 – Yoga Wellness Instructor",
    tuition: "₹12,999",
    intlTuition: "$249",
    exam: "₹4,540",
    hours: "400",
    path: "/programs/ycb-level-2",
    features: [
      "Advanced Wellness Techniques",
      "Mind-Body Integration Practices",
      "Group Class Supervision",
      "Stress Management Techniques",
    ],
    bgColor: "from-blue-400 to-blue-200",
  },
  {
    name: "YCB Level 3 – Yoga Teacher & Evaluator",
    tuition: "₹14,999",
    intlTuition: "$299",
    exam: "₹6,220",
    hours: "800",
    path: "/programs/ycb-level-3",
    features: [
      "Master Level Teaching & Evaluation",
      "Curriculum Design & Assessment",
      "Therapeutic Yoga Applications",
      "Leadership & Mentorship Skills",
    ],
    bgColor: "from-purple-400 to-purple-200",
  },
];

const therapeutic = [
  {
    type: "One-on-One Exclusive",
    group: "1 Student",
    fee: "₹14,000/month",
    intlFee: "$250/month",
    icon: User,
  },
  {
    type: "Small Group Therapy",
    group: "Max 3 Students",
    fee: "₹8,000/month",
    intlFee: "$150/month",
    icon: Users,
  },
];

// Individual Sessions
const mindBodyInnerClarityIndividual = [
  {
    type: "3-Day Individual",
    group: "1 Student",
    fee: "₹6,000 / 3 Days",
    intlFee: "$110 / 3 Days",
    icon: User,
    duration: "60 Minutes per Session",
    mode: "Online Live (Google Meet)",
    description:
      "1:1 confidential session for deeper emotional alignment and inner clarity.",
  },
  {
    type: "2-Day Individual",
    group: "1 Student",
    fee: "₹4,000 / 2 Days",
    intlFee: "$75 / 2 Days",
    icon: User,
    duration: "60 Minutes per Session",
    mode: "Online Live (Google Meet)",
    description: "Focused on grounding, stabilization, and clarity.",
  },
];

// Group Sessions
const mindBodyInnerClarityGroup = [
  {
    type: "3-Day Group",
    group: "Up to 3 Students",
    fee: "₹4,500 / 3 Days",
    intlFee: "$85 / 3 Days",
    icon: Users,
    duration: "60 Minutes per Session",
    mode: "Online Live (Google Meet)",
    description:
      "Guided group regulation sessions, ensures emotional processing and integration.",
  },
  {
    type: "2-Day Group",
    group: "Up to 3 Students",
    fee: "₹2,500 / 2 Days",
    intlFee: "$45 / 2 Days",
    icon: Users,
    duration: "60 Minutes per Session",
    mode: "Online Live (Google Meet)",
    description:
      "Group sessions for regulation, grounding, and mental clarity.",
  },
];

const PriceTable = ({
  title,
  data,
  showIntl,
}: {
  title: string;
  data: typeof coreSadhana;
  showIntl?: typeof coreSadhanaIntl;
}) => (
  <div className="overflow-x-auto rounded-2xl border border-border shadow-lg">
    <table className="w-full">
      <thead>
        <tr className="gradient-green text-primary-foreground">
          <th className="text-left py-4 px-6 text-sm font-bold">
            Program Type
          </th>
          <th className="text-center py-4 px-4 text-sm font-bold">Beginner</th>
          <th className="text-center py-4 px-4 text-sm font-bold">
            Intermediate
          </th>
          <th className="text-center py-4 px-4 text-sm font-bold">Advanced</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r, i) => (
          <tr
            key={r.format}
            className={i % 2 === 0 ? "bg-background" : "bg-secondary/50"}
          >
            <td className="py-4 px-6 text-sm font-medium text-foreground">
              {r.format}
            </td>
            <td className="py-4 px-4 text-center text-sm font-semibold text-primary">
              {r.beginner}
              {showIntl && (
                <span className="block text-xs text-muted-foreground">
                  {showIntl[i]?.beginner}
                </span>
              )}
            </td>
            <td className="py-4 px-4 text-center text-sm font-semibold text-primary">
              {r.intermediate}
              {showIntl && (
                <span className="block text-xs text-muted-foreground">
                  {showIntl[i]?.intermediate}
                </span>
              )}
            </td>
            <td className="py-4 px-4 text-center text-sm font-semibold text-primary">
              {r.advanced}
              {showIntl && (
                <span className="block text-xs text-muted-foreground">
                  {showIntl[i]?.advanced}
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Pricing = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section
        className="gradient-green section-padding text-primary-foreground text-center"
        style={{
          backgroundImage: `url(${pricing})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AnimateOnScroll>
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-2">
            Transparent Pricing
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Comprehensive Session Pricing
          </h1>
          <p className="max-w-2xl mx-auto opacity-100">
            Choose the path that matches your commitment. International pricing
            available.
          </p>
          <div className="flex items-center justify-center gap-2 pt-5">
            <Globe className="w-4 h-4" />
            <span className="text-sm">
              USD prices shown for international students
            </span>
          </div>
        </AnimateOnScroll>
      </section>

      {/* YCB Certifications */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2 text-center">
              YCB Teacher Training Certifications
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Government-Recognized Professional Excellence – Ministry of AYUSH
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ycbCerts.map((c, i) => {
                const cardColors = [
                  "bg-gradient-to-br from-green-200 via-green-100 to-green-50",
                  "bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50",
                  "bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50",
                  "bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50",
                ];
                const bgColor = cardColors[i % cardColors.length];

                return (
                  <AnimateOnScroll
                    key={c.path}
                    animation="animate-scale-in"
                    delay={i * 100}
                  >
                    <div
                      className={`group block rounded-2xl border border-border p-6 hover-lift h-full ${bgColor} flex flex-col`}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-primary" />
                        <span className="text-xs font-bold text-primary uppercase">
                          {c.hours} Hours
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {c.name}
                      </h3>

                      {/* Features */}
                      <div className="space-y-2 text-sm mb-4">
                        {c.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Fees & Duration */}
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Tuition Fee
                          </span>
                          <div className="text-right font-bold text-foreground">
                            {c.tuition}
                            <span className="block text-xs text-muted-foreground">
                              {c.intlTuition}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Exam Fee (YCB)
                          </span>
                          <span className="font-bold text-foreground">
                            {c.exam}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Duration
                          </span>
                          <span className="font-bold text-foreground">
                            2 Months
                          </span>
                        </div>
                      </div>
                      <Link to={c.path}>
                        {/* Footer Certificate */}
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            Govt. Certificate (YCB, Ministry of AYUSH)
                          </div>

                          {/* CTA Button */}
                          <button className="w-full py-2 bg-white text-primary font-semibold rounded-full hover:text-white hover:bg-primary/90 transition">
                            Know More
                          </button>
                        </div>
                      </Link>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Core Sadhana */}
      <section className="section-padding bg-gradient-to-br from-secondary/40 via-background to-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2 text-center">
              A. Core Sadhana
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Level-Based Monthly Structure
            </p>
            <PriceTable
              title="Core Sadhana"
              data={coreSadhana}
              showIntl={coreSadhanaIntl}
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* 3-Month Program */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2 text-center">
              B. 3-Month Program
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Commit deeper for sustainable transformation
            </p>
            <PriceTable title="3-Month" data={threeMonth} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Specialized */}
      <section className="section-padding bg-gradient-to-br from-[#d9f0e1] via-[#ffffff] to-[#b7e5c7] relative overflow-hidden">
        {" "}
        <div className="container mx-auto max-w-6xl">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2 text-center">
              C. Mastery & Specialized Series
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              High-commitment tracks for specific yogic disciplines
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialized.map((s, i) => (
                <div
                  key={s.path}
                  className={`rounded-2xl p-6 flex flex-col justify-between
    shadow-lg hover:shadow-2xl transition-transform duration-300
    bg-gradient-to-br from-[#d4f5d8]/90 via-[#b7efb4]/80 to-[#9de894]/80
    border border-[#7ccf72]/60 backdrop-blur-md`}
                >
                  {/* {i === 1 && (
                    <span className="bg-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block">
                      Most Enrolled
                    </span>
                  )} */}

                  <h3 className="font-serif text-xl  font-bold mb-2">
                    {s.name}
                  </h3>
                  <p className="text-sm  mb-6">International: {s.intlFee}</p>

                  <div className="mb-6">
                    <span className="text-3xl font-serif font-bold">
                      {s.fee}
                    </span>
                    {/* <span className="text-sm ml-2 text-white">/ month</span> */}
                  </div>

                  {/* Example Features: can be customized per program */}
                  <ul className="space-y-2 mb-6">
                    {s.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 font-bold">✔</span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={s.path}
                    className={`w-full py-3 rounded-full text-center font-medium transition-colors ${
                      i === 1
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-foreground hover:bg-primary hover:text-white"
                    }`}
                  >
                    Enroll Now
                  </Link>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Therapeutic */}
      <section className="section-padding bg-gradient-to-br from-secondary/40 via-background to-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2 text-center">
              D. Therapeutic Excellence (DPYT Model)
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Morning Management (Self-Practice) & Class Management
              (Therapist-led)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {therapeutic.map((t) => (
                <div
                  key={t.type}
                  className="bg-card rounded-2xl border-2 border-primary/20 p-8 text-center hover-lift"
                >
                  <div className="w-16 h-16 rounded-full gradient-green mx-auto mb-4 flex items-center justify-center">
                    <t.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {t.type}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.group}
                  </p>
                  <p className="font-serif text-3xl font-bold text-primary">
                    {t.fee}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    International: {t.intlFee}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/*Mind-Body and Inner Clarity*/}
   <section className="section-padding bg-gradient-to-br from-[#dff7e6] via-[#f0fcf2] to-[#c6f0d4] relative overflow-hidden">
  <div className="container mx-auto max-w-5xl">
    <AnimateOnScroll>
      <h2 className="font-serif text-3xl font-bold text-foreground mb-2 text-center">
        Mind–Body & Inner Clarity Program
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Mind relaxation techniques, guided meditations & emotional
        regulation practices
      </p>

      {/* Individual Sessions */}
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">
        Individual Sessions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {mindBodyInnerClarityIndividual.map((session) => (
          <div
            key={session.type}
            className="bg-card rounded-2xl border-2 border-primary/20 p-8 text-center hover-lift"
          >
            <div className="w-16 h-16 rounded-full gradient-green mx-auto mb-4 flex items-center justify-center">
              <session.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              {session.type}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{session.group}</p>
            <p className="font-serif text-3xl font-bold text-primary">{session.fee}</p>
            <p className="text-sm text-muted-foreground mt-1">
              International: {session.intlFee}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {session.duration} | {session.mode}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{session.description}</p>
          </div>
        ))}
      </div>

      {/* Group Sessions */}
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">
        Group Sessions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mindBodyInnerClarityGroup.map((session) => (
          <div
            key={session.type}
            className="bg-card rounded-2xl border-2 border-primary/20 p-8 text-center hover-lift"
          >
            <div className="w-16 h-16 rounded-full gradient-green mx-auto mb-4 flex items-center justify-center">
              <session.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              {session.type}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{session.group}</p>
            <p className="font-serif text-3xl font-bold text-primary">{session.fee}</p>
            <p className="text-sm text-muted-foreground mt-1">
              International: {session.intlFee}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {session.duration} | {session.mode}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{session.description}</p>
          </div>
        ))}
      </div>
    </AnimateOnScroll>
  </div>
</section>

      {/* Enrollment */}
      <section className="section-padding gradient-green text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-white/90  text-3xl font-bold mb-6">
              Enrollment Guidelines
            </h2>
            <div className="space-y-4 text-left text-white max-w-2xl mx-auto">
              {[
                {
                  label: "Batch Size",
                  text: "Group sessions limited to 12 participants for high teacher involvement.",
                },
                {
                  label: "Consultation",
                  text: "All Therapy and Maternity students must undergo mandatory initial screening.",
                },
                {
                  label: "Commitment",
                  text: "The 3-Month Program is highly recommended for progressive transformation.",
                },
                {
                  label: "International",
                  text: "USD pricing applies to all students outside India. Payment via international transfer.",
                },
              ].map((g) => (
                <div
                  key={g.label}
                  className="flex text-white items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 opacity-80" />
                  <p className="opacity-90 text-white/85">
                    <strong>{g.label}:</strong> {g.text}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/#contact"
              className="inline-block mt-8 bg-background text-primary px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
