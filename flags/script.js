let xhr = new XMLHttpRequest
xhr.open("GET","https://restcountries.com/v3.1/all",true)

xhr.onload = function(){

let restcountries = JSON.parse(xhr.responseText)
console.log(restcountries)
for(i=0;i<restcountries.length;i++)
{


    console.log(`${i+1}. Country    : ${restcountries[i].name.common}
     flag       : ${restcountries[i].flag}
     flags-Url  : ${restcountries[i].flags.png}
     `)
}
}
xhr.send();