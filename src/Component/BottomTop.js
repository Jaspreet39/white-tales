import React, { useEffect } from 'react'
import '../Style/BottomTop.scss'
import Aos from "aos";
import 'aos/dist/aos.css'; 

function BottomTop() {



  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='bottomTop'>
      <div data-aos="fade-right" className="bottomLeft">
              <h1>
                  ABOUT
                  <br />
                  WHITE TALES
              </h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit. Suspendisse mauris eros,
                  <br /> iaculis placerat purus sed, euismod luctus
                  <br />
                  quam. Curabitur quis bibendum augue.
                  <br />
                  Nam convallis blandit sapien in molestie.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit. Suspendisse mauris eros,
                  <br />
                  iaculis placerat purus sed, euismod luctus
                  <br /> quam. Curabitur quis bibendum augue.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit. Suspendisse mauris eros,
                  <br />
                  iaculis placerat purus sed, euismod luctus
                  <br /> quam. Curabitur quis bibendum augue.
              </p>
          </div>
      <img className='bottomRight'
        src="https://images.indianexpress.com/2021/05/gold-jewellery_1200-Copy.jpg"
        alt=""
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default BottomTop