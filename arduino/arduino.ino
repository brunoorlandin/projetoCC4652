
  #include <WiFi.h>
  #include <HTTPClient.h>
  short int httpResponseCode;
  const char* ssid = "";
  const char* password =  "";
  String url;
  String httpRequestData,payload;
  bool button=false,aux=false;
  
void Conectar(){
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("IP: " + (String)WiFi.localIP());
};

void Mudar() {
  button = !button;
  if (button) aux = !aux;
}


void setup() {
  Serial.begin(115200);
  attachInterrupt(digitalPinToInterrupt(pinButton), Mudar, CHANGE);
  
}

void loop() {
  // put your main code here, to run repeatedly:

}
