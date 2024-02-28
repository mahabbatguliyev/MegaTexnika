import React from 'react'
import './style.css'
import { useTranslation } from 'react-i18next'
const WhyUs = () => {
  const {t}=useTranslation('whyUs')
  const {t:t1}=useTranslation('hero')
  return (
    <section id='whyUs'>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-3">
            <div className="why-us-content">
              <h6>{t('why should you choose us')}</h6>
              <p>{t1("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled")}
              <br/> <br/> {t("it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English")}</p>
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