//city value
var city = document.getElementById('inputLong').value;
//submit option
var submit = document.getElementById('submit').addEventListener('click',click);
//output 
var output = document.getElementById('info');

 async function click(){
        var api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c51b2a8944880ed480b471de869f3619`);
        var resp = await api.json();
        console.log(resp)
        output.innerHTML = 
    `
        <p>City : ${resp.name}</p>
    
        <p>Humidity : ${resp.main.humidity}</p>
        <p>Sealavel : ${resp.main.sea_level}</p>
        <p>Windspeed : ${resp.wind.speed}</p>
        <p>Country : ${resp.sys.country}</p>
    ` 
}

    // <p>Temperature : ${resp.}</p>

