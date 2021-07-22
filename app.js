//lat value
var lat = document.getElementById('inputLat').value;
//long value
var long = document.getElementById('inputLong').value;
//submit option
var submit = document.getElementById('submit').addEventListener('click',click);
//output 
var output = document.getElementById('info');

async function click(){
    var latvalue = parseInt(lat);
    var longvalue = parseInt(long);
    var apikey = "ca0d4a5f74122736dd0893d9beeb805c";
    var api = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latvalue}&lon=${longvalue}&appid=${apikey}`);
    var resp = await api.json();
    output.innerHTML = 
`
    <p>City : ${resp.name}</p>
    <p>Weather : ${resp.weather[0].description}</p>
    <p>Humidity : ${resp.main.humidity}</p>
    <p>Sealavel : ${resp.main.sea_level}</p>
    <p>Windspeed : ${resp.wind.speed}</p>
    <p>Country : ${resp.sys.country}</p>
`
        
}




