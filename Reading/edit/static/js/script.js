var qustion = document.querySelector(".qustionText")
var qustionText = qustion.textContent


var coreText = qustionText.replace("“```", '<span class="hilight">').replace('```”', '</span>')
qustion.innerHTML = coreText;