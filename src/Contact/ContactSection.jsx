import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function ConatctSection() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 px-1 md:px-20">
          {/* Contact Form Section */}
          <div className="bg-red-700 p-8 rounded-2xl shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
            <p className="text-sm mb-8 text-red-100">
              We’re here to answer your questions and provide the support you
              need. Whether you’re looking for more information about our
              courses, partnership opportunities, or just want to share your
              feedback — feel free to reach out anytime.
            </p>

            <form
              action="mailto:abdelrhman.mostafa1095@gmail.com"
              method="POST"
              encType="text/plain"
              className="bg-white p-6 rounded-xl shadow-md space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 p-5">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 ">
                Contact Info
              </h3>
              <p className="text-gray-600">
                We’d love to hear from you. Reach us directly through the
                details below.
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Direct Line</p>
              <p className="text-2xl font-bold text-red-600">
                +20 115 800 9696
              </p>
            </div>

            <ul className="space-y-2 text-gray-700">
              <li>📍 Alexandria, Egypt</li>
              <li>📞 +20 102 945 4138</li>
              <li>✉️ abdelrhman.mostafa1095@gmail.com</li>
            </ul>

            <div className="flex space-x-4 text-2xl ">
              <a
                href="https://www.linkedin.com/in/abdel-rahman-mostafa-saad-21947a1a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition text-blue-800"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/abdelrhman-mostafa95"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/ab_mostafa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition text-pink-800"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConatctSection;
