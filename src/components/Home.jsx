import {IoHomeOutline} from "react-icons/io5"
import {BsInstagram} from "react-icons/bs"
import {RiBehanceLine} from "react-icons/ri"
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Home() {



  return (
    <div id="home">

                <div id="bgr-square"></div>
        <div id="hero">
  
                <div id="welcome">
                    <h1>Aniko art page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore et tenetur quasi, 
                        expedita ea tempora, sunt officiis, itaque consectetur officia maxime laboriosam. </p>
                        
                        <div id="welcome_icons">
                          <a href="https://www.instagram.com/hungarian_unicorn_art/" target="_blank"><BsInstagram /></a>
                          <a href="https://www.behance.net/cserebogar"  target="_blank"><RiBehanceLine /></a>

                        </div>
                </div>

        <AnchorLink href="#paintings"><button id="cta_btn" >See my paintings</button></AnchorLink>

        </div>

    </div>
  )
}

export default Home
