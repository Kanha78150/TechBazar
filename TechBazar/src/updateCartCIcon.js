const cartIconValue = document.getElementById("cartValue");
export const updateCartCIcon = (cartProducts) => {
    return cartIconValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`
};