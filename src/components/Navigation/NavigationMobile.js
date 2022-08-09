import React from 'react'
import Brand from '../Brand/Brand'
import SearchBar from '../SearchBar/SearchBar';
import "./Navigation.scss";

function NavigationMobile() {
  return (
    <nav className='mob-top-navigation'>
        <Brand />
        <SearchBar />
    </nav>
  )
}

export default NavigationMobile