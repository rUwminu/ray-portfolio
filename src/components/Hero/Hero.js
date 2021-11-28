import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Link as NavLinks } from 'react-scroll'

import HeroAnime from '../../Assets/hero.svg'

const Hero = () => {
  const history = useHistory()
  return (
    <HeroSection>
      <InnerContainer>
        <InfoContainer>
          <h2>
            Hey<span>&nbsp;</span>
          </h2>
          <h1>I AM RAY GOH</h1>
          <p>Frontend Developer</p>
          <div className='btn-container'>
            <NavLinks
              className='btn-bg'
              to='contact'
              offset={-20}
              smooth={true}
              duration={1000}
            >
              <div className='btn btn-color'>HIRE ME</div>
            </NavLinks>
            <div className='btn-bg'>
              <button
                onClick={() => history.push('/ray-portfolio/cv')}
                className='btn btn-none'
              >
                GET CV
              </button>
            </div>
          </div>
        </InfoContainer>
        <ImageContainer>
          <img src={HeroAnime} alt='' />
        </ImageContainer>
      </InnerContainer>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  ${tw`
    mx-auto
    pt-14
    h-screen
    w-screen
    max-w-6xl
    flex
    items-center
    justify-center
  `}
`

const InnerContainer = styled.div`
  ${tw`
    px-4
    lg:px-0
    w-full
    flex
    flex-col-reverse
    md:flex-row
    items-center
    justify-center
    md:justify-center
  `}
`

const InfoContainer = styled.div`
  ${tw`
    mt-8
    w-full
  `}

  h1 {
    ${tw`
        text-4xl
        lg:text-5xl
    `}
  }

  h2 {
    ${tw`
        mb-2
        flex
        items-center
        text-2xl
        lg:text-3xl
        text-blue-600
    `}

    span {
      ${tw`
        ml-4
        flex-grow
        h-[2px]
        max-w-[14rem]
        bg-blue-600
      `}
    }
  }

  p {
    ${tw`
        my-2
        text-lg
        lg:text-xl
    `}
  }

  .btn-container {
    ${tw`
        mt-4
        flex
        items-center
        justify-start
    `}
  }

  .btn {
    ${tw`
        w-full
        py-1
        px-5
        text-base
        font-extralight
        text-center
        text-white    
        rounded-md
        transition
        duration-200
        ease-in-out
    `}
  }

  .btn-color {
    ${tw`
        bg-gradient-to-r
        from-blue-800
        to-indigo-500
    `}

    :hover {
      ${tw`
        bg-none
        bg-white
        text-black
      `}
    }
  }

  .btn-none {
    ${tw`
      bg-white
      text-black
    `}

    :hover {
      ${tw`
        text-white
        bg-gradient-to-r
        from-blue-800
        to-indigo-500
      `}
    }
  }

  .btn-bg {
    ${tw`
        mr-6
        p-[2px]
        w-28
        bg-gradient-to-r
        from-blue-800
        to-indigo-500
        rounded-md
        shadow-md
        cursor-pointer
      `}
  }
`

const ImageContainer = styled.div`
  ${tw`
    w-full
    max-w-md
    md:max-w-xl
  `}

  img {
    ${tw`
        h-auto
        w-full
    `}
  }
`

export default Hero
