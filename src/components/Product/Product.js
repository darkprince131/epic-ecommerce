import React from 'react';
import './Products.css';
import { AddShoppingCart } from '@material-ui/icons';

const Product = ({product,onAddToCart}) => {

    
    return (
        <div className= 'productcard'>
            <img className = 'productimg' src={product.media.source} alt={product.name} />
            <div className = 'producttitle' >{product.name}</div>
            <div className = 'productdesc' dangerouslySetInnerHTML={{__html: product.description}} />
            <div className = 'productprice'>{product.price.formatted_with_symbol}</div>
            <div className = 'productbtn' onClick={() => onAddToCart(product.id,1)}>Add to Cart <AddShoppingCart /></div>
            
        </div>
    )
}

export default Product
