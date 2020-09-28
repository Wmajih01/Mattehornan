const button3 = document.getElementById("button2")
let repeat = false

button3.onclick = startquiz

let num3 = Math.floor(Math.random() * 10)
let num4 = Math.floor(Math.random() * 10)

function startquiz(){
    repeat = true
}

while (repeat === true) {
    askQuestion()
}

function askQuestion() {
    const x2 = num3 + num4
    const y2 = prompt("Vad är " + num3 + " + " + num4 + " ?")
        if (y2 == x2) {
            alert("Ja det är rätt")
            num3 = Math.floor(Math.random() * 10)
            num4 = Math.floor(Math.random() * 10)
        }
        else if (y2 == null){
            repeat = false
            alert("GAME OVER")
        }
        else {
            alert("Fel svaret är " + x2)
            num3 = Math.floor(Math.random() * 10)
            num4 = Math.floor(Math.random() * 10)
        }
}