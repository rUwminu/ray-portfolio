import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link as NavLinks } from 'react-scroll'

import { ProjectData } from '../../Assets/DumbData/Data'

const ProjectList = () => {
  const history = useHistory()
  const [currentType, setCurrentType] = useState('featured')
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [filterData, setFilterData] = useState([])

  const filterTypeData = (type) => {
    setIsLoading(true)

    if (type === 'all') {
      setFilterData(ProjectData)
      setIsLoading(false)
      setCurrentType(type)
    } else if (type !== 'all') {
      if (type === true) {
        const newArray = ProjectData.filter((x) => x.isFeatured === true)
        setFilterData(newArray)
        setIsLoading(false)
        setCurrentType('featured')
      } else {
        const newArray = ProjectData.filter((x) => x.type === type)
        setFilterData(newArray)
        setIsLoading(false)
        setCurrentType(type)
      }
    } else {
      setIsError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    filterTypeData(true)
  }, [])

  const handleToProject = (id) => {
    history.push(`/ray-portfolio/project/${id}`)
  }

  return (
    <ProjectSection id='project'>
      <InnerContainer>
        <h1>
          RECENTLY DONE PROJECT
          <br />
          QUALITY WORK
        </h1>
        <CategoryContainer>
          <CategoryType
            onClick={() => filterTypeData('all')}
            className={currentType === 'all' && 'text-indigo-400'}
          >
            All
          </CategoryType>
          <CategoryType
            onClick={() => filterTypeData(true)}
            className={currentType === 'featured' && 'text-indigo-400'}
          >
            Featured
          </CategoryType>
          <CategoryType
            onClick={() => filterTypeData('frontend')}
            className={currentType === 'frontend' && 'text-indigo-400'}
          >
            Frontend
          </CategoryType>
          <CategoryType
            onClick={() => filterTypeData('fullstack')}
            className={currentType === 'fullstack' && 'text-indigo-400'}
          >
            FullStack
          </CategoryType>
        </CategoryContainer>
        <ProjectContainer>
          {filterData &&
            !isLoading &&
            !isError &&
            filterData.map((project) => {
              const { id, name, idea, image } = project
              return (
                <ProjectCard
                  to='detail'
                  onClick={() => handleToProject(id)}
                  activeClass='active'
                  offset={-100}
                  smooth={true}
                  duration={1000}
                >
                  <div className='image-box'>
                    <img src={image[0]} alt='' />
                  </div>
                  <h2 className='project-name'>{name}</h2>
                  <p className='project-info'>Inspired by {idea}</p>
                </ProjectCard>
              )
            })}
        </ProjectContainer>
      </InnerContainer>
    </ProjectSection>
  )
}

const ProjectSection = styled.section`
  ${tw`
    py-20
    mx-auto
    w-full
    max-w-6xl
  `}
`

const InnerContainer = styled.div`
  ${tw`
    px-4
    lg:px-0
    flex
    flex-col
    items-start
    justify-center
  `}

  h1 {
    ${tw`
        mb-5
        text-2xl
        lg:text-3xl
    `}
  }
`

const CategoryContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-start
    mb-4
  `}
`

const CategoryType = styled.div`
  ${tw`
    mr-6
    text-lg
    cursor-pointer
    transition
    duration-200
    ease-out
  `}

  :hover {
    ${tw`
        -translate-y-1
    `}
  }
`

const ProjectContainer = styled.div`
  ${tw`
    w-full
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-6
    justify-center
  `}
`

const ProjectCard = styled(NavLinks)`
  ${tw`
    flex
    flex-col
    items-start
    justify-center
    pb-2
    cursor-pointer
    transition
    duration-200
    ease-out
  `}

  .image-box {
    ${tw`
        h-64
        w-full
    `}

    img {
      ${tw`
        w-full
        h-full
        object-cover
      `}
    }
  }

  .project-name {
    ${tw`
        mt-3
        text-xl
        transition
        duration-200
        ease-out
    `}
  }

  .project-info {
    ${tw`
        transition
        duration-200
        ease-out
    `}
  }

  :hover {
    box-shadow: 1px 7px 34px 4px rgba(210, 209, 209, 0.75);
    ${tw`
        scale-[1.05]
    `}

    .project-name {
      ${tw`
        translate-x-4
      `}
    }

    .project-info {
      ${tw`
        translate-x-4
      `}
    }
  }

  :focus {
    box-shadow: 1px 7px 34px 4px rgba(210, 209, 209, 0.75);
    ${tw`
        scale-[1.05]
    `}

    .project-name {
      ${tw`
        translate-x-4
      `}
    }

    .project-info {
      ${tw`
        translate-x-4
      `}
    }
  }
`

export default ProjectList
