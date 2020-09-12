const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const capturar = document.getElementById('capturar');

const tela = {
    video: {
        width: 640, height: 480
    }
};

async function init() {
    try {
        const picture = await navigator.mediaDevices.getUserMedia(tela);
        handleSucess(picture);
    }catch(error) {

    }
}

function handleSucess(picture) {
    window.picture = picture;
    video.srcObject = picture;
}

init();

var context = canvas.getContext('2d');
capturar.addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
});