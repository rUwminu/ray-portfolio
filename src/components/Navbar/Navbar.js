import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link as NavLinks } from 'react-scroll'

import MenuIcon from '../../Assets/Menu.svg'

const Navbar = () => {
  let lastScroll = 0
  const history = useHistory()
  let location = useLocation()
  const [currentPage, setCurrentPage] = useState('Home')
  const [isActive, setIsActive] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)
  const [isMobile, setIsMobile] = useState()

  const handleCheckWidth = () => {
    let windowWidth = window.innerWidth

    if (windowWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleScroll = () => {
    const currentTop = window.scrollY

    if (currentTop <= 0) {
      setIsScrollTop(true)
    }
    if (currentTop > lastScroll) {
      setIsScrollTop(false)
    }

    lastScroll = currentTop
  }

  useEffect(() => {
    handleCheckWidth()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleLinks = (e) => {
    if (location.pathname === '/ray-portfolio/') {
      setIsActive(false)
      setCurrentPage(e.currentTarget.textContent)
    } else {
      history.push('/ray-portfolio/')
    }
  }

  return (
    <NavSection
      className={`${isScrollTop ? 'py-8 bg-none' : 'py-4 bg-white shadow-md'}`}
    >
      <NavContainer>
        <NavLogo onClick={() => history.push('/ray-portfolio/')}>
          Ray Uwminu
        </NavLogo>
        <NavLinksContainer
          className={
            isMobile
              ? `absolute-nav ${
                  isActive ? 'translate-x-0' : 'translate-x-full'
                }`
              : 'flex-row'
          }
        >
          <NavLink
            to='home'
            onClick={(e) => handleLinks(e)}
            className={currentPage === 'Home' && 'text-indigo-300'}
            activeClass='active'
            offset={-100}
            smooth={true}
            duration={1000}
          >
            Home
          </NavLink>
          {location.pathname === '/ray-portfolio/' && (
            <>
              <NavLink
                to='about'
                onClick={(e) => handleLinks(e)}
                className={currentPage === 'About' && 'text-indigo-300'}
                activeClass='active'
                offset={isMobile ? 50 : -100}
                smooth={true}
                duration={1000}
              >
                About
              </NavLink>
              <NavLink
                to='skill'
                onClick={(e) => handleLinks(e)}
                className={currentPage === 'Skill' && 'text-indigo-300'}
                activeClass='active'
                offset={-150}
                smooth={true}
                duration={1000}
              >
                Skill
              </NavLink>
              <NavLink
                to='project'
                onClick={(e) => handleLinks(e)}
                className={currentPage === 'Project' && 'text-indigo-300'}
                activeClass='active'
                offset={-20}
                smooth={true}
                duration={1000}
              >
                Project
              </NavLink>
              <NavLink
                to='contact'
                onClick={(e) => handleLinks(e)}
                className={currentPage === 'Contact' && 'text-indigo-300'}
                activeClass='active'
                offset={-20}
                smooth={true}
                duration={1000}
              >
                Contact
              </NavLink>
            </>
          )}
        </NavLinksContainer>
        <BurgerMenu
          onClick={() => setIsActive(!isActive)}
          className={isMobile ? 'inline-flex' : 'hidden'}
          src={MenuIcon}
        />
      </NavContainer>
    </NavSection>
  )
}

const NavSection = styled.div`
  ${tw`
    fixed
    top-0
    right-0
    w-full
    transition-all
    duration-500
    ease-in-out
    z-10 
  `}

  .absolute-nav {
    ${tw`
        absolute
        top-0
        right-0
        h-screen
        w-screen
        flex-col
        bg-white
        z-20
    `}
  }
`

const NavContainer = styled.div`
  ${tw`
    px-4
    lg:px-0
    mx-auto
    w-full
    max-w-6xl
    flex
    items-center
    justify-between
  `}
`

const NavLogo = styled.div`
  ${tw`
    text-xl
    text-indigo-500
    cursor-pointer
    z-30
  `}
`

const NavLinksContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    transition
    duration-500
    ease-in-out
  `}
`

const NavLink = styled(NavLinks)`
  ${tw`
    mb-4
    md:ml-16
    md:mb-0
    cursor-pointer
  `}
`

const BurgerMenu = styled.img`
  ${tw`
    px-2
    py-2
    rounded-md
    hover:bg-gray-200
    z-30
  `}
`

export default Navbar
