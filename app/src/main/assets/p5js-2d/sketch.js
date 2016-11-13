/* P5.js sketch
 * Created by Arthur Vimond on 06/09/2016.
 */

// Global variables


// Trackable (Vuforia marker)
var lastTrackableName = "";
var lastTrackablePosX = 0, lastTrackablePosY = 0, lastTrackablePosZ = 0;
var lastTrackableRotX = 0, lastTrackableRotY = 0, lastTrackableRotZ = 0;

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

    textSize(20);
    fill(255);
    // Display last trackable name
    text("lastTrackableName: " + lastTrackableName, 30, 50);

    text("lastTrackablePosX: " + lastTrackablePosX, 30, 100);
    text("lastTrackablePosY: " + lastTrackablePosY, 30, 150);
    text("lastTrackablePosZ: " + lastTrackablePosZ, 30, 200);

    text("lastTrackableRotX: " + lastTrackableRotX, 30, 250);
    text("lastTrackableRotY: " + lastTrackableRotY, 30, 300);
    text("lastTrackableRotZ: " + lastTrackableRotZ, 30, 350);


    // "marker01"
    if (lastTrackableName == "marker01") {
        // Display content for marker01


    }
    else if (lastTrackableName == "marker02") {

        

    }
    else if (lastTrackableName == "marker03") {




    }


  
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