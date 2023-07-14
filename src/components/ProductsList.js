
import Product from "./Product"

export default function ProductList (props) {
    return (
        <ul>
            <Product product={props.product}/>
            {/* <li>
                {props.product.name}
            </li> */}

        </ul>
    )
}