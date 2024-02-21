import React from 'react';
import './heder.css';
import { WhatsApp } from '../socMedia/Whatsapp';
import { Messenger } from '../socMedia/Messanger';
import { Instagram } from '../socMedia/Instagram';
import { TikTok } from '../socMedia/TikTok';
import MenuIcon from '../../assets/icons/menu.svg'
import { Link } from "react-router-dom";

export default function Header({ showMenu, setShowMenu }) {
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <div className="container">
        <nav>
          <div className="site-name">
            <h2><Link className={'site-name-link'} to="/">სახელი</Link></h2>
          </div>
          <ul>
            <li><Link to="/">მთავარი</Link></li>
            <li><Link to="/services">სერვისები</Link></li>
            <li><Link to="/about">ჩვენს შესახებ</Link></li>
            <li> <Link to="/contact">კონტაქტი</Link></li>
          </ul>
          <div className='contact-links'>
            <div className='telephone'>ტელ:  511 334477</div>
            <WhatsApp />
            <Messenger />
            <Instagram />
            <TikTok />
          </div>
          <div className="menu-btn" onClick={toggleMenu} >
            <img src={MenuIcon} />
          </div>
        </nav>

      </div>
    </header>
  );
}
