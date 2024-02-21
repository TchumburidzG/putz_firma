import './App.css';
import Cards from './components/cards/Cards';
import Header from './components/header/Header';
import MobilSlider from './components/carousel/Carousel';
import SideBar from './components/sideBar/SideBar';
import Contact from './components/contact/Contact';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [dispayedItem, setDispeyedItem] = useState('puzzi8')
  return (
    <BrowserRouter>
    <div className="App">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />

      <Routes>
          <Route path="/"
            element={<Cards
              setShowMore={setShowMore}
              setDispeyedItem={setDispeyedItem}
              dispayedItem={dispayedItem}
            />
            }
          />
        <Route path="contact" element={<Contact />} />
      </Routes>
        {showMore && <MobilSlider setShowMore={setShowMore} dispayedItem={dispayedItem} />}
      {showMenu && <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
