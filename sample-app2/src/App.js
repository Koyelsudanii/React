// import ProductCard from "./components/ProductCard"

// function App(){
//     const product={
//         title :"AC",
//         price:25000,
//         image: "https://m.media-amazon.com/images/I/31JSSwABWsL._SY445_SX342_QL70_FMwebp_.jpg"
//     }
//     return(
//         <div style={({display:"flex" , justifyContent:"center" , marginTop: '20px'})}>
//             <ProductCard
//                 title= {product.title}
//                 price= {product.price}
//                 image= {product.image}
//             />
//         </div>
//     )
// }
// export default App




import ProductCard from "./components/ProductCard"
import products from "./data/Products.json";
function App(){
    const product={
        title :"AC",
        price:25000,
        image: "https://m.media-amazon.com/images/I/31JSSwABWsL._SY445_SX342_QL70_FMwebp_.jpg"
    }
    return(
        <div style={({display:"flex" , justifyContent:"center" , marginTop: '20px'})}>
            { products.map((product)=>(
            <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
            />

        ))
    }
        </div>
    )
}
export default App