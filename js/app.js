const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const capturar = document.getElementById('capturar');
var username = window.prompt("Olá, qual é o seu nome?")

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

//Using Destructuring assignment
const infoPhotos = { name: username, photo: context };
let { photo, name } = infoPhotos;
console.log(name);
console.log(photo);

//Using Arrow Function
var letters = username;
var lettersToArray = (letters) => letters.split('');
console.log(lettersToArray(letters));