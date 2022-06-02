import Head from "next/head"
import Image from "next/image"

import About from "../components/about"
import Contact from "../components/contact"
import Experience from "../components/experience"
import Footer from "../components/footer"
import Project from "../components/project"

export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-20">
        <div className='max-w-xl'>
          <About />
          <Experience />
          <Project />
          <Contact />
        </div>
        
      </div>
      <Footer />
    </div>
  )
}
