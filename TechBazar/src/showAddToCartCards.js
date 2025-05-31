// Import the api
import products from "../API/products.json";
import { cartQuantityToggle } from "./cartQuantityToggle";
import { fetchQuantityAndPrice } from "./fetchQuantityAndPrice";
import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { removeProductCart } from "./removeProductCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

// call the localstorage function to get the data
let cartProducts = getCartProductFromLocalStorage();

let filterProducts = products.filter((curProduct) => {
    // console.log(curProduct.id, curProduct.name);


    // Check if localstorage data id is same to the api data id.
    return cartProducts.some((currElem) => currElem.id === curProduct.id);
});

console.log(filterProducts);


// Select the productCartContainer from addtocart.htmlfile
let productCartContainer = document.querySelector("#productCartContainer");
let productCartTemplate = document.getElementById("productCartTemplate");



const showCartProduct = () => {
    filterProducts.forEach((curProduct) => {

        const { id, name, category, brand, price, stock, description, image } = curProduct;
        // Now cloning start for that <template></template> tag.
        const productCartClone = document.importNode(productCartTemplate.content, true);

        // create a function for get the localstorage price and quantity
        const localStorageData = fetchQuantityAndPrice(id, price);

        //   Which card i have selected get that card by using id.
        productCartClone.querySelector("#cardValue").setAttribute('id', `card${id}`);

        productCartClone.querySelector(".category").innerHTML = category;

        productCartClone.querySelector(".productImage").src = image;

        productCartClone.querySelector(".productImage").alt = name;

        productCartClone.querySelector(".productName").innerHTML = name;

        productCartClone.querySelector(".productPrice").innerHTML = localStorageData.price;

        productCartClone.querySelector(".productQuantity").innerHTML = localStorageData.quantity;

        productCartClone.querySelector(".stockElement").addEventListener("click", (event) => {
            cartQuantityToggle(event, id, stock, price);
        });

        productCartClone.querySelector(".remove-to-cart-button").addEventListener("click", () => {
            removeProductCart(id);
        })
        // Now append the productCartClone in to the  productCartContainer
        productCartContainer.append(productCartClone);
    })
}
//---------------------------------------
// Showing the cart products
// --------------------------------------
showCartProduct();

updateCartProductTotal();