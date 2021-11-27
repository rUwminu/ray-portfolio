import React, { useRef } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { useReactToPrint } from 'react-to-print'

// Img & Icon
import TempImg from '../Assets/myIMG.jpg'
import { PhoneAndroid, MailOutline, Room, GitHub } from '@material-ui/icons'

class ComponentToPrint extends React.Component {
  render() {
    return (
      <SectionContainer>
        <LeftContainer>
          <div className='profile-container'>
            <img src={TempImg} alt='' />
            <h1>Ray Goh Chen Yi</h1>
            <h2>WEB DEVELOPER</h2>
          </div>
          <div className='contact-container'>
            <h2>CONTACT INFO</h2>
            <div className='contact-items'>
              <PhoneAndroid className='icons' />
              <p>+60 11-1072-5655</p>
            </div>
            <div className='contact-items'>
              <MailOutline className='icons' />
              <p>rayigo98@gmail.com</p>
            </div>
            <div className='contact-items'>
              <GitHub className='icons' />
              <p>www.github.com/rUwminu</p>
            </div>
            <div className='contact-items'>
              <Room className='icons' />
              <p>Batu Pahat, Johor, Malaysia</p>
            </div>
          </div>
          <div className='edu-container'>
            <h2>EDUCATION</h2>
            <div className='edu-items'>
              <h4>2018 - 2021</h4>
              <p>Bachelor Degree In Software Engineering</p>
              <h3>SEGi University</h3>
            </div>
            <div className='edu-items'>
              <h4>2016 - 2018</h4>
              <p>Diploma in Information Technology</p>
              <h3>SEGi College</h3>
            </div>
          </div>
          <div className='lan-container'>
            <h2>LANGUAGES</h2>
            <p>English</p>
            <p>Mandarin</p>
            <p>Bahasa Malaysia</p>
          </div>
        </LeftContainer>
        <RightContainer>
          <div className='profile-info'>
            <h1 className='title'>PROFILE</h1>
            <p className='mb-4'>
              As the interest of web development, it brought me to became self
              taught develop. Even I as a Software Engineering student, I enjoy
              developing web application from front to end with the freedom in
              design and structure the components.
            </p>
            <p>
              I looking forward to join any company in this line of development,
              to learn and develop with my interest.
            </p>
          </div>
          <div className='experience-info'>
            <h1 className='title'>EXPERIENCE</h1>
            <div className='item-list'>
              <div className='date-info'>
                2021 - PRESENT
                <br />
                Chiga Light
              </div>
              <div className='job-info'>
                <h2>In-house IT Support & SOP Development</h2>
                <p>
                  Provide IT support for user in the company on trouble
                  shooting, deployment of new devices and development SOP
                  software in aid of company manufacturers proccess.
                </p>
              </div>
            </div>
            <div className='item-list'>
              <div className='date-info'>
                2020 Jun - Sep
                <br />
                Jadine One Solution(JOS)
              </div>
              <div className='job-info'>
                <h2>IT Support & Deployment *Internship</h2>
                <p>
                  Provide on-side IT support and devices deploy for user.
                  Configuration and setup new devices for user and provide basic
                  guide on using new devices.
                </p>
              </div>
            </div>
            <div className='item-list'>
              <div className='date-info'>
                2018 May - Aug
                <br />
                Jadine One Solution(JOS)
              </div>
              <div className='job-info'>
                <h2>IT Support & Server Setup *Internship</h2>
                <p>
                  Provide email migration to Outlook365, support on user devices
                  setup connection to Outlook365 and trouble shoot for any user
                  having issues. Server setup from hardware to inner basic
                  config. *No Network or other indeep setup for server
                </p>
              </div>
            </div>
          </div>
          <div className='skill-info'>
            <h1 className='title'>DEVELOPMENT SKILL</h1>
            <div className='stack-container'>
              <h2>Frontend Stack</h2>
              <div className='stack'>
                <span>React</span>
                <span>Redux</span>
                <span>Sass</span>
                <span>Styled Components</span>
                <span>Tailwind CSS</span>
                <span>Material Ui</span>
              </div>
            </div>
            <div className='stack-container'>
              <h2>Backend Stack</h2>
              <div className='stack'>
                <span>Express</span>
                <span>Apollo</span>
                <span>Graphql</span>
                <span>MongoDB</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
          <div className='skill-info'>
            <h1 className='title'>PICKING UP IN FUTURE</h1>
            <div className='stack-container'>
              <h2>Frontend Framework</h2>
              <div className='stack'>
                <span>Next js</span>
              </div>
            </div>
            <div className='stack-container'>
              <h2>Backend</h2>
              <div className='stack'>
                <span>PostgreSQL</span>
                <span>Docker</span>
              </div>
            </div>
          </div>
        </RightContainer>
      </SectionContainer>
    )
  }
}

