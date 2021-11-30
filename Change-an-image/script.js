let clrBtn = document.getElementById("colorButton");
let randomColorBox = document.getElementById("randomColor");
let toggleBtn = document.getElementById("imageToggle");
let imgToToggle = document.getElementById("toggleImage");

let iShowcase = document.getElementById("imageShowcase");
let img1Btn = document.getElementById("img1");
let img2Btn = document.getElementById("img2");
let img3Btn = document.getElementById("img3");
let img4Btn = document.getElementById("img4");

let randomizeColor = function(){
let redComp = Math.random()*255;
let greenComp = Math.random()*255;
let blueComp = Math.random()*255;




    randomColorBox.style.backgroundColor = "rgb(" + redComp + "," + greenComp + "," + blueComp + ")";
}

let toggleTheImage = function(){
    if(imgToToggle.alt == "1st image"){
        imgToToggle.src = "classy.jpg"
        imgToToggle.alt = "2nd image";
    }

    else{
        imgToToggle.src = "f.jpg"
        imgToToggle.alt = "1st image"
    }
    
}


toggleBtn.addEventListener("click", toggleTheImage);

img1Btn.addEventListener("click", function(){
    iShowcase.style.backgroundImage = "url("+"https://image.shutterstock.com/image-photo/pair-pink-sport-shoes-on-260nw-228691018.jpg"+")"

})
img2Btn.addEventListener("click", function(){
    iShowcase.style.backgroundImage = "url("+"https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI="+")"
})    
    
img3Btn.addEventListener("click", function(){

})
    
img4Btn.addEventListener("click", function(){

})
    