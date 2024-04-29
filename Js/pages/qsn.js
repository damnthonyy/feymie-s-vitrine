document.addEventListener('DOMContentLoaded', (event) => {
    var maVideo = document.getElementById('maVideo');
    var bouton = document.getElementById('play-pause');

    bouton.addEventListener('click', function () {
        if (maVideo.paused) {
            maVideo.play();
        } else {
            maVideo.pause();
        }
    });
});
