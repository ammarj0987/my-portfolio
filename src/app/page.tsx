import Link from 'next/link'
import { projectsList } from './data/projects-meta'

export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-br from-purple-400 via-indigo-200 to-pink-300">
      
      {/* navigation bar */}
      {/* <nav className="w-full py-6 px-8 bg-white shadow-md fixed top-0 left-0 right-0 rounded-b-lg">
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
      </nav> */}

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-medium">
          Muhammad Ammar
        </h1>
        <p className='text-lg font-medium text-gray-600 mt-4'>
          Software Engineer | CS @ UW & GTech | Ex-Intern @ Tesla
        </p>

        {/* icons */}
        <div className='flex gap-10 mt-8'>
          <a
            href="https://www.linkedin.com/in/muhammad-ammar-96776b236/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-4xl size-10 items-center justify-center flex bg-gray-100 shadow-lg hover:bg-gray-200 transition duration-300"
          >
            <img 
              src="/linkedin.svg" 
              alt="LinkedIn Logo" 
              className="h-6 w-auto"
            />
          </a>

          <a
            href="/https://github.com/ammarj0987"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-4xl size-10 items-center justify-center flex bg-gray-100 shadow-lg hover:bg-gray-200 transition duration-300"
          >
            <img 
              src="/github.svg" 
              alt="Github Logo" 
              className="h-6 w-auto"
            />
          </a>

          <a
            href="mailto:muhammadammar.cs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-4xl size-10 items-center justify-center flex bg-gray-100 shadow-lg hover:bg-gray-200 transition duration-300"
          >
            <img 
              src="/envelope.svg" 
              alt="Mail Logo" 
              className="h-6 w-auto"
            />
          </a>
        </div>

        <div className="flex gap-12 mt-24">
          <Link
            href="#projects"
            className="outline-2 border-blue-400 text-blue-500 px-6 py-3 rounded-lg bg-gray-100 font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Projects
          </Link>
          
          <a
            href="/muhammad_ammar_intern_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-85 transition duration-300"
          >
            Resume
          </a>
        </div>
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

      <div className='border-t-8 border-gray-200'></div>

      {/* Projects Section */}
      <section id="projects" className="h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-10">Projects</h2>

          <ul className="space-y-4">
            {projectsList.map((project) => (
              <li key={project.slug} className="flex">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="ml-4 text-gray-600">{project.description}</p>
              </li>
            ))}
          </ul>
          {/* <div className="grid md:grid-cols-2 gap-8">

            <button className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"

            >
              <h3 className="text-xl font-semibold mb-2">Wheel Classification</h3>
              <p className="text-gray-600">
                A machine learning web app that helps car enthusiasts identify OEM
                and aftermarket wheels/rims.
              </p>
            </button>

            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Automotive Social Platform
              </h3>
              <p className="text-gray-600">
                A social media platform for car lovers to showcase collections and
                browse others.
              </p>
            </div>

          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      {/* <section
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
      </section> */}

      <footer className="bg-white text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Muhammad Ammar. All rights reserved.
      </footer>
    </div>
  );
}
