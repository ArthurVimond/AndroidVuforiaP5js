/* P5.js sketch
 * Created by Arthur Vimond on 06/09/2016.
 */

// Global variables

// Trackable (Vuforia markers)
var trackable0Name;
var trackable0IsDetected;
var trackable0PosX, trackable0PosY, trackable0PosZ;
var trackable0RotX, trackable0RotY, trackable0RotZ;

// p5.js native function
// Called once at app's creation
function setup() {

    // Create fullscreen canvas
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);

}

// p5.js native function
// Called every frame (default: 60fps)
function draw() {

    rotateInc += 0.005;

    // Clear screen 
    clear();

    // Draw transparent background
    background(0, 0);


    normalMaterial();
    push();
    rotateX(trackable0RotX);
    rotateY(trackable0RotY);
    rotateZ(trackable0RotZ);
    translate(trackable0PosX, trackable0PosY);
    box(50);
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
function setTrackableData(id, name, posX, isDetected, posY, posZ, rotX, rotY, rotZ) {
    //println("p5js::setTrackableData -> id: " + id + " - name: " + name + " - posX: " + posX + " - posY: " + posY + " - posZ: " + posZ);

    // Trackable 0
    if (id == 0) {
        trackable0Name = name;
        trackable0IsDetected = isDetected;
        trackable0PosX = posX;
        trackable0PosY = posY;
        trackable0PosZ = posZ;
        trackable0RotX = rotX;
        trackable0RotY = rotY;
        trackable0RotZ = rotZ;
    }


}