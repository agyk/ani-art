import {HiOutlineMail} from "react-icons/hi"
import {BsInstagram} from "react-icons/bs"
import {RiBehanceLine} from "react-icons/ri"

function Contact() {
  return (
    <div id="contact">
      <h3>Contact me</h3>

      <footer>
        <HiOutlineMail />
        <p>hungarianunicorn@gmail.com</p>
        
        <div id="footericons">
          <a href="https://www.instagram.com/hungarian_unicorn_art/" target="_blank"><BsInstagram /></a>
          <a href="https://www.behance.net/cserebogar"  target="_blank"><RiBehanceLine /></a>

        </div>

      </footer>
    </div>
  )
}

export default Contact
