#include <WiFi.h>
#include <HTTPClient.h>
short int httpResponseCode;
const char* ssid = "";
const char* password =  "";
String url;
String httpRequestData,payload;
bool button=false,aux=false;
int gas_analog = 33;
int gas_digital = 2;
float R0= 0.7;
int smoke = 0;
int gas = 0;
#define pinVermelho 13
#define pinVerde 14
#define pinAzul 27
#define pinButton 32

void buttonState() {
  button = !button;
  if (button) aux = !aux;
}
  
void connectNetwork(){
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("IP: " + (String)WiFi.localIP());
};

int detectSmoke (){
    float sensor_volt;
    float RS_gas;
    float ratio;
    int sensorValue = analogRead(gas_analog);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt;
    ratio = RS_gas/R0;
    if (ratio > 2.5 and ratio < 4.5) {
        return 2;
      }
      return 0;
  }

int detectGas (){
    float sensor_volt;
    float RS_gas;
    float ratio;
    int sensorValue = analogRead(gas_analog);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt;
    ratio = RS_gas/R0;
    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);
    Serial.print("\n");
    delay(1000);
    if (ratio > -2 and ratio < 2.5) {
        return 1;
      }
      return 0;
  }

void gases (){
    smoke = detectGas();
    gas = detectGas();
  }

void sendData(){
  HTTPClient http;
  http.addHeader("Content-Type", "text/plain");
  
  if (smoke != 2 || gas != 1 ){
    url = "http://192.168.15.45:3000/api/sendData?token=fjenfeunfuenf&fumaca="+String(smoke)+"&gas="+String(gas);
    http.begin(url.c_str());
    delay(300);
    }
  
  if (smoke == 2) {
    url = "http://192.168.15.45:3000/api/sendMessage";
    http.begin(url.c_str());
    httpResponseCode = http.POST("");
    Serial.println("mensagem enviada!");
    delay(300);

    url = "http://192.168.15.45:3000/api/sendData?token=fjenfeunfuenf&fumaca="+String(smoke)+"&gas="+String(gas);
    http.begin(url.c_str());
    delay(300);
    }

  if (gas == 1) {
    url = "http://192.168.15.45:3000/api/sendMessage";
    http.begin(url.c_str());
    httpResponseCode = http.POST("");
    delay(300);

    url = "http://192.168.15.45:3000/api/sendData?token=fjenfeunfuenf&fumaca="+String(smoke)+"&gas="+String(gas);
    http.begin(url.c_str());
    delay(300);
    }  
  
  httpResponseCode = http.POST("");
  delay(300);
  if (httpResponseCode > 0) {
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
  }
  http.end();
}


void setup() {
  pinMode(pinVermelho,OUTPUT);
  pinMode(pinVerde,OUTPUT);
  pinMode(pinAzul,OUTPUT);
  pinMode(gas_digital, INPUT); 
  pinMode(pinButton,INPUT);
  attachInterrupt(digitalPinToInterrupt(pinButton), buttonState, CHANGE);

  Serial.begin(115200);
  connectNetwork();
}

void loop() {
  if(aux){
    digitalWrite(pinVermelho, 1);
    digitalWrite(pinVerde, 0);
    digitalWrite(pinAzul, 0);
    Serial.println("desligado");  
    }
  else {
    digitalWrite(pinVermelho, 0);
    digitalWrite(pinVerde, 1);
    digitalWrite(pinAzul, 0);
    Serial.println("ligado");
    detectSmoke();
    detectGas();
    Serial.println("Status gas:" + String(gas));
    gases();
    sendData();
    }

    delay(500);
}
