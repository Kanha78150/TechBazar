import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.getElementById("productContainer");

const productTemplate = document.getElementById("productTemplate");

export const showProductContainer = (products) => {
    // if no product found then
    if (!products) {
        return false;
    }

    products.forEach((currElem) => {
        const { id, name, category, brand, price, stock, description, image } = currElem;

        // clone the product design
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector(".productName").innerHTML = name;

        productClone.querySelector(".productDescription").innerHTML = description;

        productClone.querySelector(".productPrice").innerHTML = `₹${Math.round(price / 100 * 50)}`;

        productClone.querySelector(".productActualPrice").innerHTML = `₹${price}`;

        productClone.querySelector(".productStock").innerHTML = stock;

        productClone.querySelector(".category").innerHTML = category;

        productClone.querySelector(".productImage").src = image;

        productClone.querySelector(".productImage").alt = name;


        // Now show the content of that product card
        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);

        // Increment and decrement the quantity (By Using Event Delegation)
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
        });

        // Now append the productClone into productContainer
        productContainer.append(productClone);
    });


}