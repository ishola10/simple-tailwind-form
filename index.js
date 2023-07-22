function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}

function by() {
    let y = document.getElementById("submit");
    if (y.type === "submit") {
        y.type = "submit";
    }
    alert("Your form has been submitted");
}