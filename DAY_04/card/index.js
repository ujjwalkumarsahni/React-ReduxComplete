import { createRoot } from 'react-dom/client';
import './style.css';

const card = (key, title, image,brand,price,rating) => {
    console.log(key);

    return (<div className='card'>
        <img src={image} />
        <h2>{title}</h2>
        <p>Brand: {brand}</p>
        <p><b>Price: {price}</b></p>
        <p><b>Rating: {rating}</b></p>
    </div>
    )
};

// const cantainer = [
//     card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card(),card() 
// ]

const root = createRoot(document.getElementById('root'))

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        const cantainer2 = data.products.map((product) => {
            return card(product.id, product.title, product.thumbnail,product.brand,product.price,product.rating)
        })
        // console.log(cantainer2);
        
        root.render(
            <div className='cantainer'>{cantainer2}</div>
        );
    });