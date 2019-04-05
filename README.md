p5.serialport examples 
=============
forked from the [main p5 serial library](https://github.com/vanevery/p5.serialport) and stripped for simplicity 


What Does it Do?
----------------
Connects a p5 sketch to an Arduino. There are a few simple steps here to get you started. 


Step 1: Install p5.serial with Node.js
-----------------

Before you run the sketch, you need to install the p5 serial server with node.js. This will allow your p5 sketch in the browser to talk to your Arduino. 

Install node.js if you don't already have it. 

Then install p5.serialserver:

On Windows, open the command prompt and type ``` npm install -g p5.serialserver```

On mac, open a Terminal window and type ```sudo npm install -g p5.serialserver```  

Then run the server it with ```p5serial``` 
You should see something like: your p5 serial server is running.


Step 3: Upload the echo.ino to your Arduino
-----------------

Clone or download this folder to get the examples for Arduino and p5. 

Get the echo.ino code inside the echo example folder and put it into an Arduino sketch.
Upload that Arduino code to your board.
Now your board will be sending data via serial communication. 


Step 3: Open the p5 sketch and update the port
-----------------

Go to examples--> echo and double click index.html to open it in the browser. 
Open the console.
It might say that it can't open the port. Does it list the available ports? 

If not, open Arduino and go to Tools--> port and check what your USB port is called (either something like COM9 or something like /dev/cu.usbmodem1411, depending on whether you're using Windows or Mac). 

Open the whole folder in Atom to edit sketch.js
You need to change the port name in line 2. 
Change the port name in ' ' from whatever it is to whatever your current port is called.

Save your sketch. 
Refresh your browser.

Does it work??

