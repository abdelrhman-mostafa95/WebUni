function Hero() {
  return (
    <div className="relative min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>

      <section className="relative z-10 flex flex-col items-center justify-center text-center text-white h-screen px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Get The Best Free Online Courses
        </h1>
        <p className="max-w-2xl text-gray-300 mb-8 text-sm md:text-base lg:text-lg">
          Learn for free with our curated collection of YouTube courses —
          explore top tutorials, gain new skills, and grow your career without
          any cost.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 px-4 py-3 rounded bg-white/20 placeholder-gray-200 text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="flex-1 px-4 py-3 rounded bg-white/20 placeholder-gray-200 text-white focus:outline-none"
          />
          <button className="bg-red-700 hover:bg-red-500 text-white px-6 py-3 rounded">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
