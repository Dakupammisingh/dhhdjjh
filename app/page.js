export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg">Creating beautiful web experiences</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-10 bg-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto text-center">
          I'm a passionate developer who loves crafting innovative solutions for the web.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-10 bg-gray-700">
        <h2 className="text-4xl font-bold mb-6 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Project {i + 1}</h3>
              <p>Details about this project go here. It's innovative and exciting!</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-10 bg-gray-600">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 rounded border border-gray-300"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 mb-4 rounded border border-gray-300"
            rows="5"
          />
          <button className="w-full py-2 bg-purple-600 rounded text-white font-bold">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
