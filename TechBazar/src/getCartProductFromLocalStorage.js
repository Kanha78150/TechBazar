import { updateCartCIcon } from "./updateCartCIcon";

export const getCartProductFromLocalStorage = () => {

    // getItem(key: string)
    let cartProducts = localStorage.getItem('cartProductList');

    if (!cartProducts) {
        return [];
    };

    cartProducts = JSON.parse(cartProducts);
    // update the navbar cart icon
    updateCartCIcon(cartProducts);
    return cartProducts;
};