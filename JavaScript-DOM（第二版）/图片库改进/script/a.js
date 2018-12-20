
function showpic(whichpic){var sourse=whichpic.getAttribute("href")
var placeholder=document.getElementById("placeholder")
placeholder.setAttribute("src",sourse)}
function countBodyChildren(){var bodyChildren=document.getElementsByTagName("body")[0]
console.log(bodyChildren.length)}
window.onload=countBodyChildren()