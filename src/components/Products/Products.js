import React from 'react'
import './Products.css'
const Products = ({heading,data}) => {
    return (
        <>
        <div className = 'productscontainer'>
            <div className = 'productsheading'>{heading}</div>
            <div className= 'productswrapper'>
                {data.map((product, index)=> {
                    return (
                        <div className = 'productcard' key={index}>
                            <img className = 'productimg' src={product.img} alt={product.alt} />
                            <div className = 'producttitle' >{product.name}</div>
                            <div className = 'productdesc'>{product.desc}</div>
                            <div className = 'productprice'>{product.price}</div>
                            <div className = 'productbtn'>{product.button}</div>
                        </div>
                    )
                })}
            </div>
         </div>
        </>
    )
}

export default Products
