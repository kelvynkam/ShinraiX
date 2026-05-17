const form = document.querySelector(".login-box");

form.addEventListener("submit", function(event){

        event.preventDefault();

    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;

    if(email === "juh@teamo.com" && senha === "12062024"){

        alert("Login realizado!");

    } else {

        alert("Email ou senha incorretos!");
    }
});