
const request=require("postman-request");

const forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API_KEY}&query=${lat},${lon}`;
    
    request({ url, json: true }, (err, res, body) => {
        if (err) {
            callback("Hava durumu servisine bağlanılamadı!", undefined);
        } else if (body.error) {
            callback("Konum bulunamadı, bilgileri kontrol edin.", undefined);
        } else {
            const temp = body.current.temperature;
            const feelTemp = body.current.feelslike;
            const precip = body.current.precip;
            const weather = body.current.weather_descriptions[0];
        
            
            if (precip === 0) message = "Yağış beklenmiyor.";
            else if (precip <= 10) message = "Az yağış bekleniyor.";
            else if (precip < 25) message = "Ortalama yağış bekleniyor.";
            else if (precip < 50) message = "Sağanak yağış bekleniyor.";

            else message = "Fırtına bekleniyor.";
            
            callback(undefined, {temp,feelTemp,precip,weather,message});
        }
    });
};

module.exports = forecast;
