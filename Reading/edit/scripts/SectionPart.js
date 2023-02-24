let text = document.getElementById("mainText");
let dark = false;

const darkMode = () => {
    dark = !dark;
    if (dark) {
        document.body.style.backgroundColor = "black";
        text.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        text.style.color = "black";
    }
};
