//city value

//submit option
var submit = document.getElementById('submit').addEventListener('click',click);
//output 
var output = document.getElementById('info');


 async function click(){
        var city = document.getElementById('inputLong');
        var api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=c51b2a8944880ed480b471de869f3619&units=metric`);
        var resp = await api.json();
        output.innerHTML = 
    `
        <p>City : ${resp.name}</p>
        <p>Temperature : ${resp.main.temp}</p>
        <p>Humidity : ${resp.main.humidity}</p>
        <p>Sealavel : ${resp.main.sea_level}</p>
        <p>Windspeed : ${resp.wind.speed}</p>
        <p>Latitude : ${resp.coord.lat}</p>
        <p>Longitude : ${resp.coord.lon}</p>
        <p>Country : ${resp.sys.country}</p>
    ` 
    city.addEventListener('keyup', (e) => {
        var uservalue = e.target.value;
        if(uservalue === ""){
            output.innerHTML = '';
        }
    })
    
}