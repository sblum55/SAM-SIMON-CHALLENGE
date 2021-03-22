// console.log('hello')

const board = document.getElementsByClassName('simon-button');
// console.log(board[0])
const startGame = document.getElementById('start-button');
const clearArray = document.getElementById('clear-array');
const colorBtns = document.querySelectorAll('.allBtns');
// console.log(colorBtns[0])

let computerChoice = []
let playerGuess = []
let interval = 0
let playerScore = 0


document.querySelector('#sequence-button').addEventListener('click', () => {
    let btn = ``
    computerChoice.length = 0
    for (let i = 0; i <= 3; i++) {
        let randNum = Math.floor(1 + (Math.random() * 4))
        computerChoice.push(randNum)
        btn = `btn${computerChoice[i]}`
        showSequence(btn, interval)
        interval += 750
    } 
    console.log(computerChoice)
})

function showSequence(btn, interval) {
    // Below grabs the btn variable and sets it to remove 'hide' class every second
    setTimeout(() => {
        document.getElementById(btn).classList.remove('hide')
    }, interval)
    // Below follows the loop grabbing the colorBtns variable and adds the hide to the button every .5 second
    setTimeout (() => {
        for (let i = 0; i < colorBtns.length; i++) {
            colorBtns[i].classList.add('hide')
        }
    },interval +500)
}

// Need to be able to clear array after computer plays and before player goes
// document.querySelector('#clear-array').addEventListener('click', () =>{
    computerChoice = []
    playerGuess = []
// })

// playerChoices = () => {
        for(let button of board) {
            // console.log(button)
            button.addEventListener('click', (event) => {
                if(playerGuess.length <= 4 && computerChoice.length === 4) {
                    const btn = event.target.firstChild.nextSibling
                    if(btn.classList.contains('hide')) {
                        btn.classList.remove('hide')
                    }
                    console.log(btn.innerText)
                    playerGuess.push(btn.innerHTML)
                    showAnswers(colorBtns, interval)
                    
                } else {
                    console.log(`It's not time to guess`)
                }
                
            })
        }
        console.log(playerGuess)
        gamePlay()
// }

function showAnswers(colorBtns) {
    setTimeout (() => {
        for (let i = 0; i < colorBtns.length; i++) {
            colorBtns[i].classList.add('hide')
        }
    }, 250)
}

function gamePlay() {
    if(playerGuess == computerChoice) {
        // return('You won the round! Can you beat the next?');
        let anouncement = document.querySelector('#resultText')
        anouncement.innerText = 'You won the round! Can you beat the next?'
        playerScore++;
    }else {
        // return('You lost...game starts over');
        let anouncement = document.querySelector('#resultText')
        anouncement.innerText = 'You lost...game over.'
    }
}

