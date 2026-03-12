import { motion, useMotionValue, useTransform } from "framer-motion";

interface TiltImageProps {
  src: string;
  alt: string;
  className?: string;
}

const TiltImage = ({ src, alt, className }: TiltImageProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ rotateX, rotateY, perspective: 600 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = e.clientX - rect.left - rect.width / 2;
        const py = e.clientY - rect.top - rect.height / 2;
        x.set(px);
        y.set(py);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
    </motion.div>
  );
};

export default TiltImage;