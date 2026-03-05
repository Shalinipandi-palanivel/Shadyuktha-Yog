import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Search, Filter, Send, CheckCircle2 } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import suryanamaskar from "@/assets/sunsalutation.jpg";
import pranayama from "@/assets/Pranayama-workshop.png";
import therapy from "@/assets/therapy-yoga.jpg";
import anatomy from "@/assets/Anatomy.jpg";
import backbend from "@/assets/yoga-anatomy.jpg";
import nadi from "@/assets/nadi shodana.png";
import child from "@/assets/kids-yoga.jpg";
import limbs from "@/assets/limbs.png";
import desk from "@/assets/desk.jpg";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Asana",
  "Pranayama",
  "Anatomy",
  "Philosophy",
  "Wellness",
  "Kids Yoga",
  "Therapy",
];

const blogPosts = [
  {
    id: 1,
    title: "Understanding Surya Namaskar: A Complete Guide",
    category: "Asana",
    excerpt:
      "Explore the 12 powerful poses of Sun Salutation and their impact on your body, mind, and energy system.",
    date: "Feb 20, 2026",
    author: "Shalinipandi",
    readTime: "8 min",
    image: suryanamaskar,
  },
  {
    id: 2,
    title: "The Science Behind Ujjayi Pranayama",
    category: "Pranayama",
    excerpt:
      "Discover how the 'Ocean Breath' regulates your nervous system, reduces anxiety, and enhances focus during practice.",
    date: "Feb 15, 2026",
    author: "Shalinipandi",
    readTime: "6 min",
    image: pranayama,
  },
  {
    id: 3,
    title: "Pelvic Floor Anatomy for Yoga Practitioners",
    category: "Anatomy",
    excerpt:
      "A deep dive into the muscles, ligaments, and fascia that form the foundation of Mula Bandha and core stability.",
    date: "Feb 10, 2026",
    author: "Shalinipandi",
    readTime: "10 min",
    image: backbend,
  },
  {
    id: 4,
    title: "Patanjali's Eight Limbs: Beyond Asana",
    category: "Philosophy",
    excerpt:
      "Understanding the complete path of Ashtanga Yoga from Yama and Niyama to Samadhi.",
    date: "Feb 5, 2026",
    author: "Shalinipandi",
    readTime: "12 min",
    image: limbs,
  },
  {
    id: 5,
    title: "Yoga for Desk Workers: 10-Minute Routines",
    category: "Wellness",
    excerpt:
      "Quick and effective yoga sequences to counter the effects of prolonged sitting and screen time.",
    date: "Jan 30, 2026",
    author: "Shalinipandi",
    readTime: "5 min",
    image: desk,
  },
  {
    id: 6,
    title: "Building Focus in Children Through Yoga",
    category: "Kids Yoga",
    excerpt:
      "How mindful movement and breathing exercises help children develop concentration and emotional balance.",
    date: "Jan 25, 2026",
    author: "Shalinipandi",
    readTime: "7 min",
    image: child,
  },
  {
    id: 7,
    title: "DPYT Model: A New Approach to Yoga Therapy",
    category: "Therapy",
    excerpt:
      "How the Dual-Phase Yoga Therapy model ensures continuous healing through self-practice and guided intervention.",
    date: "Jan 20, 2026",
    author: "Shalinipandi",
    readTime: "9 min",
    image: therapy,
  },
  {
    id: 8,
    title: "Nadi Shodhana: Balancing Your Energy Channels",
    category: "Pranayama",
    excerpt:
      "Step-by-step guide to alternate nostril breathing and its profound effects on mental clarity and hormonal balance.",
    date: "Jan 15, 2026",
    author: "Shalinipandi",
    readTime: "6 min",
    image: nadi,
  },
  {
    id: 9,
    title: "The Anatomy of Backbends: Safe Practice",
    category: "Anatomy",
    excerpt:
      "Understanding spinal extension, hip flexor engagement, and shoulder opening for safe and effective backbends.",
    date: "Jan 10, 2026",
    author: "Shalinipandi",
    readTime: "8 min",
    image: anatomy,
  },
];
const fullContent: Record<number, JSX.Element> = {
  1: (
    <div className="space-y-4 text-sm text-muted-foreground">
      {/* <img
        src="/images/surya-namaskar.jpg"
        alt="Surya Namaskar"
        className="w-full rounded-lg mb-4"
      /> */}
      {/* <h3 className="font-semibold text-base">
        Understanding Surya Namaskar: A Complete Guide
      </h3> */}
      <p className="mb-3">
        <strong>Overview:</strong> Surya Namaskar (Sun Salutation) is a sequence
        of 12 asanas performed in a flowing manner. It energizes the body,
        strengthens muscles, and enhances mental clarity.
      </p>
      <strong>Benefits:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Improves flexibility and posture</li>
        <li>Strengthens core, arms, and legs</li>
        <li>Boosts circulation and cardiovascular health</li>
        <li>Calms the mind and reduces stress</li>
        <li>Balances energy and activates chakras</li>
      </ul>
      <strong>How to Perform:</strong>
      <ol className="list-decimal list-inside pb-3">
        <li>Start in Tadasana (Mountain Pose)</li>
        <li>Inhale, raise arms overhead (Urdhva Hastasana)</li>
        <li>Exhale, forward fold (Uttanasana)</li>
        <li>Inhale, half lift (Ardha Uttanasana)</li>
        <li>Exhale, step back to Plank → Chaturanga Dandasana</li>
        <li>Inhale, upward dog (Urdhva Mukha Svanasana)</li>
        <li>Exhale, downward dog (Adho Mukha Svanasana)</li>
        <li>Repeat in reverse order</li>
      </ol>
      <strong>Tips:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Synchronize breath with movement</li>
        <li>Move slowly initially to learn alignment</li>
        <li>Perform 6–12 rounds for best results</li>
      </ul>
      <strong>Precautions:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Avoid if you have severe back or wrist injuries</li>
        <li>Pregnant women should modify postures</li>
      </ul>
    </div>
  ),
  2: (
    <div className="space-y-4 text-sm text-muted-foreground">
      {/* <img
        src="/images/ujjayi-pranayama.jpg"
        alt="Ujjayi Pranayama"
        className="w-full rounded-lg mb-4"
      /> */}
      {/* <h3 className="font-semibold text-base">
        The Science Behind Ujjayi Pranayama
      </h3> */}
      <p className="mb-3">
        <strong>Overview:</strong> Ujjayi breath, also called the 'Ocean
        Breath,' is a breathing technique that regulates the nervous system,
        increases lung capacity, and improves focus.
      </p>
      <strong>Benefits:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Reduces stress and anxiety</li>
        <li>Improves concentration and mental clarity</li>
        <li>Enhances oxygenation and respiratory efficiency</li>
        <li>Supports meditation and mindfulness practice</li>
      </ul>
      <strong>How to Perform:</strong>
      <ol className="list-decimal list-inside pb-3">
        <li>Sit comfortably with a straight spine</li>
        <li>
          Inhale deeply through the nose, slightly constricting the throat
        </li>
        <li>Exhale through the nose with the same constriction</li>
        <li>Make a soft 'haaa' sound</li>
        <li>Maintain slow, even, rhythmic breaths</li>
      </ol>
      <strong>Tips:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Start with 5–10 minutes daily</li>
        <li>Focus on sound and breath coordination</li>
        <li>Combine with meditation for enhanced effects</li>
      </ul>
      <strong>Precautions:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Avoid forcing breath</li>
        <li>
          People with severe respiratory conditions should consult a doctor
        </li>
      </ul>
    </div>
  ),
  3: (
    <div className="space-y-4 text-sm text-muted-foreground">
      {/* <img
        src="/images/pelvic-floor.jpg"
        alt="Pelvic Floor Anatomy"
        className="w-full rounded-lg mb-4"
      /> */}
      {/* <h3 className="font-semibold text-base">
        Pelvic Floor Anatomy for Yoga Practitioners
      </h3> */}
      <p className="mb-3">
        <strong>Overview:</strong> The pelvic floor is a group of muscles,
        ligaments, and fascia that support core stability, sexual health, and
        posture.
      </p>
      <strong>Benefits:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Improves core strength and stability</li>
        <li>Supports spinal alignment and lower back health</li>
        <li>Enhances control during yoga asanas</li>
        <li>Prevents urinary incontinence</li>
      </ul>
      <strong>How to Strengthen:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>
          Practice Mula Bandha: contract the pelvic floor muscles inward and
          upward
        </li>
        <li>Bridge Pose with pelvic lift</li>
        <li>Kegel exercises incorporated in yoga flow</li>
        <li>Engage pelvic floor during standing asanas like Warrior poses</li>
      </ul>
      <strong>Tips:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Breathe normally while contracting muscles</li>
        <li>Avoid over-tightening</li>
        <li>Gradually increase duration and intensity</li>
      </ul>
      <strong>Precautions:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Stop if experiencing pain or discomfort</li>
        <li>Consult a physiotherapist for severe pelvic issues</li>
      </ul>
    </div>
  ),
  4: (
    <div className="space-y-4 text-sm text-muted-foreground">
      {/* <img
        src="/images/ashtanga-eight-limbs.jpg"
        alt="Patanjali's Eight Limbs"
        className="w-full rounded-lg mb-4"
      /> */}
      {/* <h3 className="font-semibold text-base">
        Patanjali's Eight Limbs: Beyond Asana
      </h3> */}
      <p className="mb-3">
        <strong>Overview:</strong> Ashtanga Yoga is the eightfold path outlined
        by Patanjali. It goes beyond physical postures to guide ethical living,
        breath control, concentration, and spiritual growth.
      </p>
      <strong>The Eight Limbs:</strong>
      <ol className="list-decimal list-inside pb-3">
        <li>Yama – Ethical disciplines (non-violence, truthfulness)</li>
        <li>Niyama – Personal observances (cleanliness, contentment)</li>
        <li>Asana – Physical postures</li>
        <li>Pranayama – Breath control</li>
        <li>Pratyahara – Sense withdrawal</li>
        <li>Dharana – Concentration</li>
        <li>Dhyana – Meditation</li>
        <li>Samadhi – Blissful union</li>
      </ol>
      <strong>Benefits:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>
          Promotes holistic health (physical, mental, emotional, spiritual)
        </li>
        <li>Reduces stress and mental clutter</li>
        <li>Encourages mindful living</li>
        <li>Supports self-awareness and personal growth</li>
      </ul>
      <strong>Tips:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Begin with Yama, Niyama, and Asana before advanced practices</li>
        <li>Integrate meditation gradually</li>
        <li>Reflect on daily actions in alignment with ethics</li>
      </ul>
      <strong>Precautions:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>
          Avoid rushing through limbs; each step requires practice and awareness
        </li>
      </ul>
    </div>
  ),
  5: (
    <div className="space-y-4 text-sm text-muted-foreground">
      {/* <img
        src="/images/desk-yoga.jpg"
        alt="Yoga for Desk Workers"
        className="w-full rounded-lg mb-4"
      /> */}
      {/* <h3 className="font-semibold text-base">
        Yoga for Desk Workers: 10-Minute Routines
      </h3> */}
      <p className="mb-3">
        <strong>Overview:</strong> Short yoga sequences to counteract effects of
        prolonged sitting, improve posture, and reduce tension.
      </p>
      <strong>Benefits:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Reduces back, neck, and shoulder pain</li>
        <li>Improves circulation and energy levels</li>
        <li>Enhances focus and mental clarity</li>
        <li>Corrects postural imbalances</li>
      </ul>
      <strong>10-Minute Routine:</strong>
      <ol className="list-decimal list-inside pb-3">
        <li>Seated cat-cow stretches</li>
        <li>Neck rolls and shoulder shrugs</li>
        <li>Seated spinal twists</li>
        <li>Standing forward bend</li>
        <li>Deskside chair pigeon stretch</li>
        <li>Wrist stretches for typing relief</li>
        <li>Deep breathing or short pranayama</li>
      </ol>
      <strong>Tips:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Repeat routine 2–3 times a day if possible</li>
        <li>Maintain awareness of posture while working</li>
        <li>Combine with micro-breaks and hydration</li>
      </ul>
      <strong>Precautions:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Avoid forceful stretches</li>
        <li>Stop if you feel sharp pain</li>
      </ul>
    </div>
  ),
  6: (
    <div className="space-y-4 text-sm text-muted-foreground">
      {/* <img
        src="/images/kids-yoga.jpg"
        alt="Yoga for Children"
        className="w-full rounded-lg mb-4"
      /> */}
      {/* <h3 className="font-semibold text-base">
        Building Focus in Children Through Yoga
      </h3> */}
      <p className="mb-3">
        <strong>Overview:</strong> Yoga can enhance concentration, emotional
        balance, and mindfulness in children. Fun movements and breathing
        exercises engage their minds while improving flexibility.
      </p>
      <strong>Benefits:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Develops attention and focus</li>
        <li>Improves physical coordination</li>
        <li>Encourages emotional regulation</li>
        <li>Reduces stress and hyperactivity</li>
      </ul>
      <strong>How to Practice:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Short 10–15 minute sessions</li>
        <li>Simple asanas: Tree Pose, Warrior II, Cat-Cow</li>
        <li>Breathing games: Balloon Breath, Dragon Breath</li>
        <li>Partner yoga to encourage teamwork</li>
      </ul>
      <strong>Tips:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Keep sessions playful and age-appropriate</li>
        <li>Use positive reinforcement</li>
        <li>Gradually increase duration</li>
      </ul>
      <strong>Precautions:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Avoid forcing poses</li>
        <li>Supervise young children during balancing postures</li>
      </ul>
    </div>
  ),
  7: (
    <div className="space-y-4 text-sm text-muted-foreground">
      {/* <img
        src="/images/dpyt-therapy.jpg"
        alt="DPYT Yoga Therapy"
        className="w-full rounded-lg mb-4"
      /> */}
      {/* <h3 className="font-semibold text-base">
        DPYT Model: A New Approach to Yoga Therapy
      </h3> */}
      <p className="mb-3">
        <strong>Overview:</strong> Dual-Phase Yoga Therapy (DPYT) combines
        guided practice and self-practice to promote continuous healing for
        physical and mental conditions.
      </p>
      <strong>Benefits:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Tailored approach to individual needs</li>
        <li>Encourages self-awareness and responsibility</li>
        <li>Addresses chronic pain, stress, and mobility issues</li>
        <li>Improves overall quality of life</li>
      </ul>
      <strong>How to Practice:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Phase 1: Guided yoga sessions with a certified therapist</li>
        <li>
          Phase 2: Daily self-practice using prescribed asanas and pranayama
        </li>
        <li>Maintain a journal to track progress</li>
      </ul>
      <strong>Tips:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Follow therapist recommendations closely</li>
        <li>Adjust intensity gradually</li>
        <li>Combine with lifestyle modifications</li>
      </ul>
      <strong>Precautions:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Consult your healthcare provider for medical conditions</li>
        <li>Avoid overexertion during self-practice</li>
      </ul>
    </div>
  ),
  8: (
    <div className="space-y-4 text-sm text-muted-foreground">
      {/* <img
        src="/images/nadi-shodhana.jpg"
        alt="Nadi Shodhana"
        className="w-full rounded-lg mb-4"
      /> */}
      {/* <h3 className="font-semibold text-base">
        Nadi Shodhana: Balancing Your Energy Channels
      </h3> */}
      <p className="mb-3">
        <strong>Overview:</strong> Alternate nostril breathing balances the ida
        and pingala nadis, promoting physical, mental, and emotional
        equilibrium.
      </p>
      <strong>Benefits:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Reduces anxiety and stress</li>
        <li>Balances autonomic nervous system</li>
        <li>Enhances concentration and clarity</li>
        <li>Supports meditation practice</li>
      </ul>
      <strong>How to Practice:</strong>
      <ol className="list-decimal list-inside pb-3">
        <li>Sit comfortably with a straight spine</li>
        <li>Close the right nostril with thumb</li>
        <li>Inhale through left nostril</li>
        <li>Close left nostril with ring finger, exhale through right</li>
        <li>Inhale through right, exhale through left</li>
        <li>Repeat 5–10 cycles</li>
      </ol>
      <strong>Tips:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Keep the breath slow and even</li>
        <li>Practice 5–10 minutes daily</li>
        <li>Perform on an empty stomach</li>
      </ul>
      <strong>Precautions:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Avoid straining breath</li>
        <li>Pregnant women should consult a practitioner</li>
      </ul>
    </div>
  ),
  9: (
    <div className="space-y-4 text-sm text-muted-foreground">
      {/* <img
        src="/images/backbends-anatomy.jpg"
        alt="Backbends Anatomy"
        className="w-full rounded-lg mb-4"
      /> */}
      {/* <h3 className="font-semibold text-base">
        The Anatomy of Backbends: Safe Practice
      </h3> */}
      <p className="mb-3">
        <strong>Overview:</strong> Backbends improve spinal flexibility,
        posture, and energy flow. Understanding the anatomy ensures safety and
        effectiveness.
      </p>

      <strong>Benefits:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Increases spinal mobility and flexibility</li>
        <li>Strengthens back, shoulders, and core</li>
        <li>Opens chest and improves lung capacity</li>
        <li>Energizes the body and mind</li>
      </ul>
      <strong>How to Practice:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Warm up with Cat-Cow, Cobra, and Bridge poses</li>
        <li>Start with gentle backbends like Sphinx Pose</li>
        <li>Progress to Ustrasana, Wheel Pose under supervision</li>
        <li>Focus on breathing and alignment</li>
      </ul>
      <strong>Tips:</strong>
      <ul className="list-disc list-inside pb-3">
        <li>Engage core and leg muscles</li>
        <li>Avoid collapsing lower back</li>
        <li>Use props like blocks for support</li>
      </ul>
      <strong>Precautions:</strong>
      <ul className="list-disc list-inside">
        <li>Avoid deep backbends if you have lower back or neck injuries</li>
        <li>Always warm up properly before practice</li>
      </ul>
    </div>
  ),
};
const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [guestSubmitted, setGuestSubmitted] = useState(false);
  const { toast } = useToast();

  const handleGuestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGuestSubmitted(true);
    toast({
      title: "Document Uploaded!",
      description: "We will review your blog and contact you soon.",
      className: "bg-[#198754] text-white border-none",
    });
    setTimeout(() => setGuestSubmitted(false), 3000);
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="pt-20">
      <section className="section-padding gradient-green-light">
        <div className="container mx-auto">
          {/* Hero */}
          <AnimateOnScroll className="text-center mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
              Knowledge Hub
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Yoga <span className="text-gradient-green">Blogs</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore articles on asana, pranayama, anatomy, philosophy, and
              holistic wellness.
            </p>
            <div className="decorative-line mx-auto mt-6" />
          </AnimateOnScroll>

          {/* Search & Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "gradient-green text-primary-foreground" : "bg-background border border-border text-foreground hover:border-primary"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredPosts.map((post, i) => (
              <AnimateOnScroll
                key={post.id}
                animation="animate-fade-in"
                delay={i * 100}
              >
                <article className="bg-card rounded-2xl border border-border hover-lift h-full flex flex-col">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-t-2xl w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-green text-primary-foreground mb-3 w-fit">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {post.title}
                    </h3>
                    <div className="text-sm leading-relaxed mb-4 flex-1">
                      {expandedPost === post.id ? (
                        fullContent[post.id]
                      ) : (
                        <p>{post.excerpt}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                      <span>{post.author}</span>
                      <span>
                        {post.date} · {post.readTime}
                      </span>
                    </div>
                    {post.id in fullContent && (
                      <button
                        onClick={() =>
                          setExpandedPost(
                            expandedPost === post.id ? null : post.id,
                          )
                        }
                        className="mb-2 mt-5 text-sm inline-flex w-auto items-center gap-2 px-4  text-primary rounded-full text-md hover:bg-white hover:text-accent transition-all"
                      >
                        {expandedPost === post.id
                          ? "View Less"
                          : "READ ARTICLE →"}
                        {expandedPost === post.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-0 h-0" />
                        )}
                      </button>
                    )}
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">
              No articles found for this filter.
            </p>
          )}
        </div>
      </section>
      {/* Guest Blog Section */}
      <div
        id="guest"
        className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 mt-10 border-t-4 border-[#198754]"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-[#0f5132] mb-3">
            Become a Guest Author
          </h2>
          <p className="text-gray-600">
            Share your yogic journey, case studies, or philosophy with our
            community.
          </p>
        </div>

        {guestSubmitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <CheckCircle2 className="w-20 h-20 text-[#198754] mb-4" />
            <h3 className="text-2xl font-serif font-bold text-[#0f5132]">
              Thank You!
            </h3>
            <p className="text-gray-600">Your submission has been received.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleGuestSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0f5132]">
                  Your Name
                </label>
                <Input
                  required
                  placeholder="Jane Doe"
                  className="bg-white/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0f5132]">
                  Email Address
                </label>
                <Input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="bg-white/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#0f5132]">
                Short Bio
              </label>
              <Textarea
                placeholder="Tell us about your yoga background..."
                className="bg-white/50 min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#0f5132]">
                Upload Document (.doc, .pdf)
              </label>
              <div className="border-2 border-dashed border-[#198754]/30 rounded-xl p-8 text-center bg-white/30 hover:bg-[#198754]/5 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  required
                  accept=".doc,.docx,.pdf"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-10 h-10 text-[#198754] mx-auto mb-3" />
                <p className="text-sm text-[#0f5132] font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PDF or Word doc (Max 5MB)
                </p>
              </div>
            </div>
            <Button
              type="submit"
              // size="lg"
              className="w-full bg-primary hover:bg-[#198754] text-white rounded-xl text-lg"
            >
              Submit Article
            </Button>
          </form>
        )}
      </div>
    </main>
  );
};

export default Blogs;
