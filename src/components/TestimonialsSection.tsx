import { AnimateOnScroll } from "./AnimateOnScroll";
import { Star } from "lucide-react";
import sarkunan from "@/assets/videos/Sarkunan-review.mp4";
import deva from "@/assets/videos/Deva-Review.mp4";
import swathi from "@/assets/videos/swathi-review.mp4";

const testimonials = [
  {
    name: "Ambiga",
    role: "Online Yoga Student – Canada",
    text: "Practicing with Shadyuktha Yog from Canada has been an amazing experience. The sessions are calming, well-structured, and easy to follow even online.",
    rating: 5,
  },
  {
    name: "Ramya",
    role: "Wellness Yoga Student – Canada",
    text: "These yoga sessions helped me manage stress and reconnect with my body. Shalini's guidance is gentle, supportive, and deeply inspiring.",
    rating: 5,
  },
  {
    name: "Akshara",
    role: "Kids Yoga Student",
    text: "I love the yoga classes! The animal walks, breathing games, and fun poses make every session exciting and joyful.",
    rating: 5,
  },
  {
    name: "Puviyarasi",
    role: "Regular Yoga Practitioner",
    text: "The classes helped improve my flexibility and overall health. The teaching is clear, patient, and suitable for all levels.",
    rating: 5,
  },
  {
    name: "Rajesh",
    role: "Yoga Student – Canada",
    text: "Even from Canada, I feel personally guided during every class. The sessions are refreshing and have greatly improved my posture and energy levels.",
    rating: 5,
  },
  {
    name: "Sarojini",
    role: "Yoga Student – Chennai",
    text: "These yoga practices helped me stay active and relaxed. The sessions are gentle yet effective for maintaining health and mobility.",
    rating: 5,
  },
  {
    name: "Roopnith",
    role: "Yoga Practitioner – Pune",
    text: "The sessions are well paced and deeply rejuvenating. I have gained better balance, flexibility, and peace of mind through regular practice.",
    rating: 5,
  },
];

const videos = [
  { title: "Swathi's Healing Journey", src: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/videos/swathi-review.mp4"},
  { title: "Deva's Healing Journey", src: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/videos/Deva-review.mp4"},
  { title: "Sarkunan's Wellness Journey", src: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/videos/Sarkunan-review.mp4" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-fluid mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            What Our <span className="text-gradient-green">Students Say</span>
          </h2>
        </AnimateOnScroll>

        {/* Horizontal marquee of testimonials */}
        <div className="overflow-hidden">
          <div
            className="animate-marquee-left flex gap-6"
            style={{ width: "200%" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 bg-secondary rounded-2xl py-6 px-3 border border-border"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yoga-gold text-yoga-gold"
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-serif font-bold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video testimonials placeholder */}
        <AnimateOnScroll className="mt-14">
          <h3 className="font-serif text-2xl font-bold text-center text-foreground mb-8">
            Video Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div
                key={i}
                className="bg-secondary rounded-2xl overflow-hidden border border-border"
              >
                <div className="flex justify-center p-4">
                  <video
                    controls
                    className="w-[300px] h-[350px] object-cover rounded-xl shadow-md"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>

                <div className="p-4 text-center">
                  <p className="font-serif font-semibold text-foreground">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
