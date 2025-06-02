import './style.css'
import products from "../API/products.json";
import { showProductContainer } from './homeProductsCard';


//!  Step 1:- Call the function to display all the product as a card
showProductContainer(products);

