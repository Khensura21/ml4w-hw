import { SSL_OP_SINGLE_DH_USE } from "constants";

///I will create a program that if the algorithim recognize money, \
//it will play the song I got 5 on it and display their album cover 
let video;
let classifier;
let song;
function setup(){
  
    createCanvas(500,500);
   
    video = createCapture(VIDEO);
    classifier = ml5.imageClassifier('MobileNet', video, modelReady);
    // // song = createAudio()
    // if (results == "comic book"){
    //     console.log('I got 5 on it!');
    //     // song.play();
    //     // image.display(5 dollar bill)

    // }
}
    function modelReady() {
        console.log('Our model is ready baby!');
        classifier.predict(gotResult);


        function gotResult(err, results){
            if (results){
                console.log('results:', results);
                select('#result').html(results[0].className);
                select('#probability').html(results[0].probability);
                classifier.predict(gotResult);
            }
        }
        
    }



function draw() {
        background(60, 106, 227);
    }      