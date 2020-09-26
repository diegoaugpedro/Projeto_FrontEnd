import {video, canvas, capturar, username} from "../js/lib/variables"
import {photo, name} from "../js/lib/destructuring_assigment"
import {letters, lettersToArray} from "../js/lib/arrow_function"

//Using Map Object and Template Strings
var myMap = new Map();
var keyString = username;
myMap.set(keyString, `Bem-Vindo ${username}, para usar nosso webapp ative sua câmera!`)
alert(myMap.get(keyString));

const tela = {
    video: {
        width: 640, height: 480
    }
};

async function init() {
    try {
        const picture = await navigator.mediaDevices.getUserMedia(tela);
        handleSucess(picture);
    } catch (error) {

    }
}

function handleSucess(picture) {
    window.picture = picture;
    video.srcObject = picture;
}

init();

var context = canvas.getContext('2d');

capturar.addEventListener("click", function () {
    context.drawImage(video, 0, 0, 640, 480);
});

//Using Destructuring assignment and Modular JS
console.log(name);
console.log(photo);

//Using Arrow Function and Modular JS
console.log(lettersToArray(letters));