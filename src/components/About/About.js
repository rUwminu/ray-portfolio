import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import AboutImg from '../../Assets/about-us.png'

const About = () => {
  const history = useHistory()
  return (
    <AboutSection id='about'>
      <InnerContainer>
        <ImgContainer>
          <img src={AboutImg} alt='' />
        </ImgContainer>
        <InfoContainer>
          <h1>
            LET ME <br /> INTRODUCE <br /> MYSELF
          </h1>
          <p>
            I am Software Engineering Student graduated on late 2020 Dec. I
            currently work as IT support and write small program using C# for my
            company.
          </p>
          <p>
            And I currently learning to became a fullstack developer in
            future and i have built some fullstack project as learning and
            praticing for my knowledge.
          </p>
          <p>
            As for applying for frontend roll, this will be my first step to
            developer journey.
          </p>

          <div className='btn-bg'>
            <button
              onClick={() => history.push('/ray-portfolio/cv')}
              className='btn'
            >
              VIEW CV
            </button>
          </div>
        </InfoContainer>
      </InnerContainer>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  ${tw`
    py-20
    w-full
    flex
    items-center
    justify-center
  `}
`

const InnerContainer = styled.div`
  ${tw`
    mx-auto
    w-full
    max-w-6xl
    px-4
    lg:px-0
    flex
    flex-col
    md:flex-row
    items-center
    justify-center
  `}
`

const ImgContainer = styled.div`
  ${tw`
    p-20
    w-full
    max-w-xl
  `}

  img {
    ${tw`
        w-full
    `}
  }
`

const InfoContainer = styled.div`
  ${tw`
    w-full
  `}

  h1 {
    ${tw`
        mb-5
        text-2xl
        lg:text-3xl
    `}

    letter-spacing: 0.3em;
  }

  p {
    ${tw`
        mb-5
    `}
  }

  .btn {
    ${tw`
        w-full
        py-1
        px-5
        text-base
        font-extralight
        text-white
        bg-gradient-to-r
        from-blue-800
        to-indigo-500
        rounded-md
        transition
        duration-200
        ease-in-out
    `}

    :hover {
      ${tw`
        bg-none
        bg-white
        text-black
      `}
    }
  }

  .btn-bg {
    ${tw`
        p-[2px]
        w-40
        bg-gradient-to-r
        from-blue-800
        to-indigo-500
        rounded-md
        shadow-md
      `}
  }
`

export default About
