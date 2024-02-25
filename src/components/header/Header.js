import React from 'react';
import './heder.css';
import { WhatsApp } from '../socMedia/Whatsapp';
import { Messenger } from '../socMedia/Messanger';
import { Instagram } from '../socMedia/Instagram';
import { TikTok } from '../socMedia/TikTok';
import MenuIcon from '../../assets/icons/menu.svg';
import { Link } from "react-router-dom";
import cover from '../../assets/pics/cover.jpg';
import phone from '../../assets/icons/phone.svg';

export default function Header({ showMenu, setShowMenu }) {
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
    <header>
      <div className="container">
        <nav>
          <div className="site-name">
            <div><Link className='site-name-link' to="/">Cleaning Tools</Link></div>
          </div>
          <ul>
            <li><Link to="/">მთავარი</Link></li>
            <li><Link to="/services">სერვისები</Link></li>
            <li> <Link to="/contact">კონტაქტი</Link></li>
          </ul>
          
              <div className='telephone'><img src= {phone} style={{paddingRight: '4px'}}/>511 33 44 77</div>
              <div className='contact-links'>
                <div className='contact-icons'>
                <WhatsApp className='whatsapp-container-mobile' />
                <Messenger className='messenger-container-mobile' />
                <Instagram className='instagram-container-mobile' />
                <TikTok className='tiktok-container-mobile' />
              </div>
          </div>
          <div className="menu-btn" onClick={toggleMenu} >
            <img src={MenuIcon} />
          </div>
          </nav>
      </div>
    </header>
      <div> <img src={cover} /></div>
    </div>
  );
}
