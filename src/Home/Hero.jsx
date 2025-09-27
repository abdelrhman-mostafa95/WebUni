function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src="bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
      <div className="absolute inset-0 bg-black/40 z-15"></div>
      <section className="relative z-20 text-center text-white px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Get The Best Free Online Courses
        </h1>
        <p className="text-gray-200 mb-8 text-base md:text-lg lg:text-xl">
          Learn for free with our curated collection of YouTube courses —
          explore top tutorials, gain new skills, and grow your career without
          any cost.
        </p>
        <a
          href="/courses"
          className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Browse Courses
        </a>
      </section>
    </div>
  );
}

export default Hero;
