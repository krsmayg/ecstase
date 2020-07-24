import React, { useState } from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import { connect } from 'react-redux';
// import './NavigationItems.css'
// const navigationItems = (props) => (
//   <ul className='nav_links'>
//     <NavigationItem  link='/' active>Home</NavigationItem>
//     <NavigationItem  link='/wallshop'>Shop Art</NavigationItem>
//     <NavigationItem  link='/'>Passengers</NavigationItem>
//     <NavigationItem  link='/'> About Miracul</NavigationItem>
//   </ul>
// );
function NavigationItems(props) {
   const [slug, setSlug] = useState('');
   const createSlug = async() => {
   const poster =  await props.posters[0];
    if(poster) {
      setSlug(poster.slug);
    }
   }
   createSlug();
  return (
    <ul className='nav_links'>
      <NavigationItem  link='/' active>Home</NavigationItem>
      <NavigationItem  link={`/wallshop?artwork=${slug}`}>Shop Art</NavigationItem>
      <NavigationItem  link='/'>Passengers</NavigationItem>
      <NavigationItem  link='/'> About Miracul</NavigationItem>
    </ul>
  )
}
const mapStateToProps = (state) => {
  return {
    posters: state.posters
  }
}
export default connect(mapStateToProps)(NavigationItems);