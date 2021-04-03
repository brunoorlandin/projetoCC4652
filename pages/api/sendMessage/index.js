const accountSid = 'ACc2446b98f4aa4e719c8751815c2d0a34'; 
const authToken = 'f36a3d0a6698d7c4aca9629d17d47727'; 
const client = require('twilio')(accountSid, authToken); 

const SECRET_KEY = "teste";

let data1 = "Fumaça";
let data2 = "Gás"
 
function sendWhatsAppMessage () {
  client.messages 
      .create({ 
         body: data1,
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+5511970178426' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}

export default (req, res) => {
  //if (req.get == SECRET_KEY) {
    res.statusCode = 200
//    sendWhatsAppMessage();
    res.json('Mensagem enviada!')
  //}
}
      