const inputDiv = document.querySelector('.inputdiv');
const contentDiv = document.querySelector('.contentdiv');
const todoInput = document.getElementById('todoinput');
const todoButton = document.getElementById('todobutton');
const alertWarning = document.querySelector(".alert-warning");
const alertSuccess = document.querySelector(".alert-success");


todoButton.addEventListener('click', go);

inputDiv.addEventListener('keyup', function (e) {

    if (e.keyCode == 13) {
        go()
    }

})


function go() {

    if (todoInput.value != 0) {
        alertSuccess.style.display = "block"
        setTimeout(() => {
            alertSuccess.style.display = "none"
        }, 1200);
    } else {
        alertWarning.style.display = "block"
        setTimeout(() => {
            alertWarning.style.display = "none"
        }, 1200);


    }

    if (todoInput.value != 0) {
        var divDOM = document.createElement("div");
        var paragraf = document.createElement("p");
        var deleteButton = document.createElement("button");
        var successButton = document.createElement("button");

        successButton.classList.add("successbutton");
        deleteButton.classList.add("deletebutton");
        divDOM.classList.add("divdom");

        deleteButton.innerHTML = "<i class='bi bi-x-circle'></i>";
        successButton.innerHTML = "<i class='bi bi-check-circle'></i>";
        paragraf.innerText = todoInput.value;

        divDOM.appendChild(successButton);
        divDOM.appendChild(paragraf);
        divDOM.appendChild(deleteButton);
        contentDiv.appendChild(divDOM);
        todoInput.value = "";


        deleteButton.addEventListener("click", function () {
            contentDiv.removeChild(divDOM);
        });

        successButton.addEventListener("click", () => {
            paragraf.classList.toggle("line");
            paragraf.classList.toggle("opacity");

        })
    }
}

