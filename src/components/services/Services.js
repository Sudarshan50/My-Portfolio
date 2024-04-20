import React from 'react'

const Services = () => {
  return (
    <section className='services section' id='services'>
    <h2 className='section__title'>Services</h2>
    <span className='section__subtitle'>What I Offer</span>
    

    <div className='services__container container grid'>
        <div className='services__content'>
            <div>
                <i className='uil uil services__icon'></i>
                <h3 className='services__title'></h3>
            </div>

            <span className='services__button'>View More</span>
        </div>
    </div>

    </section>
  )
}

export default Services