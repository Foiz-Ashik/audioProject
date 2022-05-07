

var canvas = document.getElementById('canvas');

canvas.width = 800;
canvas.height = 600;

var ctx  = canvas.getContext('2d');



function drawImage()
{
  base_image = new Image();
  base_image.src = 'cat.png';
  base_image.onload = function(){
    ctx.drawImage(base_image, 0, 0);
  }
}
function drawImage2()
{
  base_image = new Image();
  base_image.src = 'dog.png';
  base_image.onload = function(){
    ctx.drawImage(base_image, 0, 0);
  }
}
function drawImage3()
{
  base_image = new Image();
  base_image.src = 'car.png';
  base_image.onload = function(){
    ctx.drawImage(base_image, 0, 0);
  }
}
function drawImage4()
{
  base_image = new Image();
  base_image.src = 'phone.png';
  base_image.onload = function(){
    ctx.drawImage(base_image, 0, 0);
  }
}
function drawImage5()
{
  base_image = new Image();
  base_image.src = 'dolphin.png';
  base_image.onload = function(){
    ctx.drawImage(base_image, 0, 0);
  }
}


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'
var recognition = new SpeechRecognition();
//recognition.grammar = SpeechRecognitionGrammerList;
recognition.interimResults = false;

recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;

    if(command.toLowerCase() === 'cat'){
       drawImage();
    }  
    if(command.toLowerCase() === 'dog'){
       drawImage2();
    }  
    if(command.toLowerCase() === 'car'){
       drawImage3();
    }  
    if(command.toLowerCase() === 'phone'){
       drawImage4();
    }  
    if(command.toLowerCase() === 'dolphin'){
       drawImage5();
    }  
};

var speak = document.getElementById("speak");

speak.addEventListener("click", Start);

function Start(){
    speak.removeEventListener("click", Start);
    speak.addEventListener("click", Stop);
    speak.value = "Stop";
    recognition.start();
}

function Stop(){
    speak.removeEventListener("click", Stop);
    speak.addEventListener("click", Start);
    speak.value = "Speak";
    recognition.stop();
}
    
/*

document.querySelector('speak').addEventListener('click', function(){
    recognition.start();
});

recognition.onspeechend = function() {
    recognition.stop();
};
*/
