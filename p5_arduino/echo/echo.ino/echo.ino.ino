void setup() {
  Serial.begin(9600);
}

void loop() {
 
    Serial.write(9);
    delay(1000);
    Serial.write(10);
    delay(1000);  
}
