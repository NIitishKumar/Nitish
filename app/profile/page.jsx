"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Code,
  Database,
  Server,
  Globe,
  Download,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const skills = {
    frontend: [
      "React.js",
      "Redux",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
    ],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "Mongoose"],
    tools: ["Git", "GitHub", "Postman", "Webpack"],
    deployment: ["Vercel", "Netlify", "AWS", "Heroku"],
  };

  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
    },
    {
      name: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team collaboration features",
      tech: ["React", "Express.js", "Socket.io", "MongoDB", "Material UI"],
      github: "https://github.com/username/taskmanager",
      demo: "https://taskmanager-demo.netlify.app",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
    },
    {
      name: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization and reporting",
      tech: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/username/social-dashboard",
      demo: "https://social-dashboard-demo.vercel.app",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    },
    {
      name: "Real Estate Platform",
      description:
        "Property listing platform with search filters, map integration, and user reviews",
      tech: ["React", "Express.js", "MongoDB", "Mapbox", "Redux"],
      github: "https://github.com/username/realestate",
      demo: "https://realestate-demo.herokuapp.com",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop",
    },
  ];

  const experience = [
    {
      company: "Programming.com (Mobile Programming India Pvt. Ltd.), Gurugram",
      position: "Senior Software Developer",
      period: "Since June 2024",
      contributions: [
        "Spearheading the full-stack development of scalable applications utilizing cutting-edge technologies such as React.js, Node.js, and MongoDB, ensuring high performance and reliability.",
        "Collaborating closely with UI/UX teams to design and implement responsive web interfaces that enhance user engagement and satisfaction.",
        "Constructing robust APIs and integrating various third-party services to extend application functionality and improve user experience.",
        "Mentoring and guiding junior developers, conducting thorough code reviews to uphold high standards of code quality and best practices.",
        "Engaging in regular performance optimization initiatives, identifying bottlenecks, and implementing solutions to enhance server-side performance.",
        "Participating in Agile ceremonies, contributing to sprint planning, and ensuring timely delivery of project milestones.",
        "Documenting technical specifications and project progress to facilitate clear communication among team members and stakeholders.",
        "Conducting training sessions for junior developers to enhance their technical skills and foster a culture of continuous lsearning.",
      ],
    },
    {
      company: "Insurance Samadhan, Noida",
      position: "Senior MERN Stack Developer",
      period: "November 2022 - June 2024",
      contributions: [
        "Orchestrated the development of scalable web applications while migrating existing CRON jobsto a Microservices architecture for improved efficiency and maintainability.",
        "Crafted responsive user interfaces using React.js, ensuring optimal state management through Redux for enhanced user experience.",
        "Administered technical initiatives and mentoring junior developers, fostering a collaborative environment that encourages knowledge sharing and skill development.",
        "Steered system testing, deployment processes, and performance optimization to ensure seamless application functionality.",
        "Collaborated with cross-functional teams to gather requirements and implement new features that align with client needs and expectations.",
        "Conducted regular code reviews and implementing best practices to maintain high standards of code quality and performance.",
        "Engaged in Agile ceremonies, contributing to sprint planning, and ensuring timely delivery of project milestones.",
        "Documented technical specifications and project progress to facilitate clear communication among team members and stakeholders.",
      ],
    },
    {
      company: "Applore Technologies, Noida",
      position: "MERN Stack Developer",
      period: "February 2022 - November 2022",
      contributions: [
        "Developed and maintained web applications for high-profile clients like JK Tyres and Easer, ensuring adherence to project timelines and quality standards.",
        "Constructed RESTful APIs and optimizing application performance to ensure seamless user experiences and efficient data management.",
        "Collaborated with cross-functional teams to gather requirements and implement new features based on client needs and expectations.",
        "Enhanced front-end user experience by applying React.js best practices and optimizing application responsiveness.",
        "Participated in code reviews and providing constructive feedback to peers to maintain high standards of code quality.",
        "Engaged in Agile ceremonies, contributing to sprint planning, and ensuring timely delivery of project milestones.",
        "Documented technical specifications and project progress to facilitate clear communication among team members and stakeholders.",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Project Manager at TechCorp",
      content:
        "Outstanding developer with exceptional problem-solving skills. Delivered projects on time and exceeded expectations.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      position: "CTO at StartupXYZ",
      content:
        "One of the most reliable developers I've worked with. Great communication and technical expertise.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      position: "Lead Designer",
      content:
        "Excellent collaboration skills and attention to detail. Made our design vision come to life perfectly.",
      rating: 5,
    },
  ];

  const techLogos = [
    { name: "MongoDB", color: "text-green-600" },
    { name: "Express", color: "text-gray-600" },
    { name: "React", color: "text-blue-500" },
    { name: "Node.js", color: "text-teal-500" },
    // { name: "JavaScript", color: "text-yellow-500" },
    // { name: "Tailwind", color: "text-teal-500" },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Nitish.pdf"; // <-- Note the leading slash!
    link.download = "Nitish.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "someone@example.com"; // recipient email
    const subject = encodeURIComponent("Message from Website");
    const body = encodeURIComponent(message);

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open default mail client
    window.location.href = mailtoLink;
  };
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-blue-600 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="hover:text-blue-600 transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-borderSpin blur-sm group-hover:blur-md transition-all duration-500"></div>

                  <button
                    className="relative px-6 py-2 rounded-full bg-gray-900 text-white flex items-center gap-2 font-medium z-10"
                    onClick={() => router.push("/compiler")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    In-progress
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button> */}

                {/* Mobile menu button */}
                {/* <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button> */}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="about" className="pt-16 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <div className="mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto lg:mx-0 border-4 border-blue-500 shadow-xl">
                    <img
                      src="Nitish-passport-size-img.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Nitish Kumar
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">
                  Full-Stack MERN Developer
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Passionate Full-Stack Developer with 4 years of experience
                  building scalable web applications, RESTful APIs, and
                  single-page applications using MongoDB, Express.js, React.js,
                  and Node.js. Specialized in creating responsive, user-friendly
                  interfaces and robust backend systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Get In Touch
                  </button>
                  <button
                    className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 flex items-center gap-2"
                    onClick={handleDownloadResume}
                  >
                    <Download className="h-5 w-5" />
                    Download Resume
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-4">
                      {techLogos.map((tech, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <span className={`text-2xl font-bold ${tech.color}`}>
                            {tech.name.charAt(0)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Technologies I work with
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div
                  key={category}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {category === "frontend" && (
                      <Code className="h-6 w-6 text-blue-500 mr-2" />
                    )}
                    {category === "backend" && (
                      <Server className="h-6 w-6 text-green-500 mr-2" />
                    )}
                    {category === "database" && (
                      <Database className="h-6 w-6 text-yellow-500 mr-2" />
                    )}
                    {category === "tools" && (
                      <Globe className="h-6 w-6 text-purple-500 mr-2" />
                    )}
                    {category === "deployment" && (
                      <Globe className="h-6 w-6 text-red-500 mr-2" />
                    )}
                    <h3 className="text-xl font-semibold capitalize">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Some of my recent work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Demo
                      </a>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                My professional journey
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold">{job.position}</h3>
                      <p className="text-xl text-blue-600 dark:text-blue-400">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.contributions.map((contribution, contribIndex) => (
                      <li key={contribIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {contribution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What People Say</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Testimonials from colleagues and clients
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic">
                  {testimonials[activeTestimonial].content}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonials[activeTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonials[activeTestimonial].position}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial
                      ? "bg-blue-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Lets work together on your next project
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-4" />
                    <span>nitishkumar.ng746@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600 mr-4" />
                    <span>+91 7037293410</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                    <span>Gurgaon, India</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Activities</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/NIitishKumar"
                      target="_blank"
                      className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Github className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nitishkumar746/"
                      target="_blank"
                      className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Linkedin className="h-6 w-6 text-blue-600" />
                    </a>
                    {/* <a
                      href="#"
                      className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Twitter className="h-6 w-6 text-blue-400" />
                    </a> */}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <textarea
                  className="w-full h-48 px-4 py-3 rounded-lg focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md"
                  placeholder="Your message..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-600 dark:text-gray-300">
              <p>Happy Coding :) </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
