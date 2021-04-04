const SECRET_KEY = process.env.token;
export default (req, res) => {
  if(req.query.token == SECRET_KEY) {
    process.env.gas = req.query.gas;
    process.env.fumaca = req.query.fumaca;
    process.env.data = new Date();
    process.env.hour = (new Date().getHours()) - 3;
    process.env.minutes = new Date().getMinutes();
    process.env.day = new Date().getDate();
    process.env.month = new Date().getMonth();
    process.env.year = new Date().getFullYear();

    
    console.log({
      "dia:":process.env.day,
      "month:":process.env.month,
      "year:":process.env.year,
      "hour:":process.env.hour,
      "minutes::":process.env.minutes
    })
    res.statusCode = 200
    res.json("Tudo certo");
  }else{
    res.statusCode = 401
    res.json("Senha incorreta");
  }
}
      