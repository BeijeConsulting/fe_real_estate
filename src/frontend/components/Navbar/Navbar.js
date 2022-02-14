import "./Navbar.css"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { MenuOutlined } from '@ant-design/icons'
import MobileSidebar from "../MobileSidebar/MobileSidebar"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {

  let routes = [
   { label:'HOME', route:"/"  },
   { label:'ANNUNCI', route:'/' },
   { label:'SERVIZI', route:'/what-we-offer' },
   { label: 'CHI SIAMO', route:'about-us' }
  ]

  let [sidebarOpened, setSidebarOpened] = useState(false)
  let navigate = useNavigate()

  const handleNavigate = (dest) => () => {
    navigate(dest)
  }

  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened)
  }

  const handleLinkRender = ( link, key) => {
    return (
      <p key={"navbar-" + key} onClick={handleNavigate(link.route)} className='nav-link'>{link.label}</p>
    )
  }

  return (
    <div className='bg-gradient fixed top-0 right-0 left-0'>
      <div className='px-4 md:px-0 py-2.5 lg:max-w-6xl mx-auto  justify-between flex flex-row items-center'>

        <div className='flex flex-row'>
          <div className='text-3xl lg:text-4xl font-primary font-bold'>DOMUS</div>

          {/* DESKTOP ONLY */}
          <div className='hidden md:flex lg:text-2xl flex-row pl-6 font-bold font-primary space-x-4 items-center'>
            { routes.map(handleLinkRender) }
          </div>

        </div>

        {/* DESKTOP ONLY */}
        <div className='hidden md:flex flex-row space-x-2'>
          <p onClick={handleNavigate('/auth/login')} className='text-xl nav-btn nav-fill font-primary'>ACCEDI</p>
          <p onClick={handleNavigate('/auth/signup')} className='text-xl nav-btn nav-outline font-primary'>REGISTRATI</p>
        </div>

        {/* MOBILE SIDEBAR */}
        <div className='md:hidden flex flex-col justify-center items-center'>
          <FontAwesomeIcon
            onClick={toggleSidebar}
            icon={faBars}
            size="xl"
          />

          <MobileSidebar
            isOpened={sidebarOpened}
            toggleSidebar={toggleSidebar}
            routes={routes}
            navigate={handleNavigate}
          />
        </div>


      </div>
    </div>
  )
}

export default Navbar