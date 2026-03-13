const ProgramCTA = ({ programName }: { programName: string }) => {
  // Adjust the message for WhatsApp dynamically
  const waMessage = encodeURIComponent(
    `Hi! I want to know details about the ${programName} yoga program`
  );

  return (
    <div className="relative z-10 max-w-8xl mx-auto px-6 py-16 text-center bg-primary">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-snug">
        Ready to Join the {programName} Program?
      </h2>
      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
        Take the next step in your yoga journey with expert guidance and
        structured practice. Transform your health, flexibility, and mind-body
        connection.
      </p>
      <a
        href={`https://wa.me/917200448918?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-green-700 hover:bg-green-50 font-bold text-xl md:text-2xl px-10 md:px-14 py-5 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
      >
        Join Now
      </a>
    </div>
  );
};

export default ProgramCTA;