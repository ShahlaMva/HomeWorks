var ul = document.querySelector("#ul")
button = document.querySelector(".container .add")
input = document.querySelector(".container .input")




button.addEventListener("click", function () {
    if (ul.childElementCount != "") {
        ul.innerHTML = ""
    }

    for (i = 0; i < input.value; i++) {

        var li = document.createElement("li")
        li.classList.add("list-group-item")
        ul.appendChild(li);
    }
})
