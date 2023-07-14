import {useState} from 'react';


export default function Product(props){
 
 //whatever is true add to shopping cart
    const [inShoppingCart,setInShoppingCart] =useState(false)

    return (
        <li>
        {props.product.name} is {props.product.price} and 
        {inShoppingCart ? 
        <span> it is in your shopping cart! </span> :
        <span>It is not in your shopping cart</span>
        }
        </li>
    )
}