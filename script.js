document.querySelector(".item1").addEventListener("click", function(){
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".popup").style.display = "block";
})

document.querySelector(".closeBtn").addEventListener("click",function(){
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".popup").style.display = "none";
})