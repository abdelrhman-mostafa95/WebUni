function HowitWorks() {
  return (
    <>
      <section className="py-16 bg-red-700">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-12">
            Learning on our platform is simple and free — just follow these easy
            steps.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 text-red-600 text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Choose a Course
              </h3>
              <p className="text-gray-600">
                Browse through our curated YouTube courses across various
                categories and pick the one that fits your goals.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 text-red-600 text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Watch & Learn
              </h3>
              <p className="text-gray-600">
                Access free video tutorials directly from YouTube and learn at
                your own pace, anytime and anywhere.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 text-red-600 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Grow Your Skills
              </h3>
              <p className="text-gray-600">
                Improve your knowledge, build practical skills, and move closer
                to your career goals with every course.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowitWorks;
