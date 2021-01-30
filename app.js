const app = () => {

    const sounds = document.querySelectorAll('.sound-picker button'),
        song = document.querySelector('.song'),
        play = document.querySelector('.play'),
        timeDisplay = document.querySelector('.time-display'),
        video = document.querySelector('.vid-container video');



    play.addEventListener('click', () => {
        songToggler(song);
    });
    function songToggler() {
        if (song.paused) {
            song.play();
            video.play();
            play.src = "./svg/pause.svg";
        } else {
            song.pause();
            video.pause();
            play.src = "./svg/play.svg";
        }


    }
}
app();