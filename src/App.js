import './App.css';
import { React, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Nav from './components/Nav';
import Categories from './redux/categories/categories';
import Booklist from './components/Booklist';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Router>
            <>
              <Nav />
              <Routes>
                <Route exact path="/categories" element={<Categories />} />
                <Route exact path="/" element={<Booklist />} />
              </Routes>
            </>
          </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
