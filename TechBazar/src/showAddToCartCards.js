// Import the api
import products from "../API/products.json";
import { cartQuantityToggle } from "./cartQuantityToggle";
import { fetchQuantityAndPrice } from "./fetchQuantityAndPrice";
import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { removeProductCart } from "./removeProductCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

//! Step 4.1:- call the localstorage function to get the data
let cartProducts = getCartProductFromLocalStorage();

//! Step 4.2:- filter item id which is present in our api folder and the the item id which is present in our localstorage is same is or not. Here we are using a new method that is some() which show one by one data.

let filterProducts = products.filter((curProduct) => {
    // console.log(curProduct.id, curProduct.name);
    return cartProducts.some((currElem) => currElem.id === curProduct.id);
});
// console.log(filterProducts);

//! Step 4.3:- Select the "productCartContainer" and "productCartTemplate" from addtocart.html file
let productCartContainer = document.querySelector("#productCartContainer");
let productCartTemplate = document.getElementById("productCartTemplate");


const showCartProduct = () => {
    filterProducts.forEach((curProduct) => {

        const { id, name, category, brand, price, stock, description, image } = curProduct;
        //! Step 4.5:- Now cloning start for that <template></template> tag from addtocart.html.
        const productCartClone = document.importNode(productCartTemplate.content, true);

        //! Step 4.6:- create a function for get the localstorage price and quantity
        const localStorageData = fetchQuantityAndPrice(id, price);

        //   Which card i have selected get that card by using id.
        productCartClone.querySelector("#cardValue").setAttribute('id', `card${id}`);

        productCartClone.querySelector(".category").innerHTML = category;

        productCartClone.querySelector(".productImage").src = image;

        productCartClone.querySelector(".productImage").alt = name;

        productCartClone.querySelector(".productName").innerHTML = name;

        productCartClone.querySelector(".productPrice").innerHTML = localStorageData.price;

        productCartClone.querySelector(".productQuantity").innerHTML = localStorageData.quantity;

        //! Step 4.8:- In this function we are toggle the quantity and the price whatever present in our localstorage.
        productCartClone.querySelector(".stockElement").addEventListener("click", (event) => {
            cartQuantityToggle(event, id, stock, price);
        });

        //! Step 4.9:- Remove the item form our local storage and from our ui.  
        productCartClone.querySelector(".remove-to-cart-button").addEventListener("click", () => {
            removeProductCart(id);
        })
        // Now append the productCartClone in to the  productCartContainer
        productCartContainer.append(productCartClone);
    })
}
//---------------------------------------
//! Step 4.4:- Here we are creating a function which is call immediately when the page load.
// --------------------------------------
showCartProduct();

updateCartProductTotal();