import React from 'react'
import Hero from '../components/hero/Hero'
import Navbar from '@/components/layout/Navbar'
import Project from '@/components/projects/Project'
import About from '@/components/about/About'
import Experience from '@/components/experience/Experience'
import ChatWidget from '@/components/chat/ChatWidget'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About />
      <Project />
      <Experience/>
      <ChatWidget />
    </div>
  )
}
