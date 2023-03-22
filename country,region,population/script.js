let xhr = new XMLHttpRequest
xhr.open("GET","https://restcountries.com/v3.1/all",true)

xhr.onload = function(){

let restcountries = JSON.parse(xhr.responseText)
console.log(restcountries)
for(i=0;i<restcountries.length;i++)
{
console.log(`${i+1}. Country    : ${restcountries[i].name.common}
     Region     : ${restcountries[i].region}
     Subregion  : ${restcountries[i].subregion}
     population : ${restcountries[i].population}`)
}
}
xhr.send();