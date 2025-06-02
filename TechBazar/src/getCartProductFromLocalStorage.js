import { updateCartCIcon } from "./updateCartCIcon";

export const getCartProductFromLocalStorage = () => {

    //! Step 3.5:-Define a name in localstorage for storing the item. getItem(key: string)
    let cartProducts = localStorage.getItem('cartProductList');
//! Step 3.6:- If the cartProducts is empty or not if it is not then return an empty array.
    if (!cartProducts) {
        return [];
    };

    //! Step 3.7:- If the cartProducts is not empty then simply return whatever present inside the cartProducts. 
    cartProducts = JSON.parse(cartProducts);
    //! 3.16 update the navbar cart icon
    updateCartCIcon(cartProducts);
    return cartProducts;
};