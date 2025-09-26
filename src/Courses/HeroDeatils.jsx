function HeroDetails() {
  return (
    <>
      <section className="py-20 text-center text-white relative">
        <img
          src="/bg-1.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="max-w-6xl mx-auto px-6 py-6 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-red-700">Courses</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover a wide variety of free and curated courses designed to help
            you learn faster and smarter. We collect the best educational
            content from YouTube and beyond, making it easier for you to access
            knowledge in one place. 🚀
          </p>
          <a
            href="#courses"
            className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Browse Courses
          </a>
        </div>
      </section>
    </>
  );
}

export default HeroDetails;
