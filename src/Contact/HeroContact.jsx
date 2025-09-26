function HeroContact() {
  return (
    <>
      <section className="py-20 text-center text-white relative">
        <img
          src="bg-1.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="max-w-6xl mx-auto px-6 py-6 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get in <span className="text-red-700">Touch</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Have a question, feedback, or just want to say hello? We’d love to
            hear from you! Fill out the form below or reach us directly through
            our contact information. Our team will get back to you as soon as
            possible.
          </p>
          <a
            href="/courses"
            className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Explore Courses
          </a>
        </div>
      </section>
    </>
  );
}

export default HeroContact;
