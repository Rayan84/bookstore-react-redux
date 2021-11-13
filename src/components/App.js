import { Switch, Route } from 'react-router-dom';
import BookContainer from './BookContainer';
import Categories from './Categories';
import Header from './Header';

function App() {
  return (
    <div className="bg-light app-container">
      <Header />
      <Switch>
        <Route exact path="/" component={BookContainer} />
        <Route exact path="/categories" component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
