import './assets/styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
