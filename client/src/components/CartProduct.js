import Button from 'react-bootstrap/Button';
import {CartContext} from "../CartContext";
import {useContext} from "react";
import {getProductData} from "../productsStore";

function CartProduct(props) {
    
    // Hold the cart which will call on the context functions
    const cart = useContext(CartContext);

    // Hold product keys
    const id = props.id;
    const quantity = props.quantity;

    // Hold the product object
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;