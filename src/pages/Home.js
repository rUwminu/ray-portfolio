import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { Hero, About, Skill, ProjectList, Contact } from '../components'

const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Skill />
      <ProjectList />
      <Contact />
    </div>
  )
}

export default Home
