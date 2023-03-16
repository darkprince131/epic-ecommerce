import React from 'react'
import './Cart.css'

const CartItem = ({item , onUpdateCartQty , onRemoveFromCart}) => {
    return (
        <div className='productcard'>
            <img className='productimg' src={item.media.source} alt={item.name}/>
            <div className = 'producttitle' >{item.name}</div>
            <div className = 'productdesc' dangerouslySetInnerHTML={{__html: item.description}} />
            <div className = 'productprice'>{item.line_total.formatted_with_symbol}</div>
            <div className='productbtnsmall' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</div>
            <div className = 'productdesc'>{item.quantity}</div>
            <div className='productbtnsmall' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</div>
            <div className='productbtn' onClick={() => onRemoveFromCart(item.id)}>Remove</div>
        </div>
    )
}

export default CartItem
