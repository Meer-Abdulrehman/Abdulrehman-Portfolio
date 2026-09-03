import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import GithubStats from '../components/sections/GithubStats'
import Services from '../components/sections/Services'
import WhyWorkWithMe from '../components/sections/WhyWorkWithMe'
import FreelanceCTA from '../components/sections/FreelanceCTA'
import Blogs from '../components/sections/Blogs'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubStats />
      <Services />
      <WhyWorkWithMe />
      <Blogs />
      <FreelanceCTA />
      <Contact />
    </>
  )
}
