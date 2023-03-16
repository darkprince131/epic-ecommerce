import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';


const Productstwo = ({products, onAddToCart}) => {
    return(
    <>
        <main>
        <div className = 'productscontainer'>
            <div className = 'productsheading'>All Products</div>
            <div className= 'productswrapper'>
            <Grid container justify ='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key= {product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
            </div>
        </div>    
        </main>
    </>
    )
}

export default Productstwo; 