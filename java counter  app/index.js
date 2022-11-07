let greetEl = document.getElementById("greetings")
let countEl = document.getElementById("count-el")
let visitEl = document.getElementById("visit-el")
let count = 0
let name = "David"
let message = "Welcome back"
let greeting = message + " " + name

greetEl.textContent = greeting
countEl.textContent = count

function add(){
    count+= 1
    countEl.textContent = count
}

function subtract(){
    count-= 1
    countEl.textContent = count
}

function save(){
    let newCount = count
    visitEl.textContent += newCount + ", "
    countEl.textContent = 0
    count = 0
}
