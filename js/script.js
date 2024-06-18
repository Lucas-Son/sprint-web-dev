function shareFacebook() {
    var url = window.location.origin + window.location.pathname.replace('index.html', '');
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
}

function shareTwitter() {
    var url = window.location.origin + window.location.pathname.replace('index.html', '');
    var text = 'Confira este projeto incrível sobre a Formula E: ';
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url), '_blank');
}

function verifyLogin() {
    if(localStorage.getItem("logado") === "true") {
        document.getElementById("logado").innerText = "Sair";
        document.getElementById("logado").setAttribute("onclick", "logout()");
    }else{
        document.getElementById("logado").innerText = "Login";
        document.getElementById("logado").setAttribute("onclick", "window.location.href = 'login.html'");
    }
}

function logout() {
    localStorage.setItem("logado", false);
    window.location.href = "login.html";
}

verifyLogin();