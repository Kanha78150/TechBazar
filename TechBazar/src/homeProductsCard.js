import { homeQuantityToggle } from "./homeQuantityToggle";
import { handelAddToCart } from "./handelAddToCart";

const productContainer = document.getElementById("productContainer");

const productTemplate = document.getElementById("productTemplate");

export const showProductContainer = (products) => {
    // if no product found then
    if (!products) {
        return false;
    }

    products.forEach((currElem) => {
        const { id, name, category, brand, price, stock, description, image } = currElem;

        // clone the product design or template
        const productClone = document.importNode(productTemplate.content, true);

        // Now show the content of that product card
        productClone.querySelector(".productName").innerHTML = name;

        productClone.querySelector(".productDescription").innerHTML = description;

        productClone.querySelector(".productPrice").innerHTML = `₹${Math.round(price / 100 * 50)}`;

        productClone.querySelector(".productActualPrice").innerHTML = `₹${price}`;

        productClone.querySelector(".productStock").innerHTML = stock;

        productClone.querySelector(".category").innerHTML = category;

        productClone.querySelector(".productImage").src = image;

        productClone.querySelector(".productImage").alt = name;


        //   Which card i have selected get that card by using id.
        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);

        // Increment and decrement the quantity (By Using Event Delegation)
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
        });

        // Add to cart functionality
        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            handelAddToCart(event, id, stock);
        })

        // Now append the productClone into productContainer
        productContainer.append(productClone);
    });


}