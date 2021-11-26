import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { GitHub } from '@material-ui/icons'

const Footer = () => {
  const handleViewLive = (url) => {
    window.open(`https://github.com/rUwminu`)
  }

  return (
    <FooterContainer>
      <InnerContainer>
        <h1>Ray Portfolio</h1>
        <div className='mid'>
          <h1>Copyright© all right reserved</h1>
          <h2>Is a joke, there no copyright! LOL!</h2>
        </div>
        <div className='right'>
          <h1>Links</h1>
          <div className='icons-list'>
            <div className='icons-border'>
              <div className='btn' onClick={handleViewLive} >
                <GitHub />
              </div>
            </div>
          </div>
        </div>
      </InnerContainer>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  ${tw`
    py-6
    w-full
    bg-blue-50
  `}
`

const InnerContainer = styled.div`
  ${tw`
    mx-auto
    w-full
    max-w-6xl
    flex
    items-start
    justify-between
  `}

  .mid {
    ${tw`
        flex
        flex-col
        items-center
        justify-center
    `}
  }

  .right {
    .icons-list {
      ${tw`
        flex
        items-center
        justify-center
      `}

      .icons-border {
        ${tw`
            p-1
            border
            border-gray-400
            rounded-full
            transition
            duration-200
            ease-in-out
        `}

        .btn {
          ${tw`
            flex
            items-center
            justify-center
            cursor-pointer
            transition
            duration-200
            ease-in-out
          `}
        }

        :hover {
          ${tw`
            border-blue-500
          `}

          .btn {
            ${tw`
                text-blue-500
            `}
          }
        }
      }
    }
  }
`

export default Footer
