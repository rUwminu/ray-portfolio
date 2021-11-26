import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Icons
import { MailOutline, SmartphoneOutlined, GitHub } from '@material-ui/icons'

const Contact = () => {
  return (
    <Container id='contact'>
      <InnerContainer>
        <ContactInfo>
          <h2 className='info-title'>Contact Info</h2>
          <div className='info-item'>
            <MailOutline className='icons' />
            <p>rayigo@gmail.com</p>
          </div>
          <div className='info-item'>
            <SmartphoneOutlined className='icons' />
            <p>+60 11-1072-5655</p>
          </div>
          <div className='info-item'>
            <GitHub className='icons' />
            <a href='https://github.com/rUwminu'>rUwminu</a>
          </div>
        </ContactInfo>
        <ContactForm>
          <h2 className='info-title'>Let's Reached Out</h2>
          <form action='https://formsubmit.co/rayigo98@gmail.com' method='POST'>
            <div className='contact-item text-input'>
              <input name='name' type='text' required />
              <span>Your Name</span>
            </div>
            <div className='contact-item text-input'>
              <input name='email' type='email' required />
              <span>Your Email</span>
            </div>
            <div className='contact-item w-full'>
              <textarea name='message' name='body' required />
              <span>Write your message here...</span>
            </div>
            <button className='btn' type='submit'>
              Send Now
            </button>
          </form>
        </ContactForm>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.section`
  ${tw`
    w-full
    flex
    items-center
    justify-center
  `}
`
const InnerContainer = styled.section`
  ${tw`
    px-4
    xl:px-0
    py-20
    mx-auto
    w-full
    max-w-6xl
    flex
    flex-col
    md:flex-row
    items-center
    justify-center
  `}
`

const ContactInfo = styled.div`
  ${tw`
      px-6
      py-4
      md:h-[350px]
      md:-mr-24
      w-full
      md:max-w-[350px]
      bg-yellow-50
      md:shadow-xl
  `}
  z-index: 1;

  .info-title {
    ${tw`
        mb-4
        text-xl
        lg:text-2xl
    `}
  }

  .info-item {
    ${tw`
        mb-4
        w-full
        flex
        items-center
        justify-start
    `}

    p, a {
      ${tw`
        ml-2
      `}
    }
  }
`

const ContactForm = styled.div`
  ${tw`
    py-4
    px-6
    md:pl-40
    md:h-[450px]
    w-full
    flex-grow
    shadow-md
    md:shadow-xl
  `}

  .info-title {
    ${tw`
        pt-4
        mb-4
        text-xl
        lg:text-2xl
    `}
  }

  form {
    ${tw`
      flex
      flex-wrap
      items-center
      justify-between
    `}

    .contact-item {
      ${tw`
        relative
        w-full
        mb-8
        border-b-2
      `}

      input, textarea {
        ${tw`
          pt-2
          px-4
          w-full
          focus:outline-none
          valid:bg-none
        `}
      }

      textarea {
        ${tw`
          h-[150px]
        `}
      }

      span {
        ${tw`
          absolute
          pt-2
          left-4
          text-gray-400
          transition
          duration-200
          ease-in-out
        `}
      }

      input:focus ~ span,
      input:valid ~ span,
      textarea:focus ~ span,
      textarea:valid ~ span {
        ${tw`
          pt-0
          text-sm
          text-gray-800
          translate-y-[-15px]
        `}
      }
    }

    .text-input {
      ${tw`
        md:max-w-[350px]
      `}
    }

    .btn {
      ${tw`
        py-2
        px-10
        text-white
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        transition
        duration-200
        ease-in-out
        rounded-sm
      `}

      :hover {
        ${tw`
          scale-105
          shadow-md
        `}
      }
    }
  }
`

export default Contact
