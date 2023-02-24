const sec = document.getElementById("sectionMainDiv");
const textBox = document.getElementById("titleText");
const btnNav = document.getElementById("navBtn");
const title = document.getElementById("titleTop");
let paraText = document.getElementById("paraText")
let dark = false;

const darkMode = () => {
    dark = !dark;
    if (dark) {
        alert("true")
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
        sec.style.backgroundColor = "black";
        sec.style.color = "white";
        paraText.style.color = "white"
        textBox.style.color = "white !important";
        title.style.color = "black";
    } else {
        alert("false")
        document.body.style.backgroundColor = "white";
        sec.style.backgroundColor = "white";
        sec.style.color = "black";
        textBox.style.color = "black";
        title.style.color = "white";
    }
};
