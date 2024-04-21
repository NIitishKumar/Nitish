import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./pages/about"
import Experience from "./pages/experience";
import Projects from "./projects";
import experienceData from "../dataSet/experience"
import projects from "../dataSet/projects"
import Contact from "./pages/contact";

export default function Home() {
  return (
    <main className="bg-slate-950	 flex min-h-screen flex-col items-center justify-between  pt-28 lg:p-24 xl:p-24">
      <Navbar />
      <div className="" id="about">
        <About/>
      </div>
      <div className="w-[100%] my-20" id="experience">
        <Experience data={experienceData} />
      </div>
      <div className="w-[100%] my-24" id="projects">
        <Projects data={projects} />
      </div>
      <div className="w-[100%] my-24" id="contact">
        <Contact />
      </div>
    </main>
  );
}
