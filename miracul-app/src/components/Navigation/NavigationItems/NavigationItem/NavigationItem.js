import React from 'react'
// import './NavigationItem.css'
const navigationItem = (props) => (
  <li className='nav_link'>
    <a href={props.link}>
      {props.children}
    </a>
  </li>
)

export default navigationItem;