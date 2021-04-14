const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
 
const client = require('twilio')(accountSid, authToken); 

let data1 = process.env.fumaca;
let data2 = process.env.gas;

let day = process.env.day;
let month = process.env.month;
let year = process.env.year;
let hour = process.env.hour;
let minutes = process.env.minutes;

let date = day + '/' + month + '/' + year;
let time = hour + ':' +minutes;

if (data1 == "2") {
  var text = 'Um alerta de fumaca foi enviado em: ' + date + 'as ' + time;
} 

if (data2 == "1") {
  var text = 'Um alerta de gas foi enviado em: ' + date + 'as ' + time;
}

function sendWhatsAppMessage () {
  client.messages 
      .create({
        body: "Um alerta de gas foi enviado!",
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+5511970178426' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}

export default (req, res) => {
  //if (req.get == SECRET_KEY) {
    res.statusCode = 200
    sendWhatsAppMessage();
    res.json('Mensagem enviada!')
  //}
}
      