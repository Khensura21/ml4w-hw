// import { SSL_OP_SINGLE_DH_USE } from "constants";

///I will create a program that if the algorithim recognize money, 
//it will play the song I got 5 on it and display their album cover 
let video;
let classifier;
let song;
let img;
let check;


function setup() {
    song = createAudio('5OnitEdited.mp3');
    img = loadImage('assets/five.jpg');
    video = createCapture(VIDEO);
    video.size (600,600);
    createCanvas(400,400);
    classifier = ml5.imageClassifier('MobileNet', video, modelReady);

    function modelReady() {
        console.log('Our model is ready baby!');
        classifier.predict(gotResult);


        function gotResult(err, results) {
            if (results) {
                console.log('results:', results);
                select('#result').html(results[0].className);
                select('#probability').html(results[0].probability);
                classifier.predict(gotResult);
            }

            if (results[0].className == "comic book") {
                console.log('I got 5 on it!');
                song.play();
                check = 1;

            }
            else {
                check = 0;
                song.pause();
            }
        }
    }

}

function draw(){
    background (51,97,50);
    if (check == 1) {
        background(img);
    }

}


