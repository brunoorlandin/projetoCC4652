const SECRET_KEY = process.env.token;
export default (req, res) => {
  if(req.query.Token == SECRET_KEY) {
    process.env.Gas = req.query.Gas;
    process.env.Fumaca = req.query.Fumaca;
    process.env.Data = new Date()
    console.log({"Gas":process.env.Gas,"Fumaca":process.env.Fumaca,"Data":process.env.Data});
    res.statusCode = 200
    res.json("Tudo certo");
  }else{
    res.statusCode = 401
    res.json("Senha incorreta");
  }
}
      