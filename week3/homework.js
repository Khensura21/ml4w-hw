






// const checkpoint = ''; Fill this with the right link when appropriate 
const maxPredictions = 4;

let model;
let video;
let water;
// A function that loads the model
async function load() {
  model = await tm.mobilenet.load(checkpoint);
}

async function setup() {
  // Call the load function, wait until it finishes loading
  await load();

  // Get videos from webcam
  video = createCapture(VIDEO);
  video.size(400, 300);

  // Make a prediction on video
  predictVideo(video.elt);


  //create a canvas 
  createCanvas(500, 500);
  
  
}


async function predictVideo(image) {
  const prediction = await model.predict(image, maxPredictions);
  console.log('prediction: ', prediction)

  // Show the result
   const res = select('#res'); // select <span id="res">
  res.html(prediction[0].className)
 
  water = prediction[0].className;
  console.log(water);

  if ((water == 1) && (prediction[0].probability > .98)){
    console.log("hi");
    waterViz();
} else {
  //  text('Where is the Food Brooo?', 120, 75);
  clear();
}
   

  // Show the probability
  const prob = select('#prob'); // select <span id="prob">
  prob.html(prediction[0].probability);

  // Continue to predict the video
  predictVideo(video.elt);
}

function waterViz() {
    background(49, 153, 227)
  
    textStyle(BOLD);
    textFont('HELVETICA', 25);
    text('What Are The Macros?', 120, 75)
    textFont('HELVETICA', 20);
  
    textStyle(ITALIC);
    text('Item: Water', 210, 105);
  
    textStyle(NORMAL);
    textFont('HELVETICA', 21);
    text('Protein: 0', 50, 170)
    text('Carbs: 0', 50, 240)
    text('Fats: 0', 50, 310)
  
  }
// function draw(){
    
// }