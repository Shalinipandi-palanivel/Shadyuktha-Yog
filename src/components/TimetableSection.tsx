import { useState } from "react";

const TimetableSection = ({
  programs,
}: {
  programs: { key: string; title: string; timing: string[] }[];
}) => {
  const [selectedProgram, setSelectedProgram] = useState<string>("all");

  const filteredPrograms =
    selectedProgram === "all"
      ? programs
      : programs.filter((p) => p.key === selectedProgram);

  // Generate time slots
  const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let h = 5; h <= 12; h++) slots.push(`${h}:00 AM`);
    for (let h = 5; h <= 10; h++) slots.push(`${h}:00 PM`);
    return slots;
  };

  const timeSlots = generateTimeSlots();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <section className="py-16 container mx-auto max-w-7xl">
      <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
        Weekly Timetable
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelectedProgram("all")}
          className={`px-4 py-2 rounded-full font-semibold ${
            selectedProgram === "all" ? "bg-primary text-white" : "bg-secondary text-foreground"
          }`}
        >
          All
        </button>
        {programs.map((p) => (
          <button
            key={p.key}
            onClick={() => setSelectedProgram(p.key)}
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedProgram === p.key ? "bg-primary text-white" : "bg-secondary text-foreground"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Timetable Grid */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full border border-border rounded-lg">
          {/* Time Row */}
          <div className="grid grid-cols-[120px_repeat(18,80px)] border-b border-border bg-secondary">
            <div className="p-2 font-bold text-center sticky left-0 bg-secondary z-10 border-r border-border">Day</div>
            {timeSlots.map((t) => (
              <div key={t} className="p-2 font-semibold text-center text-sm border-r border-border">
                {t}
              </div>
            ))}
          </div>

          {/* Days Rows */}
          {days.map((day) => (
            <div key={day} className="grid grid-cols-[120px_repeat(18,80px)] border-b border-border">
              {/* Day Column */}
              <div className="p-2 font-semibold text-center sticky left-0 bg-secondary z-10 border-r border-border">
                {day}
              </div>

              {/* Time Cells */}
              {timeSlots.map((slot) => {
                // Check if any program has this time
                const isActive = filteredPrograms.some((p) =>
                  p.timing.includes(`${day} ${slot}`)
                );

                const programTitle = filteredPrograms.find((p) =>
                  p.timing.includes(`${day} ${slot}`)
                )?.title;

                return (
                  <div
                    key={slot}
                    className={`h-12 border-r border-border text-center text-xs flex items-center justify-center ${
                      isActive ? "bg-primary text-white font-semibold rounded-md" : ""
                    }`}
                  >
                    {isActive ? programTitle : ""}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimetableSection;