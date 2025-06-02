import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { showToast } from "./showToast";
import { updateCartCIcon } from "./updateCartCIcon";

//! Step 19:-  TO avoid that icon value zero(0) we call that local storage value.
getCartProductFromLocalStorage();

export const handelAddToCart = (event, id, stock) => {

    //! Step:-3.4 LocalStorage:- Function for get data from the local storage.
    let arrLocalStorageProduct = getCartProductFromLocalStorage();

    //! Step:-3.1  Which card the user select
    const currCardElem = document.querySelector(`#card${id}`);
    // console.log(currCardElem);

    //! Step:- 3.2 Select the quantity
    let quantity = currCardElem.querySelector(".productQuantity").innerText;
    //! Step:- 3.3 Show the price.
    let price = currCardElem.querySelector(".productPrice").innerText;
    // console.log(quantity, price);

    //! Step 3.8:- Replace the rs symbol
    price = price.replace('₹', "");


    //! Step 3.17:- Before this what happen when we add some item with some quantity number it was added but if we add that item again then it create another index umber for that item. So for remove the duplicate item we can add the existing quantity and the new quantity with the same index number with updated price.
    let existingProduct = arrLocalStorageProduct.find((curProduct) => curProduct.id === id);

    //! If it an existing item and the item quantity is greaterthen one(1) then updated  the quantity and price of that item. 
    if (existingProduct && quantity > 1) {
        // update the ProductQuantity and price
        quantity = Number(existingProduct.quantity) + Number(quantity);
        price = Number(price * quantity);

        let updatedCart = { id, quantity, price };
        updatedCart = arrLocalStorageProduct.map((curProduct) => {
            return curProduct.id === id ? updatedCart : curProduct
        });
        console.log(updatedCart);

        localStorage.setItem('cartProductList', JSON.stringify(updatedCart));
        // Show toast message
        showToast("add", id);
    }

    //!Step 3.18 If that item is existing product then don't add that item again
    if (existingProduct) {
        return false;
    };



    //! Step 3.9:- Update the price according to the quantity.
    price = Number(price * quantity);
    quantity = Number(quantity);
    // console.log(quantity, price);

    //! Step 3.11:- Now add the updated value into that local storage array
    arrLocalStorageProduct.push({ id, quantity, price });

    //! Step 3.12:- Add the data in the local storage.  setItem(key: string, value: string). To stor the data in string formate we can use JSON.stringify();
    localStorage.setItem('cartProductList', JSON.stringify(arrLocalStorageProduct));

    //! Step 3.13:- update the navbar cart icon
    updateCartCIcon(arrLocalStorageProduct);

    // Show toast message
    showToast("add", id);
};