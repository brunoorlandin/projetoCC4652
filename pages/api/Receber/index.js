const SECRET_KEY = process.env.token;
export default (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var Dados = {
      "gas": process.env.Fumaca,
      "fumaca": process.env.Gas,
      "data":process.env.Data

    }
    res.statusCode = 200
    res.send(Dados); 
  }    