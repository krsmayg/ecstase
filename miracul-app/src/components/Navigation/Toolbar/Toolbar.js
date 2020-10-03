import React, {useState} from 'react';
// import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'
import LogoNodejs from 'react-ionicons/lib/LogoNodejs'
import IosCartOutline from 'react-ionicons/lib/IosCartOutline';
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline';
import {fetchPosters} from '../../../actions/index';
import {connect} from 'react-redux';
import { withRouter } from "react-router";

const Toolbar = React.memo(props => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInputVisibility,setSearchInputVisibility] = useState(false);
  const [searchValue, setSearhValue] = useState('');

  
  const handleInputOnChange = (event) => {
    setSearhValue(event.target.value);
    console.log(searchValue);

  };
  const goToPosterPage = (slug) => {
    const queryParams = encodeURIComponent("artwork") + '=' + encodeURIComponent(slug);
    console.log(slug);
    console.log( props.history);
    props.history.push({
      pathname:'/wallshop',
      search: '?' + queryParams
    });
  }
  const searchPostersAndRender = () => {
    if(props.posters) {
      const filteredPosters = props.posters.filter(poster => {
        return poster.name.toLowerCase().includes(searchValue.toLowerCase())
      });
      if(searchValue === '') return null;
      
      return (
        <div className="right-nav__searhed-list" hidden={!searchInputVisibility}>
          <div className="right-nav__searhed-list__list-info"><span>{`${filteredPosters.length} product found`}</span></div>
          {filteredPosters.map(poster => <div className="right-nav__searhed-list__item-container" onClick={() => goToPosterPage(poster.slug)}>
             <img src={`http://localhost:9000/images/posters/${poster.imageWall}`} width="60" height="80" />
              <div className="right-nav__searhed-list__item-container__info-box" > 
                <span className="right-nav__searhed-list__item-container__info-box__title">{poster.name}</span>
                <span className="right-nav__searhed-list__item-container__info-box__subTitle"><span style={{color:"#e74c3c", fontWeight: 'bold'}}>{poster.currentAmount}</span> / {poster.amount} left </span>  
              </div>
          </div>)}
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
        <IosSearchOutline onClick={() => setSearchInputVisibility(!searchInputVisibility)} fontSize="24px" className="toolbar--search"  /> 
        {searchInputVisibility  ? <input className="right-nav__input" onChange={handleInputOnChange}></input> : null }  
        {searchPostersAndRender()}
      </div>
    </header>
  );
});

const mapStateToProps = (state) => {
  return {
    posters: state.posters
  }
}
export default connect(mapStateToProps, fetchPosters)(withRouter(Toolbar));

