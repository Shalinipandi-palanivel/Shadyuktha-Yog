import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import Slider from 'react-slick';
import { Star } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  { name: 'Priya Sharma', role: 'YCB Level 2 Graduate', text: "Shadyuktha Yog transformed my understanding of yoga. The structured curriculum and Shalini's guidance made the YCB certification journey deeply rewarding. I now confidently teach yoga in my community.", rating: 5, image: '/images/testi-priya.jpg' },
  { name: 'Rajesh Kumar', role: 'Therapeutic Yoga Student', text: "After years of chronic back pain, the DPYT approach helped me manage my condition naturally. The personalized attention from the therapist was unmatched. I feel a decade younger.", rating: 5, image: '/images/testi-rajesh.jpg' },
  { name: 'Ananya Patel', role: 'Ashtanga Practitioner', text: "The Ashtanga Primary Series sessions are intense yet mindful. I've gained incredible strength and mental clarity in just 3 months. The alignment corrections are spot on.", rating: 5, image: '/images/testi-ananya.jpg' },
  // ...add other testimonials with image paths
];

const TestimonialsPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <main className="pt-20">
      <section className="section-padding gradient-green-light">
        <div className="container mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Testimonials</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Stories of <span className="text-gradient-green">Transformation</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Hear from our students and practitioners about their journey with Shadyuktha Yog.
            </p>
          </AnimateOnScroll>

          {/* Carousel Testimonials */}
         <Slider {...sliderSettings} className="mb-16">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-6  mb-6  ounded-2xl p-8 hover-lift max-w-3xl mx-auto">
                {/* Left Side Image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img src={t.image} alt={t.name} className="rounded-2xl w-full h-full object-cover" />
                </div>

                {/* Right Side Content */}
                <div className="w-full md:w-2/3 flex flex-col pl-6">
                  <div className="flex gap-2 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yoga-gold text-yoga-gold" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 italic text-lg">"{t.text}"</p>
                  <div className="border-t  pt-4">
                    <p className="font-serif font-bold text-foreground text-xl">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Video Testimonials */}
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-8">Video Testimonials</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Priya's YCB Certification Journey",
              "Rajesh's Back Pain Recovery",
              "Corporate Wellness Success Story",
              "Kids Yoga: A Parent's Perspective",
              "From IT to Yoga: Shalini's Story",
              "Therapeutic Yoga Healing"
            ].map((title, i) => (
              <AnimateOnScroll key={i} animation="animate-scale-in" delay={i * 100}>
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover-lift">
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center mx-auto mb-3 animate-float">
                        <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                      <p className="text-sm text-muted-foreground">Video coming soon</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-serif font-semibold text-foreground">{title}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
