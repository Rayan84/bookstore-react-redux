import './App.css';
import Nav from './components/Nav';
import {
   BrowserRouter as Router,
   Routes,
   Route
  } from 'react-router-dom';
import Categories from './redux/categories/categories';
import Booklist from './components/Booklist';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Fragment>
          <Nav />
          <Routes>
            <Route path="/categories" element={<Categories />}/>
            <Route path="/" element={<Booklist />}/>
          </Routes>
          </Fragment>
        </Router>
      </header>
    </div>
  );
}

export default App;
