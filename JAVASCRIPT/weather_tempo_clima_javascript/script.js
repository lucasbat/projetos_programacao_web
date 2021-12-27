document.querySelector('.busca').addEventListener('submit', async (event) =>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
  
    if(input !== ''){
        showWarning('Carregando...');
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=6d74a2ec006f14f1fe31ea2d92435e13&units=metric&lang=pt_br`;
        let results = await fetch(url);
        let json = await results.json();
        if(json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        } else {
            showWarning('Não encontramos esta localização.')
        }
    } 
})
function showInfo(json) {
    showWarning('');
    document.querySelector('.resultado').style.display = 'block';
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;
    document.querySelector('.tempo img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;
}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}