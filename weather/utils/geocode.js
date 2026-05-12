const request = require("postman-request");


const geo = (address, callback) => {
    const geourl2 = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(address)}&count=10&language=en&format=json`;
    
    request({ url: geourl2, json: true }, (err, res, body) => {
        
        if (err) {
            callback("Ä°nternet HatasÄ±: " + err.code,undefined);
            return;
        }
        if (!body.results || body.results.length === 0) {
            callback("url bilgilerini kontrol etmelisin veya sonuç bulunamadı", undefined);
            return;
        }
        
        const lat = body.results[0].latitude;
        const lon = body.results[0].longitude;
        const location=body.results[0].name
        callback(undefined, { lat, lon, location });
    });
};

module.exports = geo;
