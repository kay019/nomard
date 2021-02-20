const wisdom = document.querySelector(".js-wisdom");



function getWisdom(){
    fetch(`https://api.adviceslip.com/advice`)
    .then(function(response){
        console.log("!");
        return response.json();
    }).then(function(json){
        const advice = json.main.adivce;
        
        wisdom.innerTest = `tet ${adivce}`;
    });
console.log("?");

  
}

   

function init() {
    getWisdom();
}

init();