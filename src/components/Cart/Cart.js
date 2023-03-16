import React from 'react'
import './Cart.css' 
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CartItem from './CartItem';

const Cart = ({ cart , handleUpdateCartQty , handleRemoveFromCart , handleEmptyCart }) => {
    
    
    
    const EmptyCart =() => (
        <div className='productinfo'>Oops! Looks like there is no item in your cart.
            <Link to='/'>Let's Go and add some!</Link>
        </div>
    );

    const FilledCart = () => (
        <>
        
        <Grid container spacing={3}>  
            {cart.line_items.map((item) => (
                <Grid item key={item.id} className='productswrapper'>
                    <CartItem item ={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
            ))}
        </Grid>
        
        <div className='productcontainer'>
            <div className='productinfo'>
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </div>
            <div className='productbtn' onClick={handleEmptyCart}>Empty Cart</div>
            <Link to='/checkout'> <div className='productbtn'>Checkout</div> </Link>
        </div>
        </>
    );
     if(!cart.line_items) return 'Loading...';

    return (
        <div className='productcontainer'>
            <div className='productsheading'>Your Shopping Cart</div>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </div>
    )
}

export default Cart
