
import './App.css';
import NewCards from './Componets/NewCards';
import { useState } from 'react';
import { mobile } from './Componets/Products';
import { clothes } from './Componets/Products';
import { Shoes } from './Componets/Products';
import Counter from './Componets/Counter';
import ScorePractise from './Componets/ScorePractise';
import { players } from './Componets/Products';
import EmployeeForm from './Componets/EmployeeForm';
 
import Ecommerce from './Componets/Ecommerce';
import LoginformI from './Componets/LoginFormI';


function App() {


  let [searchTerm, setSearchTerm] = useState("");  // state for filter
  let [cartCount, setCartCount] = useState(0);     // state for cart
  let [sortBy, setSortBy] = useState("price");     //state for Sort by 
  let [sortRating, setSortRating] = useState("top")  // state for sorting by rating 
  let [sortOrder, setSortOrder] = useState("asc");
  function handleAddToCart() {
    setCartCount(cartCount + 1);  //function for increase cart count oncliking addTOCart button
  }
  function compareByPrice(a, b) { //function for sorting price
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
  }
  function compareByRating(a, b) { //function for sorting rating
    if (sortRating === "low") {
      return a.rating - b.rating;
    } else if (sortRating === "top") {
      return b.rating - a.rating;
    }
  }

  let compareProducts = (a, b) => {
    if (sortBy === "price") {
      return compareByPrice(a, b);
    } else {
      return compareByRating(a, b);
    }
  }
  let filteredMoblies = mobile.filter((product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase())).sort(compareProducts);
  let filteredClothes = clothes.filter((product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase())).sort(compareProducts);
  let filteredShoes = Shoes.filter((product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase())).sort(compareProducts);
  const molibes = filteredMoblies.map((product) => {

    return <NewCards AddToCart={handleAddToCart} key={product.id} productName={product.productName} price={product.price} rating={product.rating} img={product.img} />;
  })
  const Cloths = filteredClothes.map((products) => {
    return <NewCards AddToCart={handleAddToCart} key={products.id} productName={products.productName} img={products.img} price={products.price} rating={products.rating} />;
  })

  const shoes = filteredShoes.map((products) => {
    return <NewCards AddToCart={handleAddToCart} key={products.id} productName={products.productName} img={products.img} price={products.price} rating={products.rating} />;
  })

  const playersDetails = players.map((ele) => { return <ScorePractise key={ele.id} name={ele.name.toUpperCase()} /> })

  const playersId = players.map((ele) => { return <ScorePractise id={ele.id} /> })

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <div>
          <h3 className="Logo">Harsha Store</h3>
          <nav className="Nav-bar">
            <ul>  
              <li><a href='#'> Home</a> </li>
              <li><a href='#'> About</a></li>
              <li><a href='#'> Login</a></li>
              <li><a href='#'> CArt items:{cartCount}</a></li>
            </ul>
          </nav>
          <input className="Input" onChange={(event) => setSearchTerm(event.target.value)} type="text" placeholder="Search products" value={searchTerm} />
          
            <select className="Input" onChange={(event) => {setSortOrder(event.target.value); setSortBy("price")}} value={sortOrder}>
              <option value="asc" >Low to high</option>
              <option value="desc"> High to low</option>
            </select>
            <select className="Input" onChange={(event)=> {setSortRating(event.target.value); setSortBy("rating")}} value={sortRating}>
              <option value="top" > High to low rating</option>
              <option value="low" > low to High rating</option>
            </select>
          

        </div>
      </header>
      <section className="Mobiles">
        <h3>Electronics</h3>
        <div className='product-grid'>
          {molibes}
        </div>
      </section>
      <section className="Cloths">
        <h3> Fashion</h3>
        <div className="product-grid">
          {Cloths}
        </div>
      </section>
      <section className="shoes">
        <h3> Footwear</h3>
        <div className="product-grid">
          {shoes}
        </div> */}
      {/* </section> */}

      {/* <Counter/> */}
      {/* <ScorePractise   />
       <ScorePractise   /> */}
      {/* {playersDetails} */}
      {/* {playersId} */}

      {/* <EmployeeForm/> */}
      {/* <div className="justify-center flex items-center min-h-screen w-full bg-slate-100 p-5">
      <div className="max-w-sm w-full rounded-xl shadow-md bg-blue-100 p-8">
          <LoginForm />
      </div>
      </div> */}
      

      <Ecommerce />
      <LoginformI />

    </div>
  );
}

export default App;
