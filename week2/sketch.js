let video;
const knnClassifier = ml5.KNNClassifier();
const featureExtractor= ml5.imageClassifier('MobileNet', gotModel)

function setup(){
    video = createCapture(VIDEO);
    video.parent('#videoContainer');
}


//callback for when the model is loaded
function gotModel(){
    console.log("MobileNet Loaded!");
}

function createButtons(){
    buttonA = select('#addClassRock');
    buttonA.mousePressed(() => {
        addExample('Rock');
    })

    buttonB = select('#addClassPaper');
    buttonB.mousePressed(() => {
        addExample('Paper');
    })

    buttonC = select('#addClassScissor');
    buttonC.mousePressed(() => {
        addExample('Scissor');
    })

    buttonClassify = select('#buttonPredict');
    buttonClassify.mousePressed(() =>{
        classifyMyVideo();

    })

}

function classifyMyVideo(){
    const features = featureExtractor.infer(video);
    knnClassifier.classify(features, gotResults);

}

function gotResults(err, results){
    console.log('results: ', results);
    classifyMyVideo();
}

function addExample(label){
    const features = featureExtractor.infer(video);
    knnClassifier.addExample(features, label);
}