const button2 = document.getElementById("button1")

button2.onclick = startquiz

let num1 = Math.floor(Math.random() * 10)
let num2 = Math.floor(Math.random() * 10)

function startquiz() {
    const x = num1 + num2
    const y = prompt("Vad är " + num1 + " + " + num2 + " ?")
    if (y == x) {
        alert("Ja det är rätt")
        num1 = Math.floor(Math.random() * 10)
        num2 = Math.floor(Math.random() * 10)
    }
    else if (y == null){
        alert("GAME OVER")
    }
    else {
        alert("Fel svaret är " + x)
        num1 = Math.floor(Math.random() * 10)
        num2 = Math.floor(Math.random() * 10)
    }
}