document.querySelector(".contact").addEventListener("click", function(){
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".popup").style.display = "block";
})

document.querySelector(".closeBtn").addEventListener("click",function(){
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".popup").style.display = "none";
})
document.querySelector(".overlay").addEventListener("click", function() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".popup").style.display = "none";
});
//end of pop up1




document.querySelector(".item1").addEventListener("click", function(){
    document.querySelector(".overlay1").style.display = "block";
    document.querySelector(".popup1").style.display = "block";
})
document.querySelector(".closeBtn1").addEventListener("click",function(){
    document.querySelector(".overlay1").style.display = "none";
    document.querySelector(".popup1").style.display = "none";
})
document.querySelector(".overlay1").addEventListener("click", function() {
    document.querySelector(".overlay1").style.display = "none";
    document.querySelector(".popup1").style.display = "none";
});
// end of popup2


//scroll
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");
    let lastScrollY = window.scrollY;

    function checkVisibility() {
        const currentScrollY = window.scrollY;

        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();

            if (rect.top < window.innerHeight - 100) {
                element.classList.add("show");
                element.classList.remove("hide"); // Ensures it remains visible
            } else if (currentScrollY < lastScrollY) { // Scrolling up
                element.classList.remove("show");
                element.classList.add("hide"); // Hides when scrolling up
            }
        });

        lastScrollY = currentScrollY; // Update last scroll position
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on page load
});
//scroll end

//hamburger cross menu

document.querySelector(".hamburger").addEventListener('click',function(){
    document.querySelector(".hamburger").classList.toggle("active");
})



