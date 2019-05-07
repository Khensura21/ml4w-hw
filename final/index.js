

const modelJson = 'https://storage.googleapis.com/tm-speech-commands/Thanoz/model.json';
const metadataJson = 'https://storage.googleapis.com/tm-speech-commands/Thanoz/metadata.json';

const colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
let colorSelection;
const recognizer = speechCommands.create(
    'BROWSER_FFT',
    undefined,
    modelJson,
    metadataJson
);

let words = [];

let color;


const prob0 = document.getElementById('prob0'); // select <span id="prob0">
const prob1 = document.getElementById('prob1'); // select <span id="prob1">


// loadMyModel();

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

function showResult(result) {
    console.log('result: ', result);
    console.log('result.scores[0]', result.scores[0])
    console.log('result.scores[1]', result.scores[1])
    // Show the probability for class 0
    prob0.innerHTML = result.scores[0];

    // Show the probability for class 1
    prob1.innerHTML = result.scores[1];
    color = result.scores[0];

   
}
let button, button2, greeting, input
function setup() {
    createCanvas(750,500);
    background(220);
    colorSelection = colors[floor(random(colors.length))];

    //Code taken from example: https://p5js.org/examples/dom-input-and-button.html
   
    input = createInput();
    input.position(20, 165);
  
   greeting = createElement('h2', 'What Are Your Worries?');
    greeting.position(20, 115);

   button = createButton('submit');
    button.position(input.x + input.width, 165);
    button.mousePressed(worry);

   button2 = createButton('remove');
   button2.position(input.x + input.width, 195);
   button2.mousePressed(() => {
    removeMe();
   });
}

  //Code taken from example: https://p5js.org/examples/dom-input-and-button.html
function worry() {
    const name = input.value();
    input.value('');

    words.push(name);
    console.log(words);
  
    for (let i = 0; i < 200; i++) {
      push();
      fill(random(255), 255, 255);
      translate(random(width), random(height));
      rotate(random(2 * PI));
      text(words[words.length-1], 0, 0);
      pop();
    }
  }

//   function remove(){
//       words.pop()
//       console.log(words)


//   }
function draw() {
   
    // background(220);
    // changeBG();
    // removeMe();
   


}


function changeBG(){
  
    if (color > .90) {
        background(colorSelection);
    }

}

function removeMe(){
    let word = shuffle(words);
    words = word.slice(0, parseInt(words.length / 2));
    console.log('words: ', words)

    background(220);
    
    words.forEach(word => {
        drawOneWord(word);
    })

//    for (let i = 0; i < words.length; i++){
//         fill('white');
//         text(words[i], 250, 100 *i +100)
//     }
//     if (color > .90) {
//         words.pop();
//     }

    
}

function drawOneWord(word) {
    for (let i = 0; i < 200; i++) {
        push();
        fill(random(255), 255, 255);
        translate(random(width), random(height));
        rotate(random(2 * PI));
        text(word, 0, 0);
        pop();
    }
}

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

   
