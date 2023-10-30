document.getElementById("mobile-menu").addEventListener("click", function() {
    console.log("Menu clicked");  // Just to test
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");
});
