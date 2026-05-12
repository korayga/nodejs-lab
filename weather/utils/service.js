
const geo = require('./geocode');
const forecast = require('./forecast');

const weatherInfo = (address, callback) => {
    if (!address) {
        return callback("Bir konum girmelisiniz.", undefined);
    }

    geo(address, (gerr, gdata) => {
        if (gerr) {
            return callback(gerr, undefined);
        }
        
        forecast(gdata.lat, gdata.lon, (ferr, fdata) => {
            if (ferr) {
                return callback(ferr, undefined);
            }
            
            callback(undefined, {
                location: gdata.location,
                forecast: fdata
            });
        });
    });
};

module.exports = weatherInfo;
