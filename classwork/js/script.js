const btnWeather = document.getElementById('btnWeather');

btnWeather.onclick = () => {
    const xhr = new XMLHttpRequest();
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=71e68a36a84fd68e61923c82e76a6299';

    xhr.onreadystatechange = () => {
        if (xhr.readyState = 4 && xhr.status == 200) {
            const result = JSON.parse(xhr.responseText);
            document.getElementById('imgIcon').src = `https://openweathermap.org/img/w/${result.weather[0].icon}.png`;
            document.getElementById('spanTemp').innerText = Math.floor(result.main.temp) - 273;
            document.getElementById('spanMain').innerText = result.weather[0].main;
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
};