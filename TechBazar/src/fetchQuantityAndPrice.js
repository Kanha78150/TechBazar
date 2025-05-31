import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";

export const fetchQuantityAndPrice = (id, price) => {
    // call the localstorage function to get the data
    let cartProducts = getCartProductFromLocalStorage();

    let existingProduct = cartProducts.find((curProduct) => curProduct.id === id);

    let quantity = 1;

    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }
    return { quantity, price };
};