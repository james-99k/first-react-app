import './App.css';
import NavHeader from './Components/Header/navHeader.js'
import Logo from './Components/Header/logoHeader.js'
import NavMain from './Components/Main/navMain.js'
import Home from './Components/Main/page-home'
import Product from './Components/Main/page-product'
import Detail from './Components/Footer/detail.js';
import NavFooter from './Components/Footer/navFooter.js';
import Payment from './Components/Footer/payment.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <NavHeader />
      <Logo />
      <NavMain />

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route>404 Not Found</Route> */}
        </Switch>
      </Router>
      <Router>
        <Switch>
          <Route path="/product" exact component={Product} />
          {/* <Route>404 Not Found</Route> */}
        </Switch>
      </Router>

      
      <Detail />
      <NavFooter />
      <Payment />
    </div>
  );
}

export default App;
