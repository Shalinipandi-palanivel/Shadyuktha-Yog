import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BlogModal = ({ post, content, onClose }) => {
  const navigate = useNavigate();

  if (!post) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center py-6 px-2"
      >
        {/* Close button stays fixed relative to viewport */}
        <button
          onClick={onClose}
          className="fixed top-8 right-8 z-50 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center text-xl"
        >
          ✕
        </button>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-h-[95vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        >
          {/* BLOG HERO IMAGE */}
          <img
            src={post.image}
            alt={post.title}
            loading="eager"
            className="w-full max-h-[70vh] object-cover rounded-t-3xl"
          />

          <div className="py-10 px-5 md:px-10 lg:px-10 space-y-10">
            {/* TITLE */}
            <h1 className="text-4xl font-serif text-center">{post.title}</h1>

            {/* OVERVIEW */}
            <div className="text-lg text-gray-700 leading-relaxed">
              {content?.overview}
            </div>

            {/* SECTIONS */}
            {content?.sections?.map((section, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl flex justify-center font-semibold">
                  {section.title}
                </h2>

                {/* IMAGE (if exists) */}
                {section.image && (
                  <div className="flex justify-center">
                    <img
                      src={section.image}
                      loading="lazy"
                      alt={section.title}
                      className="rounded-xl shadow-md max-w-xl w-full"
                    />
                  </div>
                )}

                {/* CONTENT */}
                <div className="text-gray-700 text-lg flex justify-center leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
          {/* CTA SECTION */}
          <div className="mt-16 bg-green-50 border border-green-200 rounded-2xl p-10 text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif">
              Struggling with stress, stiffness, or lack of balance?
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto text-center">
              Yoga is not just exercise — it is a path to healing, strength, and
              inner peace. With the right guidance and consistent practice,
              children and adults alike can grow stronger, calmer, and more
              balanced, nurturing both body and mind.
            </p>

            <p className="text-gray-700 max-w-2xl mx-auto">
              Join Shadyuktha Yog and begin your journey toward a healthier and
              more balanced life.
            </p>

            <div className="text-center mt-8">
              <a
                href="https://wa.me/917200448918?text=Hi!%20I%20want%20to%20join%20your%20yoga%20program"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition-colors"
              >
               Join Now
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogModal;
