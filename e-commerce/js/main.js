
import header from "./header.js";
import { productFunc, productFunc2 } from "./products.js";
import searchFunc from "./search.js";


//?--------------------------------------------



//?--------------------------------------------



/* //! LocalStorage setItem

const fruits = ["elma", "Armut", "şeftali"]
const fullName = "Kadir Durmuş"
localStorage.setItem("fullName", JSON.stringify(fullName))
localStorage.setItem("Meyveler", JSON.stringify(fruits))

//! LocalStorage getItem
const getData = JSON.parse(localStorage.getItem("fullName"))
const getData2 = JSON.parse(localStorage.getItem("Meyveler"))
console.log(getData2);
 */


//! Add product to localStorge start

(async function () {
    const photos = await fetch("../js/data.json")
    const data = await photos.json();

    data ? localStorage.setItem("products", JSON.stringify(data)) : [];
    productFunc(data);
    productFunc2(data);
    searchFunc(data);
})();

//! Add product to localStorge end



//! Add CartItem to localStorge start
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : "0";
//! Add CartItem to localStorge end


/* Modal-Dialog-Start */
const modalDialogDOM = document.querySelector(".modal-dialog");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");

btnCloseDialog.addEventListener("click", function () {
    modalDialogDOM.classList.remove("show");
});


document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(modalContentDOM)) {
        modalDialogDOM.classList.remove("show")
    }

})

setTimeout(() => {
    modalDialogDOM.classList.add("show")
}, 1000);
/* Modal-Dialog-End */

