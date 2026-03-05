import { useParams, Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import axios from "axios";
import level1 from "@/assets/YCB-Level-1.jpg";
import level2 from "@/assets/YCB-_Level-2.jpg";
import level3 from "@/assets/YCB_Level-3.jpg";
import advanced from "@/assets/advancced.jpg";
import beginner from "@/assets/beginner-yoga.jpg";
import intermediatee from "@/assets/intermediate-yoga.jpg";
import {
  ArrowLeft,
  Clock,
  Users,
  Monitor,
  IndianRupee,
  CheckCircle,
  Calendar,
  Star,
  Award,
  Heart,
  Brain,
  Bone,
  Activity,
  Baby,
  Stethoscope,
  BookOpen,
  Target,
  Shield,
  Flame,
  Leaf,
  Sun,
  Zap,
  ShieldCheck,
} from "lucide-react";
import ycbImg from "@/assets/ycb-certification.jpg";
import therapeuticImg from "@/assets/therapeutic-yoga.jpg";
import ashtangaImg from "@/assets/ashtanga-yoga.jpg";
import pranayamaImg from "@/assets/pranayama.jpg";
import kidsImg from "@/assets/kids-yoga.jpg";
import prenatalImg from "@/assets/prenatal-yoga.jpg";
import mindbody from "@/assets/mindbody.png";

import meditationVideo from "@/assets/videos/meditation.mp4";
import kidsVideo from "@/assets/videos/kids-yoga.mp4";
import prenatalVideo from "@/assets/videos/prenatal-yoga.mp4";
import ycb1 from "@/assets/videos/YCB1.mp4";
import ycb2 from "@/assets/videos/YCB2.mp4";
import ycb3 from "@/assets/videos/YCB3.mp4";
import { useState } from "react";
import { Description } from "@radix-ui/react-toast";

interface SampleCertificate {
  title: string;
  description: string;
  // validity: string;
  highlights: string[];
  preview: {
    label: string;
    image: string;
  };
}

interface DownloadSyllabus {
  title: string;
  description: string;
  file: {
    label: string;
    type: "PDF" | "DOC" | "ZIP";
    link: string;
  };
}

// ── Shared types ──
interface ProgramBase {
  title: string;
  tagline: string;
  image: string;
  video?: string;
  fee: string;
  duration: string;
  mode: string;
  frequency: string;
  timing: string[];
  description: string;
  highlights: {
    title: string;
    description: string;
  }[];
  certification: {
    title: string;
    description: string;
  };
  benefits: string[];
  inclusions: string[];
  whoShouldAttend: string | [];
  faqs: { q: string; a: string }[];
  examination: {
    introTagline: string;
    title: string;
    description: string;

    exams: {
      title: string;
      items: {
        label: string;
        value: string;
      }[];
    }[];

    certificationNote: string;

    totalMarks: string;

    theoryTable: {
      title: string;
      rows: {
        unit: string;
        name: string;
        marks: string;
      }[];
      total: string;
    };

    practicalTable: {
      title: string;
      rows: {
        unit: string;
        name: string;
        marks: string;
      }[];
      total: string;
    };

    passingCriteria: string;
  };
  reExamination: {
    title: string;
    scenarios: {
      condition: string;
      points: string[];
    }[];
  };
  downloadSyllabus?: DownloadSyllabus;
  sampleCertificate?: SampleCertificate;

  /* ✅ NEW: Fee Structure */
  feeStructure: {
    title: string;
    note: string;
    table: {
      headers: string[];
      rows: {
        category: string;
        courseFee: string;
        examFee: string;
      }[];
    };
  };
}

interface MindBodyExtra {
  programFormats: {
    type: string;
    focus: string;
    includes: string[];
    fee: {
      group?: string;
      individual?: string;
    };
    note?: string;
  }[];
  safeSpacePolicy: string[];
}

// ── Program Data ──
const programData: Record<
  string,
  ProgramBase & { layout: string; extra?: Record<string, unknown> }
> = {
  "ycb-level-1": {
    layout: "ycb",
    title: "YCB Level 1 – Yoga Protocol Instructor",
    tagline: "Align • Awaken • Ascend",
    image: ycbImg,
    video: ycb1,
    fee: "₹10,999",
    duration: "2 Months",
    mode: "Online Live Classes",
    frequency: "Monday – Friday",
    timing: [
      "Monday to Friday",
      "5:00 - 6:00 AM IST",
      "6:00 – 7:00 AM IST",
      "7:15 – 8:15 AM IST",
      "10:00 – 11:00 AM IST",
      "6:00 – 7:00 PM IST",
      "7:00 – 8:00 PM IST",
      "Theory: Every Friday 8:00 – 9:00 PM IST",
    ],
    description:
      "Ministry of AYUSH has launched this course to provide structured knowledge of Yoga basics to beginners. On successful completion, students are awarded the title of Yoga Protocol Instructor. Certified instructors are trained to teach foundational Yoga practices, conduct sessions based on the Common Yoga Protocol (CYP), and promote disease prevention and general wellness.",
    highlights: [
      {
        title: "Program Foundation (2 Months)",
        description:
          "A structured curriculum designed to build strong theoretical foundations and disciplined practical expertise in Yoga.",
      },
      {
        title: "Introduction to Yoga",
        description:
          "Understanding the origin, evolution, and purpose of Yoga as a holistic science.",
      },
      {
        title: "Scriptural Foundations",
        description:
          "Study of Hatha Yoga Pradipika (HYP), Yoga Sutra, and Bhagavad Gita chanting to connect philosophy with practice.",
      },
      {
        title: "Core Yogic Concepts",
        description:
          "In-depth understanding of Tri-Guna, Tri-Sharira, and Pancha Kosha for a complete view of human existence.",
      },
      {
        title: "Anatomy & Physiology",
        description:
          "Foundational knowledge of human body structure and function relevant to Yoga practice.",
      },
      {
        title: "Surya Namaskar with Mantra",
        description:
          "Traditional practice integrating movement, breath, and mantra awareness.",
      },
      {
        title: "Pranayama, Mudra & Bandha",
        description:
          "Systematic training in breath regulation and subtle energy practices.",
      },
      {
        title: "Breathwork & Yoga Nidra",
        description:
          "Preparatory techniques to enhance lung capacity, deep relaxation, and mental clarity.",
      },
      {
        title: "Kriya Practical",
        description:
          "Hands-on training in Jala Neti, Vaman Dhauti, and Trataka for internal purification.",
      },
      {
        title: "Asana Abhyas (YCB Level 1)",
        description:
          "Practice aligned with Yoga Certification Board Level 1 syllabus requirements.",
      },
      {
        title: "Traditional Hatha Yoga Practice",
        description:
          "Asana Abhyas inspired by classical teachings of the Bihar School tradition.",
      },
      {
        title: "Disease Prevention Approach",
        description:
          "Management of 10 common diseases using the DPYT Model with a preventive and supportive focus.",
      },
    ],
    certification: {
      title: "Government Certification – Yoga Certification Board",
      description:
        "The Yoga Certification Board (YCB), functioning under the Ministry of AYUSH, conducts the Level 1 examinations every month.To ensure a smooth and guided examination process, we provide complete support and coordination assistance to our students. Each month, we share the upcoming examination schedules. Once a student feels fully prepared, they may select their preferred exam date, and we assist them with the registration and booking formalities to successfully complete the process.",
    },
    benefits: [
      "Assist and collaborate with certified yoga teachers, wellness centers, and community programs",
      "Conduct Common Yoga Protocol (CYP) sessions in schools, parks, RWAs, and public platforms",
      "Support preventive health and lifestyle wellness initiatives at the grassroots level",
      "Deliver beginner-level yoga and wellness sessions",
      "Build a strong foundation for advanced yoga education and professional growth",
    ],
    inclusions: [
      "Structured & Immersive Learning Experience – A thoughtfully curated program where excellence is not optional, but the standard.",
      "Interactive Theory Sessions – Discussion-led classes that deepen understanding of yogic philosophy.",
      "5 Days/Week Live Guided Practice (2 Months) – Mentor-led sessions focusing on alignment, breath, and precision.",
      "Exclusive Weekly Q&A Forums – Dedicated spaces for clarity and advanced insights.",
      "Curated Study Resources (YCB Level 1) – Materials aligned precisely with YCB standards.",
      "Strategic Examination Preparation – Focused mentoring for theory and practical assessments.",
    ],
    examination: {
      introTagline: "Evaluate • Demonstrate • Qualify",
      title: "Examination Structure",
      description:
        "Both examinations are conducted online on the same day (usually Saturday or Sunday). Students must qualify in both theory and practical components to receive certification.",

      exams: [
        {
          title: "MCQ-Based Theory Examination",
          items: [
            { label: "Format", value: "Multiple Choice Questions" },
            { label: "Passing Criteria", value: "Minimum 70%" },
          ],
        },
        {
          title: "Demonstration (Practical) Examination",
          items: [
            {
              label: "Format",
              value: "Practical demonstration of yoga techniques",
            },
            { label: "Passing Criteria", value: "Minimum 70%" },
          ],
        },
      ],

      certificationNote:
        "Upon successful completion of both examinations, students are awarded the Level 1 Certificate with the designation “Yoga Protocol Instructor”, downloadable from the official government dashboard.",

      totalMarks: "200 (Theory: 60 + Practical: 140)",

      theoryTable: {
        title: "Theory",
        rows: [
          {
            unit: "1",
            name: "Introduction to Yoga and Y ogic Practices ",
            marks: "20",
          },
          {
            unit: "1",
            name: "Introduction to Yoga Texts ",
            marks: "20",
          },
          {
            unit: "1",
            name: "Yoga for wellness ",
            marks: "20",
          },
        ],
        total: "60",
      },

      practicalTable: {
        title: "Practical",
        rows: [
          { unit: "1", name: "Demonstration Skills", marks: "80" },
          { unit: "2", name: "Teaching Skill", marks: "40" },
          { unit: "3", name: "Application of Knowledge", marks: "10" },
          { unit: "4", name: "Field / Community Experience", marks: "10" },
        ],
        total: "140",
      },

      passingCriteria:
        "Students must secure a minimum of 70% in both Theory and Practical examinations to attain certification.",
    },
    reExamination: {
      title: "Re-Examination Process",
      scenarios: [
        {
          condition: "If Theory is Failed but Practical is Passed",
          points: [
            "One free re-attempt for Theory examination only",
            "Re-attempt must be taken within 3 months from the original examination date",
          ],
        },
        {
          condition: "If Practical is Failed",
          points: [
            "Candidate must reappear for both Theory and Practical examinations",
            "Full examination fee of ₹3,450/- is payable again",
            "No time limit for re-attempt",
          ],
        },
      ],
    },

    feeStructure: {
      title: "Fee Structure",
      note: "The examination fee is determined by the Yoga Certification Board under the Ministry of AYUSH and is subject to change as per official guidelines.",

      table: {
        headers: ["Category", "Course Fee", "YCB Examination Fee"],
        rows: [
          {
            category: "Indian Residents",
            courseFee: "₹10,999 INR",
            examFee: "₹3,450 INR",
          },
          {
            category: "Foreign Residents",
            courseFee: "165 USD (or as per prevailing exchange rate)",
            examFee: "90 USD",
          },
        ],
      },
    },
    whoShouldAttend:
      "Beginners, aspiring yoga instructors, and anyone seeking a government-recognized yoga teaching certification. Equivalent to 200 Hours of structured learning.",
    faqs: [
      {
        q: "What is the Yoga Protocol Instructor course?",
        a: "The Yoga Protocol Instructor course (equivalent to 200 hours of structured learning) is a foundational professional yoga education program designed to prepare beginners to teach Yoga safely and effectively. It integrates practical training, theory, anatomy, physiology, teaching methodology, and yogic philosophy as per the Yoga Certification Board (YCB) Level 1 curriculum, enabling graduates to teach the Common Yoga Protocol (CYP) and promote holistic health and wellness.",
      },
      {
        q: "Who can enroll in this course?",
        a: "Anyone with an interest in Yoga can enroll, including beginners, fitness enthusiasts, teachers, and healthcare professionals. No prior Yoga experience is required.",
      },
      {
        q: "What does “equivalent to 200 hours of learning” mean?",
        a: "The 200-hour equivalence represents the overall learning workload rather than fixed classroom hours. At Shadyuktha Yog, this includes two months of structured live practical training and flexible theory learning that students may attend until they feel fully prepared for the examination.",
      },
      {
        q: "Is prior yoga experience required?",
        a: "No. This is a foundational course specifically designed for beginners.",
      },
      {
        q: "Is the certification government-recognized?",
        a: "Yes. The certification is issued by the Yoga Certification Board (YCB) under the Ministry of AYUSH, Government of India.",
      },
      {
        q: "What is the Yoga Certification Board (YCB)?",
        a: "The Yoga Certification Board (YCB) is a statutory body under the Ministry of AYUSH, Government of India, responsible for standardizing Yoga education and issuing government-recognized certifications for Yoga professionals.",
      },
      {
        q: "What is the mode of teaching?",
        a: "The course is fully online and conducted via live sessions. It includes live practical classes five days a week, weekly theory sessions, interactive discussions, and real-time corrections under qualified instructors.",
      },
      {
        q: "Do I need to be in India to enroll?",
        a: "No. The course is globally accessible. Students from any country can enroll and participate online, and the examination process also supports international candidates.",
      },
      {
        q: "Can I access recordings if I miss a class?",
        a: "No. Live participation is mandatory. Yoga is a practice-based discipline requiring real-time corrections, interaction, and disciplined attendance.",
      },
      {
        q: "What is the examination fee?",
        a: "The YCB examination fee is ₹3,450 INR for Indian residents and is paid separately through the official YCB or authorized PrCB portal.",
      },
      {
        q: "Is the YCB certificate valid for a lifetime?",
        a: "No. The certification is valid for five years and can be renewed through an online viva examination and renewal fee.",
      },
      {
        q: "When can I appear for the examination?",
        a: "YCB Level 1 examinations are conducted monthly. There is no obligation to appear immediately after completing the course. Students may choose an exam date when they feel fully prepared.",
      },
      {
        q: "Can I continue attending classes after the 2-month training period?",
        a: "Practical training is limited to two months. However, students may continue attending live theory sessions until they clear the examination and even afterward for continued learning.",
      },
      {
        q: "Can I teach professionally after completing this course?",
        a: "Yes. After successfully clearing the examination, you can teach Yoga professionally, conduct Common Yoga Protocol (CYP) sessions, and work in schools, community programs, wellness centers, or online platforms.",
      },
      {
        q: "How credible is this certification?",
        a: "The certification is officially recognized by the Yoga Certification Board (YCB) under the Ministry of AYUSH, making it a nationally accredited and professionally credible qualification.",
      },
      {
        q: "Is this course affiliated with Yoga Alliance?",
        a: "No. This course follows YCB standards under the Ministry of AYUSH and is separate from Yoga Alliance, which operates under a different international accreditation framework.",
      },
      {
        q: "Who will be teaching this course?",
        a: "The course is led by experienced and certified Yoga professionals trained in Traditional Hatha Yoga, Ashtanga Yoga, yogic philosophy, anatomy, and preventive health practices, approved to deliver the YCB-compliant curriculum.",
      },
      {
        q: "Will study materials be provided?",
        a: "Yes. Students receive structured study materials, including practical manuals, theory notes aligned with the YCB syllabus, assignments, and revision resources to support learning and exam preparation.",
      },
      {
        q: "Is Shadyuktha Yog a government body?",
        a: "No. Shadyuktha Yog is a private yoga education institute that delivers training aligned with the YCB curriculum. Certification is issued by YCB through authorized examination bodies.",
      },
      {
        q: "How does government affiliation work for YCB examinations?",
        a: "YCB authorizes Professional Certification Bodies (PrCBs) to conduct examinations. Shadyuktha Yog collaborates with the Indian Yoga Sports Federation (IYSF), an authorized PrCB, for official examinations.",
      },
      {
        q: "Is Level 1 mandatory before Level 2 or Level 3?",
        a: "No. Levels are not strictly sequential. Students may enroll in Level 1, 2, or 3 independently based on experience, learning goals, and readiness, as permitted by YCB guidelines.",
      },
      {
        q: "Will I receive a certificate if I don’t pass the exam?",
        a: "No. Certification is granted only after successfully passing both theory and practical examinations conducted by YCB.",
      },
      {
        q: "Do you provide placement or career support?",
        a: "No. While the course equips you with professional skills and certification, placement or career guidance is not included.",
      },
      {
        q: "Can this certification help me get jobs in schools or wellness centers?",
        a: "Yes. A YCB-certified Yoga Protocol Instructor is eligible to teach in schools, gyms, wellness centers, community programs, and online platforms.",
      },
      {
        q: "Can I attend only theory or only practical sessions?",
        a: "No. The course is an integrated program, and active participation in both theory and practical sessions is mandatory.",
      },
      {
        q: "Can international students take the YCB exam?",
        a: "Yes. International students can appear for the YCB examination online through authorized examination bodies.",
      },
    ],
    downloadSyllabus: {
      title: "Download Syllabus",
      description:
        "Access the official Yoga Certification Board (YCB) Level 1 syllabus outlining foundational practices, theory, and assessment structure.",
      file: {
        label: "Download YCB Level 1 Syllabus",
        type: "PDF",
        link: "https://yogacertificationboard.nic.in/wp-content/themes/ycb/pdf/Syllabus_Level_1.pdf",
      },
    },
    sampleCertificate: {
      title: "Sample Certificate",
      description:
        "This is a representative sample of the Yoga Protocol Instructor (Level 1) certificate issued by the Yoga Certification Board (YCB) upon successful completion of the examination.",
      // validity: "Valid for 5 years (Renewable)",
      highlights: [
        "Government-recognized certification",
        "Issued by Yoga Certification Board (YCB)",
        "Eligible to conduct foundational yoga sessions",
      ],
      preview: {
        label: "View Level 1 Sample Certificate",
        image: level1,
      },
    },
    extra: {
      examStructure: {
        theory: "MCQ – Min 70%",
        practical: "Demonstration – Min 70%",
        totalMarks: "200 (Theory 60 + Practical 140)",
      },
      feeTable: {
        indian: "₹10,999",
        foreign: "165 USD",
        examIndian: "₹3,450",
        examForeign: "90 USD",
      },
      hours: "200",
      careers: [
        "Collaborate with schools – Teach children Yoga for health and focus",
        "Establish yoga centers – Serve both adults and children, promoting community wellness",
        "Provide personal coaching - Online or offline Yoga training tailored to individuals",
        "Conduct community sessions – Host Yoga in parks, residential societies, and Resident Welfare Associations (RWAs) to reach a wider audience",
      ],
    },
  },
  "ycb-level-2": {
    layout: "ycb",
    title: "YCB Level 2 – Yoga Wellness Instructor",
    tagline: "Align • Awaken • Ascend",
    image: ycbImg,
    video: ycb2,
    fee: "₹12,999",
    duration: "2 Months",
    mode: "Online Live Classes",
    frequency: "Monday – Friday",
    timing: [
      "Monday to Friday",
      "5:00 - 6:00 AM IST",
      "6:00 – 7:00 AM IST",
      "7:15 – 8:15 AM IST",
      "10:00 – 11:00 AM IST",
      "6:00 – 7:00 PM IST",
      "7:00 – 8:00 PM IST",
      "Theory: Every Friday 8:00 – 9:00 PM IST",
    ],
    description:
      "The Ministry of AYUSH has introduced this course to provide structured and in-depth knowledge of Yoga for learners at an intermediate level. Upon successful completion, participants are awarded the title of Yoga Wellness Instructor (YWI). Certified instructors are equipped to teach foundational and intermediate Yoga practices, conduct sessions following the Common Yoga Wellness Protocol, and promote holistic wellness.",
    highlights: [
      {
        title: "Highlights of Study",
        description:
          "This 2-month structured program is thoughtfully designed to build strong theoretical foundations and disciplined practical expertise in Yoga.",
      },
      {
        title: "Introduction to Yoga",
        description:
          "Understanding the origin, evolution, and purpose of Yoga as a holistic science.",
      },
      {
        title: "Scriptural Foundations",
        description:
          "Study of Hatha Yoga Pradipika (HYP), Yoga Sutra, and Bhagavad Gita chanting to connect yogic philosophy with practical application.",
      },
      {
        title: "Core Yogic Concepts",
        description:
          "In-depth understanding of Tri-Guna, Tri-Sharira, and Pancha Kosha to gain a complete view of human existence.",
      },
      {
        title: "Anatomy & Physiology",
        description:
          "Introduction to basic structural and functional knowledge of the human body relevant to Yoga practice.",
      },
      {
        title: "Surya Namaskar with Mantra",
        description:
          "Traditional practice integrating movement, breath, and mantra awareness for holistic alignment.",
      },
      {
        title: "Pranayama, Mudra & Bandha",
        description:
          "Systematic training in breath control techniques and subtle energy practices.",
      },
      {
        title: "Preparatory Breathwork & Yoga Nidra",
        description:
          "Techniques focused on enhancing lung capacity, deep relaxation, and mental clarity.",
      },
      {
        title: "Kriya Practical Training",
        description:
          "Hands-on practice of Jala Neti, Vaman Dhauti, and Trataka for internal cleansing and purification.",
      },
      {
        title: "Asana Abhyas (YCB Syllabus)",
        description:
          "Asana practice aligned with Yoga Certification Board Level 2 requirements.",
      },
      {
        title: "Traditional Hatha Yoga Practice",
        description:
          "Asana Abhyas inspired by classical teachings of the Bihar School tradition.",
      },
      {
        title: "Disease Prevention Approach",
        description:
          "Application of the DPYT Model for proper management of 10 common diseases with a preventive and supportive care focus.",
      },
      {
        title: "Outcome & Competency",
        description:
          "This integrated curriculum ensures students develop knowledge, discipline, confidence, and practical teaching competence aligned with YCB standards.",
      },
    ],
    certification: {
      title: "Government Certification – Yoga Certification Board",
      description:
        "The Yoga Certification Board (YCB), functioning under the Ministry of AYUSH, conducts the Level 2 examinations every month.To ensure a smooth and guided examination process, we provide complete support and coordination assistance to our students. Each month, we share the upcoming examination schedules. Once a student feels fully prepared, they may select their preferred exam date, and we assist them with the registration and booking formalities to successfully complete the process.",
    },
    benefits: [
      "Independently conduct structured yoga and wellness sessions for individuals and groups",
      "Work with wellness centers, gyms, schools, and corporate wellness programs",
      "Design yoga-based preventive health and lifestyle improvement sessions",
      "Offer personalized yoga guidance for common lifestyle-related conditions (non-clinical)",
      "Lead community health initiatives, workshops, and wellness retreats",
    ],
    inclusions: [
      "Interactive Discussion-Led Theory Sessions",
      "5 Days/Week Live Guided Practice",
      "Exclusive Weekly Q&A Forums",
      "Curated Study Resources (YCB Level 2)",
      "Strategic Examination Preparation",
      "Demonstration Rehearsals",
      "Personalized Mentorship Guidance",
      "Performance Review & Feedback",
      "Professional Teaching Readiness Training",
      "Seamless Certification Support",
    ],
    examination: {
      introTagline: "Assess • Apply • Advance",
      title: "Examination Structure",
      description:
        "Level 2 examinations are conducted online on the same day (usually Saturday or Sunday). This level evaluates advanced theoretical understanding, teaching competence, and practical application in real-world contexts. Students must qualify in both theory and practical components to receive certification.",

      exams: [
        {
          title: "Advanced Theory Examination (MCQ + Case-Based)",
          items: [
            {
              label: "Format",
              value: "MCQ-based and application-oriented questions",
            },
            {
              label: "Focus",
              value:
                "Advanced yogic concepts, therapeutic application, and teaching methodology",
            },
            { label: "Passing Criteria", value: "Minimum 70%" },
          ],
        },
        {
          title: "Advanced Practical & Teaching Demonstration",
          items: [
            {
              label: "Format",
              value:
                "Practical demonstration, teaching simulation, and applied assessment",
            },
            {
              label: "Focus",
              value:
                "Sequencing intelligence, cueing clarity, adaptability, and safety",
            },
            { label: "Passing Criteria", value: "Minimum 70%" },
          ],
        },
      ],

      certificationNote:
        "Upon successful completion of both examinations, students are awarded the Level 2 Certificate with the designation “Yoga Wellness Instructor / Yoga Teacher”, which can be downloaded directly from the official government dashboard.",

      totalMarks: "200 (Theory: 60 + Practical: 140)",
      theoryTable: {
        title: "Theory",
        rows: [
          {
            unit: "1",
            name: "Introduction to Yoga and Y ogic Practices ",
            marks: "20",
          },
          {
            unit: "1",
            name: "Introduction to Yoga Texts ",
            marks: "20",
          },
          {
            unit: "1",
            name: "Yoga for wellness ",
            marks: "20",
          },
        ],
        total: "60",
      },

      practicalTable: {
        title: "Practical",
        rows: [
          { unit: "1", name: "Demonstration Skills", marks: "80" },
          { unit: "2", name: "Teaching Skill", marks: "40" },
          { unit: "3", name: "Application of Knowledge", marks: "10" },
          { unit: "4", name: "Field / Community Experience", marks: "10" },
        ],
        total: "140",
      },

      passingCriteria:
        "To attain Level 2 certification, students must secure a minimum of 70% separately in both Theory and Practical examinations. Mastery of teaching skills and safe application is mandatory.",
    },

    whoShouldAttend:
      "Level 1 certified instructors, intermediate practitioners, and wellness professionals. Equivalent to 400 Hours of structured learning.",
    faqs: [
      {
        q: "What is the Yoga Wellness Instructor (Level 2) course?",
        a: "The Yoga Wellness Instructor (equivalent to 400 hours of structured learning) is an intermediate-level professional yoga education program designed to prepare aspirants to teach Yoga safely, confidently, and authentically. The course includes advanced asana practice, pranayama, meditation, anatomy, physiology, teaching methodology, and deeper yogic philosophy as prescribed by the Yoga Certification Board (YCB) Level 2 syllabus. Graduates are trained to conduct wellness-oriented Yoga sessions focused on preventive healthcare and holistic well-being.",
      },
      {
        q: "Who can enroll in this course?",
        a: "Anyone with a sincere interest in Yoga may enroll, including beginners, fitness enthusiasts, Yoga practitioners, teachers, and healthcare professionals. Prior certification is not mandatory, though personal Yoga practice is beneficial.",
      },
      {
        q: "What does “equivalent to 400 hours of learning” mean?",
        a: "The 400-hour equivalence represents the overall learning workload rather than fixed classroom hours. At Shadyuktha Yog, this includes two months of structured live practical training and flexible theory sessions that students may continue attending until they feel fully prepared for the examination.",
      },
      {
        q: "What is the Yoga Certification Board (YCB)?",
        a: "The Yoga Certification Board (YCB) is an official body under the Ministry of AYUSH, Government of India, responsible for standardizing Yoga education and issuing government-recognized certifications for Yoga professionals.",
      },
      {
        q: "What is the mode of teaching for this course?",
        a: "The course is fully online and conducted through live sessions. It includes live practical classes five days a week, weekly theory lectures with Q&A, and interactive discussion-based learning with real-time demonstrations and corrections.",
      },
      {
        q: "Do I need to be in India to enroll?",
        a: "No. The course is globally accessible. Students from any country can enroll and participate online, and the examination process also supports international candidates.",
      },
      {
        q: "Can I access recordings if I miss a live class?",
        a: "No. Live participation is mandatory. Yoga is a practice-based discipline that requires real-time corrections, guidance, and disciplined attendance, which recordings cannot replace.",
      },
      {
        q: "Can I teach Yoga professionally after completing this course?",
        a: "Yes. After successfully clearing the YCB Level 2 examination, you are certified to teach Yoga professionally. You may conduct intermediate-level wellness sessions, design preventive healthcare programs, and teach in wellness centres, schools, community programs, corporate settings, or online platforms.",
      },
      {
        q: "How credible is this certification?",
        a: "The certification is officially recognized by the Yoga Certification Board (YCB) under the Ministry of AYUSH, Government of India. It is a nationally accredited credential suitable for professional teaching and wellness practice.",
      },
      {
        q: "Is this course affiliated with Yoga Alliance?",
        a: "No. This program follows the Yoga Certification Board (YCB) framework under the Ministry of AYUSH and is separate from Yoga Alliance, which follows a different international accreditation model.",
      },
      {
        q: "Who will be teaching this course?",
        a: "The course is taught by experienced and certified Yoga professionals trained in Traditional Hatha Yoga, Ashtanga Yoga, yogic philosophy, anatomy, and preventive health practices. All instructors are approved to deliver YCB-compliant curriculum with personal mentorship.",
      },
      {
        q: "Will study materials be provided?",
        a: "Yes. Students receive structured study materials including practical manuals, theory notes aligned with the YCB syllabus, assignments, quizzes, and revision resources to support learning and exam preparation.",
      },
      {
        q: "When can I appear for the Level 2 examination?",
        a: "YCB Level 2 examinations are conducted monthly. Students are not required to appear immediately after completing the course and may choose an exam date when they feel confident and fully prepared.",
      },
      {
        q: "Can I continue attending classes after the 2-month training period?",
        a: "Practical training is limited to two months. However, students may continue attending live theory sessions until they clear the examination and even afterward for continued conceptual learning.",
      },
      {
        q: "Is Shadyuktha Yog a government body?",
        a: "No. Shadyuktha Yog is a private yoga education institute that delivers training aligned with the Yoga Certification Board (YCB) curriculum. Certification is issued by YCB through authorized examination bodies.",
      },
      {
        q: "How does government affiliation work for YCB examinations?",
        a: "YCB authorizes Professional Certification Bodies (PrCBs) to conduct examinations. Shadyuktha Yog collaborates with an authorized PrCB to facilitate official, government-recognized YCB examinations.",
      },
      {
        q: "Is the YCB certificate valid for a lifetime?",
        a: "No. YCB certifications are valid for five years and must be renewed through an online viva examination and renewal fee.",
      },
      {
        q: "Is Level 1 mandatory before enrolling in Level 2 or Level 3?",
        a: "No. YCB certifications are not strictly sequential. Students may enroll in Level 2 or Level 3 based on their experience, readiness, and learning goals.",
      },
      {
        q: "Will I receive a certificate if I don’t pass the exam?",
        a: "No. Certification is granted only upon successfully clearing both theory and practical examinations conducted by YCB.",
      },
      {
        q: "Do you provide placement or career guidance?",
        a: "No. While the course prepares you with professional skills and certification, placement or career guidance is not included.",
      },
      {
        q: "Can this certification help me get jobs in wellness centres or schools?",
        a: "Yes. A YCB-certified Yoga Wellness Instructor is eligible to teach in wellness centres, gyms, schools, community programs, corporate wellness initiatives, and online platforms.",
      },
      {
        q: "Can I attend only theory or only practical sessions?",
        a: "No. The course is designed as an integrated program, and active participation in both practical and theory components is mandatory.",
      },
      {
        q: "Can international students appear for the YCB examination?",
        a: "Yes. International students may take the YCB examination online through authorized Professional Certification Bodies.",
      },
    ],
    downloadSyllabus: {
      title: "Download Syllabus",
      description:
        "Access the official Yoga Certification Board (YCB) Level 2 syllabus covering wellness-oriented yoga practices, applied theory, and professional teaching methodology.",
      file: {
        label: "Download YCB Level 2 Syllabus",
        type: "PDF",
        link: "https://yogacertificationboard.nic.in/wp-content/themes/ycb/pdf/Syllabus_Level_2.pdf",
      },
    },
    sampleCertificate: {
      title: "Sample Certificate",
      description:
        "This is a representative sample of the Yoga Wellness Instructor (Level 2) certificate issued by the Yoga Certification Board (YCB) after successful completion of the examination.",
      // validity: "Valid for 5 years (Renewable)",
      highlights: [
        "Authorized to teach structured wellness programs",
        "Recognized for professional Yoga instruction",
        "Issued by Yoga Certification Board (YCB)",
      ],
      preview: {
        label: "View Level 2 Sample Certificate",
        image: level2,
      },
    },
    extra: {
      examStructure: {
        theory: "MCQ – Min 70%",
        practical: "Demonstration – Min 70%",
        totalMarks: "200 (Theory 60 + Practical 140)",
      },
      feeTable: {
        indian: "₹12,999",
        foreign: "180 USD",
        examIndian: "₹4,540",
        examForeign: "123 USD",
      },
      hours: "400",
      careers: [
        "Collaborate with wellness centers and gyms",
        "Lead corporate wellness programs",
        "Provide personal coaching for lifestyle challenges",
        "Design specialized school/residential programs",
      ],
    },
    reExamination: {
      title: "Re-Examination Process",
      scenarios: [
        {
          condition: "If Theory is Failed but Practical is Passed",
          points: [
            "One free re-attempt for Theory examination only",
            "Re-attempt must be taken within 3 months from the original examination date",
          ],
        },
        {
          condition: "If Practical is Failed",
          points: [
            "Candidate must reappear for both Theory and Practical examinations",
            "Full examination fee of ₹4,540/- is payable again",
            "No time limit for re-attempt",
          ],
        },
      ],
    },

    feeStructure: {
      title: "Fee Structure",
      note: "The examination fee is determined by the Yoga Certification Board under the Ministry of AYUSH and is subject to change as per official guidelines.",

      table: {
        headers: ["Category", "Course Fee", "YCB Examination Fee"],
        rows: [
          {
            category: "Indian Residents",
            courseFee: "₹12,499 INR",
            examFee: "₹4,540 INR",
          },
          {
            category: "Foreign Residents",
            courseFee: "180 USD (or as per prevailing exchange rate)",
            examFee: "123 USD",
          },
        ],
      },
    },
  },
  "ycb-level-3": {
    layout: "ycb",
    title: "YCB Level 3 – Yoga Teacher & Evaluator",
    tagline: "Deepen • Discern • Lead",
    image: ycbImg,
    video: ycb3,
    fee: "₹14,999",
    duration: "2 Months",
    mode: "Online Live Classes",
    frequency: "Monday – Friday",
    timing: [
      "Monday to Friday",
      "5:00 - 6:00 AM IST",
      "6:00 – 7:00 AM IST",
      "7:15 – 8:15 AM IST",
      "10:00 – 11:00 AM IST",
      "6:00 – 7:00 PM IST",
      "7:00 – 8:00 PM IST",
      "Theory: Every Friday 8:00 – 9:00 PM IST",
    ],
    description:
      "The Ministry of AYUSH has introduced this advanced-level course for mastery of Yoga philosophy, practice, and professional standards. Upon successful completion, candidates are awarded the title of Yoga Teacher & Evaluator. This certification positions you not only as a Yoga teacher, but as a leader, educator, and custodian of authentic yogic knowledge.",
    highlights: [
      {
        title: "Yogic Philosophy & Classical Texts",
        description:
          "Comprehensive study of Principal Upanishads, Jainism & Buddhism, Bhartiya Darshan, Shad Darshan, Bhagavad Gita (BG), Hatha Yoga Pradipika (HYP), Gheranda Samhita (GS), Hatha Ratnavali, Yoga Vasistha, and Patanjali Yoga Sutra (PYS), enabling deep philosophical mastery and scriptural integration.",
      },
      {
        title: "Advanced Yoga Philosophy",
        description:
          "In-depth understanding of Yoga’s origin, evolution, and purpose as a holistic science, with emphasis on connecting philosophy to advanced yogic practice through study and chanting.",
      },
      {
        title: "Yogic Concepts & Applied Science",
        description:
          "Detailed exploration of Tri-Guna, Tri-Sharira, Pancha Kosha, and advanced yogic principles for holistic human development, along with applied anatomy, physiology, and psychology relevant to teaching, assessment, and corrective practices.",
      },
      {
        title: "Advanced Practical Yoga Training",
        description:
          "Mastery of Surya Namaskar with mantra integration, advanced Pranayama, Mudra, and Bandha practices, and Asana Abhyas as per YCB Level 3 syllabus with focus on alignment, evaluation, and corrective guidance.",
      },
      {
        title: "Traditional Hatha Yoga & Ashtanga Practice",
        description:
          "Systematic practice of traditional Hatha Yoga and Ashtanga Primary Series with advanced sequencing, precision, and alignment awareness.",
      },
      {
        title: "Preparatory Breathwork & Yoga Nidra",
        description:
          "Advanced techniques to enhance lung capacity, cultivate deep relaxation, improve mental clarity, and support meditative depth.",
      },
      {
        title: "Advanced Kriya Practices",
        description:
          "Hands-on mastery of Jala Neti, Vaman Dhauti, Trataka, and other classical purification techniques for internal cleansing and energetic balance.",
      },
      {
        title: "Wellness & Disease Management",
        description:
          "Strategic application of the DPYT Model for preventive care, management of common health conditions, and structured wellness program design.",
      },
      {
        title: "Professional Outcome & Leadership Readiness",
        description:
          "This integrated curriculum equips students with expertise, confidence, leadership, and evaluative skills required to teach, mentor, and assess yoga practitioners at an advanced professional level, fully aligned with YCB Level 3 standards.",
      },
    ],
    certification: {
      title: "Government Certification – Yoga Certification Board",
      description:
        "The Yoga Certification Board (YCB), functioning under the Ministry of AYUSH, conducts the Level 3 examinations every month.To ensure a smooth and guided examination process, we provide complete support and coordination assistance to our students. Each month, we share the upcoming examination schedules. Once a student feels fully prepared, they may select their preferred exam date, and we assist them with the registration and booking formalities to successfully complete the process.",
    },
    benefits: [
      "Serve as a senior yoga educator, mentor, and master trainer",
      "Design advanced yoga curricula and long-term wellness programs",
      "Evaluate, assess, and mentor yoga instructors and trainees",
      "Lead institutional, academic, and large-scale wellness initiatives",
      "Act as a resource person for yoga education, examinations, and policy-aligned programs",
    ],
    inclusions: [
      "Interactive Discussion-Led Theory Sessions",
      "5 Days/Week Live Guided Practice",
      "Exclusive Weekly Q&A Forums",
      "Curated Study Resources (YCB Level 3)",
      "Strategic Examination Preparation",
      "Demonstration Rehearsals",
      "Personalized Mentorship Guidance",
      "Performance Review & Feedback",
      "Professional Teaching Readiness Training",
      "Seamless Certification Support",
    ],
    examination: {
      introTagline: "Master • Integrate • Lead",
      title: "Examination Structure",
      description:
        "Level 3 examinations are conducted online and/or in supervised hybrid mode on the same scheduled day. This level evaluates mastery in yogic sciences, therapeutic application, teaching excellence, research orientation, and leadership capacity. Students must qualify in both theory and practical components to receive certification.",

      exams: [
        {
          title: "Master-Level Theory Examination",
          items: [
            {
              label: "Format",
              value:
                "MCQ, short descriptive answers, case analysis, and applied theory questions",
            },
            {
              label: "Focus",
              value:
                "Advanced philosophy, yoga therapy integration, research literacy, and pedagogy",
            },
            { label: "Passing Criteria", value: "Minimum 70%" },
          ],
        },
        {
          title: "Advanced Practical, Teaching & Therapeutic Evaluation",
          items: [
            {
              label: "Format",
              value:
                "Advanced demonstrations, therapeutic case presentation, teaching practicum, and viva",
            },
            {
              label: "Focus",
              value:
                "Precision, adaptability, safety, therapeutic intelligence, and leadership",
            },
            { label: "Passing Criteria", value: "Minimum 70%" },
          ],
        },
      ],

      certificationNote:
        "Upon successful completion of both examinations, students are awarded the Level 3 Certificate with the designation “Yoga Master / Yoga Therapist / Senior Yoga Teacher”, downloadable from the official government dashboard.",

      totalMarks: "400 (Theory: 150 + Practical: 250)",

      theoryTable: {
        title: "Theory",
        rows: [
          {
            unit: "1",
            name: "Foundation ofYoga ",
            marks: "20",
          },
          {
            unit: "2",
            name: "Introduction to Yoga Texts",
            marks: "20",
          },
          {
            unit: "3",
            name: "Yoga And Health ",
            marks: "20",
          },
          {
            unit: "4",
            name: "Applied Yoga ",
            marks: "20",
          },
        ],
        total: "80",
      },

      practicalTable: {
        title: "Practical",
        rows: [
          { unit: "1", name: "Demonstration Skills", marks: "60" },
          { unit: "2", name: "Teaching Skill", marks: "20" },
          { unit: "3", name: "Evaluation Skill", marks: "20" },
          { unit: "4", name: "Application of Knowledge", marks: "10" },
          { unit: "5", name: "Field / Community Experience", marks: "10" },
        ],
        total: "120",
      },

      passingCriteria:
        "To attain Level 3 certification, students must secure a minimum of 70% separately in both Theory and Practical examinations. Demonstrated mastery, therapeutic competence, and professional leadership are mandatory.",
    },
    whoShouldAttend:
      "Experienced practitioners, Level 2 certified instructors, and aspiring yoga educators. Equivalent to 800 Hours of structured learning.",
    faqs: [
      {
        q: "What is the Yoga Teacher & Evaluator Instructor (Level 3) course?",
        a: "The Yoga Teacher & Evaluator Instructor (equivalent to 800 hours of structured learning) is an advanced professional Yoga education program designed to cultivate mastery in both teaching and evaluative competence. The course involves deep study of classical yogic texts such as the Hatha Yoga Pradipika, Hatha Ratnavali, Yoga Vashishtha, and Yoga Sutras, along with advanced practical training, pedagogy, assessment methodology, applied anatomy, and higher yogic concepts as prescribed under the Yoga Certification Board (YCB) Level 3 syllabus.",
      },
      {
        q: "What does “equivalent to 800 hours of structured learning” mean?",
        a: "The 800-hour equivalence represents the overall learning workload expected at an advanced level, not a rigid count of classroom hours. Yoga learning is experiential and practice-oriented. At Shadyuktha Yog, this is implemented through two months of intensive live practical training and flexible theory sessions that students may continue attending until they feel fully prepared for the examination.",
      },
      {
        q: "What is the Yoga Certification Board (YCB)?",
        a: "The Yoga Certification Board (YCB) is an official body under the Ministry of AYUSH, Government of India, responsible for standardizing Yoga education and issuing government-recognized certifications for Yoga professionals.",
      },
      {
        q: "What is the mode of teaching for this course?",
        a: "The course is fully online and conducted through live sessions. It includes live practical classes five days a week, weekly theory lectures with interactive discussions and Q&A, and guided mentorship with real-time demonstrations and corrections.",
      },
      {
        q: "Do I need to be in India to enroll?",
        a: "No. The course is globally accessible. Students from any country can enroll and participate online, and the YCB examination process also supports international candidates.",
      },
      {
        q: "Are class recordings available if I miss a session?",
        a: "No. Live participation is mandatory. Yoga is a practice-based discipline requiring real-time corrections, engagement, and disciplined attendance, which recordings cannot substitute.",
      },
      {
        q: "Can I teach Yoga professionally after completing this course?",
        a: "Yes. After successfully clearing the YCB Level 3 examination, you are certified to teach Yoga at an advanced level and to function as an evaluator. You may lead advanced classes, mentor teachers, design structured Yoga programs, and uphold professional teaching and assessment standards.",
      },
      {
        q: "How credible is the Level 3 certification?",
        a: "The certification is officially recognized by the Yoga Certification Board (YCB) under the Ministry of AYUSH, Government of India. It is a nationally accredited credential with professional and institutional recognition.",
      },
      {
        q: "Is this course affiliated with Yoga Alliance?",
        a: "No. This program follows the Yoga Certification Board (YCB) framework under the Ministry of AYUSH and is independent of Yoga Alliance, which follows a different international accreditation model.",
      },
      {
        q: "Who teaches this course?",
        a: "The course is led by experienced, certified Yoga professionals trained in Traditional Hatha Yoga, Ashtanga Yoga, yogic philosophy, applied anatomy, and preventive health practices. All instructors are qualified to deliver YCB Level 3 curriculum with personalized mentorship.",
      },
      {
        q: "Will study materials be provided?",
        a: "Yes. Students receive comprehensive study resources including classical text references, theory notes aligned with the YCB syllabus, practical manuals, assignments, and revision materials to support learning and examination preparation.",
      },
      {
        q: "When can I appear for the Level 3 examination?",
        a: "YCB Level 3 examinations are conducted monthly. Students may choose their exam date based on readiness and are not required to appear immediately after completing the course.",
      },
      {
        q: "Can I continue attending theory classes after the practical training ends?",
        a: "Yes. Practical training is limited to two months, but students may continue attending live theory sessions until they clear the examination and even afterward for ongoing conceptual clarity.",
      },
      {
        q: "Is Shadyuktha Yog a government body?",
        a: "No. Shadyuktha Yog is a private Yoga education institute delivering training aligned with the Yoga Certification Board curriculum. Certification is issued by YCB through authorized Professional Certification Bodies.",
      },
      {
        q: "How does government affiliation work for YCB examinations?",
        a: "YCB authorizes Professional Certification Bodies (PrCBs) to conduct official examinations. Shadyuktha Yog collaborates with an authorized PrCB to facilitate government-recognized YCB examinations.",
      },
      {
        q: "Is the YCB Level 3 certificate valid for a lifetime?",
        a: "No. YCB certifications are valid for five years and must be renewed through an online viva examination and applicable renewal fee.",
      },
      {
        q: "Is completing lower levels mandatory before enrolling in Level 3?",
        a: "No. YCB certifications are not strictly sequential. Learners may enroll in Level 3 based on experience, preparedness, and learning goals, regardless of prior level completion.",
      },
      {
        q: "Will I receive a certificate if I do not pass the examination?",
        a: "No. Certification is awarded only upon successfully clearing both theory and practical examinations conducted by YCB.",
      },
      {
        q: "Do you provide placement or career guidance?",
        a: "No. While the course equips students with advanced skills and certification, placement or career guidance is not included.",
      },
      {
        q: "Can this certification help me work in institutions or wellness centres?",
        a: "Yes. A YCB-certified Yoga Teacher & Evaluator Instructor is eligible to teach, mentor, and evaluate Yoga professionals in wellness centres, schools, institutions, community programs, and online platforms.",
      },
      {
        q: "Can I attend only theory or only practical sessions?",
        a: "No. The program is designed as an integrated course, and active participation in both practical and theory components is mandatory.",
      },
      {
        q: "Can international students appear for the YCB Level 3 examination?",
        a: "Yes. International students may appear for the YCB Level 3 examination online through authorized Professional Certification Bodies.",
      },
    ],
    downloadSyllabus: {
      title: "Download Syllabus",
      description:
        "Access the official Yoga Certification Board (YCB) Level 3 syllabus detailing advanced yogic studies, evaluator competencies, and professional standards.",
      file: {
        label: "Download YCB Level 3 Syllabus",
        type: "PDF",
        link: "https://yogacertificationboard.nic.in/wp-content/themes/ycb/pdf/Syllabus_Level_3.pdf",
      },
    },
    sampleCertificate: {
      title: "Sample Certificate",
      description:
        "This is a representative sample of the Yoga Teacher & Evaluator Instructor (Level 3) certificate issued by the Yoga Certification Board (YCB) upon successful completion of the examination.",
      // validity: "Valid for 5 years (Renewable)",
      highlights: [
        "Eligible for advanced teaching and evaluator roles",
        "Authorized to assess Yoga professionals",
        "Issued by Yoga Certification Board (YCB)",
      ],
      preview: {
        label: "View Level 3 Sample Certificate",
        image: level3,
      },
    },
    extra: {
      examStructure: {
        theory: "MCQ – Min 70%",
        practical: "Demonstration – Min 70%",
        totalMarks: "200 (Theory 60 + Practical 140)",
      },
      feeTable: {
        indian: "₹14,999",
        foreign: "200 USD",
        examIndian: "₹6,220",
        examForeign: "164 USD",
      },
      hours: "800",
      careers: [
        "Lead Advanced Teacher Training Programs",
        "Serve as Assessors & Mentors",
        "Head Yoga Institutions",
        "Design curriculum frameworks",
        "Offer Master-Level Mentorship",
      ],
    },
    reExamination: {
      title: "Re-Examination Process",
      scenarios: [
        {
          condition: "If Theory is Failed but Practical is Passed",
          points: [
            "One free re-attempt for Theory examination only",
            "Re-attempt must be taken within 3 months from the original examination date",
          ],
        },
        {
          condition: "If Practical is Failed",
          points: [
            "Candidate must reappear for both Theory and Practical examinations",
            "Full examination fee of ₹6,220/- is payable again",
            "No time limit for re-attempt",
          ],
        },
      ],
    },

    feeStructure: {
      title: "Fee Structure",
      note: "The examination fee is determined by the Yoga Certification Board under the Ministry of AYUSH and is subject to change as per official guidelines.",

      table: {
        headers: ["Category", "Course Fee", "YCB Examination Fee"],
        rows: [
          {
            category: "Indian Residents",
            courseFee: "₹14,999 INR",
            examFee: "₹6,220 INR",
          },
          {
            category: "Foreign Residents",
            courseFee: "200 USD (or as per prevailing exchange rate)",
            examFee: "164 USD",
          },
        ],
      },
    },
  },
  "therapeutic-yoga": {
    layout: "therapeutic",
    title: "Yoga Therapy: Clinical Healing",
    tagline: "Targeted Recovery for Body, Mind & Vitality",
    image: therapeuticImg,
    video: ycb1,
    fee: "₹3,500/month (Group) | ₹14,000/month (1-on-1)",
    duration: "60 minutes per session",
    mode: "Live Online",
    frequency: "5 days per week",
    timing: [
      "Monday to Thursday",
      "6:00 – 7:00 AM IST",
      "7:15 – 8:15 AM IST",
      "10:30 - 11:30 AM IST",
      "6:00 – 7:00 PM IST",
      "Personalized Time Slot (1:1)",
    ],
    description:
      "At Shadyuktha Yog, we view health not just as the absence of disease, but as a state of vibrant equilibrium. Our Yoga Therapy program is a specialized, evidence-based intervention that uses the tools of classical Yoga—Asana, Pranayama, and Bandhas—to manage and even reverse chronic health conditions through our pioneering DPYT model.",
    highlights: [
      {
        title: "Evidence-Based DPYT Model",
        description:
          "Therapeutic intervention based on the Dual-Phase Yoga Therapy (DPYT) model, integrating self-practice and guided clinical correction for sustainable healing outcomes.",
      },
      {
        title: "Pancha Kosha Healing Approach",
        description:
          "Holistic healing framework addressing Annamaya, Pranamaya, Manomaya, Vijnanamaya, and Anandamaya Koshas to treat the root cause rather than symptoms.",
      },
      {
        title: "Personalized Therapy Format",
        description:
          "Highly focused one-on-one private therapy sessions and small group interventions (maximum 3 participants) to ensure individualized attention and precise correction.",
      },
      {
        title: "Self-Sadhana & Clinical Guidance",
        description:
          "Structured morning self-sadhana combined with guided clinical therapeutic sessions to reinforce discipline, awareness, and long-term therapeutic benefits.",
      },
    ],
    // certification: {
    //   title: "Government Certification – Yoga Certification Board",
    //   description:
    //     "The Yoga Certification Board (YCB), functioning under the Ministry of AYUSH, conducts the Level 2 examinations every month.To ensure a smooth and guided examination process, we provide complete support and coordination assistance to our students. Each month, we share the upcoming examination schedules. Once a student feels fully prepared, they may select their preferred exam date, and we assist them with the registration and booking formalities to successfully complete the process.",
    // },
    benefits: [
      "Women's Wellness & Hormonal Health (PCOD/PCOS, Thyroid, Infertility)",
      "Spine & Orthopaedic Recovery (Back pain, Sciatica, Slip Disc, Cervical Spondylosis)",
      "Metabolic & Digestive Health (Diabetes, BP, IBS, Metabolic Disorders)",
      "Mental Well-being (Anxiety, Depression, Insomnia, Migraines)",
      "Autoimmune & Respiratory Care (Arthritis, Asthma, Chronic Sinusitis)",
      "Cardiovascular (Hypertension regulation)",
      "Weight Management & Lifestyle Awareness",
    ],
    inclusions: [
      "Clinical Consultation (deep medical history review)",
      "Personalized Sādhana (custom sequence)",
      "Functional Movement with props",
      "Nervous System Regulation techniques",
      "Breathwork & Prāṇāyāma",
      "Prop-Assisted Postures",
      "Yoga Nidra & Deep Relaxation",
      "Lifestyle & Nutritional Awareness",
    ],
    whoShouldAttend:
      "Individuals managing chronic pain or long-term health conditions. Those seeking a natural, complementary approach alongside their medical treatment. Anyone recovering from surgery or injury looking for safe, guided movement.",
    faqs: [
      {
        q: "How is Therapeutic Yoga different from a regular yoga class?",
        a: "While regular yoga focuses on general fitness and flexibility, Therapeutic Yoga is a targeted clinical intervention. It is specifically adapted to address chronic health conditions, injuries, or hormonal imbalances using modified postures (Āsanas), specific breathwork (Prāṇāyāma), and internal locks (Bandhas).",
      },
      {
        q: "Can I start Yoga Therapy if I am currently in pain?",
        a: "Yes. We begin with a consultation to understand the stage of your condition—acute or chronic. For acute pain, the practice emphasizes restorative movements, breath-led relaxation, and precise alignment to reduce inflammation before gradually progressing toward strengthening.",
      },
      {
        q: "How long does it take to see results?",
        a: "Healing is a journey, not a quick fix. Most participants experience mental relief and reduced tension within 4–6 sessions. Sustainable physiological changes, such as hormonal balance or spinal recovery, typically require 3–6 months of consistent and guided practice.",
      },
      {
        q: "Do I need to stop my medical treatments to do Yoga Therapy?",
        a: "No. Yoga Therapy is a complementary science. It works alongside your doctor’s prescriptions and ongoing medical treatments to enhance the body’s healing response, reduce side effects, and improve overall quality of life.",
      },
      {
        q: "I’m not flexible at all. Can I still join for therapy?",
        a: "Absolutely. Flexibility is a result of yoga, not a requirement. In a therapeutic context, we use props such as bolsters, chairs, and blocks to meet your body where it is. The focus is on function, safety, and healing rather than form.",
      },
      {
        q: "What conditions can Yoga Therapy help with?",
        a: "We specialize in supporting:\n• Hormonal Health: Thyroid disorders, PCOD/PCOS, and diabetes\n• Musculoskeletal Conditions: Back pain, sciatica, and cervical spondylosis\n• Respiratory & Cardiac Health: Asthma and hypertension\n• Mental & Emotional Well-being: Anxiety, insomnia, and depression",
      },
      {
        q: "Is an initial consultation mandatory?",
        a: "Yes. At Shadyuktha Yog, safety is our highest priority. A detailed review of medical history, reports, and current symptoms is essential to design a personalized and effective Sādhana (therapeutic practice) suited to your unique body and condition.",
      },
      {
        q: "Can Yoga Therapy help with weight loss?",
        a: "Yes, but our approach is holistic. Rather than high-intensity cardio, we view weight as a metabolic, hormonal, and lifestyle-related concern. Therapeutic sequences are designed to balance the endocrine system, improve digestion, regulate the nervous system, and address emotional eating and metabolic sluggishness.",
      },
    ],
    extra: {
      dpytPhases: {
        phase1: {
          title: "Phase 1: Morning Management (Self-Sadhana)",
          items: [
            "Kriya & Cleansing: Specific yogic hygiene to stimulate the metabolic fire",
            "Micro-Movements: Gentle joints-and-glands exercises for circulation",
            "Pranic Prime: Short breathwork to stabilize mind and regulate blood pressure",
          ],
        },
        phase2: {
          title: "Phase 2: Class Management (Guided Intervention)",
          items: [
            "Targeted Asana Sequences: Anatomically designed postures for your specific condition",
            "Precision & Prop Integration: chairs, Belts, Bricks for therapeutic benefit without injury risk",
            "Bio-Feedback & Breath: Deep synchronization for cellular repair",
            "Sāvasana & Restoration: Specialized relaxation to lower systemic inflammation",
          ],
        },
      },
      conditions: [
        {
          icon: "Heart",
          label: "Women's Wellness",
          items: [
            "PCOD / PCOS",
            "Menstrual Irregularities",
            "Thyroid Disorders",
            "Infertility",
            "Hormonal Imbalance",
            "Menopause Support",
            "Prenatal & Postnatal Care",
          ],
        },
        {
          icon: "Bone",
          label: "Spine & Ortho",
          items: [
            "Lower Back Pain",
            "Upper Back Pain",
            "Sciatica",
            "Slip Disc",
            "Cervical Spondylosis",
            "Lumbar Spondylosis",
            "Knee Pain",
            "Frozen Shoulder",
            "Arthritis",
            "Postural Imbalances",
          ],
        },
        {
          icon: "Activity",
          label: "Metabolic",
          items: [
            "Diabetes (Type 1 & Type 2)",
            "Hypertension",
            "Obesity",
            "Metabolic Syndrome",
            "Digestive Disorders",
            "IBS (Irritable Bowel Syndrome)",
            "Fatty Liver",
            "Low Energy & Chronic Fatigue",
          ],
        },
        {
          icon: "Brain",
          label: "Mental Health",
          items: [
            "Stress Management",
            "Anxiety Disorders",
            "Depression",
            "Insomnia & Sleep Disorders",
            "Migraines & Headaches",
            "Emotional Imbalance",
            "Burnout",
            "Poor Concentration",
          ],
        },
      ],
      sessionTypes: [
        {
          type: "One-on-One Private Therapy",
          // ideal:
          //   "Acute pain, complex multi-system conditions, post-surgery recovery",
          fee: "₹14,000/month",
        },
        {
          type: "Semi-Private Group (Max 3)",
          // ideal: "Chronic conditions (PCOD, Hypertension, General Back Pain)",
          fee: "₹8,000/month",
        },
      ],
    },
  },
  "mind-body-clarity": {
    layout: "mindBody",
    title: "Mind–Body Regulation & Inner Clarity Program",
    tagline: "From Emotional Reaction to Conscious Direction",
    image: mindbody,
    fee: "₹2,500 – ₹6,000 (Based on Format)",
    duration: "60 minutes per session",
    mode: "Live Online",
    frequency: "Short Intensive Batches",
    timing: ["Flexible scheduling", "Weekday & Weekend batches"],
    description:
      "This is not a meditation-only program. A structured inner-work process to regulate emotional and mental energy.",

    highlights: [
      {
        title: "Nervous System Regulation",
        description:
          "Practices designed to balance the autonomic nervous system by calming hyperarousal, improving vagal tone, and restoring physiological resilience.",
      },
      {
        title: "Psychology-Integrated Yogic Practices",
        description:
          "A mindful integration of yogic techniques with modern psychological understanding to support emotional awareness, cognitive clarity, and mental stability.",
      },
      {
        title: "Safe Emotional Processing",
        description:
          "Gentle, guided practices that allow suppressed emotions to surface and release safely, without re-traumatization, fostering emotional safety and inner regulation.",
      },
    ],
    certification: {
      title: "Government Certification – Yoga Certification Board",
      description:
        "The Yoga Certification Board (YCB), functioning under the Ministry of AYUSH, conducts the Level 2 examinations every month.To ensure a smooth and guided examination process, we provide complete support and coordination assistance to our students. Each month, we share the upcoming examination schedules. Once a student feels fully prepared, they may select their preferred exam date, and we assist them with the registration and booking formalities to successfully complete the process.",
    },

    benefits: [
      "Reduced emotional overwhelm",
      "Improved focus",
      "Better decision-making",
    ],

    inclusions: [
      "Guided breathwork",
      "Awareness meditation",
      "Thought redirection tools",
      "Structured journaling",
    ],

    whoShouldAttend:
      "Professionals under stress, emotionally overwhelmed individuals, and seekers of inner clarity.",

    faqs: [
      {
        q: "Is this a meditation program?",
        a: "No. This is a structured mind–body regulation program that uses breath, awareness, psychology-based tools, and guided introspection rather than passive meditation.",
      },
      {
        q: "Will I have to share personal emotions in a group?",
        a: "No. Group sessions are guided safely without emotional disclosure. Personal processing happens only in confidential 1:1 sessions.",
      },
      {
        q: "Is prior yoga or meditation experience required?",
        a: "No prior experience is needed. The program is designed for beginners as well as experienced practitioners.",
      },
      {
        q: "Can this help with stress and emotional exhaustion?",
        a: "Yes. The program focuses on nervous system regulation, emotional clarity, and conscious energy direction.",
      },
    ],

    extra: {
      programFormats: [
        {
          type: "3-Day Integration Batch",
          focus: "Deep emotional work & alignment",
          includes: ["1 Mandatory 1:1 Session", "2 Guided Sessions"],
          fee: {
            group: "₹4,500",
            individual: "₹6,000",
          },
          note: "1:1 session ensures emotional safety",
        },
        {
          type: "2-Day Regulation Batch",
          focus: "Grounding & clarity",
          includes: ["2 Guided Sessions"],
          fee: {
            group: "₹2,500",
            individual: "₹4,000",
          },
        },
      ],

      safeSpacePolicy: [
        "Confidential individual sessions",
        "No forced sharing",
        "Emotionally safe environment",
        "Professionally guided space",
      ],
    },
  },
  ashtanga: {
    layout: "ashtanga",
    title: "Ashtanga Primary Series",
    tagline: "Flow • Strength • Focus",
    image: ashtangaImg,
    video: ycb3,
    fee: "₹3,500/month",
    duration: "60 minutes",
    mode: "Live Online",
    frequency: "5 days per week",
    timing: [
      "Monday to Thursday",
      "6:00 – 7:00 AM IST",
      "7:15 – 8:15 AM IST",
      "6:00 – 7:00 PM IST",
      "7:00 – 8:00 PM IST",
    ],
    description:
      "Elevate your practice with a structured Ashtanga Primary Series session, rooted in the traditional methodology of K. Pattabhi Jois. This dynamic and structured system synchronizes breath (Pranayama) with a precise sequence of postures (Asanas). Known as the 'Vinyasa Flow,' it builds strength, flexibility, endurance, and mental focus. The Primary Series, also called Yoga Chikitsa, focuses on detoxifying the body, aligning the spine, and preparing practitioners for intermediate and advanced sequences.",
    highlights: [
      {
        title: "Traditional K. Pattabhi Jois Lineage",
        description:
          "Teaching rooted in the authentic methodology of Sri K. Pattabhi Jois, preserving the integrity, discipline, and progressive structure of classical Ashtanga Yoga.",
      },
      {
        title: "Breath-Centered Vinyasa with Ujjayi",
        description:
          "A systematic vinyasa practice synchronized with Ujjayi Pranayama, cultivating internal heat, rhythmic movement, and meditative flow.",
      },
      {
        title: "Precision-Based Alignment Guidance",
        description:
          "Real-time verbal and hands-on alignment corrections delivered in small batch settings to ensure safety, accuracy, and deeper embodiment.",
      },
      {
        title: "Progressive Ashtanga Skill Development",
        description:
          "Step-by-step progression through standing, seated, and finishing sequences, building strength, flexibility, stamina, and disciplined practice over time.",
      },
    ],
    certification: {
      title: "Government Certification – Yoga Certification Board",
      description:
        "The Yoga Certification Board (YCB), functioning under the Ministry of AYUSH, conducts the Level 2 examinations every month.To ensure a smooth and guided examination process, we provide complete support and coordination assistance to our students. Each month, we share the upcoming examination schedules. Once a student feels fully prepared, they may select their preferred exam date, and we assist them with the registration and booking formalities to successfully complete the process.",
    },
    benefits: [
      "Builds strength, flexibility, and endurance",
      "Enhances mental focus, discipline, and self-awareness",
      "Improves posture, core stability, and overall vitality",
      "Promotes holistic mind-body wellness through breath and alignment",
      "Prepares practitioners for advanced Ashtanga sequences",
    ],
    inclusions: [
      "Guided Live Sessions 5 days/week with real-time adjustments",
      "Small Batch Training for individual attention",
      "Comprehensive Asana Training (K. Pattabhi Jois lineage)",
      "Breath & Bandha Instruction",
      "Alignment & Posture Corrections",
      "Flexibility & Strength Development",
      "Mindfulness & Mental Focus Techniques",
      "Home Practice Support",
      "Foundational Preparation for Advanced Yoga Styles",
    ],
    whoShouldAttend: [
      "Beginners with a foundational level of fitness looking to establish a disciplined yoga practice",
      "Experienced practitioners seeking a structured and traditional flow-based routine",
      "Individuals aiming to enhance strength, flexibility, endurance, and mental focus",
      "Students interested in cultivating mindfulness, self-discipline, and holistic well-being",
      "Intermediate and advanced practitioners looking to refine alignment and deepen practice",
      "Those wishing to build a strong foundation for Vinyasa Flow, Power Yoga, or traditional Hatha Yoga",
      "⚠️ Precaution: Individuals with severe injuries, chronic medical conditions, or limited mobility should consult a healthcare professional before beginning Ashtanga Yoga practice",
    ],
    faqs: [
      {
        q: "Is Ashtanga Yoga suitable for beginners?",
        a: "Yes. Beginners can start with foundational guidance and gradually progress through the Primary Series under close instructor supervision.",
      },
      {
        q: "How is Ashtanga different from other yoga styles?",
        a: "Ashtanga follows a fixed sequence of postures coordinated with breath (vinyasa). It emphasizes strength, flexibility, stamina, and mental focus through a disciplined and progressive structure, unlike casual flow or general yoga classes.",
      },
      {
        q: "Can I practice if I have health limitations?",
        a: "Individuals with injuries, chronic conditions, or mobility restrictions should consult a healthcare professional before joining. Modifications are provided to accommodate various fitness levels safely.",
      },
      {
        q: "Do I need to attend all 5 classes per week?",
        a: "Regular attendance supports steady progress, but flexibility is allowed. Consistency is encouraged for best results, and occasional absences can be supported with guided home practice.",
      },
      {
        q: "Do I need props for Ashtanga Yoga?",
        a: "Most postures require only a yoga mat. Props such as blocks, straps, or bolsters are optional and mainly used for alignment support, especially for beginners.",
      },
      {
        q: "How does Shadyuktha Yog ensure safe practice?",
        a: "We focus on small batch sessions, real-time observation, and personalized guidance. Each posture is taught with attention to alignment, breath, and injury prevention.",
      },
      {
        q: "Can I continue practicing independently after the class?",
        a: "Yes. Students are encouraged to develop self-discipline and maintain a home practice using the sequences, breath coordination, and alignment principles learned in class.",
      },
      {
        q: "Will I receive a certificate after this class?",
        a: "No. This program focuses on disciplined practice, skill development, and holistic growth rather than formal certification.",
      },
      {
        q: "How can this class benefit me?",
        a: "The Ashtanga Primary Series builds strength, flexibility, stamina, mental focus, and self-discipline. It enhances body awareness, breath control, and mindfulness, forming a strong foundation for long-term practice.",
      },
      {
        q: "Can I use this class as a base for other yoga styles?",
        a: "Absolutely. The Primary Series develops core strength, flexibility, and breath coordination, making it easier to transition into Vinyasa Flow, Power Yoga, advanced Ashtanga sequences, or traditional Hatha Yoga.",
      },
      {
        q: "Is this suitable for intermediate and advanced practitioners?",
        a: "Yes. Intermediate and advanced practitioners can refine alignment, deepen flexibility, and build endurance through consistent and focused practice of the Primary Series.",
      },
      {
        q: "Do I need prior experience in yoga to join?",
        a: "No. While familiarity with basic postures can help, guided instruction ensures that newcomers can safely learn and progress at their own pace.",
      },
    ],
    extra: {
      sequence: [
        {
          section: "1. Centering & Opening",
          items: ["Mantra chanting", "Breath awareness"],
        },
        { section: "2. Surya Namaskar A & B", items: ["Sun Salutations"] },
        {
          section: "3. Standing Sequence",
          items: [
            "Pada Angushthasana A&B",
            "Trikonasana (Utthita & Parivritta)",
            "Parshvakonasana",
            "Prasarita Padottanasana A-D",
            "Utkatasana",
            "Veerabhadrasana A&B",
          ],
        },
        {
          section: "4. Seated Sequence",
          items: [
            "Dandasana",
            "Paschimottanasana",
            "Janu Sheershasana A-C",
            "Marichyasana A-D",
            "Navasana",
            "Baddha Konasana A&B",
          ],
        },
        {
          section: "5. Finishing & Closing",
          items: [
            "Urdhva Dhanurasana",
            "Sarvangasana",
            "Sheershasana A&B",
            "Padmasana",
            "Shavasana",
          ],
        },
      ],
    },
  },
  pranayama: {
    layout: "pranayama",
    title: "Pranayama, Mudras & Bandhas",
    tagline: "Breathe • Align • Awaken",
    image: pranayamaImg,
    video: meditationVideo,
    fee: "₹3,500/month",
    duration: "60 minutes",
    mode: "Live Online",
    frequency: "5 days per week",
    timing: [
      "Monday to Thursday",
      "6:00 – 7:00 AM IST",
      "7:15 – 8:15 AM IST",
      "6:00 – 7:00 PM IST",
    ],
    description:
      "Experience a holistic yogic journey where body (Sarira), energy (Prana), and mind/consciousness (Citta) are integrated. This program deepens your understanding of Pranayama (breath control), Mudras (energy gestures), and Bandhas (energy locks), helping you cultivate physical vitality, mental clarity, and subtle energy mastery.",
    highlights: [
      {
        title: "Four Phases of Breath Mastery",
        description:
          "Systematic training in Puraka (inhalation), Rechaka (exhalation), and Kumbhaka (internal & external retention) to cultivate breath awareness, control, and energetic stability.",
      },
      {
        title: "Nervous System Regulation",
        description:
          "Practices designed to consciously shift the body from sympathetic activation to parasympathetic dominance, supporting mental calmness, emotional balance, and restorative healing.",
      },
      {
        title: "Elemental Integration through Mudras",
        description:
          "Application of traditional hand mudras aligned with the Five Tattvas (Pancha Mahabhutas) to balance elemental energies and enhance subtle energetic flow.",
      },
      {
        title: "Bandha & Energy Lock Proficiency",
        description:
          "In-depth mastery of Mula, Uddiyana, Jalandhara, and Maha Bandha to regulate pranic movement, stabilize the core, and support advanced pranayama and meditative practices.",
      },
    ],
    certification: {
      title: "Government Certification – Yoga Certification Board",
      description:
        "The Yoga Certification Board (YCB), functioning under the Ministry of AYUSH, conducts the Level 2 examinations every month.To ensure a smooth and guided examination process, we provide complete support and coordination assistance to our students. Each month, we share the upcoming examination schedules. Once a student feels fully prepared, they may select their preferred exam date, and we assist them with the registration and booking formalities to successfully complete the process.",
    },
    benefits: [
      "Expand lung capacity and cellular oxygen absorption",
      "Regulate the nervous system",
      "Direct energy flow with Mudras",
      "Prevent energy leakage with Bandhas",
      "Achieve mental clarity and emotional resilience",
      "Foundation for deep meditation (Dhyana)",
    ],
    inclusions: [
      "Guided Live Sessions 5 days/week",
      "Small Batch Training",
      "Theoretical Insights into breath science",
      "Alignment & Safety Guidance",
      "Home Practice Support",
      "Foundation for Mastery – preparation for Ashtanga/Vinyasa",
    ],
    whoShouldAttend:
      "Beginner to advanced practitioners seeking mastery of breath, energy, and subtle body practices.",
    faqs: [
      {
        q: "Do I need prior yoga experience?",
        a: "No. Beginners are welcome; the program progresses gradually to advanced techniques.",
      },
      {
        q: "Will this improve mental clarity?",
        a: "Absolutely. Techniques balance Prana and Citta, reduce stress, and improve concentration.",
      },
      {
        q: "Do I need props?",
        a: "Only a yoga mat. Optional props may be used for support.",
      },
      {
        q: "Will I receive a certificate?",
        a: "No. Focus is on mastery, alignment, and holistic development.",
      },
      {
        q: "How does this complement other yoga styles?",
        a: "Mastery of Pranayama, Mudras, and Bandhas enhances all yoga practices and prepares for Ashtanga, Vinyasa, and meditation.",
      },
    ],
    extra: {
      threeArts: [
        {
          title: "1. PRANAYAMA: The Science of Breath",
          icon: "Wind",
          items: [
            "Mastery of Puraka (Inhalation), Rechaka (Exhalation), Kumbhaka (Retention)",
            "Nervous System Regulation: Fight-or-Flight → Rest-and-Digest",
            "Volumetric Expansion: Correcting breathing patterns for max oxygen absorption",
          ],
        },
        {
          title: "2. MUDRA: The Energetic Seal",
          icon: "Hand",
          items: [
            "Elemental Connection: Five elements (Tattvas) within your fingertips",
            "Energetic Circuitry: Jnana Mudra for concentration and inner wisdom",
            "Focus & Refinement: Physical steadiness for meditation",
          ],
        },
        {
          title: "3. BANDHA: The Energy Lock",
          icon: "Lock",
          items: [
            "Mūla Bandha (Root Lock): Stabilize base of spine",
            "Uddiyana Bandha (Abdominal Lock): Massage organs, lift energy",
            "Jalandhara Bandha (Throat Lock): Regulate BP and thyroid",
            "Maha Bandha (The Great Lock): Total systemic reset",
          ],
        },
      ],
      weeklySchedule: [
        {
          day: "Monday",
          theme: "Energy Cleansing",
          techniques: "Nadi Shodhana, Kapalabhati, Bhastrika",
        },
        {
          day: "Tuesday",
          theme: "Mental Clarity & Focus",
          techniques: "Anulom Vilom, Bhramari, Vayu Mudra",
        },
        {
          day: "Wednesday",
          theme: "Core Strength & Energy",
          techniques: "Bhastrika, Kapalabhati, Surya Mudra",
        },
        {
          day: "Thursday",
          theme: "Cooling & Energizing",
          techniques: "Sheetali, Sheetkari, Surya Bhedana",
        },
        {
          day: "Friday",
          theme: "Integration & Harmony",
          techniques: "Integrated Flow + Combined Mudras + Sequential Bandhas",
        },
      ],
    },
  },
  "kids-yoga": {
    layout: "kids",
    title: "Kids Yoga: Glow & Grow",
    tagline: "Fun • Focus • Resilience",
    image: kidsImg,
    video: kidsVideo,
    fee: "₹1,000/month",
    duration: "60 minutes",
    mode: "Live Online",
    frequency: "5 days per week (Mon to wed , Sat & Sun)",
    timing: [
      "Monday to Wednesday",
      "Saturaday & Sunday",
      "6:00 – 7:00 AM IST",
      "7:00 – 8:00 AM IST",
      "Monday to Wednesday",
      "6:30 – 7:30 PM IST",
    ],
    description:
      "Glow & Grow is a consciously curated yoga experience for children that nurtures growth from the inside out. Designed to meet children where they are, blending imaginative storytelling, mindful movement, breath awareness, and gentle discipline to support healthy posture, emotional steadiness, and attentive presence.",
    highlights: [
      {
        title: "Integrated Fitness & Mindfulness Curriculum",
        description:
          "A thoughtfully structured program that blends physical movement with breath awareness and mindful practices, supporting balanced physical and mental development in children.",
      },
      {
        title: "Small Batch, Individual Attention",
        description:
          "Limited to a maximum of 12 students per batch, ensuring personalized guidance, safe practice, and meaningful teacher–student connection.",
      },
      {
        title: "Expert Pedagogy in Yoga & Child Development",
        description:
          "Instruction grounded in classical yoga principles and age-appropriate child development methodologies to nurture learning in a safe and engaging manner.",
      },
      {
        title: "Holistic Growth Beyond Asanas",
        description:
          "Encourages discipline, creativity, emotional awareness, and self-confidence, fostering well-rounded growth beyond physical postures.",
      },
    ],
    benefits: [
      "Strength & Flexibility: Enhancing motor skills and core fitness",
      "Concentration & Focus: Lengthening attention spans and mental clarity",
      "Mindfulness & Emotional Awareness: Self-regulation and 'big emotion' management",
      "Coordination & Body Intelligence: Posture, spatial awareness, motor control",
      "Social & Emotional Skills: Confidence, teamwork, and healthy group interaction",
    ],
    certification: {
      title: "Government Certification – Yoga Certification Board",
      description:
        "The Yoga Certification Board (YCB), functioning under the Ministry of AYUSH, conducts the Level 2 examinations every month.To ensure a smooth and guided examination process, we provide complete support and coordination assistance to our students. Each month, we share the upcoming examination schedules. Once a student feels fully prepared, they may select their preferred exam date, and we assist them with the registration and booking formalities to successfully complete the process.",
    },
    inclusions: [
      "Welcome & Warm-Up Games",
      "Breathing Exercises & Prāṇāyāma",
      "Āsanas & Story-Flow",
      "Mindfulness & Relaxation",
      "Meditation & Closing",
    ],
    whoShouldAttend:
      "Children aged 6-12 seeking physical health, emotional balance, and improved focus.",
    faqs: [
      {
        q: "Is it suitable for all children?",
        a: "Yes, designed for ages 5-12 with varying fitness and mobility levels.",
      },
      {
        q: "Do children need prior yoga experience?",
        a: "No, beginners are welcome with guidance for all skill levels.",
      },
      {
        q: "What makes this different from regular exercise?",
        a: "We cultivate body intelligence, self-regulation, and positive behavioral patterns beyond just physical fitness.",
      },
      {
        q: "Will my child receive a certificate?",
        a: "No. Focus is on safe practice, physical wellness, and emotional support.",
      },
    ],
    extra: {
      philosophy: [
        {
          title: "Constructive Energy",
          desc: "Channeling restlessness into calm, focused presence.",
        },
        {
          title: "Digital Resilience",
          desc: "Building healthy routines to balance screen use.",
        },
        {
          title: "Confident Expression",
          desc: "Fostering emotional balance and self-awareness.",
        },
      ],
    },
  },
  "intermediate-yoga": {
    layout: "standard",
    title: "Intermediate Yoga: Strength & Refinement",
    tagline: "Stability • Depth • Integration",
    image: intermediatee,
    // video: intermediateVideo,
    fee: "₹3,500 / month",
    duration: "75–90 minutes",
    mode: "Live Online Guided Sessions",
    frequency: "Daily Live Classes",
    timing: [
      "Monday–Friday",
      "5:00 – 6:00 AM IST",
      "6:00 – 7:00 AM IST",
      "7:00 – 8:00 AM IST",
      "6:00 – 7:00 PM IST",
      "7:00 – 8:00 PM IST",
    ],

    description:
      "This Intermediate Level Yoga program is designed for practitioners who have already built a foundational practice and are ready to progress further. The sessions focus on refinement of alignment, increased strength and stability, longer holds, and deeper integration of breath with movement. Along with dynamic asana practice, students are gradually introduced to Pranayama, Mudra, and Bandha practices for holistic yogic development.",

    highlights: [
      {
        title: "Progressive & Structured Practice",
        description:
          "A thoughtfully sequenced program that builds strength, flexibility, and endurance while refining alignment and flow.",
      },
      {
        title: "Integration of Classical Yogic Tools",
        description:
          "Includes guided instruction in Pranayama, Mudra, and Bandha to deepen awareness beyond physical postures.",
      },
      {
        title: "Longer & Dynamic Practice Sessions",
        description:
          "Designed to help practitioners sustain longer sessions with stability, control, and conscious breathing.",
      },
      {
        title: "Personalized Attention",
        description:
          "Conducted through small group or one-on-one formats to ensure safe progression and individual correction.",
      },
    ],

    benefits: [
      "Improved muscular strength, balance, and joint stability",
      "Enhanced coordination of breath and movement",
      "Greater endurance for sustained yoga practice",
      "Refined posture, alignment, and flow awareness",
      "Deeper body–mind integration and mental focus",
    ],

    inclusions: [
      "Advanced Warm-Up & Mobility Work",
      "Strength & Stability-Based Asana Practice",
      "Dynamic Flow Sequences",
      "Prāṇāyāma & Breath Regulation",
      "Mudra & Bandha Introduction",
      "Mindfulness & Closing Relaxation",
    ],

    whoShouldAttend: [
      "Practitioners with a basic yoga foundation",
      "Students looking to deepen strength and endurance",
      "Individuals ready for longer and more dynamic practices",
      "Those interested in refining alignment, flow, and breath control",
      "Practitioners seeking deeper understanding of yogic techniques",
    ],

    learningOutcomes: [
      "Ability to hold postures with greater stability and ease",
      "Improved breath awareness during dynamic movement",
      "Enhanced physical endurance and resilience",
      "Better focus, coordination, and mind–body awareness",
      "Introduction to subtle yogic practices beyond Asana",
    ],

    sessionType: ["One-on-One Session", "Small Group Session"],

    faqs: [
      {
        q: "Is this suitable if I am not a beginner but not advanced?",
        a: "Yes. This program is ideal for those who have basic experience and want to progress steadily without jumping into advanced practices.",
      },
      {
        q: "Will Pranayama and Mudra be taught?",
        a: "Yes. Pranayama, Mudra, and basic Bandha practices are introduced gradually based on readiness.",
      },
      {
        q: "Do I need to attend daily classes?",
        a: "Daily practice is recommended for best results, but flexibility is provided based on individual schedules.",
      },
      {
        q: "Is this physically intense?",
        a: "The practice is progressive and challenging, but always taught with safety, alignment, and breath awareness.",
      },
    ],

    extra: {
      philosophy: [
        {
          title: "Refinement Over Force",
          desc: "Emphasis on intelligent alignment and breath rather than pushing the body.",
        },
        {
          title: "Breath as the Anchor",
          desc: "Prāṇa-guided movement to sustain longer and deeper practices.",
        },
        {
          title: "From Gross to Subtle",
          desc: "Gradual transition from physical mastery toward internal awareness and discipline.",
        },
      ],
    },
  },
  "beginner-yoga": {
    layout: "standard",
    title: "Beginner Yoga: Foundations of Awareness",
    tagline: "Awareness • Stability • Consistency",
    image: beginner,
    // video: beginnerVideo,
    fee: "₹3,000 / month",
    duration: "60 minutes",
    mode: "Live Online Guided Sessions",
    frequency: "Daily Live Classes",
    timing: [
      "Monday–Friday",
      "5:00 – 6:00 AM IST",
      "6:00 – 7:00 AM IST",
      "7:00 – 8:00 AM IST",
      "6:00 – 7:00 PM IST",
      "7:00 – 8:00 PM IST",
    ],

    description:
      "This Beginner Level Yoga program is designed for newcomers to yoga and those returning after a long break. The practice focuses on building body awareness, basic strength, flexibility, and consistency through gentle and mindful movement. Sessions are paced slowly with clear guidance, ensuring students feel safe, supported, and confident as they establish a sustainable yoga practice.",

    highlights: [
      {
        title: "Strong Foundational Practice",
        description:
          "Introduces fundamental yoga postures, movements, and transitions with emphasis on safety and alignment.",
      },
      {
        title: "Mindful & Gentle Progression",
        description:
          "Practices are intentionally slow and accessible, allowing the body to adapt without strain.",
      },
      {
        title: "Breath Awareness & Coordination",
        description:
          "Students learn basic breath coordination to support movement, relaxation, and focus.",
      },
      {
        title: "Supportive Learning Environment",
        description:
          "Guided sessions with clear verbal cues and modifications suitable for all beginner bodies.",
      },
    ],

    benefits: [
      "Improved flexibility and joint mobility",
      "Development of basic muscular strength and stability",
      "Reduced physical stiffness and tension",
      "Enhanced body awareness and posture",
      "Calmer nervous system and improved focus",
    ],

    inclusions: [
      "Gentle Warm-Up & Joint Mobility",
      "Foundational Āsanas",
      "Basic Stretching & Strength-Building Movements",
      "Introductory Prāṇāyāma",
      "Relaxation & Body Awareness Practices",
    ],

    whoShouldAttend: [
      "Absolute beginners with no prior yoga experience",
      "Individuals returning to practice after a long break",
      "Those seeking gentle and mindful movement",
      "Anyone looking to improve flexibility and basic strength",
    ],

    learningOutcomes: [
      "Comfort with basic yoga postures and movements",
      "Improved body awareness and alignment",
      "Basic understanding of breath coordination",
      "Increased flexibility and reduced physical stiffness",
    ],

    sessionType: ["One-on-One Session", "Group Session"],

    faqs: [
      {
        q: "Is this suitable if I have never done yoga before?",
        a: "Yes. This program is designed specifically for absolute beginners with step-by-step guidance.",
      },
      {
        q: "Do I need to be flexible to start?",
        a: "No. Flexibility develops naturally through regular practice; it is not a requirement.",
      },
      {
        q: "Are the classes physically intense?",
        a: "No. The sessions are gentle, mindful, and paced appropriately for beginners.",
      },
      {
        q: "Will breathing techniques be taught?",
        a: "Yes. Basic Prāṇāyāma and breath awareness are introduced in a simple and safe manner.",
      },
    ],

    extra: {
      philosophy: [
        {
          title: "Awareness Before Intensity",
          desc: "Building mindful connection with the body before progressing to stronger practices.",
        },
        {
          title: "Consistency Over Complexity",
          desc: "Encouraging regular practice through simple, repeatable movements.",
        },
        {
          title: "Gentle Strength",
          desc: "Developing stability and flexibility without force or strain.",
        },
      ],
    },
  },
  "advanced-yoga": {
    layout: "standard",
    title: "Advanced Yoga: Mastery & Inner Transformation",
    tagline: "Discipline • Depth • Mastery",
    image: advanced, // replace with your advanced image import
    // video: advancedVideo,
    fee: "₹5,500 / month",
    duration: "90–120 minutes",
    mode: "Live Online Advanced Practice Sessions",
    frequency: "Daily Live Classes",
    timing: [
      "Monday–Friday",
      "5:00 – 6:00 AM IST",
      "6:00 – 7:00 AM IST",
      "7:00 – 8:00 AM IST",
      "6:00 – 7:00 PM IST",
      "7:00 – 8:00 PM IST",
    ],

    description:
      "The Advanced Level Yoga program is designed for experienced practitioners seeking mastery, discipline, and profound inner transformation. This intensive program goes far beyond physical postures, emphasizing advanced asana practices, sustained holds, refined alignment, and deep internal awareness. Students are guided through advanced Prāṇāyāma, Bandha, Mudra, and meditative practices to cultivate strength, stability, energetic control, and inner refinement as a complete yogic discipline.",

    highlights: [
      {
        title: "Intensive & Disciplined Practice",
        description:
          "A rigorous and structured approach aimed at mastery of advanced asanas, breath control, and internal stability.",
      },
      {
        title: "Advanced Yogic Techniques",
        description:
          "In-depth exploration of Prāṇāyāma, Bandha, Mudra, and meditative practices for deeper inner transformation.",
      },
      {
        title: "Long & Sustained Sessions",
        description:
          "Extended practice duration to build endurance, precision, and unwavering focus in both body and mind.",
      },
      {
        title: "Personalized Advanced Guidance",
        description:
          "One-on-one and group formats ensure safe progression, subtle corrections, and individualized refinement.",
      },
    ],

    benefits: [
      "Mastery and stability in advanced asana practice",
      "Deeper awareness of breath, bandhas, and internal locks",
      "Improved meditative stability and sustained focus",
      "Enhanced physical, mental, and energetic discipline",
      "Profound body–mind–energy integration",
    ],

    inclusions: [
      "Advanced Warm-Up & Preparatory Techniques",
      "Advanced Asana & Sustained Holds",
      "Intensive Strength & Stability Sequences",
      "Advanced Prāṇāyāma Practices",
      "Bandha & Mudra Refinement",
      "Meditation & Deep Internal Awareness Practices",
    ],

    whoShouldAttend: [
      "Experienced yoga practitioners",
      "Those seeking depth beyond physical practice",
      "Students interested in advanced techniques and discipline",
      "Practitioners aiming for mastery and inner refinement",
      "Individuals committed to long-term yogic discipline",
    ],

    learningOutcomes: [
      "Ability to perform advanced asanas with stability and control",
      "Deeper awareness of breath, bandhas, and internal locks",
      "Improved meditative stability and mental focus",
      "Greater physical, mental, and energetic discipline",
      "Refined internal awareness and yogic maturity",
    ],

    sessionType: ["One-on-One Session", "Group Session"],

    faqs: [
      {
        q: "Is this program suitable for all practitioners?",
        a: "No. This program is strictly designed for experienced practitioners with a strong foundation in yoga.",
      },
      {
        q: "Is meditation a core part of the program?",
        a: "Yes. Meditation and internal awareness practices are integral components of the advanced curriculum.",
      },
      {
        q: "How intensive is the practice?",
        a: "The practice is demanding and disciplined, focusing on mastery, precision, and sustained effort.",
      },
      {
        q: "Is this a short-term course?",
        a: "No. This is a 3-month structured program designed for serious and committed practitioners.",
      },
    ],

    extra: {
      philosophy: [
        {
          title: "Discipline as the Path",
          desc: "Consistent and rigorous practice as the foundation for mastery and inner transformation.",
        },
        {
          title: "Mastery Beyond Asana",
          desc: "Moving beyond physical excellence toward control of breath, energy, and awareness.",
        },
        {
          title: "From Subtle to Sublime",
          desc: "Refinement of internal practices leading toward meditative stability and inner clarity.",
        },
      ],
    },
  },
  prenatal: {
    layout: "prenatal",
    title: "Maternity Care: Pre & Post Natal Yoga",
    tagline: "A Holistic Journey of Care, Awareness & Conscious Motherhood",
    image: prenatalImg,
    video: prenatalVideo,
    fee: "₹4,000/month",
    duration: "60 minutes",
    mode: "Live Online",
    frequency: "4 days per week",
    timing: [
      "Monday to Friday",
      "6:00 – 7:00 AM IST",
      "7:00 – 8:00 AM IST",
      "10:00 - 11:00 AM IST",
      "6:00 – 7:00 PM IST",
      "7:00 – 8:00 PM IST",
    ],
    description:
      "Experience a dedicated support system for the most transformative journey of your life. We integrate Sarira (Body), Prana (Energy), and Citta (Mind) to support you and your baby through every milestone. This program moves beyond simple exercise; it is a consciously curated journey merging classical yogic principles with modern safety adaptations.",
    highlights: [
      {
        title: "Trimester-Wise Practice with Absolute Safety",
        description:
          "Carefully designed practices aligned with each trimester, ensuring maternal safety, fetal well-being, and appropriate physical and emotional support throughout pregnancy.",
      },
      {
        title: "Sanskrit Sound Healing & Mantra Therapy",
        description:
          "Gentle integration of Sanskrit mantras and shlokas to promote emotional balance, stress reduction, and deep prenatal bonding through sound vibration.",
      },
      {
        title: "Breathwork for Labor & Birthing Support",
        description:
          "Specialized pranayama techniques focused on pain management, stamina, relaxation, and conscious breathing to support the birthing process.",
      },
      {
        title: "Anatomical Core & Pelvic Health Recovery",
        description:
          "Focused practices to strengthen the pelvic floor and core muscles, supporting pregnancy comfort and aiding effective postpartum recovery.",
      },
      {
        title: "Small-Batch Integrity & Personalized Guidance",
        description:
          "Limited group sizes to ensure close supervision, individualized modifications, and emotional reassurance for every mother.",
      },
      {
        title: "Fourth Trimester Postpartum Support",
        description:
          "Dedicated guidance for postnatal healing, hormonal balance, gentle recovery, and emotional well-being after childbirth.",
      },
    ],
    certification: {
      title: "Government Certification – Yoga Certification Board",
      description:
        "The Yoga Certification Board (YCB), functioning under the Ministry of AYUSH, conducts the Level 2 examinations every month.To ensure a smooth and guided examination process, we provide complete support and coordination assistance to our students. Each month, we share the upcoming examination schedules. Once a student feels fully prepared, they may select their preferred exam date, and we assist them with the registration and booking formalities to successfully complete the process.",
    },
    benefits: [
      "Pelvic floor strengthening for smoother delivery",
      "Spinal integrity and lower back pain relief",
      "Restorative strength maintenance during pregnancy",
      "Postnatal core and pelvic rehabilitation",
      "Managing postpartum stress, baby blues, and exhaustion",
      "Fetal bonding through visualization and sound",
    ],
    inclusions: [
      "Live Guided Sessions with trimester-specific modifications",
      "Sanskrit & Sound Healing",
      "Pranayama for Birthing",
      "Restorative Yoga & Yoga Nidra",
      "Postural Guidance for daily ergonomics",
      "Home Practice Support",
    ],
    whoShouldAttend:
      "Expecting mothers, new mothers seeking postnatal recovery, and women planning for pregnancy. Medical clearance required.",
    faqs: [
      {
        q: "Is this suitable for first-time mothers?",
        a: "Yes. Classes are designed to guide beginners safely, with modifications tailored for every trimester and postnatal stage.",
      },
      {
        q: "Do I need prior yoga experience?",
        a: "No. Beginners are welcome. Practices are gradual, safe, and fully supportive.",
      },
      {
        q: "Will this program help me prepare for labor?",
        a: "Absolutely. Breathwork, pelvic floor awareness, and gentle postures help build strength, flexibility, and mental preparedness for delivery.",
      },
      {
        q: "Can I practice if I am postnatal?",
        a: "Yes. Classes are adapted for postnatal recovery, focusing on core rebuilding, flexibility, and mindful movement.",
      },
      {
        q: "Do I need props?",
        a: "Optional props such as blocks, bolsters, or cushions are recommended for comfort, support, and alignment, but they are not mandatory.",
      },
      {
        q: "Will I receive a certificate?",
        a: "No. This program focuses on safe practice, physical wellness, and emotional support rather than formal certification.",
      },
      {
        q: "Can this class be done at home?",
        a: "Yes. Home guidance is provided, but live sessions ensure correct alignment, safety, and personalized modifications.",
      },
      {
        q: "How is this class different from regular yoga?",
        a: "Practices are specifically modified for prenatal and postnatal stages, with a strong emphasis on safety, energy management, and holistic wellness.",
      },
      {
        q: "Can this program help with stress and mental well-being?",
        a: "Yes. Breathwork, meditation, and mindfulness techniques help reduce anxiety, improve emotional balance, and support mental clarity.",
      },
      {
        q: "Will this help me regain physical fitness after delivery?",
        a: "Yes. Postnatal sequences are designed to restore core strength, flexibility, posture, and overall vitality.",
      },
    ],
    extra: {
      pillars: [
        {
          title: "Pre-Natal Yoga (Conscious Birthing)",
          focus: "Preparation & Connection",
          items: [
            "Pelvic floor strengthening",
            "Breathwork for labor management",
            "Fetal bonding through Pranayama",
            "Alleviating pregnancy discomforts",
          ],
        },
        {
          title: "Post-Natal Yoga (Restoration)",
          focus: "Recovery & Rebuilding",
          items: [
            "Core and pelvic floor rehabilitation",
            "Correcting 'mummy-posture'",
            "Managing postpartum stress",
            "Rebuilding emotional balance",
          ],
        },
      ],
      threeLayers: [
        {
          title: "Sarira (Body)",
          subtitle: "Physical Stability & Alignment",
          items: [
            "Pelvic Health",
            "Spinal Integrity",
            "Restorative Strength",
            "Postnatal Rehabilitation",
          ],
        },
        {
          title: "Prana (Energy)",
          subtitle: "Vitality & Vital Force",
          items: [
            "Breath for Labor",
            "Energy Conservation",
            "Circulatory Boost",
            "Postpartum Rejuvenation",
          ],
        },
        {
          title: "Citta (Mind)",
          subtitle: "Emotional Stability & Bonding",
          items: [
            "Maternal Confidence",
            "Emotional Balance",
            "Fetal Bonding",
            "Attentive Presence",
          ],
        },
      ],
    },
  },
};

const allPrograms = Object.entries(programData);

// ── Icon mapping ──
const iconMap: Record<string, React.ElementType> = {
  Heart,
  Brain,
  Bone,
  Activity,
  Baby,
  Stethoscope,
  Wind: Zap,
};

// ── Shared Components ──
const QuickInfoBar = ({ program }: { program: ProgramBase }) => (
  <div className="flex flex-wrap justify-center gap-3 mt-6">
    {/* <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm">
      <IndianRupee className="w-4 h-4 text-primary" /> {program.fee}
    </div> */}
    <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm">
      <Clock className="w-4 h-4 text-primary" /> {program.duration}
    </div>
    <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm">
      <Monitor className="w-4 h-4 text-primary" /> {program.mode}
    </div>
    <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm">
      <Calendar className="w-4 h-4 text-primary" /> {program.frequency}
    </div>
  </div>
);

const FAQBlock = ({ faqs }: { faqs: { q: string; a: string }[] }) => (
  <AnimateOnScroll>
    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
      Frequently Asked Questions
    </h2>
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="bg-secondary rounded-xl border border-border group"
        >
          <summary className="p-4 font-semibold text-foreground cursor-pointer flex items-center justify-between list-none">
            {faq.q}
            <svg
              className="w-5 h-5 text-primary transition-transform group-open:rotate-180 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="px-4 pb-4 text-muted-foreground">{faq.a}</p>
        </details>
      ))}
    </div>
  </AnimateOnScroll>
);

