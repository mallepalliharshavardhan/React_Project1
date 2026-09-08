export default function ProductCard(product){


return (
    < >
    <div className="card">
        <h3>productname:{product.productName}</h3>
    <img  src={product.img} alt={product.productName} /> 

    <p> price:₹ {product.price}</p>
     <p> rating:{product.rating}</p>

     <button  type="button" > Add to Cart</button></div>
    
    </>
)

};

