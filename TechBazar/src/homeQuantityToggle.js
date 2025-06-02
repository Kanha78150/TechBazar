export const homeQuantityToggle = (event, id, stock) => {
    //! Step 2.2:- On which card the click event fire
    const currCardElem = document.querySelector(`#card${id}`);
    // console.log(currCardElem);

    //! Step 2.3:- Select the "productQuantity" from index.html.
    const productQuantity = currCardElem.querySelector(".productQuantity");
    // console.log(productQuantity);

    //! Step 2.4:- Now get the quantity value of each card other wise get a default value 1.
    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;

    //! Step 2.5:- Increment the data 
    if (event.target.className === 'cartIncrement') {
        if (quantity < stock) {
            quantity++;
        } else if (quantity === stock) {
            quantity = stock;
        }
    };
    //! Step 2.6:- Decrement the data 
    if (event.target.className === 'cartDecrement') {
        if (quantity > 1) {
            quantity -= 1;
        }
    };

    //! Step 2.7:- Change in Ui. 
    productQuantity.innerHTML = quantity;
    productQuantity.setAttribute('data-quantity', quantity.toString());
    return quantity;
}