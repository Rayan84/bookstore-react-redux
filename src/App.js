import './App.css';
import { React, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Categories from './redux/categories/categories';
import Booklist from './components/Booklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <>
            <Nav />
            <Routes>
              <Route path="/categories" element={<Categories />} />
              <Route path="/" element={<Booklist />} />
            </Routes>
          </>
        </Router>
      </header>
    </div>
  );
}

export default App;
