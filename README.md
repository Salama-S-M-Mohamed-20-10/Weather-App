# Weather-Journal App Project

## In my server
// I use projectData to act as end point
// I use express and use body-parser and use cors
// I connect between the server side and the client side by app.use(express.static('website'));
// I use port=8000 and running the server at that point
// I use app.post('/allTnfo' ,addData) to receive data from the client from the path '/allInfo' in the client side
// I use app.get('/all',getData) to send project data to the path '/all' in the client side

## client side
// I use api from openWeatherMap API
// I use addEventListner click with function performAction
// in performAction function we take values according to user enter in the inputs
//and we call the function getWeatherData() that use the api 
and then call postData that put the value in it that we want to diplay and will send the value to the server to the path ('allInfo')
and call updateUi() that take the data from the server from projectData from the path ('/all) and display the value in UI
#   W e a t h e r - A p p  
 