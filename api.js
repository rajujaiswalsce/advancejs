
// const url = "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed
//  const url = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7331ac728ef3f5e3d282dd29792e35c4" 

//  console.log(url)


function getData(){
    let city = document.getElementById("city").value;


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7331ac728ef3f5e3d282dd29792e35c4`;
       
    fetch(url)
.then(function(res){
  return res.json();
})
.then(function(res){
    appendTem(res)
    console.log(res);
})
.catch(function(err){
    console.log(err);
})
}



function appendTem(data){
     let containerName = document.getElementById("container");
      let map = document.getElementById("gmap_canvas");
   
      containerName.innerHTML = null;  

     let cityName  = document.createElement("p");
       cityName.innerText = `cityName:${data.name}`;

    let min = document.createElement("p");
    min.innerText = `Min temp:${data.main.temp_min}`;

    let max = document.createElement("p");
    max.innerText = `Max temp:${data.main.temp_max}`;
  
    let current = document.createElement("p");
    current.innerText = `Current: ${data.main.temp}`;

    let humidity = document.createElement("p");
    humidity.innerText = `Humidity:${data.main.humidity}`;

    containerName.append(cityName,min,max,current,humidity);
   
   map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}
//  function weatherData(){
// navigator.geolocation.getCurrentPosition(success)

// function success(pos) {
//     var crd = pos.coords;
  
//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//   }
  

//  }


    