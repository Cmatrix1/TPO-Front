const trackOne = document.getElementById("audioOne");
const trackTwo = document.getElementById("audioTwo");

const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");

let boxOne = document.getElementById("itemPlayerOne");
let boxTwo = document.getElementById("itemPlayerTwo");

let siri = document.querySelector(".siri");
let siriTwo = document.querySelector(".siriTwo");
let bool = false;

// wave maker
new SiriWave({
    container: document.getElementById("siri-container"),
    width: 340,
    height: 250,
    style: "ios9",
});
new SiriWave({
    container: document.getElementById("siri-container_two"),
    width: 340,
    height: 250,
    style: "ios9",
});

const playOne = () => {
    bool = !bool;
    if (bool) {
        siri.style.display = "block";
        trackOne.play();
        btnOne.innerText = "Pause";
    } else {
        trackOne.pause();
        siri.style.display = "none";
        btnOne.innerText = "Play";
    }
};

const playTwo = () => {
    bool = !bool;
    if (bool) {
        siriTwo.style.display = "block";
        // trackOne.muted = true;
        btnTwo.innerText = "Pause";
    } else {
        // const element = document.getElementById("siri-container_two");
        // element.remove();
        siriTwo.style.display = "none";
        // trackOne.muted = false;
        trackTwo.pause();
        btnTwo.innerText = "Play";
    }
};
