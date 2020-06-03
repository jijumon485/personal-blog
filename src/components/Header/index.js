import React from 'react';
import './style.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';


/**
* @author
* @function Header
**/

const Header = (props) => {

  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </nav>
        <div className="socialmediaContiner"> 
        <img className="socialmedia" src={require('../../assets/icons/fb.png')} alt="Facebook" />
        <img className="socialmedia" src={require('../../assets/icons/insta.png')} alt="Instagram" />
        <img className="socialmedia" src={require('../../assets/icons/twitt.png')} alt="Twitter" />
         </div>
       
    </header>
   )

 }

export default Header