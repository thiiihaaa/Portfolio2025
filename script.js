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




