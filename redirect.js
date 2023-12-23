// redirect.js

window.addEventListener("DOMContentLoaded", function() {
    var allowedPages = ["/lol.html", "/index.html", "/pato.html"];
    var currentURL = window.location.pathname;

    if (allowedPages.indexOf(currentURL) === -1) {
        window.location.href = "/404.html";
    }
});
