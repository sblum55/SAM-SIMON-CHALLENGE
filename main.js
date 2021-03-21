// console.log('hello')
// let btnId = null
let sequence = null

const board = document.getElementsByClassName('simon-button');
// console.log(board[0])
const startGame = document.getElementById('start-button');
const clearArray = document.getElementById('clear-array');

// function getBoardArray () {
//     const board = [
//     1, 2,
//     3, 4,
// ];
// console.log(board.indexOf(1));
// }
// const winArrays = []

startGame.addEventListener('click', () => {
    // console.log('you can start')
    
})

let addNum = []

document.querySelector('#clear-array').addEventListener('click', () =>{
    addNum = []
    addNum.length = 0
    console.log(addNum)
})

document.querySelector('#start-button').addEventListener('click', () => {
    // addNum = []
    // addNum.length = 0
    for (let i = 0; i < 4; i++) {
        let randArray = Math.floor(1 + (Math.random() * 3))
        addNum.push(randArray)
        document.getElementById(`btn${addNum[i]}`).classList.remove('hide')
    }
    console.log(addNum)
})

//below here create new function to setTimeOut and callback addNum

let playerGuess = []

// function playerChoices() {
    for(let button of board) {
        // console.log(button)
        button.addEventListener('click', (event) => {
            const btn = event.target.firstChild.nextSibling
            btn.classList.remove('hide')
             let addPlayersClick = playerGuess.push(button)
        })
    }

// }

//starting round
    // startGame.addEventListener('click', () => {
    //     elem.classList.remove('hide')
    // })
    // function removeNumber() {
    //     elem.classList.add('hide')
    // };
    // const computerTimeOut = setInterval(removeNumber, 3000)
    

//     //call function to allow player to guess



