const request = require('request');

const forcast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=151cebc3e0b3d409c3907c9c9611951a&query=' + latitude + ',' + longitude + '&units=f'

    // request({ url: url }, (error, response) => {
    //     const data = JSON.parse(response.body);
    //     console.log(data.current);
    // })
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another coordinate.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' . It is currently ' + body.current.temperature + ' degree out. It feels like there is a ' + body.current.precip + ' % chance of rain.')

            callback(undefined, ' It is currently ' + body.current.temperature + ' degree out, with the  visibility of ' + body.current.visibility + ' so it is a ' + body.current.is_day + ' . ')
        }
    })
}

module.exports = forcast;