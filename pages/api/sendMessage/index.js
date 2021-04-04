const accountSid = process.env2.accountSid;
const authToken = process.env2.authToken;
 
const client = require('twilio')(accountSid, authToken); 



let data1 = "Fumaça";
let data2 = "Gás"
 
function sendWhatsAppMessage () {
  client.messages 
      .create({ 
         body: data1,
         from: 'whatsapp:+13174343663',       
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
      