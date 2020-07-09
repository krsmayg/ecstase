import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
const navigationItems = (props) => (
  <ul className='nav_links'>
    <NavigationItem  link='/' active>Home</NavigationItem>
    <NavigationItem  link='/wallshop'>Shop Art</NavigationItem>
    <NavigationItem  link='/'>Passengers</NavigationItem>
    <NavigationItem  link='/'> About Miracul</NavigationItem>
  </ul>
);

export default navigationItems;