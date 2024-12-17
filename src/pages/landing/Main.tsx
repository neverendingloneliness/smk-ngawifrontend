import React, { useRef, useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import { NAVLIST } from '../../constants/constant'
import About from './About'
import Jurusan from './Jurusan'
import Ekstrakulikuler from './Ekstrakulikuler'
import Hero from './Hero'

export const Main = () => {
  // ngeset state buat ngelacak section sekarang
  const [currentSection, setCurrentSection] = useState('home')
  // membuat dynamic refs 
  const sectionRefs = NAVLIST.reduce((acc, section) => {
    acc[section.key] = useRef<HTMLDivElement>(null)
    return acc
  }, {} as Record<string, React.RefObject<HTMLDivElement>>) 

  // buat klik to scroll aja
  const scrollToSection = (sectionkey: string) => {
    const sectionRef = sectionRefs[sectionkey]

    if (sectionkey && sectionRef.current) {
      sectionRef.current.scrollIntoView(({
        behavior:'smooth',
        block:'start'
      }))

      setCurrentSection(sectionkey)
    }
  }
  
  return (
    <>
      <Navbar navlist={NAVLIST} currentSection={currentSection} onNavClick={scrollToSection} />
      <div ref={sectionRefs['home']} id='home'>
        <Hero />
      </div>
      <div ref={sectionRefs['about']} id='about'>
        <About />
      </div>
      <div ref={sectionRefs['jurusan']} id='jurusan'>
        <Jurusan />
      </div>
      <div ref={sectionRefs['ekstrakurikuler']} id='ekstrakurikuler'>
        <Ekstrakulikuler />
      </div>
    </>
  )
}
