function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/Evg921FFr/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error) {
       console.error(error);
    } else {
        console.log(results);
        document.getElementById("result").innerHTML = "I can hear the sound of " + results[0].label;
        document.getElementById("confidence").innerHTML = "Accuracy of " + results[0].label + " is - " + (results[0].confidence * 100).toFixed(2) + "%";
    }
}