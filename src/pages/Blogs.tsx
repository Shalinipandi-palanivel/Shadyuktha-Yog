import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimatePresence } from "framer-motion";
import { Search, Filter, Send, CheckCircle2, ChevronRight } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { Helmet } from "react-helmet-async";
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
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/sunsalutation.jpg",
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
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/Pranayama-workshop.png",
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
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/yoga-anatomy.jpg",
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
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/limbs.png",
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
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/desk.jpg",
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
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/kids-yoga.jpg",
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
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/therapy-yoga.jpg",
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
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/nadi shodana.png",
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
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/Anatomy.jpg",
  },
];
const fullContent: Record<
  number,
  {
    overview: JSX.Element;
    sections: { title: string; image?: string; content: JSX.Element }[];
  }
> = {
  1: {
    overview: (
      <div className="space-y-4">
        <p>
          Surya Namaskar (Sun Salutation) is a sequence of twelve yoga postures
          performed in a flowing rhythm synchronized with breath.
        </p>

        <p>
          It energizes the body, improves circulation, strengthens muscles, and
          enhances mental clarity. Traditionally practiced at sunrise, it
          symbolizes gratitude to the sun — the source of life and vitality.
        </p>
      </div>
    ),

    sections: [
      {
        title: "Benefits",
        content: (
          <ul className="list-disc list-inside space-y-2">
            <li>Improves flexibility and posture</li>
            <li>Strengthens core, arms, and legs</li>
            <li>Boosts circulation and cardiovascular health</li>
            <li>Calms the mind and reduces stress</li>
            <li>Balances energy and activates chakras</li>
          </ul>
        ),
      },

      {
        title: "How to Perform",
        image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/surya-namaskar.jpg",
        content: (
          <ol className="list-decimal list-inside space-y-2">
            <li>Start in Tadasana (Mountain Pose)</li>
            <li>Inhale, raise arms overhead</li>
            <li>Exhale, forward fold</li>
            <li>Inhale, half lift</li>
            <li>Step back to plank</li>
            <li>Move into Upward Dog</li>
            <li>Transition to Downward Dog</li>
            <li>Repeat the sequence smoothly</li>
          </ol>
        ),
      },

      {
        title: "Practice Tips",
        content: (
          <ul className="list-disc list-inside space-y-2">
            <li>Synchronize breath with movement</li>
            <li>Move slowly to learn alignment</li>
            <li>Start with 4–6 rounds</li>
            <li>Focus on smooth transitions</li>
          </ul>
        ),
      },

      {
        title: "Precautions",
        content: (
          <ul className="list-disc list-inside space-y-2">
            <li>Avoid practice with severe wrist injury</li>
            <li>Pregnant practitioners should modify</li>
            <li>Warm up before multiple rounds</li>
            <li>Practice under guidance if beginner</li>
          </ul>
        ),
      },
    ],
  },

  2: {
    overview: (
      <div className="space-y-4 text-lg">
        <p>
          Ujjayi Pranayama, often called the <strong>Ocean Breath</strong>, is a
          powerful yogic breathing technique known for its calming sound and
          rhythmic flow. The breath is created by gently constricting the throat
          while inhaling and exhaling through the nose.
        </p>

        <p>
          This subtle constriction produces a soft ocean-like sound, which helps
          regulate the breath and deepen awareness. Ujjayi breath is widely used
          in yoga practices such as vinyasa and meditation because it supports
          focus, increases oxygen intake, and balances the nervous system.
        </p>

        <p>
          By synchronizing breath with movement, practitioners can develop a
          steady rhythm that enhances endurance, mindfulness, and internal
          awareness during yoga practice.
        </p>
      </div>
    ),

    sections: [
      {
        title: "Benefits",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Reduces stress and anxiety by activating the parasympathetic
              nervous system.
            </li>
            <li>
              Improves concentration and mental clarity during yoga and
              meditation.
            </li>
            <li>
              Enhances oxygenation of the body and improves respiratory
              efficiency.
            </li>
            <li>
              Builds internal heat that supports detoxification and endurance in
              physical practice.
            </li>
            <li>
              Helps stabilize the mind by creating a rhythmic breathing pattern.
            </li>
          </ul>
        ),
      },

      {
        title: "How to Practice",
        content: (
          <ol className="list-decimal list-inside space-y-3">
            <li>
              Sit comfortably in a cross-legged position with a straight spine.
            </li>
            <li>
              Relax the shoulders and place the hands gently on the knees.
            </li>
            <li>
              Inhale slowly through the nose while slightly constricting the
              back of the throat.
            </li>
            <li>
              Exhale slowly through the nose while maintaining the same throat
              constriction.
            </li>
            <li>Notice the soft ocean-like sound created by the breath.</li>
            <li>
              Continue breathing slowly and rhythmically for several minutes.
            </li>
          </ol>
        ),
      },

      {
        title: "Practice Tips",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>Start with 5–10 minutes of practice each day.</li>
            <li>Focus on maintaining a slow and steady breathing rhythm.</li>
            <li>
              Avoid tightening the throat excessively; the sound should remain
              soft and gentle.
            </li>
            <li>
              Combine Ujjayi breathing with meditation or yoga asana practice
              for deeper awareness.
            </li>
            <li>
              Keep your posture upright to allow the lungs to expand fully.
            </li>
          </ul>
        ),
      },

      {
        title: "Precautions",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>Do not force the breath; keep it natural and comfortable.</li>
            <li>
              People with severe respiratory conditions should consult a
              healthcare professional before practicing.
            </li>
            <li>
              If dizziness or discomfort occurs, stop and breathe normally.
            </li>
            <li>
              Beginners should practice slowly until familiar with the
              technique.
            </li>
          </ul>
        ),
      },
    ],
  },
  3: {
    overview: (
      <div className="space-y-4">
        <p>
          The pelvic floor is a complex network of muscles, ligaments, and
          connective tissues located at the base of the pelvis. These muscles
          act like a supportive hammock that holds and stabilizes important
          organs such as the bladder, intestines, and reproductive organs.
        </p>

        <p>
          In yoga practice, awareness of the pelvic floor is extremely important
          because it forms the foundation of core stability and postural
          alignment. When these muscles function optimally, they support healthy
          movement, improve balance, and enhance breathing efficiency.
        </p>

        <p>
          Yogic traditions often refer to the activation of the pelvic floor as
          <strong> Mula Bandha</strong>, or the root lock. Learning how to
          gently engage this area can help practitioners deepen their asana
          practice, prevent injuries, and develop greater body awareness.
        </p>
      </div>
    ),

    sections: [
      {
        title: "Benefits of Strengthening the Pelvic Floor",
        image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/bridge-pose.jpg",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Improves core strength and stability, supporting safer movement in
              yoga poses and daily activities.
            </li>
            <li>
              Enhances spinal alignment and reduces strain on the lower back by
              creating a stable base for the spine.
            </li>
            <li>
              Increases control and awareness during yoga postures, particularly
              balancing poses and inversions.
            </li>
            <li>
              Helps prevent urinary incontinence and supports healthy bladder
              control.
            </li>
            <li>
              Improves circulation in the pelvic region and promotes overall
              reproductive health.
            </li>
            <li>
              Supports breathing efficiency by coordinating pelvic floor
              engagement with diaphragmatic breathing.
            </li>
          </ul>
        ),
      },

      {
        title: "How to Strengthen the Pelvic Floor Through Yoga",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Practice <strong>Mula Bandha</strong> by gently contracting the
              pelvic floor muscles inward and upward while breathing steadily.
            </li>
            <li>
              Perform <strong>Bridge Pose (Setu Bandhasana)</strong> to activate
              the glutes and pelvic muscles while stabilizing the spine.
            </li>
            <li>
              Integrate <strong>Kegel-style contractions</strong> during slow
              yoga flows to build endurance in the pelvic floor muscles.
            </li>
            <li>
              Engage the pelvic floor during standing poses like
              <strong> Warrior I, Warrior II, and Chair Pose</strong> to improve
              balance and stability.
            </li>
            <li>
              Practice diaphragmatic breathing to coordinate pelvic floor
              engagement with inhalation and exhalation.
            </li>
          </ul>
        ),
      },

      {
        title: "Practice Tips",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Focus on subtle engagement rather than forceful contractions of
              the pelvic muscles.
            </li>
            <li>
              Maintain natural breathing while activating the pelvic floor to
              avoid unnecessary abdominal tension.
            </li>
            <li>
              Begin with short activation periods and gradually increase the
              duration as strength improves.
            </li>
            <li>
              Pay attention to posture and spinal alignment during yoga
              practice.
            </li>
            <li>
              Combine pelvic floor exercises with core strengthening poses for a
              balanced practice.
            </li>
          </ul>
        ),
      },

      {
        title: "Precautions",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Avoid excessive tightening of the pelvic floor muscles, as this
              can create tension and discomfort.
            </li>
            <li>
              If you experience pain, pressure, or unusual symptoms in the
              pelvic region, stop practice and consult a healthcare
              professional.
            </li>
            <li>
              Individuals recovering from childbirth or pelvic surgery should
              seek guidance from a physiotherapist.
            </li>
            <li>
              Progress gradually and prioritize mindful movement over intensity.
            </li>
          </ul>
        ),
      },
    ],
  },
  4: {
    overview: (
      <div className="space-y-4">
        <p>
          Ashtanga Yoga, described in the ancient yogic text the Yoga Sutras of
          Patanjali, represents a holistic path toward self-realization and
          inner harmony. The word “Ashtanga” means “eight limbs,” referring to
          eight interconnected principles that guide an individual toward
          physical health, mental clarity, ethical living, and spiritual
          awakening.
        </p>

        <p>
          While modern yoga often focuses mainly on physical postures, the
          original teachings emphasize that yoga is a complete lifestyle
          practice integrating ethics, discipline, breath awareness,
          concentration, and meditation.
        </p>

        <p>
          These eight limbs act as a progressive roadmap for personal growth.
          Practicing them consistently helps cultivate balance between body,
          mind, and spirit, ultimately leading to inner peace and expanded
          awareness.
        </p>
      </div>
    ),

    sections: [
      {
        title: "The Eight Limbs of Yoga",
        content: (
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Yama</strong> – Ethical disciplines that guide our
              interactions with others, including non-violence (Ahimsa),
              truthfulness (Satya), non-stealing (Asteya), moderation
              (Brahmacharya), and non-possessiveness (Aparigraha).
            </li>

            <li>
              <strong>Niyama</strong> – Personal observances such as cleanliness
              (Saucha), contentment (Santosha), self-discipline (Tapas),
              self-study (Svadhyaya), and surrender to a higher reality (Ishvara
              Pranidhana).
            </li>

            <li>
              <strong>Asana</strong> – Physical postures that strengthen the
              body, improve flexibility, and prepare the practitioner for
              meditation.
            </li>

            <li>
              <strong>Pranayama</strong> – Breath control techniques that
              regulate life force energy (prana) and calm the nervous system.
            </li>

            <li>
              <strong>Pratyahara</strong> – Withdrawal of the senses from
              external distractions, helping the mind turn inward.
            </li>

            <li>
              <strong>Dharana</strong> – Concentration or focused attention on a
              single object or point of awareness.
            </li>

            <li>
              <strong>Dhyana</strong> – Meditation, a state of steady and
              continuous awareness.
            </li>

            <li>
              <strong>Samadhi</strong> – The highest state of yogic realization,
              where the practitioner experiences unity and deep inner bliss.
            </li>
          </ol>
        ),
      },

      {
        title: "Benefits of Practicing the Eight Limbs",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Promotes holistic well-being by integrating physical, mental,
              emotional, and spiritual health.
            </li>
            <li>
              Encourages mindful living through ethical values and conscious
              decision-making.
            </li>
            <li>
              Reduces stress and mental clutter through breathing and meditation
              practices.
            </li>
            <li>Improves focus, discipline, and emotional resilience.</li>
            <li>Cultivates deeper self-awareness and connection to life.</li>
          </ul>
        ),
      },

      {
        title: "Practice Tips",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Begin by practicing simple ethical principles like kindness,
              honesty, and gratitude in daily life.
            </li>
            <li>
              Combine asana practice with pranayama and short meditation
              sessions.
            </li>
            <li>
              Approach yoga gradually and allow each limb to deepen naturally.
            </li>
            <li>
              Reflect on your actions and intentions to cultivate
              self-awareness.
            </li>
            <li>
              Remember that yoga is a lifelong journey rather than a
              destination.
            </li>
          </ul>
        ),
      },

      {
        title: "Precautions",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Avoid rushing through the limbs or attempting advanced practices
              without building a strong foundation.
            </li>
            <li>
              Breath and meditation practices should be approached gradually.
            </li>
            <li>
              Seek guidance from an experienced yoga teacher when exploring
              deeper yogic philosophy and meditation.
            </li>
            <li>Maintain patience and consistency for steady progress.</li>
          </ul>
        ),
      },
    ],
  },
  5: {
    overview: (
      <div className="space-y-4">
        <p>
          Modern work environments often require long hours of sitting in front
          of computers. While technology improves productivity, prolonged
          sitting can place significant strain on the body. Desk workers
          frequently experience stiffness in the neck, shoulders, and lower back
          due to limited movement and poor posture.
        </p>

        <p>
          Yoga provides simple yet powerful techniques to counteract these
          effects. Even short stretches performed during work breaks can restore
          circulation, release muscle tension, and improve spinal alignment.
        </p>

        <p>
          A short 10-minute yoga routine can be practiced at the desk or in a
          nearby open space. These gentle movements help the body recover from
          prolonged sitting while refreshing the mind and improving focus
          throughout the workday.
        </p>
      </div>
    ),

    sections: [
      {
        title: "Benefits of Desk Yoga",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Reduces tension in the neck, shoulders, and lower back caused by
              prolonged sitting.
            </li>
            <li>
              Improves blood circulation and prevents stiffness in muscles and
              joints.
            </li>
            <li>
              Enhances focus and productivity by refreshing the mind during work
              breaks.
            </li>
            <li>
              Corrects posture and reduces the risk of long-term spinal issues.
            </li>
            <li>
              Promotes overall well-being and helps manage workplace stress.
            </li>
          </ul>
        ),
      },

      {
        title: "Simple 10-Minute Desk Yoga Routine",
        image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/desk-job.png",
        content: (
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Seated Cat–Cow Stretch</strong> – Sit upright and
              alternate between arching and rounding your back to gently
              mobilize the spine.
            </li>
            <li>
              <strong>Neck Rolls</strong> – Slowly rotate your neck to release
              tension from screen use.
            </li>
            <li>
              <strong>Shoulder Shrugs and Rolls</strong> – Lift shoulders toward
              the ears and roll them backward to relax tight muscles.
            </li>
            <li>
              <strong>Seated Spinal Twist</strong> – Rotate the torso gently to
              stretch the spine and improve mobility.
            </li>
            <li>
              <strong>Standing Forward Bend</strong> – Stand and fold forward to
              stretch the back and hamstrings.
            </li>
            <li>
              <strong>Chair Pigeon Stretch</strong> – Place one ankle over the
              opposite knee to stretch the hips.
            </li>
            <li>
              <strong>Wrist and Finger Stretches</strong> – Extend and flex the
              wrists to reduce typing strain.
            </li>
            <li>
              <strong>Deep Breathing</strong> – Finish with slow breathing or a
              short pranayama practice.
            </li>
          </ol>
        ),
      },

      {
        title: "Practice Tips",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Practice this routine every 2–3 hours during long work sessions.
            </li>
            <li>Maintain upright posture with relaxed shoulders.</li>
            <li>
              Combine yoga breaks with short walks for better circulation.
            </li>
            <li>
              Stay hydrated and avoid sitting continuously for long periods.
            </li>
            <li>Focus on slow breathing during each movement.</li>
          </ul>
        ),
      },

      {
        title: "Precautions",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>Avoid forceful or sudden movements while stretching.</li>
            <li>Stop immediately if you feel sharp pain or discomfort.</li>
            <li>
              People with chronic neck or back injuries should consult a yoga
              instructor or healthcare professional first.
            </li>
            <li>Perform stretches slowly and mindfully.</li>
          </ul>
        ),
      },
    ],
  },
  6: {
    overview: (
      <div className="space-y-4">
        <p>
          In today’s fast-paced world, children are often exposed to academic
          pressure, digital distractions, and reduced physical activity. These
          factors can affect their ability to concentrate and maintain emotional
          balance.
        </p>

        <p>
          Yoga offers a gentle and engaging way for children to develop body
          awareness, coordination, and calm thinking. Through playful poses,
          breathing exercises, and simple mindfulness techniques, yoga helps
          children connect with their bodies and emotions.
        </p>

        <p>
          When practiced regularly, yoga supports healthy growth, improves
          flexibility, and builds emotional resilience while making movement fun
          and enjoyable for children.
        </p>
      </div>
    ),

    sections: [
      {
        title: "Benefits of Yoga for Children",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Improves concentration and attention span during learning
              activities.
            </li>
            <li>
              Enhances flexibility, balance, and coordination as the body grows.
            </li>
            <li>
              Helps children manage emotions like anxiety and restlessness.
            </li>
            <li>Encourages confidence and self-awareness through movement.</li>
            <li>Supports healthy posture and physical development.</li>
          </ul>
        ),
      },

      {
        title: "Simple Yoga Practices for Children",
        content: (
          <div className="space-y-8">
            {/* Tree Pose */}
            <div className="space-y-3">
              <div className="flex justify-center p-4">
                <img
                  src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/tree-pose.png"
                  loading="lazy"
                  alt="Tree Pose for Kids"
                  className="w-full max-w-md rounded-xl shadow-md"
                />
              </div>
              <p className="p-3">
                <strong>Tree Pose</strong> – Improves balance, focus, and body
                awareness while strengthening the legs.
              </p>
            </div>

            {/* Butterfly Pose */}
            <div className="space-y-3">
              <div className="flex justify-center p-4">
                <img
                  src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/Butterfly-aditya.png"
                  loading="lazy"
                  alt="Butterfly Pose for Kids"
                  className="w-full max-w-md rounded-xl shadow-md"
                />
              </div>
              <p className="p-3">
                <strong>Butterfly Pose</strong> – Gently stretches the hips and
                improves flexibility.
              </p>
            </div>

            {/* Cat Cow */}
            <div className="space-y-3">
              <div className="flex justify-center p-4">
                <img
                  src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/cat-cow.png"
                  loading="lazy"
                  alt="Cat Cow Stretch"
                  className="w-full max-w-md rounded-xl shadow-md"
                />
              </div>
              <p className="p-3">
                <strong>Cat–Cow Stretch</strong> – Keeps the spine flexible and
                encourages smooth breathing.
              </p>
            </div>

            {/* Warrior Pose */}
            <div className="space-y-3">
              <div className="flex justify-center p-4">
                <img
                  src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/warrior-kids.png"
                  loading="lazy"
                  alt="Warrior Pose"
                  className="w-full max-w-md rounded-xl shadow-md"
                />
              </div>
              <p className="p-4">
                <strong>Warrior Pose</strong> – Builds strength and confidence
                while improving stability.
              </p>
            </div>
            {/* Plank Pose */}
            <div className="space-y-3">
              <div className="flex justify-center p-4">
                <img
                  src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/plank-dhanvi.png"
                  loading="lazy"
                  alt="Plank Pose"
                  className="w-full max-w-md rounded-xl shadow-md"
                />
              </div>
              <p className="p-3">
                <strong>Plank Pose</strong> – A strengthening posture where the
                body forms a straight line from head to heels while supporting
                weight on the hands and toes. It helps build core strength,
                improve posture, and increase stability in the arms and
                shoulders.
              </p>
            </div>
            {/* Balloon Breathing */}
       <div className="space-y-3">
  <div className="flex justify-center p-4">
    <img
      src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/ballon-breathing.png"
      loading="lazy"
      alt="Balloon Breathing Yoga"
      className="w-full max-w-md rounded-xl shadow-md"
    />
  </div>
  <p className="p-3">
    <strong>Balloon Breathing</strong> – A fun breathing exercise where children
    imagine their belly as a balloon, slowly inflating while inhaling and
    gently deflating while exhaling. This helps improve focus, relaxation,
    and breathing awareness.
  </p>
</div>

            {/* Animal Walks */}
            <div className="space-y-3">
              <div className="flex justify-center p-4">
                <img
                  src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/animal-walk.png"
                  loading="lazy"
                  alt="Animal Walk Yoga"
                  className="w-full max-w-md rounded-xl shadow-md"
                />
              </div>
              <p className="p-3">
                <strong>Animal Walks</strong> – Playful movements like bear walk
                or frog jumps add energy and fun to yoga sessions.
              </p>
            </div>
          </div>
        ),
      },

      {
        title: "Practice Tips",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>Keep sessions short and playful for better engagement.</li>
            <li>Use storytelling or games to make yoga enjoyable.</li>
            <li>
              Encourage creativity instead of focusing on perfect alignment.
            </li>
            <li>Provide positive encouragement to build confidence.</li>
            <li>
              Gradually increase session duration as children become
              comfortable.
            </li>
          </ul>
        ),
      },

      {
        title: "Precautions",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>Never force children into poses.</li>
            <li>Ensure the practice space is safe and spacious.</li>
            <li>
              Supervise younger children during standing or balancing poses.
            </li>
            <li>Focus on gentle movements and natural breathing.</li>
          </ul>
        ),
      },
    ],
  },
  7: {
    overview: (
      <div className="space-y-4">
        <p>
          Dual-Phase Yoga Therapy (DPYT) is a structured therapeutic yoga
          approach that combines guided sessions with independent self-practice.
          This model encourages individuals to actively participate in their
          healing journey rather than relying solely on supervised therapy.
        </p>

        <p>
          In this method, practitioners first learn therapeutic techniques under
          the guidance of a qualified yoga therapist. These sessions help
          identify specific physical or mental conditions and establish a safe
          and personalized practice routine.
        </p>

        <p>
          The second phase focuses on consistent home practice. By integrating
          therapeutic yoga into daily life, individuals develop discipline, body
          awareness, and sustainable wellness habits that support long-term
          healing and balance.
        </p>
      </div>
    ),

    sections: [
      {
        title: "Benefits of Dual-Phase Yoga Therapy",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Provides a personalized therapeutic approach tailored to
              individual health conditions and physical capabilities.
            </li>
            <li>
              Encourages self-awareness by helping practitioners understand how
              their body responds to movement and breathing.
            </li>
            <li>
              Supports management of chronic conditions such as back pain,
              stress, anxiety, and mobility limitations.
            </li>
            <li>
              Strengthens both the body and mind through consistent practice.
            </li>
            <li>
              Promotes long-term healing by integrating yoga into daily life.
            </li>
            <li>
              Improves posture, breathing efficiency, emotional balance, and
              overall quality of life.
            </li>
          </ul>
        ),
      },

      {
        title: "How Dual-Phase Yoga Therapy Works",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Phase 1 – Guided Therapy:</strong> A certified yoga
              therapist evaluates the individual's health condition and designs
              a personalized sequence of asanas, pranayama, and relaxation
              techniques.
            </li>

            <li>
              <strong>Phase 2 – Self Practice:</strong> The practitioner
              performs the prescribed routine independently at home on a regular
              basis.
            </li>

            <li>
              Regular self-practice reinforces the therapeutic benefits learned
              during guided sessions.
            </li>

            <li>
              Maintaining a wellness journal can help track physical progress,
              symptoms, and overall well-being.
            </li>

            <li>
              Periodic review sessions with the therapist help refine the
              therapy plan and ensure safe progress.
            </li>
          </ul>
        ),
      },

      {
        title: "Practice Tips",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Follow the therapeutic sequence exactly as recommended by your
              yoga therapist.
            </li>
            <li>Begin slowly and focus on proper breathing and alignment.</li>
            <li>Maintain consistency even if the daily practice is short.</li>
            <li>
              Combine yoga therapy with healthy lifestyle habits such as good
              nutrition and adequate rest.
            </li>
            <li>
              Listen to your body and adjust postures if discomfort arises.
            </li>
          </ul>
        ),
      },

      {
        title: "Precautions",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Individuals with serious medical conditions should consult a
              healthcare professional before starting yoga therapy.
            </li>
            <li>
              Avoid practicing therapeutic poses without proper guidance if you
              have severe injuries or pain.
            </li>
            <li>
              Do not overexert during self-practice; therapeutic yoga should be
              gentle and progressive.
            </li>
            <li>
              Stop immediately if dizziness, sharp pain, or unusual discomfort
              occurs.
            </li>
            <li>
              Always maintain safe alignment and controlled breathing during
              practice.
            </li>
          </ul>
        ),
      },
    ],
  },
  8: {
    overview: (
      <div className="space-y-4">
        <p>
          Nadi Shodhana Pranayama, commonly known as Alternate Nostril
          Breathing, is a traditional yogic breathing technique designed to
          purify and balance the subtle energy channels of the body known as
          nadis.
        </p>

        <p>
          In yogic philosophy, the two main energy pathways — Ida and Pingala —
          represent the lunar and solar energies within the human system. When
          these energies are balanced, the mind becomes calm, focused, and
          emotionally stable.
        </p>

        <p>
          Through rhythmic breathing and gentle awareness, Nadi Shodhana
          harmonizes the nervous system, improves respiratory efficiency, and
          prepares the practitioner for meditation and deeper states of
          mindfulness.
        </p>
      </div>
    ),

    sections: [
      {
        title: "Benefits of Nadi Shodhana",
        image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/nadi-shodana.png",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Helps reduce stress, anxiety, and mental agitation by calming the
              nervous system.
            </li>
            <li>
              Balances the autonomic nervous system and promotes emotional
              stability.
            </li>
            <li>Improves concentration, memory, and mental clarity.</li>
            <li>Enhances oxygen supply to the brain and body.</li>
            <li>
              Prepares the mind for meditation and deeper mindfulness practices.
            </li>
            <li>
              Strengthens respiratory function and improves lung capacity.
            </li>
          </ul>
        ),
      },

      {
        title: "How to Practice Nadi Shodhana",
        content: (
          <ol className="list-decimal list-inside space-y-3">
            <li>
              Sit comfortably in a cross-legged position or on a chair with the
              spine upright and shoulders relaxed.
            </li>

            <li>
              Place your left hand on your knee and bring your right hand toward
              your nose in the Vishnu Mudra position.
            </li>

            <li>
              Close the right nostril gently with your thumb and inhale slowly
              through the left nostril.
            </li>

            <li>
              Close the left nostril using the ring finger, release the right
              nostril, and exhale through the right side.
            </li>

            <li>
              Inhale through the right nostril, then close it and exhale through
              the left nostril.
            </li>

            <li>
              This completes one cycle. Continue for 5–10 slow cycles while
              maintaining steady breathing and awareness.
            </li>
          </ol>
        ),
      },

      {
        title: "Practice Tips",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Practice in a quiet and well-ventilated space free from
              distractions.
            </li>
            <li>
              Keep the breath slow, smooth, and rhythmic rather than forceful.
            </li>
            <li>
              Begin with 5 minutes daily and gradually increase the duration.
            </li>
            <li>
              Early morning or before meditation is considered the ideal time
              for practice.
            </li>
            <li>
              Maintain awareness of the breath and allow the mind to settle
              naturally.
            </li>
          </ul>
        ),
      },

      {
        title: "Precautions",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Avoid forcing or holding the breath if you feel discomfort or
              dizziness.
            </li>
            <li>
              People with severe respiratory conditions should consult a
              healthcare professional before practicing.
            </li>
            <li>
              Pregnant women should practice pranayama only under professional
              guidance.
            </li>
            <li>
              Always perform the practice gently and stop if any unusual
              discomfort occurs.
            </li>
          </ul>
        ),
      },
    ],
  },
  9: {
    overview: (
      <div className="space-y-4">
        <p>
          Backbends are powerful yoga postures that open the front body,
          strengthen the spine, and stimulate energy throughout the entire
          system. These poses counteract the forward-bending posture many people
          develop from long hours of sitting, working on computers, or using
          mobile devices.
        </p>

        <p>
          Understanding the anatomy of backbends helps practitioners perform
          them safely and effectively. When practiced with awareness, backbends
          engage the muscles of the back, shoulders, legs, and core while
          maintaining stability and protection for the spine.
        </p>

        <p>
          Rather than forcing flexibility in the lower back, effective backbend
          practice distributes extension evenly across the spine while opening
          the chest and strengthening supporting muscles.
        </p>
      </div>
    ),

    sections: [
      {
        title: "Benefits of Backbend Practice",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Improves spinal mobility and flexibility by encouraging balanced
              extension across the spine.
            </li>

            <li>
              Strengthens the back muscles, shoulders, and core, supporting
              better posture and stability.
            </li>

            <li>
              Opens the chest and rib cage, allowing deeper breathing and
              improved lung capacity.
            </li>

            <li>
              Helps counteract the effects of prolonged sitting and slouched
              posture.
            </li>

            <li>
              Stimulates circulation and energizes the body, often improving
              mood and vitality.
            </li>
          </ul>
        ),
      },

      {
        title: "How to Practice Backbends Safely",
        image:"https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/Dhanurasana.jpg",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Begin with gentle warm-up poses such as Cat-Cow, Cobra Pose, and
              Bridge Pose to prepare the spine.
            </li>

            <li>
              Start with beginner backbends like Sphinx Pose or Baby Cobra
              before progressing deeper.
            </li>

            <li>
              Gradually explore intermediate poses such as Camel Pose
              (Ustrasana) or Bow Pose (Dhanurasana).
            </li>

            <li>
              Advanced poses like Wheel Pose (Urdhva Dhanurasana) should be
              practiced under proper guidance.
            </li>

            <li>
              Focus on breathing deeply and maintaining proper alignment rather
              than pushing into extreme depth.
            </li>
          </ul>
        ),
      },

      {
        title: "Practice Tips",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Engage the core and legs to support the lower back during backbend
              movements.
            </li>

            <li>
              Focus on lifting the chest and lengthening the spine rather than
              compressing the lumbar area.
            </li>

            <li>
              Use props like yoga blocks, bolsters, or straps for safer
              progression.
            </li>

            <li>
              Move slowly and mindfully when entering and exiting backbend
              poses.
            </li>

            <li>
              Balance backbend practice with forward folds or gentle twists
              afterward.
            </li>
          </ul>
        ),
      },

      {
        title: "Precautions",
        content: (
          <ul className="list-disc list-inside space-y-3">
            <li>
              Avoid deep backbends if you have severe lower back, neck, or
              spinal injuries.
            </li>

            <li>
              Always warm up the body before attempting deeper backbend
              postures.
            </li>

            <li>
              Do not force flexibility — allow the body to progress gradually
              over time.
            </li>

            <li>
              If you feel sharp pain or compression in the lower back, gently
              come out of the pose.
            </li>

            <li>
              Seek guidance from a qualified yoga instructor when learning
              advanced backbends.
            </li>
          </ul>
        ),
      },
    ],
  },
};

