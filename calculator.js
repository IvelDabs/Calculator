let num = []
let sum = 0
const displayTest = document.getElementById('display-txt')
const numberButtons = document.querySelectorAll('.number-btn')
const ariBtn = document.querySelectorAll('.ari-btn')

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayTest.value += button.value 
    })
})

ariBtn.forEach((button) => {
    button.addEventListener('click', () => {
        displayTest.value += ' ' + button.value + ' '
    })
})

function evaluate(){
    sum = eval(displayTest.value)
    return sum
}

function equals(){
    displayTest.value = evaluate()
    num.push(displayTest.value)
    localStorage.setItem('num', JSON.stringify(num))
}

const showHistory = document.getElementById('history')
showHistory.addEventListener('click', displayHistory)

const clear = document.querySelector('.clear-btn')
clear.addEventListener('click', clearHistory)

const clearBtn = document.getElementById('btn')
clearBtn.addEventListener('click', clearDisplay)

const switchBtn = document.getElementById('switch-btn')
switchBtn.addEventListener('click', clearHistory)

const equalsBtn = document.querySelector('#equals-btn');
equalsBtn.addEventListener('click', equals);

function displayHistory(){
    clear.style.display = "block"
    let history = JSON.parse(localStorage.getItem('num'))
    let toShow = history.map(str => parseFloat(str))
    for (let i = 0; i < toShow.length; i++) {
        displayTest.value += toShow[i] + ' '
    }
    showHistory.style.display = 'none'
}

function clearHistory(){
    localStorage.clear()
    displayTest.value = ' '
    clear.style.display = "none"
    
}

function clearDisplay(){
    showHistory.style.display = 'block'
    num = []
    displayTest.value = ' '
}