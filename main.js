function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0fdwr6iRV/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error,result)
{
    if (error) {
    console.error(error)
} else {
    console.log(result);
    random_namber_r = Math.floor(Math.random()* 255) + 1;
    random_namber_g = Math.floor(Math.random()* 255) + 1;
    random_namber_b = Math.floor(Math.random()* 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+
    result[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (result[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("
    +random_namber_r+","+random_namber_g+","+random_namber_b+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_namber_r+","+random_namber_g+","+random_namber_b+")";

    img = document.getElementById('alien1');
    img1 = document.getElementById('alien2');
    img2 = document.getElementById('alien3');
    img3 = document.getElementById('alien4');

    if (result[0].label == "Clap"){
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-o2.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
    } else if (result[0].label == "Bell Kind") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.gif';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
    } else if (result[0].label == "Snap") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02';
        img2.src = 'aliens-03.gif';
        img3.src = 'aliens-04.png';
    }  else{
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.gif';
    }
}
}
