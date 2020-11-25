import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Splash from './container/splash';
import Login from './container/login';
import Home from './container/home';

function App() {
  return (
    <Router>
      <Switch>
      {/* <Route path='/' exact component={Splash} />
      <Route path='/login' component={Login} />
      <Route path='/home' component={Home}/> */}

      <Route path='/' exact component={Home}/>
       
        {/* <Route path="/" ><Splash/></Route>
        <Route path="/login" ><Login/></Route> */}
      </Switch>
    </Router>

    // <div>
    //   <Splash/>
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
