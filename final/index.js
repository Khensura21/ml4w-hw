
//Load Teachable machine audio models
const modelJson = 'https://storage.googleapis.com/tm-speech-commands/Thanoz/model.json';
const metadataJson = 'https://storage.googleapis.com/tm-speech-commands/Thanoz/metadata.json'

//ML method that recognizes which classes are which
const recognizer = speechCommands.create(
    'BROWSER_FFT',
    undefined,
    modelJson,
    metadataJson
);
//////Global variables//////////////
//Words array that stores user input
let words = [];
//variable that stores probability the model heard a finger snap
let snap; 
///UI variables
let button, button2, greeting, input

// const prob0 = document.getElementById('prob0'); // select <span id="prob0">
// const prob1 = document.getElementById('prob1'); // select <span id="prob1">

//Code taken from Yining's Audio CLassifier Example
loadMyModel();
async function loadMyModel() {
    // Make sure that the underlying model and metadata are loaded via HTTPS
    // requests.
    await recognizer.ensureModelLoaded();

    // See the array of words that the recognizer is trained to recognize.
    console.log(recognizer.wordLabels());

    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields such a
    //    - includeSpectrogram
    //    - probabilityThreshold
    //    - includeEmbedding
    recognizer.listen(async (result) => {
        showResult(result);
        // - result.scores contains the probability scores that correspond to
        //   recognizer.wordLabels().
        // - result.spectrogram contains the spectrogram of the recognized word.

        // optionally display spectrogram of result
        // var spectrogram = result.spectrogram;
        // await plotSpectrogram(canvas, spectrogram, recognizer);
    }, {
            includeSpectrogram: true,
            probabilityThreshold: 0.25
        });

    // Stop the recognition in 10 seconds.
    // setTimeout(() => recognizer.stopListening(), 10e3);
}

//shows the result from the recognizer model
function showResult(result) {
    console.log('result: ', result);
    console.log('result.scores[0]', result.scores[0])
    console.log('result.scores[1]', result.scores[1])

    snap = result.scores[0];
    if (snap > 0.95) {
        removeMe();

    }

}

function setup() {
    createCanvas(750, 500);
    background(0);

    //Code taken from example: https://p5js.org/examples/dom-input-and-button.html

    greeting = createElement('h2', 'What Are Your Worries?');
    greeting.position(360, 640);

    input = createInput();
    input.position(420, 710);
    input.size(150, 25);

    //submit button
    button = createButton('submit');
    button.position(660, 700);
    button.mousePressed(addWordToCanvas);
    button.style('border-radius', '40px')
    button.style('font-size', ' 25px');
    button.style('background-color', '#ff3300')
    button.style('font-family', 'Helvetica')
    button.style('border', 'none')
    button.style('cursor', 'pointer')
    button.size(200, 50)

    ///Done button
    button2 = createButton('done');
    button2.position(900, 700);
    button2.style('border-radius', '40px')
    button2.style('font-size', ' 25px');
    button2.style('background-color', '#751aff')
    button2.style('font-family', 'Helvetica')
    button2.style('border', 'none')
    button2.style('cursor', 'pointer')
    button2.size(200, 50)
    button2.mousePressed(() => {
        window.alert("Now snap to make them go POOF!");
    });
}


//Code taken from example: https://p5js.org/examples/dom-input-and-button.html
//Adds Users'input to the canvas

function addWordToCanvas() {
    const name = input.value();
    input.value('');
    words.push(name);
    console.log(words);

    for (let i = 0; i < 200; i++) {
        push();
        fill(random(255), 255, 255);
        translate(random(width), random(height));
        rotate(random(2 * PI));
        textSize(15);
        text(words[words.length - 1], 0, 0);
        pop();
    }
    

}

//function removes half of the words from the canvas triggered by a finger snap
function removeMe() {

    let word = shuffle(words);
    words = word.slice(0, parseInt(words.length / 2));
    console.log('words: ', words)
    background(0);

    words.forEach(word => {
        remainingWord(word);
    })
    if (word.length == 0) {
        background(0);
        let p = 'No matter how real they feel or intense they may become, they all just illusions'
        let q = 'They will INEVITABLY, fade away..'
        fill('#00e600');
        textSize(20);
        text(p, 25, 200)
        text(q, 225, 250)

    }

}

//redraws the remaining words in the 'words' array 
function remainingWord(word) {
    for (let i = 0; i < 200; i++) {
        push();
        fill(random(255), 255, 255);
        translate(random(width), random(height));
        rotate(random(2 * PI));
        textSize(15);
        text(word, 0, 0);
        pop();
    }
}

//shuffles words in the word array
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


