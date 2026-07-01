import React from 'react'
import Hero from '../components/hero/Hero'
import Navbar from '@/components/layout/Navbar'
import Project from '@/components/projects/Project'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Project />
    </div>
  )
}
