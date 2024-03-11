import './App.css';
import Cards from './components/cards/Cards';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Contact from './components/contact/Contact';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [dispayedItem, setDispeyedItem] = useState('puzzi8')
  return (
    <BrowserRouter>
    <div className="App">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />

      <Routes>
          <Route path="/"
            element={
              <Cards
              setDispeyedItem={setDispeyedItem}
              dispayedItem={dispayedItem}
            />
            }
          />
          <Route path="contact" element={<Contact />} />
        </Routes>
      {showMenu && <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
