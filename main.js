// console.log('hello')

const board = document.getElementsByClassName('simon-button');
// console.log(board[0])
const startGame = document.getElementById('start-button');
const colorBtns = document.querySelectorAll('.allBtns');
// console.log(colorBtns[0])

let computerChoice = []
let playerGuess = []
let interval = 1000
let playerScore = 0
let playerChoices;

document.querySelector('#sequence-button').addEventListener('click',() => {
    computerTurn();
    playerGuess.length = 0
    interval = 1000
})



//Create function round Start
function computerTurn () {
        let btn = ``
        computerChoice.length = 0
        for (let i = 0; i <= 3; i++) {
            // console.log('line 19 ran')
            let randNum = Math.floor(1 + (Math.random() * 4))
            computerChoice.push(randNum)
            btn = `btn${computerChoice[i]}`
            showSequence(btn, interval)
            interval += 1250
        } 
        console.log(computerChoice)
    }
    
    function showSequence(btn, interval) {
        setTimeout(() => {
            document.getElementById(btn).classList.remove('hide')
        }, interval)
        setTimeout (() => {
            for (let i = 0; i < colorBtns.length; i++) {
                console.log('line 35 ran')
                colorBtns[i].classList.add('hide')
            }
        },interval +500)
    }
// }


let compareAnswers = () => {
        let isMatch = false
        // console.log(isMatch)
        console.log(playerGuess.length === computerChoice.length)
        let anouncement = document.querySelector('#resultText')
        if(playerGuess.length === computerChoice.length) {

        console.log(playerGuess, computerChoice)
        // console.log(playerGuess === computerChoice)
        
        for(j = 0; j < playerGuess.length; j++) {
            if (playerGuess[j] === computerChoice[j]) {
                isMatch = true
            } else {
                return anouncement.innerText = 'You lost...try again.'
            }
        
        }
        console.log(isMatch)
        if(isMatch === true ) {
                anouncement.innerText = 'You won the round! Can you beat the next?'
                // console.log('win')
                playerScore += 10;
                document.querySelector('#player-score').innerHTML = playerScore
            }
        if(isMatch === false) {
            console.log('you made it here2')
            let anouncement = document.querySelector('#resultText')
                    // console.log('lost')
                }
        }        
}

playerChoices = () => {
        for(let i = 0; i < board.length; i++) {
            // console.log('line 43 ran')
            board[i].addEventListener('click', (event) => {
                if(playerGuess.length < 4 && computerChoice.length === 4) {
                    const btn = event.target.firstChild.nextSibling
                    if(btn.classList.contains('hide')) {
                        btn.classList.remove('hide')
                    }
                    console.log(btn.innerText)
                    let btnContent = parseInt(btn.innerText)
                    playerGuess.push(btnContent)
                    showAnswers(colorBtns, interval)
                    console.log(playerGuess)
                    compareAnswers();
                    
                }
            })
            
        }
};

playerChoices();

function showAnswers(colorBtns) {
    setTimeout (() => {
        for (let i = 0; i < colorBtns.length; i++) {
            colorBtns[i].classList.add('hide')
        }
    }, 250)
}

function playerWin() {
    if(playerScore === 100)
    alert('You won!!')
}

playerWin();