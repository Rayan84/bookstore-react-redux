import { Switch, Route } from 'react-router-dom';
import Booklist from './Booklist';
import Categories from './Categories';
import Header from './Header';

function App() {
  return (
    <div className="bg-light app-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Booklist} />
        <Route exact path="/categories" component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
