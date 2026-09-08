export default function NewCards(products) {




  return (
    <>
      <div className="card">
        
        <p> {products.productName}</p>
        <img className="img" src={products.img} alt={products.productName} />
        <p> price: ₹{products.price}</p>
        <p> rating: {products.rating}⭐
</p>
        <button onClick={products.AddToCart} type="button" > Add to Cart </button></div>

    </>




  )

};

