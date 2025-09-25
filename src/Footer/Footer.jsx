function FooterSection() {
  return (
    <>
      <footer className="bg-gray-800 text-gray-300 py-16">
        {" "}
        <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {" "}
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-white mb-2">FreeCourses</h3>{" "}
            <p className="text-gray-400 text-base">
              Learn for free from YouTube videos
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-6 md:mb-0 text-lg">
            {" "}
            <a
              href="#hero"
              className="hover:text-white transition duration-300"
            >
              Home
            </a>
            <a
              href="#featured-courses"
              className="hover:text-white transition duration-300"
            >
              Courses
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition duration-300"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>
          <div className="text-gray-400 text-base text-center md:text-right mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} FreeCourses. All rights reserved.{" "}
            <br />
            Made with <span className="text-red-500">❤️</span> by Abdelrahman
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
