import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { updateCartCIcon } from "./updateCartCIcon";

getCartProductFromLocalStorage();

export const handelAddToCart = (event, id, stock) => {

    // LocalStorage:- Function for get data from the local storage.
    let arrLocalStorageProduct = getCartProductFromLocalStorage();
    // Which card the user select
    const currCardElem = document.querySelector(`#card${id}`);
    // console.log(currCardElem);

    // Select the quantity
    let productQuantity = currCardElem.querySelector(".productQuantity").innerHTML;
    // Show the price.
    let price = currCardElem.querySelector(".productPrice").innerHTML;


    // console.log(productQuantity, price);

    // Replace the rs symbol
    price = price.replace('₹', "");
    // Check if the existing card if user clicked or not.
    let existingProduct = arrLocalStorageProduct.find((curProduct) => curProduct.id === id);

    if (existingProduct && productQuantity > 1) {
        // update the ProductQuantity
        productQuantity = Number(existingProduct.productQuantity) + Number(productQuantity);
        // Update the price
        price = Number(price * productQuantity);


        let updatedCart = { id, productQuantity, price };

        updatedCart = arrLocalStorageProduct.map((curProduct) => {
            return curProduct.id === id ? updatedCart : curProduct
        });
        console.log(updatedCart);

        localStorage.setItem('cartProductList', JSON.stringify(updatedCart));
    }

    if (existingProduct) {
        return false;
    };



    // Update the price
    price = Number(price * productQuantity);
    productQuantity = Number(productQuantity);
    // console.log(productQuantity, price);

    // Now add the updated value into that local storage array
    arrLocalStorageProduct.push({ id, productQuantity, price });

    // setItem(key: string, value: string)
    localStorage.setItem('cartProductList', JSON.stringify(arrLocalStorageProduct));

    // update the navbar cart icon
    updateCartCIcon(arrLocalStorageProduct);
};