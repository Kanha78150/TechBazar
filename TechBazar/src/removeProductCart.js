import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { showToast } from "./showToast";
import { updateCartCIcon } from "./updateCartCIcon";

export const removeProductCart = (id) => {
    // call the localstorage function to get the data
    let cartProducts = getCartProductFromLocalStorage();
    cartProducts = cartProducts.filter((curProduct) => curProduct.id !== id);

    localStorage.setItem('cartProductList', JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);

    if (removeDiv) {
        removeDiv.remove();
        // Show toast message
        showToast("delete", id);
    };

    updateCartCIcon(cartProducts);
};