const Blogs = () => {
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [guestSubmitted, setGuestSubmitted] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [duplicateFilePopup, setDuplicateFilePopup] = useState(false);

  const { toast } = useToast();

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, files } = e.target as any;

    if (name === "document") {
      const selectedFile = files[0];
      if (selectedFile) {
        setFile(selectedFile);
        setError("");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleGuestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please upload a document");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("bio", formData.bio);
      formDataToSend.append("document", file);

      const response = await fetch(
        "https://backend.shadyukthayog.com/api/guestblog",
        {
          method: "POST",
          body: formDataToSend,
        },
      );

      const result = await response.json();

      if (response.ok) {
        setGuestSubmitted(true);
        setFormData({ name: "", email: "", bio: "" });
        setFile(null);
        toast({ description: "Guest blog submitted successfully!" });
      } else {
        if (result.message?.toLowerCase().includes("already uploaded")) {
          setDuplicateFilePopup(true);
        } else {
          setError(result.message || "Submission failed");
        }
      }
    } catch (err: any) {
      setError("Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle modal show/hide
  useEffect(() => {
    if (selectedPost) {
      const timer = setTimeout(() => setShowModalContent(true), 50);
      return () => clearTimeout(timer);
    } else {
      setShowModalContent(false);
    }
  }, [selectedPost]);

  // Filter blog posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
    <Helmet>
        <title>{selectedPost?.title || "Yoga Blogs | Shadyuktha Yog"}</title>
        <meta
          name="description"
          content={selectedPost?.excerpt || "Read yoga blogs about asanas, pranayama and wellness"}
        />
      </Helmet>
    <main className="pt-20">
      <section className="section-padding gradient-green-light">
        <div className="mx-auto">
          {/* Hero Section */}
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

          {/* Search + Categories */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search yoga articles..."
                className="w-full pl-12 pr-5 py-4 rounded-full border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-[#8a6f5a] text-white shadow"
                      : "bg-white border border-gray-200 hover:border-[#8a6f5a]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {filteredPosts.map((post, i) => (
              <AnimateOnScroll
                key={post.id}
                animation="animate-fade-in"
                delay={i * 100}
              >
                <article className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={post.image}
                      loading="lazy"
                      alt={post.title}
                      className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute bottom-4 left-4 bg-[#e7d7c8] text-gray-800 text-sm px-4 py-2 rounded-lg shadow">
                      {post.date}
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 text-xs px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="font-serif text-lg text-gray-800 leading-snug group-hover:text-primary transition">
                      {post.title}
                    </h3>
                  </div>

                  {fullContent[post.id] && (
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="mt-5 text-sm inline-flex items-center gap-2 px-4 py-2 text-primary rounded-full hover:bg-white hover:text-accent transition-all"
                    >
                      READ ARTICLE → <ChevronRight className="w-4 h-4" />
                    </button>
                  )}

                  {/* Modal */}
                  <AnimatePresence>
                    {selectedPost && showModalContent && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
                      >
                        <motion.div
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.95, opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="relative w-[100%] max-w-7xl max-h-[95vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-200"
                          style={{
                            backgroundImage: "url('/images/lotus-bg.png')",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center top",
                          }}
                        >
                          <motion.button
                            onClick={() => setSelectedPost(null)}
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            className="absolute top-6 right-6 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold z-50"
                          >
                            ✕
                          </motion.button>

                          <motion.div className="relative w-full">
                            <img
                              src={selectedPost.image}
                              alt={selectedPost.title}
                              loading="lazy"
                              className="w-full max-h-[80vh] object-contain rounded-t-3xl shadow-lg mx-auto"
                            />
                            <div className="absolute bottom-6 left-5 md:left-10 bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow">
                              <p className="text-sm text-gray-600">
                                {selectedPost.date}
                              </p>
                            </div>
                          </motion.div>

                          <div className="max-w-5xl mx-auto px-3 py-16 text-center">
                            <motion.h1
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 text-gray-800"
                            >
                              {selectedPost.title}
                            </motion.h1>

                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-20"
                            >
                              {fullContent[selectedPost.id]?.overview}
                            </motion.div>

                            {/* Sections */}
                            {fullContent[selectedPost.id]?.sections?.map(
                              (section, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{
                                    duration: 0.6,
                                    delay: 0.5 + i * 0.2,
                                  }}
                                  className="mb-20"
                                >
                                  {section.image ? (
                                    <div className="mb-16 flex justify-center">
                                      <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.7 }}
                                        className="max-w-4xl mx-auto"
                                      >
                                        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
                                          {section.title}
                                        </h2>
                                        <motion.img
                                          src={section.image}
                                          alt="Pose Illustration"
                                          loading="lazy"
                                          className="w-full h-auto object-cover rounded-xl shadow-lg hover:scale-105 transition mb-6"
                                        />
                                        <div className="text-center">
                                          <ul className="inline-block text-left list-disc space-y-2">
                                            {section.content}
                                          </ul>
                                        </div>
                                      </motion.div>
                                    </div>
                                  ) : (
                                    <div className="flex flex-col items-center text-lg text-gray-700 leading-relaxed space-y-4">
                                      <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
                                        {section.title}
                                      </h3>
                                      <div className="text-center">
                                        <ul className="inline-block text-left list-disc space-y-2">
                                          {section.content}
                                        </ul>
                                      </div>
                                    </div>
                                  )}
                                </motion.div>
                              ),
                            )}

                            {/* CTA */}
                            <motion.div
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.6, delay: 1 }}
                              className="mt-20 text-center bg-gradient-to-r max-w-5xl mx-auto from-primary/90 to-primary px-3 py-8 rounded-3xl shadow-xl"
                            >
                              <h3 className="text-3xl font-serif font-semibold mb-4 text-white">
                                Deepen Your Yoga Practice
                              </h3>
                              <p className="text-lg text-white max-w-4xl mb-8">
                                Struggling with alignment, breathing, or
                                consistency? Join personalized yoga sessions and
                                experience transformation through guided
                                practice.
                              </p>
                              <a
                                href={`https://wa.me/917200448918?text=${encodeURIComponent(
                                  "Hello! I want to know more about your yoga programs.",
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-10 py-4 text-lg font-medium bg-white text-primary rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition"
                              >
                                Get Guidance
                              </a>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
      <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 mt-10 border-t-4 border-[#198754]">
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
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0f5132]">
                  Your Name
                </label>
                <Input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="bg-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0f5132]">
                  Email Address
                </label>
                <Input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="sample@example.com"
                  className="bg-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#0f5132]">
                Short Bio
              </label>
              <Textarea
                required
                name="bio"
                value={formData.bio}
                onChange={handleChange}
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
                  name="document"
                  required
                  accept=".doc,.docx,.pdf"
                  onChange={handleChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {file ? (
                  <>
                    <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-green-700">
                      File Uploaded Successfully
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{file.name}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      Click to change file
                    </p>
                  </>
                ) : (
                  <>
                    <Upload className="w-10 h-10 text-[#198754] mx-auto mb-3" />
                    <p className="text-sm text-[#0f5132] font-medium">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF or Word doc (Max 5MB)
                    </p>
                  </>
                )}
              </div>
            </div>

            {duplicateFilePopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm text-center relative">
                  <h3 className="text-lg font-semibold mb-4 text-red-600">
                    File Name Already Uploaded
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Please rename your file and try uploading again.
                  </p>
                  <button
                    onClick={() => setDuplicateFilePopup(false)}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {error && <p className="text-red-600">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-[#198754] text-white rounded-xl text-lg"
            >
              {loading ? "Submitting..." : "Submit Article"}
            </Button>
          </form>
        )}
      </div>
    </main>
    </>
  );
};

export default Blogs;
