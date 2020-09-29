import React, {useState} from 'react';
// import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'
import LogoNodejs from 'react-ionicons/lib/LogoNodejs'
import IosCartOutline from 'react-ionicons/lib/IosCartOutline';
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline';
import {fetchPosters} from '../../../actions/index'
import {connect} from 'react-redux'
const Toolbar = React.memo(props => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInputVisibility,setSearchInputVisibility] = useState(false);
  const [searchValue, setSearhValue] = useState('');
  
  const handleInputOnChange = (event) => {
    setSearhValue(event.target.value);
    console.log(searchValue);

  };
  const searchPostersAndRender = () => {
    if(props.posters) {
      const filteredPosters = props.posters.filter(poster => {
        return poster.name.toLowerCase().includes(searchValue.toLowerCase())
      });
      if(searchValue === '') return null;
      return (
        <div className="right-nav__searhed-list">
          {filteredPosters.map(poster => <p>{poster.name}</p>)}
        </div>
      );
    };
    return <p>Loading...</p>
  };

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
        <IosSearchOutline onClick={() => setSearchInputVisibility(!searchInputVisibility)} fontSize="24px" className="toolbar--search" /> 
        <input className="right-nav__input" hidden={searchInputVisibility} onChange={handleInputOnChange}></input>  
        {searchPostersAndRender()};
      </div>
    </header>
  );
});

const mapStateToProps = (state) => {
  return {
    posters: state.posters
  }
}
export default connect(mapStateToProps, fetchPosters)(Toolbar);

