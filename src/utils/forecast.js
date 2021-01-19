const request = require('postman-request');


const forecast=(latitude,longitude,callback)=>{

    //const url='http://api.weatherstack.com/current?access_key=302e424f093defc9d910597da175c63e&query='+latitude+','+longitude;
    const url='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=74f67029e1cb16cc74e4a80414c3eb05&units=metric';

    request({url,json:true},(error,{ body })=>{
        if(error)
        {
            callback('Unable to connect weather services!',undefined);
        }
        else if(body.error)
        {
            callback('Unable to find location',undefined);
        }
        else
        {
            callback(undefined,body.weather[0].description+' It is currently '+body.main.temp+' C but it feels like '+body.main.feels_like+' C');
        }
    })

}


module.exports=forecast