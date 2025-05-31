import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const cartQuantityToggle = (event, id, stock, price) => {

    const currCardElem = document.querySelector(`#card${id}`);
    // console.log(currCardElem);

    // Select the quantity
    const productQuantity = currCardElem.querySelector(".productQuantity");
    // console.log(productQuantity);

    const productPrice = currCardElem.querySelector(".productPrice");

    // Now get the quantity value of each card
    let quantity = 1;
    let localStoragePrice = 0;


    // LocalStorage:- Function for get data from the local storage.
    let localCartProducts = getCartProductFromLocalStorage();

    let existingProduct = localCartProducts.find((curProduct) => curProduct.id === id);

    if (existingProduct) {
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
    } else {
        localStoragePrice = price;
        price = price;
    };

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
    };
    if (event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity -= 1;
        }
    };

    // finally we need to update the localstorage price
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = { id, quantity, price: localStoragePrice };

    updatedCart = localCartProducts.map((curProduct) => {
        return curProduct.id === id ? updatedCart : curProduct;
    });
    // console.log(updatedCart);

    localStorage.setItem('cartProductList', JSON.stringify(updatedCart));

    //   also we need to reflect the changes on the screen too
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;


    // ---------------------------
    // Calculate the total price
    // ---------------------------
    updateCartProductTotal();
};