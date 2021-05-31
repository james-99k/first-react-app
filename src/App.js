import logo from './logo.svg';
import './App.css';
import NavHeader from './Components/Header/navHeader.js'
import Card from './Components/Main/card.js'

function App() {
  return (
    <div>
    <NavHeader />
    <div className="cardContainer">
    <Card product="iphone 6" price="$499" discountedPrice="$599"/>
    <Card product="iphone 7" price="$599" discountedPrice="$699"/>
    <Card product="iphone 9" price="$699" discountedPrice="$799"/>
    <Card product="iphone 10" price="$799" discountedPrice="$899"/>
    </div>
    </div>
  );
}

export default App;
