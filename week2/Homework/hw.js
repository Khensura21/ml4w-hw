
///Global Variables 
let knn;
let video;
let features;
let ready = false;
let label;
let song1, song2, song3;
let type;
//p5 speech object!
// const myVoice = new p5.Speech();
let currentLabel = "";


//implement p5speech having it say you are an (Kappa/Alpha/Omega)! Then commence playing specific theme song.
function setup() {
    createCanvas(320, 420);
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();
    features = ml5.featureExtractor("MobileNet", modelReady);
    knn = ml5.KNNClassifier();
    label = createP("Need Training Data :p");
    label.style('font-size', '32pt');
    song1 = createAudio('wmd.mp3');
    song2 = createAudio('dog.mp3');
    song3 = createAudio('kappa.mp3');
}


function classifyMe() {

    const logits = features.infer(video);

    knn.classify(logits, function (error, result) {
        if (error) {
            console.log(error);
        }
        else {
            label.html(result.label);

            currentLabel = result.label;
            // playSong();
            // This is the moment it sees something new!

            if (currentLabel == "Alpha") {
                setTimeout(classifyMe(), 5000);

                ///use p5 speech to say, "O6!!!  You, you're an Alpha man!"
                //  myVoice.speak(`O 6 , You are an ${result.label} man!`);
                //delay for 1-2 secs, then commence playing song 

                song1.play();
                song2.pause();
                song3.pause();


            }

            else if (currentLabel == "Omega") {
                setTimeout(classifyMe(), 5000);

                song2.play();
                song1.pause();
                song3.pause();
             
            }

            else if (currentLabel == "Kappa") {
                setTimeout(classifyMe(), 5000);
                song3.play();
                song1.pause();
                song2.pause();
               
            }
            


        }

    })
}


function mousePressed() {
    if (knn.getNumLabels() > 0) {
        classifyMe();
    }
}



function keyPressed() {
    console.log(key);
    //infering the logits from current image/snapshot of image
    const logits = features.infer(video);
    if (key == "A") {
        knn.addExample(logits, "Alpha");
        console.log("Alpha");
    } else if (key == "O") {
        knn.addExample(logits, "Omega");
        console.log("Omega");
    } else if (key == "K") {
        knn.addExample(logits, "Kappa");
        console.log("Kappa");
    }
} s



function modelReady() {
    console.log("Model ready");
}


function draw() {
    image(video, 0, 0);
    // playSong();
    if (!ready && knn.getNumLabels() > 0) {
        // classifyMe(); //comment this out
        ready = true;
    }
}
