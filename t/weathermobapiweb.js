var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=0fc8ffaff43ffcb0faffb70aefaccdb9";

$.getJSON(apiCall, weatherCallback);

function weatherCallback(weatherData){
   var cityName = weatherData.name;
    var description = weatherData.weather[0].description;
    var country = weatherData.sys.country;
    var temp = weatherData.main.temp.toFixed(0);
    $(".temp").append("County:" + " " + country+ "<br>" + "City:" + " " + cityName +  "</br>" + "Tempurature:" + " " + temp + "&deg;c" );
   
    
    
}
/*
var back = document.getElementsByClassName("temp");
    back.style.backgroundImage = 'url(' + sunCloud() +')';
    function sunCloud () {
    var sunny = description;
    var sun = "https://ak3.picdn.net/shutterstock/videos/6192524/thumb/1.jpg";
    var cloud = "http://wallpapercave.com/wp/BC4Pbsx.jpg";
    if (sunny == "sunny"){
        return sun;
    }
    else {
        return cloud;
        
    }
}
*/