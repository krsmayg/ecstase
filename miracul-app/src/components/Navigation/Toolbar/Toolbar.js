import React from 'react';
import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'
const toolbar = (props) => (
    <header className='toolbar'>
     <Logo color="black" link="/" />
     <nav>
       <NavigationItems />
     </nav>
     <li className="toolbar-li"><a href="/" className="toolbar-a"><i className="fa fa-shopping-basket"></i></a></li>
    </header>
);
export default toolbar;

