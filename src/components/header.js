import React, { useState } from "react";
import headerImg from "../assets/images/header.png";
import Link from './link';
import MenuIcon from '@mui/icons-material/Menu';

function Header({handleMobileMenu}) {


  const links = [
    { label: 'Startseite', path: '/' },
    { label: 'Speisekarte', path: '/menu' },
    { label: 'Kontakt', path: '/contact' },
    { label: 'Gästebuch', path: '/gustBook' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <p className="btn" key={link.label}>
        <Link
          to={link.path}
        >
          {link.label}
        </Link>
      </p>
    );
  });

  return (
    <>
      <div className="header-container">
        <div className="image-container" >
          <h1 className="name"> Ouzeria </h1>
          <img src={headerImg} alt="Header" style={{ width: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <div className="navigation" >
        <div className="navbar">
          {renderedLinks}
          <a className="btn" href="https://ouzeria.leaftoken.io/" target='_blank' rel='noopener noreferrer'>Bestellug</a>
        </div>
        <button className="mobile-menu" onClick={handleMobileMenu}><MenuIcon></MenuIcon></button>
      </div>
    </>
  );
}

export default Header;





