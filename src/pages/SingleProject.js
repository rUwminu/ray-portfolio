import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import tw from 'twin.macro'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import { ProjectData } from '../Assets/DumbData/Data'
import { ProjectList } from '../components/index'

SwiperCore.use([Autoplay, Pagination, Navigation])

const SingleProject = () => {
  const { id } = useParams()
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [filterData, setFilterData] = useState([])

  const getSingleProject = () => {
    setIsLoading(true)
    const projectObject = ProjectData.find(
      (project) => project.id === Number(id)
    )

    if (projectObject) {
      setFilterData(projectObject)
    } else {
      setIsError(true)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    getSingleProject()
  }, [id])

  const handleViewLive = (url) => {
    window.open(`${url}`)
  }

  return (
    <SectionContainer id="detail">
      {filterData && !isLoading && !isError && (
        <InnerContainer>
          <CarouselContainer>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              {filterData.image.map((x, index) => (
                <SwiperSlide key={index}>
                  <img src={x} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </CarouselContainer>
          <InfoContainer>
            <h1 className="title">{filterData.name}</h1>
            <div className="des-div">
              <h2>Why I build this project?</h2>
              <p>{filterData.description}</p>
            </div>

            <h2>Tools for this project</h2>
            <div className="tools-div">
              {filterData.tools.map((x) => (
                <div className="tools-tag">{x}</div>
              ))}
            </div>
            <div className="flex items-center justify-start mt-8">
              <div className="btn-bg">
                <button
                  onClick={() => handleViewLive(filterData.links)}
                  className="btn btn-color "
                >
                  View Live Code
                </button>
              </div>
              {filterData.instruction && (
                <div className="btn-bg">
                  <button
                    onClick={() => handleViewLive(filterData.instruction)}
                    className="btn btn-none "
                  >
                    More Instruction
                  </button>
                </div>
              )}
            </div>
          </InfoContainer>
        </InnerContainer>
      )}
      <ProjectList />
    </SectionContainer>
  )
}
const SectionContainer = styled.section`
  ${tw`
    w-full
    pt-28
  `}
`

const InnerContainer = styled.div`
  ${tw`
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

const CarouselContainer = styled.div`
  ${tw`
    w-full
    md:max-w-lg
  `}

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 16rem;
    object-fit: cover;
  }
`

const InfoContainer = styled.div`
  ${tw`
    h-auto
    w-full
    px-6
    md:px-0
    mt-6
    md:mt-0 
    md:ml-8
    flex
    flex-col
    items-start
    justify-start
  `}

  .title {
    ${tw`
        mb-4
        text-2xl
        lg:text-3xl
        text-gray-800
    `}
  }

  h2 {
    ${tw`
        mb-2
        text-xl
    `}
  }

  .des-div {
    ${tw`
        mb-6
    `}
  }

  .tools-div {
    ${tw`
        flex
        flex-wrap
        items-center
        justify-start
    `}

    .tools-tag {
      ${tw`
            mr-4
        `}
    }
  }

  .btn {
    ${tw`
        w-full
        py-2
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
        mr-4
        p-[2px]
        w-44
        bg-gradient-to-r
        from-blue-800
        to-indigo-500
        rounded-md
        shadow-md
      `}
  }
`

export default SingleProject
