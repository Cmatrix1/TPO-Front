let questionBox = document.getElementById("question");
let textBox = document.getElementById("mainText");
let dark = false;

const darkMode = () => {
    dark = !dark;
    if (dark) {
        document.body.style.backgroundColor = "black";
        questionBox.style.color = "white";
        textBox.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        questionBox.style.color = "black";
        textBox.style.color = "black";
    }
};
