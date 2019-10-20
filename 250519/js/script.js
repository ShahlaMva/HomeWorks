var pass_input1 = document.querySelector("#password")
var pass_input2 = document.querySelector("#confirmpass")


var required = document.querySelectorAll(".required")
for (i = 0; i < required.length; i++) {
    required[i].addEventListener("blur", function () {
        if (this.value == "") {
            var msg = this.getAttribute("data-msg")
            if (this.nextElementSibling == null) {
                var small = alertText(msg);
                this.parentNode.appendChild(small)
            }
        } else
            if (this.nextElementSibling != null) {

                this.nextElementSibling.remove()


            }


    })

}

for (i = 0; i < required.length; i++) {

    required[i].addEventListener("keyup", function () {
        var msg = this.getAttribute("data-msg")
        if (this.value != "") {
            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove()
            }
        } else if (this.nextElementSibling == null) {

            var small = alertText(msg);
            this.parentNode.appendChild(small)

        }




    })
}

function alertText(str) {
    var small = document.createElement("small");
    small.classList.add("text-danger");
    small.innerText = str;
    return small;
}


var form = document.querySelector("#info");

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    for (i = 0; i < required.length; i++) {
        if (required[i].value == "") {
            var msg = required[i].getAttribute("data-msg")
            if (required[i].nextElementSibling == null) {
                var small = alertText(msg);
                required[i].parentNode.appendChild(small)
            }
        } else
            if (required[i].nextElementSibling != null) {

                required[i].nextElementSibling.remove()


            }
    }
    if (pass_input1.value.length <= 6) {
        var msg2 = pass_input1.getAttribute("data-msg2")
        if (pass_input1.nextElementSibling == null) {
            small = alertText(msg2);
            pass_input1.parentNode.appendChild(small)
        }


    } else if (pass_input1.nextElementSibling != null) {
        pass_input1.nextElementSibling.remove()
    }

    if (pass_input1.value != pass_input2.value) {

        var msg2 = pass_input2.getAttribute("data-msg2")
        if (pass_input2.nextElementSibling == null) {
            small = alertText(msg2);
            pass_input2.parentNode.appendChild(small);
        }
    } else if (pass_input2.nextElementSibling != null) {
        pass_input2.nextElementSibling.remove()
    }

})

// pass_input1.addEventListener("keyup", function () {


//     if (this.value.length <= 6) {
//         var msg2 = this.getAttribute("data-msg2")
//         if (this.nextElementSibling == null) {
//             small = alertText(msg2);
//             this.parentNode.appendChild(small)
//         }


//     } else if (this.nextElementSibling != null) {
//         this.nextElementSibling.remove()
//     })
// pass_input2.addEventListener("keyup",function(){

// if(pass_input1.value !=pass_input2.value){

//     var msg2=this.getAttribute("data-msg2")
//     if(this.nextElementSibling==null){
//         small=alertText(msg2);
//         this.parentNode.appendChild(small);
//     }
// }else if(this.nextElementSibling!=null){
// this.nextElementSibling.remove()
// }

// })






function alertText(str) {
    var small = document.createElement("small");
    small.classList.add("text-danger");
    small.innerText = str;
    return small;
}
