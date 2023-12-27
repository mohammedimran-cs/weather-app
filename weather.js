let searchBox = document.getElementById("city");

document.getElementById("search-img").addEventListener("click",function() {

    let inputValue =  searchBox.value;
    checkWeather(inputValue);

});

function checkWeather(inputValue) {

    let weather = async()=> {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&APPID=2e9113655741e58981f0d467cf5369be`);
        let data =  await response.json();
        return data;
    }
    
    weather().then((data)=> {
        document.getElementById("text-one").innerHTML = `${Math.floor(data.main.temp)}&deg;C`;
        document.getElementById("text-two").innerHTML = data.name;
        document.getElementById("humidity").innerHTML = data.main.humidity;
        document.getElementById("wind").innerHTML = data.wind.speed;

         let climate = data.weather[0].main;

        // let setImage = (data)=> {
        //     let upperCase = data[0].toUpperCase() + data.slice(1);
        //     console.log(upperCase);
        //     document.getElementById("image").setAttribute("src",`./images/${upperCase}.png`);
        // }

        //  setImage(climate);

        switch (climate) {
            case "Clear":
                document.getElementById("image").setAttribute("src","./images/Clear.png")
                break;

            case "Clouds":
                document.getElementById("image").setAttribute("src","./images/Clouds.png")
                break;

            case "Drizzle":
                document.getElementById("image").setAttribute("src","./images/Drizzle.png")
                break;

            case "Mist":
                document.getElementById("image").setAttribute("src","./images/Mist.png")
                break;

            case "Rain":
                document.getElementById("image").setAttribute("src","./images/Rain.png")
                break;
        }   

        document.getElementById("hide-show").style.display = "block";
        document.getElementById("hide-show-error").style.display = "none";

        console.log(data);
    })
    .catch(()=> {
        document.getElementById("hide-show").style.display = "none";
        document.getElementById("hide-show-error").style.display = "block";
    });
}

document.getElementById("close-icon").addEventListener("click",() => {
    document.getElementById("hide-show-error").style.display = "none";
    document.querySelectorAll("#city")[0].value="";
    document.querySelectorAll("#city")[0].placeholder="Enter The City Name";
})