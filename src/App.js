import logo from './fornacelogo.png';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Start from "./routes/Start"

function App() {
  return (
    <BrowserRouter>
     <Switch>
     <Route exact path = "/">
      <div className="App">
        <header className="App-header">
          <div className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p className="App-description"> Collect the most pairs of cards! </p>
            <Home/>
        </header>
      </div>
     </Route>
     <Route exact path = "/start" component={Start}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
