function HeroSection() {
  return (
    <section className="py-20 text-center text-white relative">
      <img
        src="bg-1.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="max-w-6xl mx-auto px-6 py-6 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          About <span className="text-red-700">Web Uni</span>
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          We’re on a mission to make learning simple, accessible, and enjoyable
          for everyone. At Web Uni, we bridge the gap between theory and
          real-world practice, helping learners unlock their full potential.
        </p>
        <a
          href="/courses"
          className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Explore Courses
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
