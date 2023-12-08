import './App.css';
import headerImg from "./assets/images/header.png";
//import Header from "./components/Header/Header"
import { useEffect, useState } from 'react';





function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  const headerHeight = 100;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsImageVisible(scrollY < 200);
  }, [scrollY]);

  return (

    <div className="App">
      <div className="header-container">
      <div
        id="header"
        className="image-container"
        style={{ height: `${headerHeight}px`, overflow: 'hidden' }}
      >
        {isImageVisible && (
          <>
            <h1 className="name"> Ouzeria </h1>
            <img src={headerImg} alt="Header" style={{ width: '100%', objectFit: 'cover' }} />
          </>
        )}
      </div>
          <div className="navigation"> 
              <a className="btn">Startseite</a>
              <a className="btn">Speisekarte</a>
              <a className="btn">Über uns</a>
              <a className="btn" href="https://ouzeria.leaftoken.io/" target='_blank'>Bestellug</a>
              <a className="btn">Kontakt</a>
          </div>
      </div>
      <div>
        <p>besika</p><p>besika</p><p>besika</p><p>besika</p>
        <p>besika</p><p>besika</p><p>besika</p><p>besika</p>
        <p>besika</p><p>besika</p><p>besika</p><p>besika</p>
        <p>besika</p><p>besika</p><p>besika</p><p>besika</p>
        <p>besika</p><p>besika</p><p>besika</p><p>besika</p>
      </div>
    
    </div>
  );
}

export default App;
