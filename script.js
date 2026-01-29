/* Opgave
-Lav et program der generer et tilfældigt tal mellem 0 og 100.
-Brugeren skal herefter gætte tallet ved at taste det ind i et inputfelt og trykke på en knap.
-Programmet skal herefter give feedback om tallet er for højt, for lavt eller om tallet er gættet.
-Når tallet bliver gættet skal der være en fejringsgrafik/animation

Og husk:
Det skal virke
Det skal se godt ud
Det skal give relevant feedback */
"use strict";

//Laver en variabel som genererer et tal
const number = Math.ceil(Math.random() * 100);

//Laver en variabel som selecter #input
const input = document.querySelector("#input");

//Laver en variabel som selecter #btn
const button = document.querySelector("#btn");

//Lytter til når man klikker på knappen, den referer så til funktionen guessNumber
button.addEventListener("click", guessNumber);

console.log(input);
console.log(number);


//animation funktion
function animateBoxes(){
    document.querySelector("#billeder").classList.remove("hide");
    document.querySelector("#billeder").classList.add("makeCircular");
}

//sætter billedet ind
function billede1 (){
    document.querySelector("#billeder").innerHTML = "<img src='/img/happy-cat.jpg' alt=''>"

}

//sætter billedet ind
function billede2 (){
    document.querySelector("#billeder").innerHTML = "<img src='/img/sad-cat.webp' alt=''>"
 
}

//
function guessNumber (e) {
    console.log("input.value type:", typeof input.value);
    console.log("Tilfældig tal:", number);
    if (Number(input.value) === number) {
        e.preventDefault();
        alert("Tillyke! Du har gættet rigtigt! :D");
        billede1();
           animateBoxes();
           
        
    }else{
        e.preventDefault();
        alert("Øv! Prøv igen :(");
        billede2();
           animateBoxes();
    }
}

//genstart knap
document.querySelector("#reset-btn").addEventListener("click", resetBTN)

function resetBTN(){
    document.querySelector("section");
}

