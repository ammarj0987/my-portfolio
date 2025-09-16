import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* navigation bar */}
      <nav className="w-full py-6 px-8 bg-white shadow-md fixed top-0 left-0 right-0 rounded-b-lg">
        <div className='flex justify-between items-center'>
          <div className="text-2xl">
            <Link href="#home">MA</Link>
          </div>
          <ul>
            <li className="inline-block px-4"><Link href="#projects">Projects</Link></li>
            <li className="inline-block px-4"><Link href="#resume">Resume</Link></li>
            <li className="inline-block px-4"><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
        
      </nav>
      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl mb-4">
          Muhammad Ammar
        </h1>
        <p>
          Software Engineer | CS @ UW & GTech | Ex-Intern @ Tesla
        </p>
        {/* <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div> */}
      </section>

      {/* About Section
      <section id="about" className="h-screen max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          I am a passionate software engineer specializing in building scalable
          web applications and machine learning solutions. I enjoy solving
          complex problems and turning ideas into reality through clean code
          and thoughtful design.
        </p>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="h-screen bg-gray-100 py-40 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Wheel Classification</h3>
              <p className="text-gray-600">
                A machine learning web app that helps car enthusiasts identify OEM
                and aftermarket wheels/rims.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Automotive Social Platform
              </h3>
              <p className="text-gray-600">
                A social media platform for car lovers to showcase collections and
                browse others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="h-screen max-w-4xl mx-auto py-40 px-4">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen bg-blue-600 text-white py-40 px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Feel free to reach out for opportunities or collaborations.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:ammar@example.com" className="hover:underline">
            Email
          </a>
          <a href="https://github.com/ammar" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ammar" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Muhammad Ammar. All rights reserved.
      </footer>
    </div>
  );
}
