import { SliderData } from "./SliderData"
import { useState } from "react"
import { IoIosArrowForward , IoIosArrowBack} from 'react-icons/io';


function Paintings({slides}) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1)
  } 

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1 )
  }

  if(!Array.isArray(slides) || slides.length<=0) {
    return null
  }

  return (
    <div id="paintings" >
      <h3>Paintings</h3>
      <hr></hr>
      
      <section className="slider">
        <IoIosArrowBack className='left-arrow' onClick={prevSlide}/> 
        <IoIosArrowForward className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return(
            <div className={index===current ? 'slide active' :'slide'}
            key={index}
            >
            {index === current && (
              <img src={slide.image} alt="paintings" className="image" />
            )}  
            </div>
          )
        })}
      </section>
      
    </div>
  )
}

export default Paintings
