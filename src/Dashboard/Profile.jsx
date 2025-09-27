import { useState, useEffect } from "react";

function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setFormData(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    setMessage("✅ Profile updated successfully!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ✨ Edit Profile
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Update your personal information and save changes.
            <span className="text-red-600 font-semibold">
              {" "}
              Stored locally only.
            </span>
          </p>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="flex flex-col gap-4 w-full box-border">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 box-border overflow-x-auto"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
            >
              Save Changes
            </button>
          </form>

          {message && (
            <p className="text-green-600 mt-4 font-medium">{message}</p>
          )}
        </div>

        {/* Profile Preview Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            👤 Profile Preview
          </h3>
          <p className="text-gray-500 mb-6">
            Here’s how your information looks right now:
          </p>

          <ul className="flex flex-col space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-red-600">👤</span>
              <span className="font-semibold">
                {formData.name || "Your Name"}
              </span>
            </li>
            <li className="flex items-center gap-2 break-all">
              <span className="text-red-600">✉️</span>
              <span className="font-semibold break-words">
                {formData.email || "Your Email"}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-600">📞</span>
              <span className="font-semibold">
                {formData.phone || "Your Phone"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Profile;