const CV = () => {
  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <>
      <div className='h-16 w-full'>&nbsp;</div>
      <ComponentToPrint ref={componentRef} />
      <ButtonContainer>
        <button className='print-btn' onClick={handlePrint}>
          Print this out!
        </button>
      </ButtonContainer>
    </>
  )
}

const SectionContainer = styled.section`
  ${tw`
    mt-10
    pb-14
    px-4
    xl:px-0
    mx-auto
    w-full
    max-w-6xl
    flex
    flex-col
    md:flex-row
    justify-center
  `}
`

const LeftContainer = styled.div`
  ${tw`
    p-8
    w-full
    md:max-w-sm
    text-black
    bg-gray-200
  `}

  .profile-container {
    ${tw`
        flex
        flex-col
        items-center
        justify-center
        pb-6
        border-b
        border-gray-300
    `}

    img {
      ${tw`
        mb-5
        w-48
        h-48
        bg-gray-50
        object-cover
        rounded-full
        overflow-hidden
      `}
    }

    h1 {
      ${tw`
        mb-3
        text-2xl
      `}
    }

    h2 {
      ${tw`
        text-gray-700
      `}
    }
  }

  .contact-container {
    ${tw`
        pt-10
        pb-6
        flex
        flex-col
        items-start
        justify-center
        border-b
        border-gray-300
    `}

    h2 {
      ${tw`
        mb-5
        tracking-widest
      `}
    }

    .contact-items {
      ${tw`
        flex
        items-center
        justify-start
        mb-3
      `}

      .icons {
        ${tw`
            w-5
            mr-3
            text-black
        `}
      }

      p {
        ${tw`
            text-gray-800
        `}
      }
    }
  }

  .edu-container {
    ${tw`
        pb-14
        pt-10
        flex
        flex-col
    `}

    h2 {
      ${tw`
        mb-5
        tracking-widest
      `}
    }

    .edu-items {
      ${tw`
        flex
        flex-col
        items-start
        justify-center
        mb-3
      `}

      h4 {
        ${tw`
            text-sm
            text-black
        `}
      }

      p {
        ${tw`
            
        `}
      }

      h3 {
        ${tw`
            text-gray-700
        `}
      }
    }
  }

  .lan-container {
    ${tw`
        flex
        flex-col
        items-start
        justify-center
    `}

    h2 {
      ${tw`
        mb-5
        tracking-widest
      `}
    }

    p {
      ${tw`
        mb-2
      `}
    }
  }
`

const RightContainer = styled.div`
  ${tw`
    w-full
    bg-gray-50
    py-12
    px-10
  `}

  .title {
    ${tw`
        mb-3
        text-2xl
        font-semibold
        tracking-widest
        text-indigo-900
    `}
  }

  .profile-info {
    ${tw`
        flex
        flex-col
        items-start
        justify-center
        mb-10
    `}
  }

  .experience-info {
    ${tw`
        w-full
        flex
        flex-col
        items-start
        justify-center
        mb-10
    `}

    .item-list {
      ${tw`
        flex
        items-start
        justify-between
        w-full
        mb-4
      `}

      .date-info {
        ${tw`
            text-sm
            min-w-[9rem]
        `}
      }

      .job-info {
        ${tw`
            flex-grow
        `}

        h2 {
          ${tw`
            text-blue-700
            font-semibold
          `}
        }

        p {
          ${tw`
            text-gray-400
          `}
        }
      }
    }
  }

  .skill-info {
    ${tw`
        w-full
        flex
        flex-col
        items-start
        justify-center
    `}

    .stack-container {
      ${tw`
        w-full
        flex
        flex-col
        items-start
        justify-center
        mb-3
      `}

      h2 {
        ${tw`
            text-xl
            text-blue-700
        `}
      }

      .stack {
        ${tw`
            flex
            flex-wrap
            items-center
            justify-start
        `}

        span {
          ${tw`
            py-2
            mr-4
          `}
        }
      }
    }
  }
`

const ButtonContainer = styled.div`
  ${tw`
    px-4
    lg:px-0
    pb-6
    mx-auto
    w-full
    max-w-6xl
  `}

  .print-btn {
    ${tw`
      py-2
      w-full
      max-w-[10rem]
      text-center
      bg-indigo-800
      text-gray-200
      rounded-md

      transition
      duration-200
      ease-in-out
    `}

    :hover {
      ${tw`
        bg-indigo-700
        shadow-md
      `}
    }
  }
`

export default CV
