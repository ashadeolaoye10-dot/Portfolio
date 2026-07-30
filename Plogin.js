 if (
    localStorage.getItem("loggedIn") !== "true"
) {

    window.location.href = "loginExhibition.html";

}



/*=========================================
        LOGIN AUTHENTICATION
=========================================*/

const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    if(

        email === "admin@gmail.com"

        &&

        password === "123456"

    ){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        window.location.href =
        "Exhibition.html";

    }

    else{

        alert(
            "Invalid Email or Password"
        );

    }

});