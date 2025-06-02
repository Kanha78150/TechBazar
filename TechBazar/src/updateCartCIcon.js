//! Step 3.14:- Select the cartIcon from index.html file
const cartIconValue = document.getElementById("cartValue");

export const updateCartCIcon = (cartProducts) => {
    //! Step 3.15:- Now update the value of cart icon. 
    return cartIconValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`
};