"use strict"


// console.log(document.querySelector(".container"));
const countriesContainer = document.querySelector(".countries");
console.dir()

function getCountryData(countryName){}
const request =new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/${countryName}");
request.send();

request.addEventListener("load", funtion() {

   JSON.parse (this.request.responseText);

   console.log(this);
});
