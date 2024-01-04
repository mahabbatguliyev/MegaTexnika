import React from 'react'
import './style.css'
const WhyUs = () => {
  return (
    <section id='whyUs'>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-3">
            <div className="why-us-content">
              <h6>Niyə bizi seçməlisiniz</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled <br /> <br />
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            </div>
          </div>
          <div className="col-lg-7 col-md-9">
            <div className="why-us-img">
              <img src="./src/assets/img/image 8.svg" alt="Why us image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs