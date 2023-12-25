import './App.css';
import Wellcome from "./components/Wellcome/Wellcome";
import Footer from "./components/Footer/Footer";
import Impresum from './components/Impresum/Impresum';
import Header from './components/header';
import Route from './components/route';
import GustBook from './components/GustBook/gustBook';
import Contact from './components/contact';
import Menu from './components/menu';
function App() {
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
