const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const location = process.argv[2]

if(!location){
    return console.log('please provide an address')
}

geocode(location, (error, {latitude, longitude, location} = {}) => {
    if(error){
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
  })
})

