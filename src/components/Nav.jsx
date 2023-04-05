import {IoHomeOutline} from "react-icons/io5"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from "react"
import {FiMenu} from "react-icons/fi"


function Nav() {
    const[menu, setMenu] = useState(false)
    const [display, setDisplay] = useState(false)

    const handleClick=()=>{
        setMenu(prevState=>!prevState)
        
    }
  const toggleDisplay=()=>{
    setDisplay(prevState=>!prevState)
  }
    
  return (
    
      <nav id="nav" >
        <FiMenu onClick={toggleDisplay} className="nav_icon menu"/>
        {!menu &&
            <>
              <div id="nav_menu" className={display ? "animation" : "no"}>
                <AnchorLink href="#home"> <IoHomeOutline className="nav_icon home"/></AnchorLink>
                <AnchorLink href="#digital">Arts</AnchorLink>
                <AnchorLink href="#about">About me</AnchorLink>
                <AnchorLink href="#contact">Contact</AnchorLink>

              </div>
              <img src="../src/img/Polygon.png" id="poly"  className={display ? "animation" : "no"}/>
            </>
        }
         </nav>
    
    
  )
}

export default Nav
