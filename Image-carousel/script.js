// for the carousel:
let flagsImages = ["argentina.jpg", "brazil.jpg", "spain.jpg",];
let currentIndex = 2;
let flagsIMG = document.getElementById("flagsIMG");

let flags1Images = ["france.jpg", "germany.jpg", "italy.jpg",];
let currentIndex1 = 5;
let flags1IMG = document.getElementById("flags1IMG");

let flags2Images = ["portugal.jpg", "usa.jpg"];
let currentIndex2 = 7;
let flags2IMG = document.getElementById("flags2IMG");

// for movies:

let actionImages = ["johnwick.jpg", "johnwick2.jpg", "johnwick3.jpg"];
let currentIndex3 = 2;
let actionIMG = document.getElementById("actionIMG");

let comedyImages = ["wedding.jpg", "whyhim.jpg", "step.jpg"];
let currentIndex4 = 2;
let comedyIMG = document.getElementById("comedyIMG");

let horrorImages = ["conjuring.jpg", "conjuring2.jpg", "conjuring3.jpg"];
let currentIndex5 = 2;
let horrorIMG = document.getElementById("horrorIMG");

// for sports:

let soccerImages = ["johnwick.jpg", "johnwick2.jpg", "johnwick3.jpg"];
let currentIndex6 = 2;
let soccerIMG = document.getElementById("soccerIMG");

let basketballImages = ["wedding.jpg", "whyhim.jpg", "step.jpg"];
let currentIndex7 = 2;
let basketballIMG = document.getElementById("basketballIMG");

let footballImages = ["conjuring.jpg", "conjuring2.jpg", "conjuring3.jpg"];
let currentIndex8 = 2;
let footballIMG = document.getElementById("footballIMG");



//for the select:
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let flagsOptions = ['Flags1', 'Flags2', 'Flags3'];
let moviesOptions = ['Action', 'Comedy', 'Horror'];
let sportsOptions = ['Soccer', 'Basketball', 'Football'];

let changeSlide = function(){
    if(currentIndex === 0){
        flagsIMG.src = flagsImages[1];
        currentIndex = 1;
    }
    else if(currentIndex === 1){
        flagsIMG.src = flagsImages[2];
        currentIndex = 2;
    }
    else {
        flagsIMG.src = flagsImages[0];
        currentIndex = 0;}
    
        //for flags1:
let changeSlide1 = function(){
    if(currentIndex1 === 0){
        flags1IMG.src = flags1Images[1];
        currentIndex1 = 1;
    }


    else if(currentIndex1 === 1){
        flags1IMG.src = flags1Images[2];
        currentIndex1 = 2;
    }
    else {
        flags1IMG.src = flags1Images[0];
        currentIndex1 = 0;}
    
    }

    //for flags2:
let changeSlide2 = function(){
    if(currentIndex2 === 0){
        flags2IMG.src = flags2Images[1];
        currentIndex2 = 1;}

    else {
            flags2IMG.src = flags2Images[0];
            currentIndex2 = 0;}
    
}

    //for action:

    let changeSlide3 = function(){
    if(currentIndex3 === 0){
        actionIMG.src = actionImages[1];
        currentIndex3 = 1;
    }

    else if(currentIndex3 === 1){
        actionIMG.src = actionImages[2];
        currentIndex3 = 2;
    }
    else {
        actionIMG.src = actionImages[0];
        currentIndex3 = 0;}
    
    }
}

    //for action:
    let changeSlide4 = function(){
    if(currentIndex3 === 0){
        actionIMG.src = actionImages[1];
        currentIndex3 = 1;
    }

    else if(currentIndex3 === 1){
        actionIMG.src = actionImages[2];
        currentIndex3 = 2;
    }
    else {
        actionIMG.src = actionImages[0];
        currentIndex3 = 0;
    }
    }
    //for comedy:
    let changeSlide5 = function(){
    if(currentIndex4 === 0){
        comedyIMG.src = comedyImages[1];
        currentIndex4 = 1;
    }

    else if(currentIndex4 === 1){
        actionIMG.src = actionImages[2];
        currentIndex4 = 2;
    }
    else {
        actionIMG.src = actionImages[0];
        currentIndex4 = 0;}
    }
    //for horror:
    let changeSlide6 = function(){
    if(currentIndex5 === 0){
        horrorIMG.src = horrorImages[1];
        currentIndex5 = 1;
    }

    else if(currentIndex5 === 1){
        horrorIMG.src = horrorImages[2];
        currentIndex5 = 2;
    }
    else {
        horrorIMG.src = horrorImages[0];
        currentIndex5 = 0;}
    }

    //for soccer:
    let changeSlide7 = function(){
    if(currentIndex6 === 0){
        soccerIMG.src = soccerImages[1];
        currentIndex6 = 1;
    }

    else if(currentIndex6 === 1){
        soccerIMG.src = soccerImages[2];
        currentIndex6 = 2;
    }
    else {
        soccerIMG.src = soccerImages[0];
        currentIndex6 = 0;}
    }

    //for basket:
    let changeSlide8 = function(){
    if(currentIndex7 === 0){
        basketballIMG.src = basketballImages[1];
        currentIndex7 = 1;
    }

    else if(currentIndex7 === 1){
        basketballIMG.src = basketballImages[2];
        currentIndex7 = 2;
    }
    else {
        basketballIMG.src = basketballImages[0];
        currentIndex7 = 0;}
    }
    //for football:
    let changeSlide9 = function(){
    if(currentIndex7 === 0){
        footballIMG.src = footballImages[1];
        currentIndex7 = 1;
    }

    else if(currentIndex7 === 1){
        footballIMG.src = footballImages[2];
        currentIndex7 = 2;
    }
    else {
        footballIMG.src = footballImages[0];
        currentIndex7 = 0;}

    }
    
    

// form config//

let updateCategory = function(){
    console.log(groupSelect);
    categorySelect.innerHTML='';

    let selectedValue = groupSelect.value;
    if(selectedValue === "flags"){
        flagsOptions.forEach(function(elem){
            console.log(elem);
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if (selectedValue === "movies"){
        moviesOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });

    }
    else if(selectedValue === "sports"){
        sportsOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });

    }

}






window.addEventListener("load", function(){
    // triggered once after 5 sec
   setTimeout(function(){
       prompt("SUBSCRIBE TO OUR NEWLETTER!!!", "my@email.com");
   }, 5000);

   // triggered every 5 sec
   this.setInterval(changeSlide, 5000);
   this.setInterval(changeSlide1, 5000);
   this.setInterval(changeSlide2, 5000);
   this.setInterval(changeSlide3, 5000);
   this.setInterval(changeSlide4, 5000);
   this.setInterval(changeSlide5, 5000);
   this.setInterval(changeSlide6, 5000);
   this.setInterval(changeSlide7, 5000);
   this.setInterval(changeSlide8, 5000);
   this.setInterval(changeSlide9, 5000);
})


groupSelect.addEventListener("change", updateCategory);
categorySelect.addEventListener("change", updateGroup);