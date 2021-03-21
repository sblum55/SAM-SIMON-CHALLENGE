// console.log('hello')

const board = document.getElementsByClassName('simon-button');
// console.log(board[0])
const startGame = document.getElementById('start-button');
const clearArray = document.getElementById('clear-array');
const colorBtns = document.querySelectorAll('.allBtns');
// console.log(colorBtns[0])

let computerChoice = []
let interval = 0

// Need to have start-button trigger the loop
document.querySelector('#sequence-button').addEventListener('click', () => {
    let btn = ``  
    for (let i = 0; i <= 3; i++) {
        let randNum = Math.floor(1 + (Math.random() * 4))
        computerChoice.push(randNum)
        btn = `btn${computerChoice[i]}`
        showSequence(btn, interval)
        interval += 1000
    } 
    console.log(computerChoice)
})

function showSequence(btn, interval) {
    setTimeout(() => {
        document.getElementById(btn).classList.remove('hide')
    }, interval)
    setTimeout (() => {
        for (let i = 0; i < colorBtns.length; i++) {
            colorBtns[i].classList.add('hide')
        }
    },interval +500)
}

let addNum = []

// Need to be able to clear array after computer plays and before player goes
document.querySelector('#clear-array').addEventListener('click', () =>{
    computerChoice = []
    playerGuess = []
    // console.log(addNum)
})

// console.log(addNum)

// Need to have player choices callback to computer choice and compare
let playerGuess = []

// function playerChoices() {
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
                } else {
                    console.log(`It's not time to guess`)
                }
                
            })
        }
        console.log(playerGuess)
    // gamePlay()
// }

function gamePlay() {
    if(playerGuess == computerChoice) {
        return('You won the round! Can you beat the next?');
    }else {
        return('You lost...game starts over');
    }
}

//below here create new function to setTimeOut and callback addNum

// const firstTrigger = setInterval(document.getElementById(`btn${addNum[0]}`), 4000)
// const secondTrigger = setInterval(document.getElementById(`btn${addNum[1]}`), 3000)
// const thirdTrigger = setInterval(document.getElementById(`btn${addNum[2]}`), 2000)
// const fourthTrigger = setInterval(document.getElementById(`btn${addNum[3]}`), 1000)

