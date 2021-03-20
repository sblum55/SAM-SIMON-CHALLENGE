// console.log('hello')
// let btnId = null

const board = document.getElementsByClassName('simon-button');
// console.log(board[0])
const startGame = document.getElementById('start-button');

// function getBoardArray () {
//     const board = [
//     1, 2,
//     3, 4,
// ];
// console.log(board.indexOf(1));
// }

const winArrays = []
while (winArrays.length < 4) {
    let randomArray = Math.random() * (board.length-1);
    if(winArrays.indexOf(randomArray) === -1)
    winArrays.push(randomArray);

}
// sequence = board[Math.floor(Math.random() * board.length)]
console.log(winArrays)

// function shuffleBoard(array) {
//     for (let btnId of board) {
//         let btnArray = Math.floor(Math.random() * (btnId +1));
//         let newArray = array[btnId]
//         array[btnId] = array[btnArray]
//         array[btnArray] = newArray;
//     }
// }
// console.log(shuffleBoard[3])



// for(let btnId of winArrays) {
//     let elem = document.querySelector('#btn' + btnId)
//     elem.classList.remove('hide')
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
   
    
//     // console.log('start the game!')
//     // for(let i = 0; i < winArrays.length; i++) {
//     //     let sequence = winArrays[i]
//     //     for(let num of sequence) {
//     //       let elem = document.querySelector('#btn' + num)
//     //       elem.classList.remove('hide')
          
//     //     } 

//     // }
//     // btnId = setInterval(winSequence, 3000);
// });

let playerGuess = []

function playerChoices() {
    for(let button of board) {
        // console.log(button)
        button.addEventListener('click', (event) => {
            const btn = event.target.firstChild.nextSibling
            btn.classList.remove('hide')
             let addPlayersClick = playerGuess.push(button)
             
            
        })
    }

}

