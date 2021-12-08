// for the carousel:
let actionmovieImages = ["johnwick.jpg", "johnwick2.jpg", "johnwick3.jpg"];
let currentIndex = 2;
let actionIMG = document.getElementById("actionIMG");








//for the select:
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let flagsOptions = ['Flags1', 'Flags2', 'Flags3'];
let moviesOptions = ['Action', 'Comedy', 'Horror'];
let sportsOptions = ['Soccer', 'Basketball', 'Football']

let changeSlide = function(){
    if(currentIndex === 0){
        carouselIMG.src = carouselImages[1];
        currentIndex = 1;
    }
    else if(currentIndex === 1){
        carouselIMG.src = carouselImages[2];
        currentIndex = 2;
    }
    else {
        carouselIMG.src = carouselImages[0];
        currentIndex = 0;
    
    }

   


}

let changeSlide1 = function(){
    if(currentIndex1 === 0){
        actionIMG.src = actionmovieImages[1];
        currentIndex1 = 1;
    }
    else if(currentIndex === 1){
        actionIMG.src = actionmovieImages[2];
        currentIndex1 = 2;
    }
    else {
        actionIMG.src = actionmovieImages[0];
        currentIndex1  = 0;
    
    }

   


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
})


groupSelect.addEventListener("change", updateCategory);
categorySelect.addEventListener("change", updateGroup);