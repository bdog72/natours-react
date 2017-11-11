import React, { Component } from 'react'

export default class Main extends Component {
  render () {
    return (
      <main>
        <section className='section-about'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>Exciting Tours For Adventurous People</h2>
          </div>
          <div className='row'>
            <div className='col-1-of-2'>
              <h3 className='heading-tertiary u-margin-bottom-small'>Youre going to fall in love with nature</h3>
              <p className='paragraph'>Spicy jalapeno bacon ipsum dolor amet landjaeger brisket pork belly biltong, jerky burgdoggen beef leberkas flank cow. Ribeye pancetta bacon kevin, t-bone short loin strip steak spare ribs chicken ham hock sausage short ribs. Filet mignon burgdoggen sausage beef ribs pork ground round capicola doner fatback cupim.</p>
              <h3 className='heading-tertiary u-margin-bottom-small'>Live adventures like you never have before</h3>
              <p className='paragraph'>Spicy jalapeno bacon ipsum dolor amet landjaeger brisket pork belly biltong, jerky burgdoggen beef leberkas flank cow. Ribeye pancetta bacon kevin, t-bone short loin strip steak spare ribs chicken ham hock sausage short ribs. Filet mignon burgdoggen sausage beef ribs pork ground round capicola doner fatback cupim.</p>
              <a href='#' className='btn-text'>Learn More &rarr;</a>
            </div>
            <div className='col-1-of-2'>
              <div className='composition'>
                <img src={require('../../public/images/nat-1-large.jpg')} alt='Photo 1' className='composition__photo composition__photo--p1' />
                <img src={require('../../public/images/nat-2-large.jpg')} alt='Photo 2' className='composition__photo composition__photo--p2' />
                <img src={require('../../public/images/nat-3-large.jpg')} alt='Photo 3' className='composition__photo composition__photo--p3' />
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}