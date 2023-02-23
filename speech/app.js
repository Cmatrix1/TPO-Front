const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();

const isListen = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 5;

const elShowText = document.getElementById("showText");
const isListenText = document.getElementById("isListen");
let result = null;

const start = () => {
    recognition.start();
    isListenText.innerText = "Is Listen";

    recognition.onresult = function (event) {
        console.log("You said: ", event.results[0][0].transcript);
        elShowText.innerText = event.results[0][0].transcript;
        result = event.results[0][0].transcript;
        console.log(result);
    };
};

const stop = () => {
    isListenText.innerText = "Click start to listen your voice";
    Swal.fire({
        title: "Are you sure?",
        text: `You said '${result}' ok ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, send it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                "OK",
                " I sent it",
                "success"
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                "Cancelled",
                "You can try again :)",
                "error"
            );
        }
    });
};
