import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";


export const fetchQuantityAndPrice = (id, price) => {
 //! Step 4.7:- Call the localstorage function to get the data
    let cartProducts = getCartProductFromLocalStorage();

    let existingProduct = cartProducts.find((curProduct) => curProduct.id === id);

    let quantity = 1;

    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }
    return { quantity, price };
};