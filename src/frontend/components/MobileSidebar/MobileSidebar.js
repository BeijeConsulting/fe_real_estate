import React from 'react'
import "./MobileSidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MobileSidebar = (props) => {

  let modalOpacity = props.isOpened ? 0.8 : 0
  let sidebarTranslate = props.isOpened ? "translateX(0px)" : "translateX(800px)"
  let events = props.isOpened ? "auto" : "none"




  const handleSidebarLinkRender = (link, key) => {
    return (
      <div 
        key={`sidenav-` + key}
        className='mb-2 p-2 text-white font-bold bg-secondary rounded'
        onClick={props.navigate(link.route)}
      >
        {link.label}
      </div>
    )
  }

  return (
    <div className=''>
      <div
        style={{ transition: '0.8s', transform: sidebarTranslate }}
        className='p-2 w-3/4 flex flex-col bg-gradient fixed top-0 right-0 bottom-0'
      >
        <p className='text-3xl font-bold '>DOMUS</p>
        <div onClick={props.toggleSidebar} className='absolute right-4 top-4'>
          <FontAwesomeIcon size={"lg"} icon={faTimes} />
        </div>
        <div className='mt-6'>

          {props.routes.map(handleSidebarLinkRender)}
        </div>
      </div>

      <div
        onClick={props.toggleSidebar}
        style={{ opacity: modalOpacity, pointerEvents: events }}
        className=' transition-all fixed inset-0 bg-black -z-10'
      />
    </div>
  )
}


MobileSidebar.defaultProps = {
  isOpened: false,

}

export default MobileSidebar