function Content() {
  return (
    <section className="w-full bg-white py-24">
      <div className="grid md:grid-cols-2  gap-0 items-stretch  ">
        <div className="relative w-full h-96 md:h-auto">
          <img
            src="about-1.jpg"
            alt="About Web Uni"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
            Since 2020
          </span>
        </div>
        <div className="bg-gray-100 p-5 md:p-16 flex flex-col justify-center">
          <span className="inline-block bg-red-600 text-white text-xs font-semibold uppercase px-3 py-1 rounded mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            At <span className="font-semibold text-red-700">Web Uni</span>, we
            believe that learning should be simple, accessible, and enjoyable.
            Our platform helps students, professionals, and lifelong learners
            gain practical knowledge through modern and engaging courses.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We are passionate about bridging the gap between theory and
            real-world application, empowering learners to achieve their goals
            and unlock new opportunities.
          </p>
          <div className="flex items-center">
            <div>
              <h4 className="text-gray-800 font-medium">Our Mission</h4>
              <p className="text-sm text-red-600">Empower Learners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Content;
