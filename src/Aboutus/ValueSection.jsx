function ValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our <span className="text-red-600">Values</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          At <span className="font-semibold text-red-600">Web Uni</span>, we
          believe learning should be simple, free, and accessible for everyone.
          That’s why we bring you curated YouTube courses in one place 🚀
        </p>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-red-600 text-4xl mb-4">🎥</div>
            <h3 className="text-xl font-semibold mb-2">Free Learning</h3>
            <p className="text-gray-600">
              Access 100% free video courses anytime.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-red-600 text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
            <p className="text-gray-600">
              Learn from anywhere, on any device, whenever you want.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-red-600 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
            <p className="text-gray-600">
              Clean, easy-to-use platform with curated content.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-red-600 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Skill Growth</h3>
            <p className="text-gray-600">
              Build real-world skills to achieve your goals faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
