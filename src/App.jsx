import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Menu,
  X,
  Award,
  Users,
  Code,
  Globe,
  Star,
  Calendar,
  ArrowRight,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      
      title: "Blogger",
      description:
        "A full-featured blogging application with user authentication, content management, and admin panel. Users can read articles while admins can create, edit, and manage all content.",
      tech: ["React", "Node.js", "Next.js", "MongoDB"],
      github: "https://github.com/pratikkumarthakur/Blogger",
      demo: "https://blogger-ivory-ten.vercel.app",
      status: "Completed",
      featured: true,

    },
    {
      title: "VidyaVani",
      description:
        "An AI-powered educational assistant app that helps students with their learning journey. Features intelligent tutoring, personalized recommendations, and interactive learning modules with career guidance and mental health support.",
      tech: ["Next.js", "Tailwind CSS", "Convex", "Gemini-API"],
      github: "https://github.com/pratikkumarthakur/Vidya_Vani",
      demo: "https://vidya-vani.vercel.app",
      status: "Completed",
      featured: true,
    },
    // {
    //  title: "E-Commerce Platform",
    //   description:
    //     "Full-stack e-commerce application with user authentication, shopping cart, and payment integration.",
    //   tech: ["React", "Node.js", "MongoDB", "Express"],
    //   github: "https://github.com/pratikkumar",
    //   demo: "https://demo-link.com",
    //   status: "Completed",
    //   featured: false, 
    // },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with modern React and responsive design principles.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "https://github.com/pratikkumarthakur/Portfolio",
      demo: "https://demo-link.com",
      status: "Completed",
      featured: false,
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "MongoDB", level: 80 },
    { name: "Node.js", level: 60 },
    { name: "Git", level: 85 },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 backdrop-blur-sm shadow-xl fixed w-full top-0 z-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white">Pratik Kumar</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-blue-100 hover:text-white transition-all duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-blue-100 hover:text-white transition-all duration-300 font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-blue-100 hover:text-white transition-all duration-300 font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-blue-100 hover:text-white transition-all duration-300 font-medium"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-100 hover:text-white transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600/95 backdrop-blur-sm border-t border-blue-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-blue-100 hover:text-white w-full text-left font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block px-3 py-2 text-blue-100 hover:text-white w-full text-left font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-2 text-blue-100 hover:text-white w-full text-left font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-blue-100 hover:text-white w-full text-left font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Pratik Kumar
                </span>
              </h1>
              <p className="text-xl sm:text-2xl mb-6 text-blue-100 font-medium">
                Full-Stack Developer & Problem Solver
              </p>
              <p className="text-lg mb-8 text-blue-50 leading-relaxed">
                Recent B.Tech graduate passionate about creating innovative web
                solutions and building user-centric applications that make a
                difference. Also AI/ML enthusiast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Photo Section */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-2xl"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full shadow-inner flex items-center justify-center">
                  <div className="text-gray-600 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-blue-600 font-medium">
                      <img
                        src="/profile.jpg" // Place your photo in the public folder as profile.jpg
                        alt="Pratik Kumar"
                        className="w-full h-full  absolute inset-0   object-cover rounded-full"
                      />

                    </p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-80 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-400 rounded-full opacity-80 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-blue-100 to-indigo-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a recent B.Tech graduate from RCET Bhilai (June 2025) with a
                passion for web development and creating innovative solutions.
                My journey in programming has been driven by curiosity and the
                desire to build applications that make a difference.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With expertise in modern web technologies like React, Next.js,
                and full-stack development, I enjoy tackling complex problems
                and turning ideas into reality. I believe in continuous learning
                and staying updated with the latest industry trends.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source
                projects, mentoring fellow developers, or exploring new
                technologies that can enhance user experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Code className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2 text-center">
                  Clean Code
                </h3>
                <p className="text-gray-700 text-sm text-center">
                  Writing maintainable and efficient code
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-200 to-purple-300 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Globe className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2 text-center">
                  Full Stack
                </h3>
                <p className="text-gray-700 text-sm text-center">
                  Frontend and backend development
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-200 to-green-300 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Award className="w-12 h-12 text-green-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2 text-center">
                  Certified
                </h3>
                <p className="text-gray-700 text-sm text-center">
                  Microsoft Azure AZ-900
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-200 to-pink-300 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Users className="w-12 h-12 text-pink-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2 text-center">
                  Team Player
                </h3>
                <p className="text-gray-700 text-sm text-center">
                  GDSC volunteer and mentor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-200 to-indigo-300 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {skill.name}
                  </h3>
                  <span className="text-blue-700 font-bold text-lg">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-blue-100 to-indigo-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-700 mt-4 text-lg">
              A collection of my recent work and passion projects
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-200 to-indigo-300 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-300"
                  >
                    <div className="h-56 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === "Completed"
                              ? "bg-green-500 text-white"
                              : "bg-yellow-500 text-white"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <Code className="w-20 h-20 mx-auto mb-3 opacity-90" />
                          <p className="text-lg font-medium opacity-90">
                            {project.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                          <Github size={18} />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                        >
                          <ExternalLink size={18} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-500" />
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-blue-200"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {project.title}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                          >
                            <Github size={16} />
                            Code
                          </a>
                          <a
                            href={project.demo}
                            className="flex items-center gap-1 text-gray-600 hover:text-purple-600 transition-colors text-sm"
                          >
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborating
                on projects, or just having a chat about technology. Feel free
                to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-600/20 rounded-lg backdrop-blur-sm border border-blue-500/30">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-200">pratikkumartkr@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-600/20 rounded-lg backdrop-blur-sm border border-blue-500/30">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-200">+91 7909086218</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-600/20 rounded-lg backdrop-blur-sm border border-blue-500/30">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-200">
                    Bhilai, Chhattisgarh, India
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/pratikkumarthakur"
                  className="bg-blue-600/30 p-4 rounded-lg hover:bg-blue-600/50 transition-all duration-300 backdrop-blur-sm transform hover:scale-105 border border-blue-500/30"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratik-kumar-9b073a215/"
                  className="bg-blue-600/30 p-4 rounded-lg hover:bg-blue-600/50 transition-all duration-300 backdrop-blur-sm transform hover:scale-105 border border-blue-500/30"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="bg-blue-600/20 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/30">
              <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a
                  href="mailto:pratikkumartkr@gmail.com"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/pratik-kumar-9b073a215/"
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
                <button
                  onClick={() => window.open("Pratik-Kumar-FlowCV-Resume-20250703.pdf", "_blank")}
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg"
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pratik Kumar</h3>
              <p className="text-gray-400 leading-relaxed">
                Full-Stack Developer passionate about creating innovative web
                solutions and building user-centric applications.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/pratikkumarthakur"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratik-kumar-9b073a215/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:pratikkumartkr@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Pratik Kumar. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
