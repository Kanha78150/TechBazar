export const homeQuantityToggle = (event, id, stock) => {
    // On which card the click event fire
    const currCardElem = document.querySelector(`#card${id}`);
    // console.log(currCardElem);

    // Select the quantity
    const productQuantity = currCardElem.querySelector(".productQuantity");
    // console.log(productQuantity);

    // Now get the quantity value of each card
    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;

    if (event.target.className === 'cartIncrement') {
        if (quantity < stock) {
            quantity++;
        } else if (quantity === stock) {
            quantity = stock;
        }
    };

    if (event.target.className === 'cartDecrement') {
        if (quantity > 1) {
            quantity -= 1;
        }
    };

    productQuantity.innerHTML = quantity;
    productQuantity.setAttribute('data-quantity', quantity);
    return quantity;
}