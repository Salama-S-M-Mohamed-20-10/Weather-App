/* Global Variables */
var dateVar = document.getElementById('date');
var tempVar = document.getElementById('temp');
var userResponseVar = document.getElementById('content');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API
const apiKey = '023193423e95cec90505e2d47cbd361e&units=imperial';
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);
/* Function called by event listener */
function performAction(e){
let zipCode = document.getElementById('zip').value;
let feelings = document.getElementById('feelings').value;
getWeatherData(`http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&appid=${apiKey}`)
.then(function(data){
  //Add data to post request
  postData('/allInfo',{date:newDate,temprature:data.main.temp,userResponse:feelings});
  // we can do this because of async
  updateUI('/all');
}).catch(function(erorr) {
  document.getElementById('entryHolder').innerHTML = 'You entered Zip Code is not found and should reload the page'
})
}


/* Function to GET Web API Data*/

const getWeatherData = async (url)=>{

    const res = await fetch(url)

    try {
  
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
  console.log(data)
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });
    try {
      const newData = await response.json();
       console.log(newData);
       return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}

/* Function to GET Project Data */
/* UPDATA UI DEMO */
var updateUI = async (url) => {
  const request = await fetch(url)
  try{
    const allData = await request.json();
    dateVar.innerHTML = 'Date: '+allData.date;
    tempVar.innerHTML = 'Temprature: '+allData.temprature;
    userResponseVar.innerHTML = 'User Reponse: '+allData.userResponse;
  }catch(error){
    console.log("error", error);
  }
}