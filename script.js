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

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const phoneMenu = document.querySelector(".phone-menu");
    

    hamburger.addEventListener("click", function () {
        if (!phoneMenu.classList.contains("active")) {
            phoneMenu.style.display = "block"; 
            phoneMenu.classList.add("active");
            hamburger.classList.add("active", "fixed");
        } else {
            phoneMenu.classList.add("phone-menu-slideup"); // Add slide-up effect
            setTimeout(() => {
                phoneMenu.style.display = "none"; 
                phoneMenu.classList.remove("active", "phone-menu-slideup"); // Remove classes after animation
            }, 500); // Match animation duration
            hamburger.classList.remove("active");
        }
    });
});


//phone-contact hide n show
document.addEventListener("DOMContentLoaded", function() {
const contact = document.querySelector(".ph-contact");
const hiddenCt = document.querySelector(".hidden-contact");

hiddenCt.style.display = "none";

contact.addEventListener("click",()=>{
    hiddenCt.style.display = hiddenCt.style.display === "none" ?"block" : "none";
});

});



const designTitles = document.querySelectorAll(".design-title");

designTitles.forEach((designTt) => {
  const updatePosition = (event) => {
    const x = event.pageX - designTt.offsetLeft;
    const y = event.pageY - designTt.offsetTop;

    designTt.style.setProperty("--xPos", x + "px");
    designTt.style.setProperty("--yPos", y + "px");
  };

  designTt.addEventListener("mouseover", updatePosition);
  designTt.addEventListener("touchstart", updatePosition);
});