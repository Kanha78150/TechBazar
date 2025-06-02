import { homeQuantityToggle } from "./homeQuantityToggle";
import { handelAddToCart } from "./handelAddToCart";

//! Step:1.2:- Select "productContainer" and "productTemplate" from "index.html". 
const productContainer = document.getElementById("productContainer");
const productTemplate = document.getElementById("productTemplate");

export const showProductContainer = (products) => {
    //! Step1.1:- If no product found then return false.
    if (!products) {
        return false;
    }
//! Step 1.3:- Get the data from api and destructure the data and do iterate by using forEach() or Map() method.  
    products.forEach((currElem) => {
        const { id, name, category, brand, price, stock, description, image } = currElem;

        //! Step 1.4:- clone the template by using "importNode(TemplateName.content, true)";
        const productClone = document.importNode(productTemplate.content, true);

        //! Step 1.5:- Now show the content of that product card.
        productClone.querySelector(".productName").innerHTML = name;

        productClone.querySelector(".productDescription").innerHTML = description;

        productClone.querySelector(".productPrice").innerHTML = `₹${Math.round(price / 100 * 50)}`;

        productClone.querySelector(".productActualPrice").innerHTML = `₹${price}`;

        productClone.querySelector(".productStock").innerHTML = stock;

        productClone.querySelector(".category").innerHTML = category;

        productClone.querySelector(".productImage").src = image;

        productClone.querySelector(".productImage").alt = name;


        //! Step 2.1:- Give an unique id to each and every card. 
        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);

        //! Step 2:- Increment and decrement the quantity (By Using Event Delegation)
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
        });

        //! Step:-3 Add to cart functionality
        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            handelAddToCart(event, id, stock);
        })

        //! Step 1.6:- Now append the productClone into productContainer
        productContainer.append(productClone);
    });


}