import {createContext, useState} from "react";
import {getProductData} from "./productsStore";

// Export the context for our cart
export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

// Establish and export the provider for CartContext
export function CartProvider({children}) {
    
    // Hold the useState of the cart
    const [cartProducts, setCartProducts] = useState([]);
    
    /*
    Retrieve the quantity of a certain product
    @param id the id of the product we are searching
    @return int the amount of that product
    */
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    /*
    Add a product or increment an existing product in the cart
    @param id the id of the product we are adding/incrementing
    @return none
    */
    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                            
                    ? { ...product, quantity: product.quantity + 1 } 
                    : product                                       
                )
            )
        }
    }

     /*
    Remove a product or decrement an existing product in the cart
    @param id the id of the product we are removing/decrementing
    @return none
    */
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                
                    ? { ...product, quantity: product.quantity - 1 } 
                    : product                                       
                )
            )
        }
    }

     /*
    Remove a product in the cart
    @param id the id of the product we are removing
    @return none
    */
    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })  
        )
    }

    /*
    Remove a product in the cart
    @param none
    @return float the total cost of all the items in the cart
    */
    function getTotalCost() {
        let totalCost = 0;
        // eslint-disable-next-line array-callback-return
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
