import React from 'react';
// import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'
import LogoNodejs from 'react-ionicons/lib/LogoNodejs'
import IosCartOutline from 'react-ionicons/lib/IosCartOutline';
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline';
const toolbar = (props) => (
    <header className='toolbar'>
      <Logo color="black" link="/" />
      <nav>
        <NavigationItems />
      </nav>
      <IosCartOutline onClick={() => alert('Hi!')} fontSize="24px"className="toolbar--cart"  />    
      <IosSearchOutline onClick={() => alert('Hi!')} fontSize="24px" className="toolbar--search" />    
    </header>
);
export default toolbar;

