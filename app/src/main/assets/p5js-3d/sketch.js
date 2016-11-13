/* P5.js sketch
 * Created by Arthur Vimond on 06/09/2016.
 */

// Global variables

// Trackable (Vuforia marker)
var lastTrackableName = "";
var lastTrackablePosX = 0, lastTrackablePosY = 0, lastTrackablePosZ = 0;
var lastTrackableRotX = 0, lastTrackableRotY = 0, lastTrackableRotZ = 0;

var rotInc = 0;

// p5.js native function
// Called once at app's creation
function setup() {

    // Create fullscreen canvas
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);

}

// p5.js native function
// Called every frame (default: 60fps)
function draw() {

    rotInc += 0.05;

    // Clear screen 
    clear();

    // Draw transparent background
    background(0, 0);


    normalMaterial();
    push();
    translate(lastTrackablePosX * 10, lastTrackablePosY * 10);
    rotateX(lastTrackablePosX / 10);
    rotateY(lastTrackablePosY / 10);
    rotateZ(lastTrackablePosZ / 10);
    box(100);
    pop();

    // Set shape and color properties for circles
    /*stroke(255);
    strokeWeight(3);
    noFill();*/

    // Draw a circle for each finger on screen
  	/*for (var i = 0; i < touches.length; i++) {
		ellipse(touches[i].x, touches[i].y, 60, 60);
  	}*/
  
}

function touchStarted() {
    //println("touchStarted");
}

function touchMoved() {
    //println("touchMoved");
}

function touchEnded() {
    //println("touchEnded");
}

// Call Java function
function callJavaFunction() {
    Android.showToast("Called from Javascript");
}

// Called from Java
function setTrackableData(id, name, posX, posY, posZ, rotX, rotY, rotZ) {
    println("p5js::setTrackableData -> id: " + id + " - name: " + name + " - posX: " + posX + " - posY: " + posY + " - posZ: " + posZ + " - rotX: " + rotX + " - rotY: " + rotY + " - rotZ: " + rotZ);

    lastTrackableName = name;

    lastTrackablePosX = posX;
    lastTrackablePosY = posY;
    lastTrackablePosZ = posZ;

    lastTrackableRotX = rotX;
    lastTrackableRotY = rotY;
    lastTrackableRotZ = rotZ;

}