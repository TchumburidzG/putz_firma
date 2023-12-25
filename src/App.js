import './App.css';
import Wellcome from "./components/Wellcome/Wellcome";
import Footer from "./components/Footer/Footer";
import Impresum from './components/Impresum/Impresum';
import Header from './components/header';
import Route from './components/route';

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
      <Footer />
    </div>
  );
}

export default App;
