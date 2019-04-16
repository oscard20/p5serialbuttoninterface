p5serialportbuttoninterface 
=============
forked from the [main p5 serial library](https://github.com/vanevery/p5.serialport) and stripped for simplicity 


What Does it Do?
----------------
Currently, this sketch is limited to taking a single photo and repeting it in incriments of 3 every time a button, attached to am arduino, is pressed. The goal of this project is to eventually have the button take 

Alternate Step 1: Install p5.serialcontrol-win32-x64 from https://github.com/vanevery/p5.serialcontrol/releases
-----------------

Download and run a release of [p5.serialcontrol](https://github.com/vanevery/p5.serialcontrol/releases). This application incorporates p5.serialserver in a GUI application for MacOS and Windows.

Once you have the application launched load one of the examples/ in your browser to see it in action.

You'll likely have to change the name of the serial port in the examples to the one your Arduino is using.


Step 3: Open the p5 sketch and update the port
-----------------

Go to p5serialbuttoninterface--> examples--> p5-photo-button-->photo-button and double click index.html to open it in the browser. 
Open the console.
It might say that it can't open the port. Does it list the available ports? 

If not, open Arduino and go to Tools--> Port and check what your USB port is called (either something like COM9 or something like /dev/cu.usbmodem1411, depending on whether you're using Windows or Mac). 

Open the whole folder in Atom to edit sketch.js.
You need to change the port name in line 2. 
Change the port name in ' ' from whatever it is to whatever your current port is called.

Save your sketch. 
Refresh your browser.

Does it work??

Step 4: Press Button and Enjoy!
-------------------


