import './App.css';
import React, { useState } from "react";
import Wellcome from "./components/Wellcome/Wellcome";
import Footer from "./components/Footer/Footer";
import Impresum from './components/Impresum/Impresum';
import Header from './components/header';
import Route from './components/route';
import GustBook from './components/GustBook/gustBook';
import Contact from './components/contact';
import Menu from './components/menu';
import Dropdown from './components/MobileMenuModal/MobileMenuModal'
function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  function handleMobileMenu() {
    setMobileMenu(!mobileMenu)
    console.log('.----------------------')
  };
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  return (
    <div className="App">
      <Header handleMobileMenu={handleMobileMenu} />
      <Route path={'/'}>
        <Wellcome />
      </Route>
      <Route path={'/impresum'}>
        <Impresum />
      </Route>
      <Route path={'/gustBook'}>
        <GustBook />
      </Route>
      <Route path={'/contact'}>
        <Contact />
      </Route>
      <Route path={'/menu'}>
        <Menu />
      </Route>
      <Footer />
      {mobileMenu && (<Dropdown options={options} value={selection} onChange={handleSelect}  />)}
    </div>
  );
}

export default App;
