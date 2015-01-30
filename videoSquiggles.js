function setup() {
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();

  colorMode(RGB, 255, 255, 255, 100);
  noFill();

  xPositionsForLoc = [];
  yPositionsForLoc = [];
 }

function draw() {
  // background(0);
  capture.loadPixels();
  for (var i = 0; i < height; i++) {
  	for (var j = 0; j < width; j++) {
  		var loc = i * width + j;
  		loc = loc * 4;
  		// println(capture.pixels);
  		// stroke(capture.pixels[loc], capture.pixels[loc+1], capture.pixels[loc+2], capture.pixels[loc+3]);
  		// point(j,i);
  		setPixel(j,i, capture.pixels[loc], capture.pixels[loc+1], capture.pixels[loc+2], capture.pixels[loc+3]);
  	};
  };

  capture.updatePixels();

  image(capture, 0, 0, 320, 240);
}

function getPixel(x,y) {
	  	var loc = y * width + x;
  		loc = loc * 4;
  		return [
	  		capture.pixels[loc],
	  		capture.pixels[loc+1],
	  		capture.pixels[loc+2],
	  		capture.pixels[loc+3]
  		];
}
function setPixel(x,y,r,g,b,a) {
  		var loc = y * width + x;
  		loc = loc * 4;
  		capture.pixels[loc] = r;
  		capture.pixels[loc+1] = g;
  		capture.pixels[loc+2] = b;
  		capture.pixels[loc+3] = a;
}

// import processing.video.*;


// var pixelSize = 15;
// var numVerticesInPixel = 10;
// var overflowAllowance = 30;  //farthest outside a grid square that a vertex can be placed (or move)
// var boost = 70;
// ArrayList<ArrayList> xPositionsForLoc;
// ArrayList<ArrayList> yPositionsForLoc;

// Capture video;


// void setup() {
//   size(640, 480, P3D);
//   frameRate(24);
//   colorMode(RGB, 255, 255, 255, 100);
//   noFill();

//   // This the default video input, see the GettingStartedCapture 
//   // example if it creates an error
//   video = new Capture(this, width, height);

//   // Start capturing the images from the camera
//   video.start();  

//   xPositionsForLoc = initXPositionsForLoc();
//   yPositionsForLoc = initYPositionsForLoc();
  
//   background(50);
// }


// void draw() { 
//   background(0);
//   if (video.available()) {
//     video.read();
//     video.loadPixels();

//     jiggleVertices();
    
//     // Begin loop for columns
//     for (var i = 0; i < width; i+=pixelSize) {
//       for (var j = 0; j < height; j+=pixelSize) {

//         var loc = (video.width - i - 1) + j*video.width; // Reversing x to mirror the image
//         //        stroke(red(video.pixels[loc];
//         color c = video.pixels[loc];
//         c = color(red(c)+boost, green(c)+boost, blue(c)+boost);
//         stroke(c);


//           var pixelIndex = (int) ((float(i)/pixelSize * (float(height)/pixelSize)) + (float)j/pixelSize);
//           ArrayList<Integer> xPositions = xPositionsForLoc.get(pixelIndex);
//           ArrayList<Integer> yPositions = yPositionsForLoc.get(pixelIndex);
//         beginShape();
//         for(var k = 0; k < numVerticesInPixel; k++) {
//           curveVertex(xPositions.get(k), yPositions.get(k));
//         }
//         endShape();
//       }
//     }
//   }
// }

// void jiggleVertices() {
//   var xGridSize = ceil(float(width) / pixelSize);
//   var yGridSize = ceil(float(height) / pixelSize);
  
//   for(var offset = 0; offset < xPositionsForLoc.size(); offset++) {
//     ArrayList<Integer> xPositions = xPositionsForLoc.get(offset);
//     var xGridOffset = offset / yGridSize;
//     var xOffsetInPixels = xGridOffset*pixelSize;
//     var minX = xOffsetInPixels - overflowAllowance;
//     var maxX = xOffsetInPixels + pixelSize + overflowAllowance;
//     for(var i = 2; i < xPositions.size()-2; i++) {
//       var newPosition = xPositions.get(i) + int(random(-1.99,1.99));
//       if(newPosition < minX) {
//         newPosition = minX;
//       } else if(newPosition > maxX) {
//         newPosition = maxX;
//       }
//       xPositions.set(i, newPosition);
//     }
//   }
  
//   for(var offset = 0; offset < yPositionsForLoc.size(); offset++) {
//     ArrayList<Integer> yPositions = yPositionsForLoc.get(offset);
//     var yGridOffset = offset % yGridSize;
//     var yOffsetInPixels = yGridOffset * pixelSize;
//     var minY = yOffsetInPixels - overflowAllowance;
//     var maxY = yOffsetInPixels + pixelSize + overflowAllowance;
//     for(var i = 2; i < yPositions.size()-2; i++) {
//       var newPosition = yPositions.get(i) + int(random(-1.99,1.99));
//       if(newPosition < minY) {
//         newPosition = minY;
//       } else if(newPosition > maxY) {
//         newPosition = maxY;
//       }
//       yPositions.set(i, newPosition);
//     }
//   }
// }

// ArrayList<ArrayList> initXPositionsForLoc() {
//   ArrayList<ArrayList> xPositionsForLoc = new ArrayList<ArrayList>();
  
//   var lastX;
//   var lastY;
  
//   for (var i = 0; i < width; i+=pixelSize) {
//     lastX = var(i + (pixelSize/2.0));
//     lastY = 0;
//     for (var j = 0; j < height; j+=pixelSize) {
//       var loc = (video.width - i - 1) + j*video.width; // Reversing x to mirror the image
      
//       ArrayList<Integer> xPositions = new ArrayList<Integer>();
      
//       xPositions.add(lastX);
//       xPositions.add(lastX);
//       for(var k = 0; k < numVerticesInPixel-4; k++) {
//         xPositions.add(i+randInCell());
//       }
//       xPositions.add(lastX);
//       xPositions.add(lastX);
//       lastY = j+pixelSize;
      
//       xPositionsForLoc.add(xPositions);
//     }
//   }
  
//   return xPositionsForLoc;
// }


// function initYPositionsForLoc() {
//     var yPositionsForLoc = [];
  
//   var lastX;
//   var lastY;
  
//   for (var i = 0; i < width; i+=pixelSize) {
//     lastX = var(i + (pixelSize/2.0));
//     lastY = 0;
//     for (var j = 0; j < height; j+=pixelSize) {
//       var loc = (video.width - i - 1) + j*video.width; // Reversing x to mirror the image
      
//       ArrayList<vareger> yPositions = new ArrayList<vareger>();
      
//       yPositions.add(lastY);
//       yPositions.add(lastY);
//       for(var k = 0; k < numVerticesInPixel-4; k++) {
//         yPositions.add(j+randInCell());
//       }
//       yPositions.add(j+pixelSize);
//       yPositions.add(j+pixelSize);
//       lastY = j+pixelSize;
      
//       yPositionsForLoc.add(yPositions);
//     }
//   }
//   return yPositionsForLoc;
// }

// function randInCell() {
//   return int(random(-3, pixelSize+3));
// }


