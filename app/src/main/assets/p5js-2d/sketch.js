/* P5.js sketch
 * Created by Arthur Vimond on 06/09/2016.
 */

// Global variables


// Trackable (Vuforia markers)

var lastTrackableName;

// p5.js native function
// Called once at app's creation
function setup() {

    // Create fullscreen canvas
    var canvas = createCanvas(windowWidth, windowHeight);

}

// p5.js native function
// Called every frame (default: 60fps)
function draw() {
    // Clear screen 
    clear();

    // Draw transparent background
    background(0, 0);

    // Set shape and color properties for circles
    stroke(255);
    strokeWeight(3);
    noFill();

    // Draw a circle for each finger on screen
  	for (var i = 0; i < touches.length; i++) {
		ellipse(touches[i].x, touches[i].y, 60, 60);
  	}

    // Set shape property for texts
    strokeWeight(1);

    // Display last trackable name
    text("lastTrackableName: " + lastTrackableName, 50, 20);
  
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

function setTrackableData(id, name, isDetected) {
    println("setTrackableData - id: " + id + " - name: " + name);

    // Store current trackable name
    lastTrackableName = name;

}