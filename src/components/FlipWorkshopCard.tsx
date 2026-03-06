import { useState } from "react";
import { Link } from "react-router-dom";

interface Workshop {
  title: string;
  image: string;
  duration: string;
  hours: string;
  description: string[]; 
  fee: { [key: string]: string };
}

interface Props {
  workshop: Workshop;
  region: string;
}

const FlipWorkshopCard: React.FC<Props> = ({ workshop, region }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
  className="
    perspective
    w-full
    max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]
    aspect-[4/5]
    mx-auto
    cursor-pointer
  "
  onClick={() => setFlipped(!flipped)}
>
  <div
    className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
      flipped ? "rotate-y-180" : ""
    }`}
  >
    {/* FRONT SIDE */}
    <div className="
      absolute inset-0
      bg-card
      rounded-3xl
      shadow-md
      flex flex-col
      items-center
      justify-between
      p-4 sm:p-5
      backface-hidden
    ">
      <img
        src={workshop.image}
        alt={workshop.title}
        className="
          rounded-2xl
          w-full
          aspect-[4/3]
          object-cover
          shadow-md
        "
      />

      <h3 className="
        font-serif
        text-lg sm:text-xl
        font-bold
        text-foreground
        text-center
        mt-4
      ">
        {workshop.title}
      </h3>

      <button className="
        mt-4
        bg-primary
        text-white
        py-2.5
        px-6
        rounded-full
        font-semibold
        text-sm
        hover:opacity-90
        transition
      ">
        Know More
      </button>
    </div>

    {/* BACK SIDE */}
    <div className="
      absolute inset-0
      bg-card
      rounded-3xl
      shadow-md
      p-4 sm:p-5
      transform rotate-y-180
      backface-hidden
      flex flex-col
    ">
      <h3 className="
        font-serif
        text-lg sm:text-xl
        font-bold
        text-foreground
        mb-1
      ">
        {workshop.title}
      </h3>

      <p className="text-xs sm:text-sm text-muted-foreground mb-2">
        {workshop.duration} • {workshop.hours}
      </p>

      {/* Bullet points */}
      <ul className="
        list-disc
        list-inside
        text-sm
        text-muted-foreground
        leading-relaxed
        mt-2
        space-y-1
        flex-1
        overflow-auto
      ">
        {workshop.description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      {/* Fee box */}
      <div className="
        bg-secondary
        rounded-xl
        p-3
        mt-3
        text-center
      ">
        <p className="text-xs font-semibold text-muted-foreground">
          Fee ({region})
        </p>
        <p className="font-serif text-xl sm:text-2xl font-bold text-primary">
          {workshop.fee[region]}
        </p>
      </div>

      <Link
        to="/contact"
        className="
          mt-4
          gradient-green
          text-primary-foreground
          py-2.5
          rounded-full
          font-semibold
          text-center
          text-sm
          hover:opacity-90
          transition
        "
      >
        Enquire Now
      </Link>
    </div>
  </div>
</div>
  );
};

export default FlipWorkshopCard;