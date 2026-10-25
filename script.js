const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(
            "sounds/" + button.id + ".mp3"
        );

        currentAudio.play().catch(function (error) {
            console.error("Audio playback failed:", error);
        });
    });
});

stopButton.addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
});
const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

let currentAudio = null;

sounds.forEach(function (sound) {
    const button = document.getElementById(sound);

    button.addEventListener("click", function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(
            `sounds/${sound}.mp3`
        );

        currentAudio.play().catch(function (error) {
            console.error("Unable to play sound:", error);
        });
    });
});

document.getElementById("stop").addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
});