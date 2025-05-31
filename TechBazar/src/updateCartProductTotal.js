import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";

let productSubTotal = document.querySelector(".productSubTotal");

let productFinalTotal = document.querySelector(".productFinalTotal");


export const updateCartProductTotal = () => {
    // LocalStorage:- Function for get data from the local storage.
    let localCartProducts = getCartProductFromLocalStorage();

    let totalProductPrice = localCartProducts.reduce((accumulator, currentProduct) => {
        let productPrice = parseInt(currentProduct.price) || 0;
        return accumulator + productPrice;
    }, 0);
    // console.log(totalProductPrice);

    productSubTotal.innerHTML = `₹ ${totalProductPrice.toFixed(2)}`;
    productFinalTotal.innerHTML = `₹ ${totalProductPrice + 50.00}`;

}