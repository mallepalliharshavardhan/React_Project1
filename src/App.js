
import './App.css';
import NewCards from './NewCards';
import { useState } from 'react';
import { mobile } from './Products';
import { clothes } from './Products';
import { Shoes } from './Products';


function App() {


  let [searchTerm, setSearchTerm] = useState(""); // state for filter
  let [cartCount, setCartCount] = useState(0);     // state for cart
  let [sortOrder, setSortOrder] = useState("asc");   //state for Sort by 
  let [sortRating, setSortRating] = useState("topRating"); // state for sorting by rating 
  function handleAddToCart() {  
    setCartCount(cartCount + 1);  //function for increase cart count oncliking addTOCart button
  }
  function compareByPrice(a,b){ //function for sorting price
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
  }
  function compareByRating(a,b){ //function for sorting rating
    if (sortRating === "lowRating") {
      return a.rating - b.rating;
    } else if (sortRating === "topRating") {
      return b.rating - a.rating;
    }
  }
  let filteredMoblies = mobile.filter((product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase())).sort(compareByPrice,compareByRating);
  let filteredClothes = clothes.filter((product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase())).sort(compareByPrice,compareByRating);
  let filteredShoes = Shoes.filter((product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase())).sort(compareByPrice,compareByRating);
  const molibes = filteredMoblies.map((product) => {

    return <NewCards AddToCart={handleAddToCart} key={product.id} productName={product.productName} price={product.price} rating={product.rating} img={product.img} />;
  })
  const Cloths = filteredClothes.map((products) => {
    return <NewCards AddToCart={handleAddToCart} key={products.id} productName={products.productName} img={products.img} price={products.price} rating={products.rating} />;
  })

  const shoes = filteredShoes.map((products) => {
    return <NewCards AddToCart={handleAddToCart} key={products.id} productName={products.productName} img={products.img} price={products.price} rating={products.rating} />;
  })



  return (
    <div className="App">
      <header className="App-header">

        <h3 className="Logo">Harsha Store</h3>
        <nav className="Nav-bar">
          <ul>
            <li><a href='#'> Home</a> </li>
            <li><a href='#'> About</a></li>
            <li><a href='#'> Login</a></li>
            <li><a href='#'> CArt items:{cartCount}</a></li>
          </ul>
        </nav>
        <input onChange={(event) => setSearchTerm(event.target.value)} type="text" placeholder="Search products" value={searchTerm} />

        <select onChange={(event) => setSortOrder(event.target.value)} value={sortOrder}>
          <option value="asc" >Low to high</option>
          <option value="desc"> High to low</option>
          <option value="lowRating"> low to high rating</option>
          <option value="topRating" > High to Low rating</option>

        </select>
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
        </div>
      </section>

    </div>
  );
}

export default App;
