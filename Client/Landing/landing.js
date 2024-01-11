//Function for the banner
document.addEventListener("DOMContentLoaded", function() {

    let bannerElements = document.querySelectorAll(".banner h1, .banner p, .banner button");

 //Creating a function for show
    function showElements() {
        bannerElements.forEach(function(element) {
            element.classList.add("show");
        });
    }
    //Constructor in milliseconds
    setTimeout(showElements, 500);
});

