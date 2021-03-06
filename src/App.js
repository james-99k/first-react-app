import './App.css';
import SignIn from './Components/Pages/page-signIn'
import SignUp from './Components/Pages/page-signUp'
import Home from './Components/Pages/page-home'
import Product from './Components/Pages/page-product'
import Store from './Components/Pages/page-store'
import Detail from './Components/Footer/detail';
import NavFooter from './Components/Footer/navFooter';
import Payment from './Components/Footer/payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Accessories from './Components/Pages/page-accessories';
import NewsLetter from './Components/Main/newsLetter';


function App() {
  return (
    <div>
      <NewsLetter />
      <Router>
        <Switch>
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/store" exact component={Store} />
          <Route path="/accessories" exact component={Accessories} />
          {/* <Route>404 Not Found</Route>   */}
        </Switch>
      </Router>

      <Detail />
      <NavFooter />
      <Payment />
    </div>
  );
}

export default App;
