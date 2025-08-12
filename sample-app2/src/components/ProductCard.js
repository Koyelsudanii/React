import "./ProductCard.css"
function ProductCard({title,price,image})
{
    return(
        <div className="Product-Card">
            <img src = {image} alt= {title} className="product-image" />
            <h1> {title} </h1>
            <p>{price}</p>
            <button>Add to cart</button>
        </div>
    )
}
export default ProductCard