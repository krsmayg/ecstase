import React, {useState} from 'react';
// import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'
import LogoNodejs from 'react-ionicons/lib/LogoNodejs'
import IosCartOutline from 'react-ionicons/lib/IosCartOutline';
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline';


const Toolbar = React.memo(props => {
  const [menuOpen, setMenuOpen] = useState(false);

  const burgerBtnHandler = () => {
    let btn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu-nav')
    if(!menuOpen) {
      btn.classList.add('open');
      menu.classList.add('toogled');
      setMenuOpen(true);
    } else {
      btn.classList.remove('open');
      menu.classList.remove('toogled');

      setMenuOpen(false);
    }
  } 
  return (
    <header className='toolbar'>
       <div className="menu-btn" onClick={burgerBtnHandler}>
        <div className="menu-btn__burger"></div>
      </div>
      <Logo color="black" link="/" />
      <nav className="menu-nav">
        <NavigationItems />
      </nav>
      <div className="right-nav">
        <IosCartOutline onClick={() => alert('Hi!')} fontSize="24px"className="toolbar--cart"  />    
        <IosSearchOutline onClick={() => alert('Hi!')} fontSize="24px" className="toolbar--search" />   
      </div>
    </header>
  );
});
export default Toolbar;

