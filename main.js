function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bGPcl_0oA/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

var Dog = 0;
var Cat = 0;
var Lion = 0;
var Cow = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("no_of_times_voice_detected").innerHTML = 'Detected voice is of  - ' + results[0].label;
        document.getElementById("detected_voice_of_animal").innerHTML = 'Detected Dog - ' + Dog + ' ' + ' Detected Cat - ' + Cat + ' ' + 'Detected Cow - ' + Cow + ' ' + 'Detected Lion - ' + Lion;
        document.getElementById("no_of_times_voice_detected").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("detected_voice_of_animal").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('Animal_img');

        if (results[0].label == "Barking") {
            img.src = 'bark-gif.gif';
            Dog = Dog + 1;
        } else if (results[0].label == "Meowing") {
            img.src = 'meow-gif.gif';
            Cat = Cat + 1;
        } else if (results[0].label == "Mooing") {
            img.src = 'Cow.gif';
            Cow = Cow + 1;
        } else if (results[0].label == "Roar") {
            img.src = 'lion-roar.gif';
            Lion = Lion + 1;
        } else {
            img.src = 'listen-gif.gif';
        }
    }
}