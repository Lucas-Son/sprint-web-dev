function customAlert(msg) {
    var alertBox = document.createElement("div");

    alertBox.style.position = "fixed";
    alertBox.style.left = "50%";
    alertBox.style.top = "20%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.backgroundColor = "blue";
    alertBox.style.padding = "20px";
    alertBox.style.zIndex = "1000";
    alertBox.style.borderRadius = "8px";
    alertBox.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    alertBox.style.color = "#ffffff";
    alertBox.style.fontSize = "1.2rem";
    alertBox.textContent = msg;

    document.body.appendChild(alertBox);

    setTimeout(function() {
        document.body.removeChild(alertBox);
    }, 3000);
}

// Solicitação para inserir nome de usuário e senha ao entrar na página
customAlert("Insira seu Usuário e Senha.");
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "1234" && password === "1234") {
        customAlert("Usuário 01 Entrou!");
        window.location.href = "index.html";
        localStorage.setItem("logado", true);
    } else if (username === "" && password === "") {
        customAlert("Campos Vazios. Insira um Usuário e Senha.");
    } else {
        customAlert("Usuário ou Senha Incorretos.");
    }
});
