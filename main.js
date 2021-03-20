// console.log('hello')
let board;
let btnId = null

const playerButtons = document.getElementsByClassName('simon-button');
// console.log(playerButtons[0])

function getBoardArray () {
    const board = [
    1, 2,
    3, 4,
];
// console.log(board.indexOf(1));
}

const winArrays = [
    [3],
    [3, 4],
    [3, 4, 1],
]


document.getElementById('start-button').addEventListener('click', function winSequence() {
    
    document.getElementById('btn3').classList.remove('hide')
    
    function removeNumber() {
        document.getElementById('btn3').classList.add('hide')
    };
    
    const computerTimeOut = setInterval(removeNumber, 3000)

    //call function to allow player to guess
   
    
    // console.log('start the game!')
    // for(let i = 0; i < winArrays.length; i++) {
    //     let sequence = winArrays[i]
    //     for(let num of sequence) {
    //       let elem = document.querySelector('#btn' + num)
    //       elem.classList.remove('hide')
          
    //     } 

    // }
    // btnId = setInterval(winSequence, 3000);
});

let playerGuess = []

function playerChoices() {
    for(let button of playerButtons) {
        // console.log(button)
        button.addEventListener('click', (event) => {
            const btn = event.target.firstChild.nextSibling
            btn.classList.remove('hide')
            
        })
    }

}

