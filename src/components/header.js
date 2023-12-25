import React from "react";
import { useEffect, useState, useCallback } from "react";
import headerImg from "../assets/images/header.png";
import Link from './link';

function Header() {
  const [scrollY, setScrollY] = useState(0);

  const links = [
    { label: 'Wellcome', path: '/' },
    { label: 'Impresum', path: '/impresum' },
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


  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const headerHeight = 400;
  const minImageHeight = 10;
  const navigationHeight = 10;

  const imageHeight = Math.max(headerHeight - scrollY, minImageHeight);

  return (
    <>
      <div className="header-container">
        <div className="image-container" style={{ height: `${imageHeight}px`, overflow: 'hidden' }}>
          {imageHeight > minImageHeight && (
            <>
              <h1 className="name"> Ouzeria </h1>
              <img src={headerImg} alt="Header" style={{ width: '100%', objectFit: 'cover' }} />
            </>
          )}
        </div>
      </div>

      <div className="navigation" >
        <a className="btn">
          {renderedLinks}
        </a>
        <a className="btn">Startseite</a>
        <a className="btn">Speisekarte</a>
        <a className="btn">Gästebuch</a>
        <a className="btn" href="https://ouzeria.leaftoken.io/" target='_blank' rel='noopener noreferrer'>Bestellug</a>
        <a className="btn">Kontakt</a>
      </div>
    </>
  );
}

export default Header;





