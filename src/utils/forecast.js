const request = require('postman-request');


const forecast=(latitude,longitude,callback)=>{

    //const url='http://api.weatherstack.com/current?access_key=302e424f093defc9d910597da175c63e&query='+latitude+','+longitude;
    const url='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=74f67029e1cb16cc74e4a80414c3eb05';

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
            //console.log(body.main)
            var new_main_temp=Math.round(body.main.temp - 273);
            var new_feels_temp=Math.round(body.main.feels_like - 273);


            callback(undefined,body.weather[0].description+".\n"
            +
            'It is currently '+new_main_temp+' C but it feels like '+new_feels_temp+' C.\n'+
             'Humidity is '+body.main.humidity+' percent');
        }
    })

}


module.exports=forecast