let capture;
var serial; // variable to hold an instance of the serialport library
var portName = "COM7"; // fill in your serial port name here
var inData; // for incoming serial data
var counter=0;



var video;
var button;
var snapshots = [];
var picturecounter = 0;
var vScale = 4;
var total;

function setup() {
  createCanvas(690, 540);
  video = createCapture(VIDEO);
  video.size(320, 240);
  //capture.hide();

  button = createButton('snap');
  button.mousePressed(takesnap);

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors

  serial.open(portName); // open a serial port
  serial.clear();
}

function draw() {
    var pictureX=0;

  background(0);


  fill(255);
  // display the incoming serial data as a string:
  text("incoming value: " + inData, 30, 430);
  text("push count: " + counter, 30,450);


  for (let i=0; i<snapshots.length; i++){
    image(snapshots[i],pictureX,0,80,60);
    pictureX+=50;
  }



}


function keyTyped() {
    var outByte = key;
    console.log("Sending " + outByte);
    //serial.write(Number(outByte)); // Send as byte value
    serial.write(outByte); // Send as a string/char/ascii value
}

function serialEvent() {
  // read a byte from the serial port:
  var inByte = serial.read();
  print("inByte: " + inByte);
  inData = inByte;
  counter=counter+1;
  print(counter);
  takesnap();
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

function takesnap(){
  snapshots.push(video.get());
}
