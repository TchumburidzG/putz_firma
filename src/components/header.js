import React from "react";
import { useEffect, useState, useCallback } from "react";
import headerImg from "../assets/images/header.png";
import Link from './link';

function Header() {

  const links = [
    { label: 'Startseite', path: '/' },
    { label: 'Speisekarte', path: '/menu' },
    { label: 'Kontakt', path: '/contact' },
    { label: 'Gästebuch', path: '/gustBook' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
      >
        {link.label}
      </Link>
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
      <div className="navigation btn" >
        {renderedLinks}
        <a className="btn" href="https://ouzeria.leaftoken.io/" target='_blank' rel='noopener noreferrer'>Bestellug</a>
      </div>
    </>
  );
}

export default Header;





