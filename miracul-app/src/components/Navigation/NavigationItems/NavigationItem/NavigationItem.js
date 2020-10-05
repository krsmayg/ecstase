import React from 'react'
// import './NavigationItem.css'
import {Link} from 'react-router-dom'
const navigationItem = (props) => (
  <li className='nav_link'>
    <Link to={props.link}>
      <a>
        {props.children}
      </a>
    </Link>
  </li>
)

export default navigationItem;