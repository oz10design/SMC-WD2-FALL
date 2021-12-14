

let astroButton = document.getElementById('fetchAstro');
let astroDisplay = document.getElementById('displayAstro');


let fetchAstroImage = function(){
    let baseURL = 'https://api.nasa.gov/planetary/apod?';
    let start_dateURL = '2011-1-1';
    let end_dateURL = '2021-1-1';
    let apiURL = 'DEMO_KEY'
    let imgURL = baseURL + 'date=' + dateURL + '&api_key=' + apiURL;
    console.log(fetchAstroImage);

    fetch(imgURL).then(function(result){
        console.log(imgURL);
        return result.json();
    }).then(function(data){
        console.log(data.date[0]);

        while(astroDisplay.firstChild){
            astroDisplay.removeChild(astroDisplay.firstChild);
        }

        let imgSrc = data.date[0].img_src;
        
        let img = document.createElement('img');
        img.src = imgSrc;
        img.alt = "Fireworks Galaxy";
        astroDisplay.appendChild(img);
        
    })
}

astroButton.addEventListener('change', fetchAstroImage);