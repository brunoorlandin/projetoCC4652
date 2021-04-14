// const SECRET_KEY = process.env.token;
export default (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    var dados = {
      "gas": process.env.gas,
      "fumaca": process.env.fumaca,
      "data":process.env.data,
      "day":process.env.day,
      "minutes":process.env.minutes,
      "hour":process.env.hour,
      "month":process.env.month,
      "year":process.env.year,
    }
    
    res.statusCode = 200
    res.send(dados); 
  }    