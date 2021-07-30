const request = require('request')
const wUrl = 'http://api.weatherapi.com/v1/current.json?key=f84e3d2a932d4056bd9130144212907&q=48.8567,2.3508&aqi=no'

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=f84e3d2a932d4056bd9130144212907&q=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,' Current condition is '+ body.current.condition.text + '. It is currently ' + body.current.temp_c + ' degress out. There is a ' + body.current.precip_mm + ' % chance of rain.')
        }
    })
}

module.exports = forecast