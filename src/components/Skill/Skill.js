import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Tech Icon
import JsIcon from '../../Assets/TechIcons/javascript.svg'
import ReactIcon from '../../Assets/TechIcons/react.svg'
import ReduxIcon from '../../Assets/TechIcons/redux.svg'
import GraphqlIcon from '../../Assets/TechIcons/graphql.svg'
import ApolloIcon from '../../Assets/TechIcons/apollographql.svg'
import MongodbIcon from '../../Assets/TechIcons/mongodb.svg'
import MySqlIcon from '../../Assets/TechIcons/mysql.svg'
import StyledCIcon from '../../Assets/TechIcons/styledcomponents.svg'
import TailwindIcon from '../../Assets/TechIcons/tailwindcss.svg'

const Skill = () => {
  const IconArray = [
    JsIcon,
    ReactIcon,
    ReduxIcon,
    GraphqlIcon,
    ApolloIcon,
    MongodbIcon,
    MySqlIcon,
    StyledCIcon,
    TailwindIcon,
  ]

  return (
    <SkillSection id='skill'>
      <InnerContainer>
        <IconContainer>
          {IconArray.map((x, index) => (
            <IconCard key={index}>
              <img src={x} alt='' />
            </IconCard>
          ))}
        </IconContainer>
        <InfoContainer>
          <div className='box-bg'>
            <div className='dot-box' />
            <div className='flex itmes-start justify-start'>
              <h1>Stack</h1>
              <p>
                Tools I<br />
                Use In
                <br />
                Development
              </p>
            </div>
          </div>
        </InfoContainer>
      </InnerContainer>
    </SkillSection>
  )
}

const SkillSection = styled.section`
  ${tw`
    pb-20
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
    lg:flex-row
    items-center
    justify-center
    `}
`

const IconContainer = styled.div`
  ${tw`
    grid
    grid-cols-3
    gap-4
    justify-items-center
    mb-10
    lg:mb-0
    lg:mr-6
    w-full
  `}
`

const IconCard = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    h-full
    w-full
    py-2
    max-w-[8rem]
    border-2
    border-yellow-50
    transition
    duration-200
    ease-in-out
  `}

  img {
    ${tw`
    w-12
    opacity-70
    `}
  }

  :hover {
    ${tw`
        border-none
    `}
    box-shadow: 1px 7px 34px 4px rgba(210,209,209,0.75);
  }
`

const InfoContainer = styled.div`
  ${tw`
    w-full
    lg:pl-28
    flex
    justify-center
  `}

  .box-bg {
    ${tw`
        relative
        p-6
        w-72
        h-72
        bg-yellow-50
    `}
  }

  .dot-box {
    ${tw`
        absolute
        top-10
        -left-20
        w-40
        h-40
        border-2
        border-dashed
        border-gray-200
    `}
  }

  h1 {
    ${tw`
        mr-3
        text-3xl
        text-indigo-600
    `}
  }

  h2 {
    ${tw``}
  }

  p {
    ${tw`
        text-xl
    `}
  }
`

export default Skill
