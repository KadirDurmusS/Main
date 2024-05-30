/* export function header() {

    const a = 5;
    const b = 10;

    const toplam = a + b;
    console.log(toplam);

}

//! Başlığı olmayan functionlar default yazılır index kısmındada parantezın dışında çağırılır
export default function () {

    const a = 5;
    const b = 10;

    const toplam = a + b;
    console.log("Default", toplam);

} */

function sidebarFunc() {

    //! Home Sidebar start

    const btnOpenSidebar = document.querySelector("#btn-menu");
    const sidebar = document.querySelector("#sidebar");
    const btnCloseSidebar = document.querySelector("#close-sidebar");


    btnOpenSidebar.addEventListener("click", function () {
        sidebar.style.left = "0"
    })

    btnCloseSidebar.addEventListener("click", function () {
        sidebar.style.left = "-100%"
    })

    /* click outside start */
    document.addEventListener("click", function (event) {
        if (!event.composedPath().includes(sidebar) &&
            !event.composedPath().includes(btnOpenSidebar)) {
            sidebar.style.left = "-100%"
        }
    })

    /* click outside end */

    //! Home Sidebar End
}


function searchModalFunc() {
    //! Search modal Start
    const btnOpensearch = document.querySelector(".search-button")
    const btnClosesearch = document.getElementById("close-search")
    const modalSearch = document.getElementsByClassName("modal-search")
    const modalSearchWrapper = document.getElementsByClassName("modal-wrapper")

    btnOpensearch.addEventListener("click", function () {

        modalSearch[0].style.visibility = "visible"
        modalSearch[0].style.opacity = "1"

    })

    btnClosesearch.addEventListener("click", function () {

        modalSearch[0].style.visibility = "hidden"
        modalSearch[0].style.opacity = "0"


    })

    /* Click outside start */

    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(modalSearchWrapper[0]) &&
            !e.composedPath().includes(btnOpensearch)) {
            modalSearch[0].style.visibility = "hidden"
            modalSearch[0].style.opacity = "0"

        }
    })

    //! Search modal End
}

function headerFunc() {

    sidebarFunc();
    searchModalFunc();

}

export default headerFunc();