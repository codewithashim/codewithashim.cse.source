import React from 'react';
import './nav.css';
import {AiFillHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookBookmark} from 'react-icons/bi';
import {AiOutlineCode} from 'react-icons/ai';
import {FiMessageSquare} from 'react-icons/fi';
import {BiNews} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav id='mainNav'>
      <a href='#main_header' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about_me' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/> </a>
      <a href='#experiance' onClick={()=> setActiveNav('#experiance')} className={activeNav === '#experiance' ? 'active' : ''}><BiBookBookmark/></a>
      <a href='#project' onClick={()=> setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineCode/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMessageSquare/></a>
      <a href='#blog' onClick={()=> setActiveNav('#blog')} className={activeNav === '#blog' ? 'active' : ''}><BiNews/></a>
    </nav>
  )
}

export default Nav


