var imagesList = Array.from( document.querySelectorAll(".item img"));
var boxModel = document.querySelector(".boxModel");
var boxModelContent = document.querySelector(".boxModel-content");
var prevElement = document.getElementById("prev");
var nextElement = document.getElementById("next");
var closeElement = document.getElementById("close");
var currentIndex = 0;

for (var i = 0; i < imagesList.length; i++) {
    imagesList[i].addEventListener("click", function(e){
        var imageSrc = e.target.getAttribute('src');
        boxModel.classList.replace("d-none" , "d-flex");
        boxModelContent.style.backgroundImage = `url(${imageSrc})`;
        currentIndex = imagesList.indexOf(e.target);
    })
}

nextElement.addEventListener("click", nextSlide);

function nextSlide(){
    currentIndex++;
    if(currentIndex == imagesList.length){
        currentIndex = 0;
    }
    var imageSrc = imagesList[currentIndex].getAttribute('src');
    boxModelContent.style.backgroundImage = `url(${imageSrc})`;
}

prevElement.addEventListener("click", prevSlide);

function prevSlide(){
    currentIndex--;
    if(currentIndex == -1){
        currentIndex = imagesList.length - 1;
    }
    var imageSrc = imagesList[currentIndex].getAttribute('src');
    boxModelContent.style.backgroundImage = `url(${imageSrc})`;
}

closeElement.addEventListener("click", closeSlide);

function closeSlide(){
    boxModel.classList.replace("d-flex", "d-none");
}

document.addEventListener("keyup", function(e){
    if(e.code == "ArrowRight"){
        nextSlide();
    }
    if(e.code == "ArrowLeft"){
        prevSlide();
    }
    if(e.code == "Escape"){
        closeSlide();
    }

})

boxModel.addEventListener("click", function(e){
    if(e.target.getAttribute("id") == "boxModel"){
        closeSlide();
    }
    // closeSlide()
})

// boxModelContent.addEventListener("click", function(e){
//     e.stopPropagation();
// })