const Sidebar = ({ program, slug }: { program: ProgramBase; slug: string }) => (
  <div className="sticky top-24 space-y-6">
    <div className="bg-secondary rounded-2xl p-6 border border-border">
      <h3 className="font-serif text-xl font-bold text-foreground mb-4">
        Schedule
      </h3>
      <div className="space-y-2">
        {program.timing.map((t, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span className="text-foreground">{t}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="gradient-green rounded-2xl p-6 text-primary-foreground">
      <h3 className="font-serif text-white text-xl font-bold mb-2">
        Ready to Enroll?
      </h3>
      <p className="text-sm text-white opacity-90 mb-4">
        Start your transformation today.
      </p>
      <Link
        to="/contact"
        className="block w-full bg-background text-primary py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
      >
        Contact Us
      </Link>
    </div>
    <div className="bg-secondary rounded-2xl p-6 border border-border">
      <h3 className="font-serif text-lg font-bold text-foreground mb-3">
        Other Programs
      </h3>
      <div className="space-y-2">
        {allPrograms
          .filter(([key]) => key !== slug)
          .slice(0, 4)
          .map(([key, p]) => (
            <Link
              key={key}
              to={`/programs/${key}`}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
            >
              → {p.title}
            </Link>
          ))}
      </div>
      <Link
        to="/allprograms"
        className="block text-sm text-primary font-semibold mt-3"
      >
        View All Programs →
      </Link>
    </div>
  </div>
);

// ── YCB Layout (for Level 1/2/3) ──
const YCBLayout = ({
  program,
  slug,
}: {
  program: ProgramBase & { extra?: Record<string, unknown> };
  slug: string;
}) => {
  const extra = program.extra as {
    examStructure: { theory: string; practical: string; totalMarks: string };
    feeTable: {
      indian: string;
      foreign: string;
      examIndian: string;
      examForeign: string;
    };
    hours: string;
    careers: string[];
  };

  const [selectedProgram, setSelectedProgram] = useState<string>("all");
  const [showExamDetails, setShowExamDetails] = useState(false);

  const allProgramsData = Object.entries(programData);

  // Filtered timetable
  const timetablePrograms =
    selectedProgram === "all"
      ? allProgramsData
      : allProgramsData.filter(([key]) => key === selectedProgram);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[80vh] overflow-hidden">
        <video
          src={program.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 space-y-6 md:space-y-8">
          <AnimateOnScroll>
            <Link
              to="/"
              className="inline-flex gap-2 mb-5 text-sm text-white font-medium hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase">
                {extra.hours} Hours
              </span>
              <span className="bg-secondary text-foreground px-4 py-1 rounded-full text-xs md:text-sm font-bold">
                Govt. Certificate
              </span>
            </div>
            <h1 className="font-serif mt-5 text-3xl md:text-5xl font-bold text-white leading-snug md:leading-tight">
              {program.title}
            </h1>
            <QuickInfoBar program={program} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tagline & Description */}
      <section className="py-16 bg-background">
        <p className="text-5xl text-center font-serif font-bold text-primary uppercase tracking-widest mb-8">
          {program.tagline}
        </p>
        <p className="container text-center text-primary  font-semibold leading-relaxed px-6 md:px-0 max-w-4xl">
          {program.description}
        </p>
      </section>

      {/* Exam & Fee Structure */}
      <section className="py-16 bg-gradient-to-r from-primary/40 via-background/40 to-primary/40 container mx-auto max-w-5xl space-y-12 rounded-3xl p-8">
        <AnimateOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Examination & Fee Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fee Details */}
            <div className="bg-primary/10 rounded-2xl p-8 border border-primary/30 shadow-lg">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <IndianRupee className="w-6 h-6 text-primary" /> Fee Details
              </h3>
              <div className="space-y-4 text-xl md:text-base font-bold text-foreground">
                <div className="flex justify-between">
                  <span className="text-primary">Indian Residents</span>
                  <span>{extra.feeTable.indian}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Foreign Nationals</span>
                  <span>{extra.feeTable.foreign}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Exam Fee (Indian)</span>
                  <span>{extra.feeTable.examIndian}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Exam Fee (Foreign)</span>
                  <span>{extra.feeTable.examForeign}</span>
                </div>
              </div>
            </div>

            {/* Exam Structure */}
            <div className="bg-primary/10 rounded-2xl p-8 border border-primary/30 shadow-lg">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" /> Exam Structure
              </h3>
              <div className="space-y-4 text-lg md:text-base font-bold text-foreground">
                <div className="flex justify-between">
                  <span className="text-primary">Theory</span>
                  <span>{extra.examStructure.theory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Practical</span>
                  <span>{extra.examStructure.practical}</span>
                </div>
                <div className="flex justify-between border-t border-primary/30 pt-2">
                  <span className="text-primary">Total Marks</span>
                  <span>{extra.examStructure.totalMarks}</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-background container mx-auto max-w-3xl">
        <div className="bg-gradient-to-r from-primary/40 via-background/40 to-primary/40 rounded-lg p-6 border border-border shadow-md mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Program Schedule
          </h2>
          <h3 className="font-serif text-lg text-primary font-bold text-foreground mb-2 text-center">
            {program.title}
          </h3>
          <p className="flex items-center justify-center text-primary gap-2 pb-3  font-semibold text-md">
            Monday to Friday
          </p>

          <div className="space-y-3">
            {/* Only map if program is YCB Level 1 */}
            {slug === "ycb-level-1" ? (
              program.timing.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center font-semibold justify-center gap-2 text-md"
                >
                  <Clock className="w-4 h-4 text-primary  shrink-0" />
                  <span className="text-foreground">{t}</span>
                </div>
              ))
            ) : (
              <>
                <div className="space-y-3">
                  {program.timing.map((time, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-2 text-md font-semibold"
                    >
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground">{time}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Highlights, Careers, Benefits, Inclusions */}
      <section className="mx-auto space-y-16">
        <section className="py-24 bg-gradient-to-b from-primary/10 via-background to-primary/10 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl px-6">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                Highlights of Study
              </h2>

              <div className="space-y-6 max-w-3xl mx-auto">
                {program.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />

                    <div className="text-left">
                      <h4 className="font-serif text-lg font-semibold text-foreground">
                        {h.title}
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        <section className="bg-background relative overflow-hidden">
          <div className="container mx-auto max-w-3xl px-6">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                Career Opportunities
              </h2>
              <div className="space-y-5">
                {extra.careers.map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Star className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <p className="text-foreground text-base iems-center leading-relaxed font-medium">
                      {c}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <AnimateOnScroll>
          <section className="py-24 bg-gradient-to-br from-[#0b1f1a] via-[#0f2f26] to-[#0b1f1a] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
              {/* Title */}
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                {program.certification.title}
              </h2>

              {/* Description */}
              <p className="text-white/80 leading-relaxed max-w-3xl mx-auto mb-10">
                {program.certification.description}
              </p>

              {/* CTA Button */}
              <Link to="/contact">
                <button className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold tracking-wide hover:scale-105 transition-transform shadow-xl">
                  Apply for Certification
                </button>
              </Link>
            </div>
          </section>
        </AnimateOnScroll>
        {/* Benefits */}
        <AnimateOnScroll>
          <section className="pb-10">
            {/* Center wrapper */}
            <div className="max-w-5xl mx-auto px-6">
              {/* Heading */}
              <h2 className="font-serif text-2xl md:text-3xl text-center font-bold text-foreground mb-10">
                Why Choose This Course?
              </h2>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {program.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <BookOpen className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <p className="text-md text-foreground leading-relaxed">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Inclusions */}
        <AnimateOnScroll>
          <section className="relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 -z-10">
              <div
                className="absolute top-1/2 left-1/2 h-[700px] w-[700px] 
        -translate-x-1/2 -translate-y-1/2 
        rounded-full bg-primary/15 blur-[140px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary/30" />
            </div>

            {/* Centered Container */}
            <div className="max-w-5xl mx-auto px-6">
              {/* Content Panel */}
              <div className="bg-gradient-to-r from-primary/40 via-background/40 to-primary/40 rounded-3xl p-8 md:p-14 shadow-xl border border-border space-y-10">
                {/* Heading */}
                <div className="text-center space-y-4">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    What’s Included
                  </h2>
                  <p className="max-w-3xl mx-auto text-foreground/80 leading-relaxed">
                    At{" "}
                    <span className="font-semibold text-foreground">
                      Shadyuktha Yog
                    </span>
                    , excellence is not optional — it is the standard. This
                    program is thoughtfully curated to deliver a disciplined,
                    immersive, and professionally guided learning journey that
                    prepares you for real-world teaching and certification
                    success.
                  </p>
                </div>

                {/* Inclusions List */}
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
                  {program.inclusions.map((inc, i) => {
                    const [emphasis, rest] = inc.split(" – ");

                    return (
                      <div key={i} className="flex items-start gap-4">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />

                        <p className="text-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">
                            {emphasis}
                          </span>
                          {rest && (
                            <span className="text-foreground/75">
                              {" "}
                              – {rest}
                            </span>
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <section className=" pt-10 bg-gradient-to-b from-secondary/10 via-background to-secondary/10">
            <div className="max-w-6xl mx-auto px-6 space-y-16">
              {/* ================= HEADER ================= */}
              <header className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  {program.examination.title}
                </h2>

                <p className="text-foreground/80 leading-relaxed">
                  {program.examination.description}
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => setShowExamDetails(!showExamDetails)}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full
                           bg-primary text-primary-foreground font-medium
                           hover:bg-primary/90 transition"
                  >
                    {showExamDetails ? "Show Less" : "Know More"}
                  </button>
                </div>
              </header>

              {/* ================= EXPANDABLE CONTENT ================= */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden
              ${showExamDetails ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="space-y-10 ">
                  <p className="text-2xl uppercase text-center font-serif tracking-widest text-foreground font-bold">
                    {program.examination.introTagline}
                  </p>
                  {/* ================= EXAM STRUCTURE ================= */}
                  <section className="grid md:grid-cols-2 gap-12">
                    {program.examination.exams.map((exam, i) => (
                      <div key={i} className="space-y-5">
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {i + 1}. {exam.title}
                        </h3>

                        <ul className="space-y-2 pl-4 border-l-2 border-primary/30">
                          {exam.items.map((item, j) => (
                            <li key={j} className="text-foreground/80">
                              <span className="font-semibold text-foreground">
                                {item.label}:
                              </span>{" "}
                              {item.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </section>

                  {/* ================= CERTIFICATION NOTE ================= */}
                  <section className="bg-primary/10 border-l-4 border-primary rounded-2xl p-6 md:p-8">
                    <p className="text-foreground">
                      {program.examination.certificationNote}
                    </p>
                  </section>

                  {/* ================= MARK DISTRIBUTION ================= */}
                  <section className="space-y-5">
                    <h3 className="font-serif text-2xl font-bold text-center text-foreground">
                      Mark Distribution
                    </h3>

                    <p className="text-center text-foreground/80">
                      <strong>Total Marks:</strong>{" "}
                      {program.examination.totalMarks}
                    </p>

                    {[
                      program.examination.theoryTable,
                      program.examination.practicalTable,
                    ].map((table, i) => (
                      <div key={i} className="overflow-x-auto">
                        <h4 className="font-serif text-xl font-semibold mb-4 text-foreground">
                          {table.title}
                        </h4>

                        <table className="w-full border border-border text-sm">
                          <thead className="bg-secondary/40">
                            <tr>
                              <th className="p-3 text-left">Unit</th>
                              <th className="p-3 text-left">Description</th>
                              <th className="p-3 text-right">Marks</th>
                            </tr>
                          </thead>

                          <tbody>
                            {table.rows.map((row, j) => (
                              <tr key={j} className="border-t">
                                <td className="p-3">{row.unit}</td>
                                <td className="p-3">{row.name}</td>
                                <td className="p-3 text-right">{row.marks}</td>
                              </tr>
                            ))}

                            <tr className="border-t font-semibold">
                              <td className="p-3" colSpan={2}>
                                Total
                              </td>
                              <td className="p-3 text-right">{table.total}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </section>

                  {/* ================= PASSING CRITERIA ================= */}
                  <section className="bg-secondary/30 rounded-2xl p-6 md:p-8 text-center">
                    <p className="text-foreground">
                      <strong>Passing Criteria:</strong>{" "}
                      {program.examination.passingCriteria}
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>
      </section>

      {/* Who Should Attend */}
      {/* <section className="py-16 container mx-auto max-w-5xl">
        <AnimateOnScroll>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Who Should Attend?
          </h2>
          <p className="text-muted-foreground leading-relaxed bg-secondary p-6 rounded-xl shadow-md">
            {program.whoShouldAttend}
          </p>
        </AnimateOnScroll>
      </section> */}

      {/* Timetable Card for Current Program */}
      {/* <section className="py-16 bg-background container mx-auto max-w-7xl">
  <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
    Program Schedule
  </h2>

  <div className="overflow-x-auto">
    <div className="bg-secondary rounded-2xl shadow-md border border-border p-4">
      <div className="grid grid-cols-8 text-center font-semibold bg-primary text-white rounded-t-2xl">
        <div className="px-2 py-2 border-r border-white">Time</div>
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
          (day) => (
            <div key={day} className="px-2 py-2 border-l border-white">
              {day}
            </div>
          )
        )}
      </div>

      <div className="divide-y divide-border">
        {[
          "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
          "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"
        ].map((time) => (
          <div key={time} className="grid grid-cols-8 text-center">
        
            <div className="px-2 py-2 border-r border-border font-medium">{time}</div>

         
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
              (day) => {
                const session = program.timing.find((t) => t.includes(time)) || "-";
                return (
                  <div
                    key={`${day}-${time}`}
                    className="px-2 py-2 border-l border-border text-sm"
                  >
                    {session}
                  </div>
                );
              }
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section> */}

      <AnimateOnScroll>
        <section className="py-10 bg-gradient-to-b from-secondary/20 via-background to-secondary/20">
          {/* Centered Container */}
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            {/* Fee Structure Section */}
            <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border space-y-6">
              <h3 className="font-serif text-2xl font-bold text-foreground text-center">
                {program.feeStructure.title}
              </h3>

              <p className="text-sm text-foreground/70 text-center max-w-3xl mx-auto">
                {program.feeStructure.note}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-border text-sm rounded-xl overflow-hidden">
                  <thead className="bg-secondary/40">
                    <tr>
                      {program.feeStructure.table.headers.map((h, i) => (
                        <th key={i} className="p-3 text-left font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {program.feeStructure.table.rows.map((row, i) => (
                      <tr key={i} className="border-t">
                        <td className="p-3">{row.category}</td>
                        <td className="p-3">{row.courseFee}</td>
                        <td className="p-3">{row.examFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Re-Examination Section */}
            <div className="bg-secondary/20 rounded-3xl p-8 md:p-12 border border-border space-y-8">
              <h3 className="font-serif text-2xl font-bold text-foreground text-center">
                {program.reExamination.title}
              </h3>

              <div className="space-y-6 max-w-4xl mx-auto">
                {program.reExamination.scenarios.map((scenario, i) => (
                  <div
                    key={i}
                    className="border-l-4 border-primary bg-background/70 rounded-xl p-6 space-y-3"
                  >
                    <h4 className="font-semibold text-foreground text-lg">
                      {scenario.condition}
                    </h4>

                    <ul className="space-y-2 list-disc list-inside text-foreground/80">
                      {scenario.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        {program.downloadSyllabus && (
          <section className="py-10 bg-secondary/20">
            <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
              <h3 className="font-serif text-3xl font-bold text-foreground">
                {program.downloadSyllabus.title}
              </h3>

              <p className="text-foreground/80 max-w-3xl mx-auto">
                {program.downloadSyllabus.description}
              </p>

              <a
                href={program.downloadSyllabus.file.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                   bg-primary text-white font-semibold
                   hover:bg-primary/90 transition-all"
              >
                ⬇️ {program.downloadSyllabus.file.label}
                <span className="text-sm opacity-80">
                  ({program.downloadSyllabus.file.type})
                </span>
              </a>
            </div>
          </section>
        )}
      </AnimateOnScroll>
      <AnimateOnScroll>
        {program.sampleCertificate && (
          <section className="py-10 bg-gradient-to-b from-background via-secondary/30 to-background">
            <div className="max-w-6xl mx-auto px-6 space-y-8">
              {/* Header */}
              <div className="text-center space-y-5">
                <h3 className="font-serif text-3xl font-bold text-foreground">
                  {program.sampleCertificate.title}
                </h3>

                <p className="max-w-3xl mx-auto text-foreground/80">
                  {program.sampleCertificate.description}
                </p>
              </div>

              {/* Content */}
              <div>
                {/* Highlights */}
                <div className="flex justify-center items-center mb-5 w-full">
                  <ul className="space-y-5 text-foreground/80 max-w-md ">
                    {program.sampleCertificate.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary text-lg leading-none mt-1">
                          ✔
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Certificate Preview */}
                <section className="bg-secondary/20 rounded-3xl p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <img
                      src={program.sampleCertificate.preview.image}
                      alt={program.sampleCertificate.preview.label}
                      className="rounded-xl shadow-lg mx-auto max-w-full"
                    />

                    <p className="text-sm text-foreground/60">
                      {program.sampleCertificate.preview.label}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </section>
        )}
      </AnimateOnScroll>

      {/* CTA Button at Bottom */}
      <section className="relative bg-primary py-24 text-center">
        {/* Optional Background Shape / Overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-snug">
            Ready to Become a Certified Yoga Instructor?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join our YCB-certified Yoga Programs and transform your passion into
            a profession. Step into the world of wellness, teaching, and
            personal growth.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-white text-green-700 hover:bg-green-50 font-bold text-xl md:text-2xl px-10 md:px-14 py-5 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            Enroll Now
          </Link>
        </div>
      </section>

      {/* Other Programs */}
      {/* <section className="py-16 container mx-auto max-w-5xl">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
          Explore Other Programs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProgramsData
            .filter(([key]) => key !== slug)
            .map(([key, p]) => (
              <Link
                key={key}
                to={`/programs/${key}`}
                className="block bg-secondary p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="font-serif font-bold text-lg mb-2 text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
              </Link>
            ))}
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 container mx-auto max-w-5xl">
        <FAQBlock faqs={program.faqs} />
      </section>
    </>
  );
};

const YogaProgramLayout = ({
  program,
  slug,
}: {
  program: ProgramBase & { extra?: Record<string, unknown> };
  slug: string;
}) => {
  if (!program) {
    return (
      <div className="p-10 text-center text-red-600">Program not found</div>
    );
  }

  // ---------- SLUG → LEVEL ----------
  const levelLabel = slug.includes("beginner")
    ? "Beginner Level"
    : slug.includes("intermediate")
      ? "Intermediate Level"
      : slug.includes("advanced")
        ? "Advanced Level"
        : "Yoga Program";

  const extra = program.extra as
    | {
        philosophy?: { title: string; desc: string }[];
      }
    | undefined;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        {program.image && (
          <img
            src={program.image}
            alt={program.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <AnimateOnScroll>
              {/* Back */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white font-medium mb-5 hover:underline justify-center"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Programs
              </Link>

              {/* Badge */}
              <div className="flex justify-center mb-4">
                <span className="bg-primary/90 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                  {levelLabel}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
                {program.title}
              </h1>

              {/* Info Bar */}
              <div className="flex justify-center">
                <QuickInfoBar program={program} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll>
            {/* Tagline */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-serif font-bold font-serif text-foreground uppercase tracking-widest mb-6">
                {program.tagline}
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {program.description}
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* ================= MAIN ================= */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Program Highlights
                </h2>
                <div className="space-y-4">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="font-serif text-lg font-semibold">
                          {h.title}
                        </h4>
                        <p className="text-sm text-foreground/80">
                          {h.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Inclusions */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  What the Program Includes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-secondary rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{inc}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Learning Outcomes */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Learning Outcomes
                </h2>
                <div className="space-y-3">
                  {program.learningOutcomes.map((o, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{o}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Who Should Attend
                </h2>

                <div className="space-y-3">
                  {program.whoShouldAttend.map((person, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{person}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <FAQBlock faqs={program.faqs} />
            </div>

            {/* ================= SIDEBAR ================= */}
            <div className="lg:col-span-1">
              <Sidebar program={program} slug={slug} />
            </div>
          </div>
        </div>
        {extra?.philosophy && (
          <section className="relative w-full flex justify-center mt-20">
            <AnimateOnScroll>
              <div className="max-w-4xl w-full text-center rounded-3xl bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-white px-8 py-14 shadow-2xl border border-white/20">
                {/* Title */}
                {/* <h2 className="font-serif text-white text-3xl font-bold mb-6 tracking-wide">
          Yogic Philosophy
        </h2> */}

                {/* Philosophy Items */}
                <div className="space-y-8">
                  {extra.philosophy.map((p, i) => (
                    <div key={i}>
                      <h4 className="font-serif text-xl text-white font-semibold mb-2">
                        {p.title}
                      </h4>
                      <p className="text-white/90 leading-relaxed text-base">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-primary font-bold px-10 py-4 rounded-full text-sm md:text-base uppercase tracking-widest hover:scale-105 transition"
                  >
                    Begin the Inner Journey
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </section>
        )}

        {/* ================= FEE ================= */}
        {/* <section className="relative w-full flex items-center justify-center mt-12">
          <p className="inline-block px-8 py-3 rounded-full bg-primary text-white text-sm md:text-base font-semibold uppercase tracking-widest shadow-lg">
            {program.fee}
          </p>
        </section> */}
      </section>
    </>
  );
};

// ── Therapeutic Layout ──
const TherapeuticLayout = ({
  program,
  slug,
}: {
  program: ProgramBase & { extra?: Record<string, unknown> };
  slug: string;
}) => {
  const extra = program.extra as {
    dpytPhases: {
      phase1: { title: string; items: string[] };
      phase2: { title: string; items: string[] };
    };
    conditions: { icon: string; label: string; items: string[] }[];
    sessionTypes: { type: string; ideal: string; fee: string }[];
  };
   const [formData, setFormData] = useState({
    personalDetails: { fullName: "", age: "", occupation: "", primaryGoal: "" },
    medicalHistory: { womensHealth: [], spine: [], metabolic: [], mental: [] },
    lifestyle: { painLevel: "", sleepQuality: "", energyLevels: "", stressLevels: "" },
    precautions: "",
    bodyAwareness: "",
    consent: { yogaUnderstanding: false, healthUpdates: false, committedDays: "" },
  });

  // Handle checkbox arrays
  const handleCheckboxGroup = (section: string, field: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      const arr = prev[section][field];
      const updated = checked ? [...arr, value] : arr.filter((v: string) => v !== value);
      return { ...prev, [section]: { ...prev[section], [field]: updated } };
    });
  };

  // Handle normal input/select change
  const handleChange = (section: string, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  // Handle consent checkboxes
  const handleConsent = (field: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consent: { ...prev.consent, [field]: checked },
    }));
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://ascogonial-corene-undecomposed.ngrok-free.dev/api/therapy", formData);
      alert("Therapy intake submitted successfully!");
      // Reset form if needed
      setFormData({
        personalDetails: { fullName: "", age: "", occupation: "", primaryGoal: "" },
        medicalHistory: { womensHealth: [], spine: [], metabolic: [], mental: [] },
        lifestyle: { painLevel: "", sleepQuality: "", energyLevels: "", stressLevels: "" },
        precautions: "",
        bodyAwareness: "",
        consent: { yogaUnderstanding: false, healthUpdates: false, committedDays: "" },
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <>
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={program.video} // 🔁 add video field in program object
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/10" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <AnimateOnScroll>
              {/* Back Button */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white font-medium mb-6 hover:underline justify-center"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>

              {/* Badge */}
              {/* <div className="flex justify-center mb-4">
                <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Clinical Healing
                </span>
              </div> */}

              {/* Tagline */}
              <p className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
                {program.tagline}
              </p>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                {program.title}
              </h1>

              {/* Info Bar */}
              <div className="flex justify-center">
                <QuickInfoBar program={program} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll>
            <div className="flex justify-center m">
              <div className="max-w-4xl text-center">
                <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                  The Healing Philosophy
                </h2>
                <p className="font-serif text-xl font-bold text-foreground mb-8">
                  Science Meets Spirit
                </p>

                <div className="text-foreground text-md leading-relaxed">
                  {program.description}
                </div>
                <div className="my-8 flex justify-center">
                  <p
                    className="
  max-w-3xl
  bg-white/10
  backdrop-blur-lg
  border border-white/30
  rounded-xl
  px-6 py-5
  text-md italic
  text-foreground
  text-center
  shadow-lg
"
                  >
                    “Yoga Therapy is the process of empowering individuals to
                    progress toward improved health and well-being through the
                    application of the teachings and practices of Yoga.”
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1  my-16 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Conditions */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Specialized Care Categories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {extra.conditions.map((c) => {
                    const Icon = iconMap[c.icon] || Heart;
                    return (
                      <div
                        key={c.label}
                        className="bg-secondary rounded-xl p-5 border border-border"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <h3 className="font-bold font-serif text-foreground text-lg">
                            {c.label}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {c.items.map((item) => (
                            <span
                              key={item}
                              className="bg-background font-serif text-sm px-2 py-1 rounded-full text-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AnimateOnScroll>

              {/* DPYT Model */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  The DPYT Model
                </h2>
                <p className="text-muted-foreground mb-6">
                  A Comprehensive 24-Hour Management System ensuring healing is
                  continuous, not just an hour-long activity.
                </p>
                <div className="space-y-6">
                  {[extra.dpytPhases.phase1, extra.dpytPhases.phase2].map(
                    (phase) => (
                      <div
                        key={phase.title}
                        className="bg-card rounded-2xl border-2 border-primary/10 p-6"
                      >
                        <h3 className="font-serif text-lg font-bold text-primary mb-4">
                          {phase.title}
                        </h3>
                        <div className="space-y-2">
                          {phase.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Target className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span className="text-sm text-foreground">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </AnimateOnScroll>

              {/* Session Types */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Session Types
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {extra.sessionTypes.map((s) => (
                    <div
                      key={s.type}
                      className="bg-card rounded-2xl border border-border p-6 text-center hover-lift"
                    >
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                        {s.type}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3">
                        {s.ideal}
                      </p>
                      <p className="font-serif text-2xl font-bold text-primary">
                        {s.fee}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Program Includes
                </h2>
                <div className="space-y-3">
                  {program.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{inc}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Who Is This For?
                </h2>
                <p className="text-muted-foreground leading-relaxed bg-secondary p-4 rounded-xl">
                  {program.whoShouldAttend}
                </p>
              </AnimateOnScroll>
              <FAQBlock faqs={program.faqs} />
            </div>
            <div className="lg:col-span-1">
              <Sidebar program={program} slug={slug} />
            </div>
          </div>
        <section id="therapy-intake-form" className="bg-secondary/20">
  <div className="mx-auto max-w-4xl">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
        Therapeutic Yoga Intake Form
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Shadyuktha Yog: Path to Holistic Recovery <br />
        <span className="text-sm italic">
          This information is strictly confidential and used only to design your personalized therapeutic sequence.
        </span>
      </p>
    </div>

    {/* Form */}
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-6xl mx-auto space-y-12 bg-background/60 backdrop-blur-xl border border-border rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl"
    >
      {/* 1. Personal Details */}
      <section className="space-y-6">
        <h3 className="text-lg md:text-xl font-semibold">1. Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <input
            className="input w-full"
            placeholder="Full Name"
            value={formData.personalDetails.fullName}
            onChange={(e) => handleChange("personalDetails", "fullName", e.target.value)}
            required
          />
          <input
            className="input w-full"
            placeholder="Age"
            value={formData.personalDetails.age}
            onChange={(e) => handleChange("personalDetails", "age", e.target.value)}
          />
          <input
            className="input w-full"
            placeholder="Occupation"
            value={formData.personalDetails.occupation}
            onChange={(e) => handleChange("personalDetails", "occupation", e.target.value)}
          />
          <input
            className="input w-full"
            placeholder="Primary Goal for Therapy"
            value={formData.personalDetails.primaryGoal}
            onChange={(e) => handleChange("personalDetails", "primaryGoal", e.target.value)}
          />
        </div>
      </section>

      {/* 2. Medical History */}
      <section className="space-y-8">
        <h3 className="text-lg md:text-xl font-semibold">2. Medical History & Categorization</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { title: "Women’s Health & Hormones", field: "womensHealth", items: ["PCOD / PCOS","Thyroid Dysfunction","Infertility Support","Menstrual Irregularities"] },
            { title: "Spine & Musculoskeletal", field: "spine", items: ["Lower Back Pain / Sciatica","Cervical Spondylosis","Slip Disc","Arthritis / Joint Pain"] },
            { title: "Metabolic & Digestive", field: "metabolic", items: ["Diabetes (Type 1 / Type 2)","Hypertension","IBS / Chronic Constipation","Weight Management Concerns"] },
            { title: "Mental & Neurological", field: "mental", items: ["Anxiety / Panic Attacks","Chronic Insomnia","Depression","Migraines / Headaches"] },
          ].map((group) => (
            <fieldset key={group.title} className="space-y-3">
              <legend className="font-semibold mb-2">{group.title}</legend>
              {group.items.map((item) => (
                <label key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <input
                    type="checkbox"
                    className="checkbox mt-1 shrink-0"
                    checked={formData.medicalHistory[group.field].includes(item)}
                    onChange={(e) => handleCheckboxGroup("medicalHistory", group.field, item, e.target.checked)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </fieldset>
          ))}
        </div>
      </section>

      {/* 3. Lifestyle & Vitality */}
      <section className="space-y-6">
        <h3 className="text-lg md:text-xl font-semibold">3. Lifestyle & Vitality Assessment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <input
            className="input w-full"
            placeholder="Current Pain Level (1–10)"
            value={formData.lifestyle.painLevel}
            onChange={(e) => handleChange("lifestyle", "painLevel", e.target.value)}
          />
          <select
            className="input w-full"
            value={formData.lifestyle.sleepQuality}
            onChange={(e) => handleChange("lifestyle", "sleepQuality", e.target.value)}
          >
            <option value="">Sleep Quality</option>
            <option value="Poor">Poor</option>
            <option value="Average">Average</option>
            <option value="Good">Good</option>
          </select>
          <select
            className="input w-full"
            value={formData.lifestyle.energyLevels}
            onChange={(e) => handleChange("lifestyle", "energyLevels", e.target.value)}
          >
            <option value="">Energy Levels</option>
            <option value="Low all day">Low all day</option>
            <option value="Afternoon dips">Afternoon dips</option>
            <option value="High">High</option>
          </select>
          <select
            className="input w-full"
            value={formData.lifestyle.stressLevels}
            onChange={(e) => handleChange("lifestyle", "stressLevels", e.target.value)}
          >
            <option value="">Stress Levels</option>
            <option value="Manageable">Manageable</option>
            <option value="High">High</option>
            <option value="Overwhelming">Overwhelming</option>
          </select>
        </div>
      </section>

      {/* 4. Precautions */}
      <section className="space-y-4">
        <h3 className="text-lg md:text-xl font-semibold">4. Physical Limitations & Precautions</h3>
        <textarea
          className="input w-full min-h-[120px] resize-y"
          placeholder="Medications, recent surgeries, or supports used (if any)"
          value={formData.precautions}
          onChange={(e) => setFormData({...formData, precautions: e.target.value})}
        />
      </section>

      {/* 5. Body Awareness */}
      <section className="space-y-4">
        <h3 className="text-lg md:text-xl font-semibold">5. Body Awareness Chart</h3>
        <textarea
          className="input w-full min-h-[140px] resize-y"
          placeholder="Describe location, type, and trigger of discomfort"
          value={formData.bodyAwareness}
          onChange={(e) => setFormData({...formData, bodyAwareness: e.target.value})}
        />
      </section>

      {/* 6. Consent */}
      <section className="space-y-4">
        <label className="flex items-start gap-3 text-sm leading-relaxed">
          <input
            type="checkbox"
            checked={formData.consent.yogaUnderstanding}
            onChange={(e) => handleConsent("yogaUnderstanding", e.target.checked)}
            className="checkbox mt-1 shrink-0"
          />
          <span>I understand Yoga Therapy is complementary and not a replacement for medical treatment.</span>
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed">
          <input
            type="checkbox"
            checked={formData.consent.healthUpdates}
            onChange={(e) => handleConsent("healthUpdates", e.target.checked)}
            className="checkbox mt-1 shrink-0"
          />
          <span>I agree to inform the instructor of any changes in health or medication.</span>
        </label>
        <input
          className="input w-full"
          placeholder="Committed practice days per week"
          value={formData.consent.committedDays}
          onChange={(e) => handleChange("consent", "committedDays", e.target.value)}
        />
      </section>

      {/* Submit */}
      <div className="pt-6 flex flex-col">
        <button
          type="submit"
          className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold tracking-wide shadow-lg hover:scale-105 transition"
        >
          Submit Intake Form
        </button>
      </div>
    </form>
  </div>
</section>
        </div>
      </section>
    </>
  );
};

const MindBodyLayout = ({
  program,
  slug,
}: {
  program: ProgramBase & { extra?: Record<string, unknown> };
  slug: string;
}) => {
  const extra = program.extra as {
    programFormats: {
      type: string;
      focus: string;
      includes: string[];
      fee: { group?: string; individual?: string };
      note?: string;
    }[];
    safeSpacePolicy: string[];
  };

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={program.image}
          alt={program.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/10" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <AnimateOnScroll>
              {/* Back Button */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white font-medium mb-6 hover:underline justify-center"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>

              {/* Badge */}
              <div className="flex justify-center mb-4">
                <span className="bg-emerald-100/90 text-emerald-800 px-4 py-1 rounded-full text-xs font-bold uppercase backdrop-blur">
                  Inner Work Program
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
                {program.title}
              </h1>

              {/* Info Bar */}
              <div className="flex justify-center">
                <QuickInfoBar program={program} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding">
        <div className="flex justify-center">
          <AnimateOnScroll className="max-w-4xl text-center">
            {/* Heading */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Inner Work Philosophy
            </h2>
            {/* Tagline */}
            <p className="text-sm font-semibold font-serif text-primary uppercase tracking-widest italic mb-5">
              {program.tagline}
            </p>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-md">
              {program.description}
            </p>

            {/* Glass Morphism Quote */}
            <div className="flex justify-center mb-10 mt-6">
              <p className="max-w-3xl bg-background/30 backdrop-blur-lg border border-primary/30 rounded-2xl px-6 py-5 text-md italic text-muted-foreground text-center shadow-lg">
                “You don’t just calm the mind. You learn where your energy goes
                — and how to direct it consciously.”
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* MAIN */}
            <div className="lg:col-span-2 space-y-12">
              {/* Philosophy */}

              {/* What Happens */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  What Happens Inside the Sessions
                </h2>
                <div className="space-y-3">
                  {program.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{inc}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Program Formats */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Program Formats
                </h2>
                <div className="space-y-6">
                  {extra.programFormats.map((f) => (
                    <div
                      key={f.type}
                      className="bg-card rounded-2xl border border-primary/20 p-6"
                    >
                      <h3 className="font-serif text-lg font-bold text-primary mb-1">
                        {f.type}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {f.focus}
                      </p>

                      <div className="space-y-2 mb-4">
                        {f.includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Target className="w-4 h-4 text-primary mt-0.5" />
                            <span className="text-sm text-foreground">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-6 text-lg font-bold font-serif">
                        {f.fee.group && <span>Group: {f.fee.group}</span>}
                        {f.fee.individual && (
                          <span>1:1: {f.fee.individual}</span>
                        )}
                      </div>

                      {f.note && (
                        <p className="text-xs text-muted-foreground mt-3 italic">
                          {f.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Safe Space */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Safe Space Philosophy
                </h2>
                <div className="space-y-3 bg-secondary p-5 rounded-xl">
                  {extra.safeSpacePolicy.map((rule, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-foreground">{rule}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Who */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Who Is This For?
                </h2>
                <p className="text-muted-foreground leading-relaxed bg-secondary p-4 rounded-xl">
                  {program.whoShouldAttend}
                </p>
              </AnimateOnScroll>

              {/* FAQ */}
              <FAQBlock faqs={program.faqs} />
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <Sidebar program={program} slug={slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ── Ashtanga Layout ──
const AshtangaLayout = ({
  program,
  slug,
}: {
  program: ProgramBase & { extra?: Record<string, unknown> };
  slug: string;
}) => {
  const extra = program.extra as {
    sequence: { section: string; items: string[] }[];
  };
  return (
    <>
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={program.video} // make sure program.video exists
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <AnimateOnScroll>
              {/* Back Button */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white font-medium mb-6 hover:underline justify-center"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>

              {/* Badge */}
              <div className="flex justify-center mb-4">
                <span className="bg-orange-100/90 text-orange-700 px-4 py-1 rounded-full text-xs font-bold uppercase backdrop-blur">
                  Dynamic Vinyasa
                </span>
              </div>

              {/* Tagline */}
              <p className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
                {program.tagline}
              </p>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                {program.title}
              </h1>

              {/* Info Bar */}
              <div className="flex justify-center">
                <QuickInfoBar program={program} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  About This Practice
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </AnimateOnScroll>

              {/* Sequence Overview */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Primary Series Sequence
                </h2>
                <div className="space-y-4">
                  {extra.sequence.map((seq, i) => (
                    <div
                      key={seq.section}
                      className="bg-card rounded-xl border border-border overflow-hidden"
                    >
                      <div className="gradient-green text-primary-foreground px-5 py-3 font-serif font-bold text-sm">
                        {seq.section}
                      </div>
                      {/* <div className="p-5 flex flex-wrap gap-2">
                        {seq.items.map((item) => (
                          <span
                            key={item}
                            className="bg-secondary text-xs px-3 py-1.5 rounded-full text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div> */}
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Key Focus Areas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />

                      <div>
                        <h4 className="font-serif text-lg font-semibold text-foreground">
                          {h.title}
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {h.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Benefits
                </h2>
                <div className="space-y-3">
                  {program.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  What's Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-secondary rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{inc}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                  Who Can Join?
                </h2>

                <ul className="max-w-3xl mx-auto space-y-4 bg-secondary/40 backdrop-blur-md border border-border rounded-2xl p-6 shadow-sm">
                  {program.whoShouldAttend.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                    >
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
              <FAQBlock faqs={program.faqs} />
            </div>
            <div className="lg:col-span-1">
              <Sidebar program={program} slug={slug} />
            </div>
          </div>
          <section className="relative w-full flex items-center justify-center">
            {/* Fee */}
            <p
              className="
    inline-block
    mt-8
    px-8 py-3
    rounded-full
    bg-primary
    border border-primary/30
    text-white
    justify-center flex w-1/2 
    text-sm md:text-base
    font-semibold
    uppercase
    tracking-widest
    shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_8px_30px_rgba(0,0,0,0.12)]
    backdrop-blur-md
  "
            >
              Investment ₹3,000
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

// ── Pranayama Layout ──
const PranayamaLayout = ({
  program,
  slug,
}: {
  program: ProgramBase & { extra?: Record<string, unknown> };
  slug: string;
}) => {
  const extra = program.extra as {
    threeArts: { title: string; items: string[] }[];
    weeklySchedule: { day: string; theme: string; techniques: string }[];
  };
  return (
    <>
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={program.video} // make sure program.video exists
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/10" />

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <AnimateOnScroll>
              {/* Back Button */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white font-medium mb-6 hover:underline justify-center"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>

              {/* Badge */}
              <div className="flex justify-center mb-4">
                <span className="bg-blue-100/90 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase backdrop-blur">
                  Internal Arts
                </span>
              </div>

              {/* Tagline */}
              <p className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
                {program.tagline}
              </p>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                {program.title}
              </h1>

              {/* Info Bar */}
              <div className="flex justify-center">
                <QuickInfoBar program={program} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="">
        <section className="relative w-full min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <AnimateOnScroll>
              {/* Title */}
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                The Inner Work Philosophy
              </h2>
              <p className="text-sm font-semibold text-primary italic font-serif uppercase tracking-widest my-6">
                {program.tagline}
              </p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {program.description}
              </p>

              {/* Glass Morphism Quote */}
              <div className="flex justify-center">
                <p
                  className="
          max-w-xl
          px-6 py-5
          text-sm md:text-base
          italic
          text-muted-foreground
          text-center
          rounded-2xl
          bg-white/10
          backdrop-blur-lg
          border border-white/20
          shadow-lg
        "
                >
                  “You don’t just calm the mind. You learn where your energy
                  goes — and how to direct it consciously.”
                </p>
              </div>

              {/* Tagline */}
            </AnimateOnScroll>
          </div>
        </section>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Three Arts */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  The Three Internal Arts
                </h2>
                <div className="space-y-6">
                  {extra.threeArts.map((art) => (
                    <div
                      key={art.title}
                      className="bg-card rounded-2xl border-2 border-primary/10 p-6"
                    >
                      <h3 className="font-serif text-lg font-bold text-primary mb-4">
                        {art.title}
                      </h3>
                      <div className="space-y-2">
                        {art.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Zap className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-foreground">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Weekly Schedule */}
              {/* <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Weekly Module
                </h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full">
                    <thead>
                      <tr className="gradient-green text-primary-foreground">
                        <th className="py-3 px-4 text-left text-sm font-bold">
                          Day
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-bold">
                          Theme
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-bold">
                          Key Techniques
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {extra.weeklySchedule.map((ws, i) => (
                        <tr
                          key={ws.day}
                          className={
                            i % 2 === 0 ? "bg-background" : "bg-secondary/50"
                          }
                        >
                          <td className="py-3 px-4 text-sm font-semibold text-foreground">
                            {ws.day}
                          </td>
                          <td className="py-3 px-4 text-sm text-foreground">
                            {ws.theme}
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">
                            {ws.techniques}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AnimateOnScroll> */}

              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Benefits
                </h2>
                <div className="space-y-3">
                  {program.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Who Can Join?
                </h2>
                <p className="text-muted-foreground leading-relaxed bg-secondary p-4 rounded-xl">
                  {program.whoShouldAttend}
                </p>
              </AnimateOnScroll>
              <FAQBlock faqs={program.faqs} />
            </div>
            <div className="lg:col-span-1">
              <Sidebar program={program} slug={slug} />
            </div>
          </div>
          <section className="my-10  relative w-full min-h-[80vh] flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <AnimateOnScroll>
                {/* Heading */}
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  The Holistic Integration: Our Philosophy
                </h2>

                {/* Intro */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  At{" "}
                  <span className="font-semibold text-foreground">
                    Shadyuktha Yog
                  </span>
                  , we move beyond physical exercise. We utilize a unified
                  system where the body is the vessel and the breath is the
                  master.
                </p>

                {/* Glass Morphism Quote */}
                <div className="flex justify-center mb-10">
                  <blockquote
                    className="
            max-w-3xl
            px-6 md:px-10 py-6
            italic
            text-muted-foreground
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-xl
          "
                  >
                    “The Asana creates the container (Sarira), the Pranayama
                    fills it with energy (Prana), the Mudra directs the flow,
                    and the Bandha locks it in for transformation (Citta).”
                  </blockquote>
                </div>

                {/* Closing Philosophy */}
                <p className="text-muted-foreground leading-relaxed mb-14">
                  By practicing them together, you move beyond physical health
                  into subtle energy mastery — leading to profound mental
                  clarity, emotional resilience, and inner stability.
                </p>

                {/* Divider */}
                <div className="flex justify-center mb-6">
                  <span className="w-24 h-px bg-border" />
                </div>

                {/* Fee */}
                <p
                  className="
    inline-block
    mt-4
    px-8 py-3
    rounded-full
    bg-primary/10
    border border-primary/30
    text-primary
    text-sm md:text-base
    font-semibold
    uppercase
    tracking-widest
    shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_8px_30px_rgba(0,0,0,0.12)]
    backdrop-blur-md
  "
                >
                  Investment ₹3,500
                </p>
              </AnimateOnScroll>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

// ── Kids Layout ──
const KidsLayout = ({
  program,
  slug,
}: {
  program: ProgramBase & { extra?: Record<string, unknown> };
  slug: string;
}) => {
  const extra = program.extra as {
    philosophy: { title: string; desc: string }[];
  };
  return (
    <>
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={program.video} // add `video` field in program object
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <AnimateOnScroll>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white font-medium mb-4 hover:underline justify-center"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>

              <div className="flex justify-center mb-3">
                <span className="bg-yellow-100/90 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-md">
                  Ages 6–12
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
                {program.title}
              </h1>

              <div className="flex justify-center">
                <QuickInfoBar program={program} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <p className="text-sm font-semibold text-foreground uppercase tracking-widest mb-2">
            {program.tagline}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  The Glow & Grow Philosophy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </AnimateOnScroll>

              {/* Philosophy cards */}
              <AnimateOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {extra.philosophy.map((p) => (
                    <div
                      key={p.title}
                      className="bg-secondary rounded-xl p-5 text-center hover-lift"
                    >
                      <Sun className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-bold text-foreground font-serif text-md mb-2">
                        {p.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Session Overview */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  A 60-Minute Journey of Discovery
                </h2>
                <div className="space-y-3">
                  {program.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-card rounded-xl border border-border p-4"
                    >
                      <span className="w-8 h-8 rounded-full gradient-green text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-foreground font-medium">{inc}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Key Focus Areas
                </h2>
                <div className="space-y-3">
                  {program.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Leaf className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Class Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />

                      <div>
                        <h4 className="font-serif text-lg font-semibold text-foreground">
                          {h.title}
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {h.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              <FAQBlock faqs={program.faqs} />
            </div>
            <div className="lg:col-span-1">
              <Sidebar program={program} slug={slug} />
            </div>
          </div>
          <section className="relative w-full flex items-center justify-center">
            {/* Fee */}
            <p
              className="
    inline-block
    mt-8
    px-8 py-3
    rounded-full
    bg-primary
    border border-primary/30
    text-white
    justify-center flex sm-w-full lg-w-1/2
    text-sm md:text-base
    font-semibold
    uppercase
    tracking-widest
    shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_8px_30px_rgba(0,0,0,0.12)]
    backdrop-blur-md
  "
            >
              Investment ₹1,000
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

// ── Prenatal Layout ──
const PrenatalLayout = ({
  program,
  slug,
}: {
  program: ProgramBase & { extra?: Record<string, unknown> };
  slug: string;
}) => {
  const extra = program.extra as {
    pillars: { title: string; focus: string; items: string[] }[];
    threeLayers: { title: string; subtitle: string; items: string[] }[];
  };
  return (
    <>
      <section className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover object-top"
          src={program.video} // add `video` field in program object
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/20" />

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <AnimateOnScroll>
              {/* Back */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white font-medium mb-5 hover:underline justify-center"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>

              {/* Badge */}
              <div className="flex justify-center mb-4">
                <span className="bg-pink-100/90 text-pink-800 px-4 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-md">
                  Maternity Care
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
                {program.title}
              </h1>

              {/* Info Bar */}
              <div className="flex justify-center">
                <QuickInfoBar program={program} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          {/* Tagline */}

          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                A Journey of Care
              </h2>

              <p className="text-sm italic font-serif font-semibold text-foreground uppercase tracking-widest mb-6">
                {program.tagline}
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Experience a dedicated support system for the most
                transformative journey of your life. At Shadyuktha Yog, we
                integrate{" "}
                <span className="font-medium text-foreground">Sarira</span>{" "}
                (Body),{" "}
                <span className="font-medium text-foreground">Prana</span>{" "}
                (Energy), and{" "}
                <span className="font-medium text-foreground">Citta</span>{" "}
                (Mind) to support you and your baby through every milestone.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
                Our program moves beyond simple exercise; it is a consciously
                curated journey that merges classical yogic principles with
                modern safety adaptations. By focusing on your physical,
                emotional, and Pranic needs, we facilitate a deep, soul-level
                connection between mother and child.
              </p>

              {/* Optional highlighted wisdom line */}
              <blockquote className="my-8 mx-auto max-w-3xl bg-secondary/40 border border-border backdrop-blur-md rounded-2xl px-6 py-5 italic text-sm md:text-base text-muted-foreground shadow-sm">
                “When the mother is held with awareness, the child is nurtured
                beyond the physical.”
              </blockquote>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Two Pillars */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  The Two Core Pillars
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {extra.pillars.map((p) => (
                    <div
                      key={p.title}
                      className="bg-card rounded-2xl border-2 border-primary/10 p-6"
                    >
                      <h3 className="font-serif text-lg font-bold text-primary mb-1">
                        {p.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-4">
                        Focused on {p.focus}
                      </p>
                      <div className="space-y-2">
                        {p.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Heart className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-foreground">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Three Layers */}
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  The Integration of Sarira, Prana & Citta
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {extra.threeLayers.map((layer) => (
                    <div
                      key={layer.title}
                      className="bg-secondary rounded-xl p-5 hover-lift"
                    >
                      <h4 className="font-serif text-lg font-bold text-primary mb-1">
                        {layer.title}
                      </h4>
                      <p className="text-md text-muted-foreground mb-3">
                        {layer.subtitle}
                      </p>
                      <div className="space-y-1.5">
                        {layer.items.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-sm text-foreground">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Program Highlights
                </h2>
                <div className="space-y-3">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />

                      <div>
                        <h4 className="font-serif text-lg font-semibold text-foreground">
                          {h.title}
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {h.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  What the Program Includes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-secondary rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{inc}</span>
                    </div>
                  ))}
                </div>
                {/* <p className="mt-4">⚠️ Precaution: Participants with high-risk pregnancies, severe medical conditions, or complications must consult their healthcare provider and provide medical clearance before enrolment.</p> */}
              </AnimateOnScroll>
              <AnimateOnScroll>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Who Can Join?
                </h2>
                <p className="text-muted-foreground leading-relaxed bg-secondary p-4 rounded-xl">
                  {program.whoShouldAttend}
                </p>
              </AnimateOnScroll>
              <FAQBlock faqs={program.faqs} />
            </div>
            <div className="lg:col-span-1">
              <Sidebar program={program} slug={slug} />
            </div>
          </div>
        </div>
        <section className="relative w-full flex items-center justify-center">
          {/* Fee */}
          <p
            className="
    inline-block
    mt-8
    px-8 py-3
    rounded-full
    bg-primary
    border border-primary/30
    text-white
    justify-center flex lg-w-1/2 sm-w-full 
    text-sm md:text-base
    font-semibold
    uppercase
    tracking-widest
    shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_8px_30px_rgba(0,0,0,0.12)]
    backdrop-blur-md
  "
          >
            Investment ₹4,000
          </p>
        </section>
      </section>
    </>
  );
};

// ── Main Component ──
const ProgramDetail = () => {
  const { slug } = useParams();
  const program = programData[slug || ""];

  if (!program) {
    return (
      <main className="pt-20 section-padding text-center">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
          Program Not Found
        </h1>
        <Link to="/" className="text-primary font-semibold">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {program.layout === "ycb" && <YCBLayout program={program} slug={slug!} />}
      {program.layout === "therapeutic" && (
        <TherapeuticLayout program={program} slug={slug!} />
      )}
      {program.layout === "mindBody" && (
        <MindBodyLayout program={program} slug={slug!} />
      )}
      {program.layout === "ashtanga" && (
        <AshtangaLayout program={program} slug={slug!} />
      )}
      {program.layout === "pranayama" && (
        <PranayamaLayout program={program} slug={slug!} />
      )}
      {program.layout === "kids" && (
        <KidsLayout program={program} slug={slug!} />
      )}
      {program.layout === "prenatal" && (
        <PrenatalLayout program={program} slug={slug!} />
      )}
      {program.layout === "standard" && (
        <YogaProgramLayout program={program} slug={slug!} />
      )}
    </main>
  );
};

export default ProgramDetail;
