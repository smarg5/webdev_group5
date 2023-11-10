function playThenRedirectTov2(animalSound, targetURL, waitTime) {
    // HTML <audio> element is an object holding mp3 in its src
    var audio = document.getElementById(animalSound);
    audio.play();

    var time = 0;
    // anonymous function, setInterval takes 2 args: funtion to run, 
    // and a delay to wait before running it AGAIN(100)
    setInterval(function () {
        // from https://www.sitepoint.com/community/t/play-sound-on-hyperlink/42235/2
        // and https://stackoverflow.com/questions/64566873/how-to-check-a-user-watched-the-full-video-in-html5-video-player-without-skippin
        var end = document.getElementById(animalSound).played.end(0);
        // if true, we hit waitTime and run function again
        if (end > time) {
            time = end;
        } 
        else {
            location.href = targetURL;
        }
    }, waitTime);
}
