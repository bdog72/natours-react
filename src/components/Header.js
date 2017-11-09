import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <div>
        <header className='header'>
          <div className='header__logo-box'>
            <img src={require('../../public/images/logo-white.png')} alt='logo' className='header__logo' />
          </div>
          <div className='header__text-box'>
            <h1 className='heading-primary'>
              <span>App-App-D</span>
              <span className='heading-primary--main'>Outdoors</span>
              <span className='heading-primary--sub'>is where life happens</span>
            </h1>
            <a href='#' className='btn btn--white btn--animated'>Discover Our Tours</a>
          </div>
        </header>
      </div>
    )
  }
}
