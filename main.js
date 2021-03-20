// console.log('hello')
let board;
let btnId = null

const playerButtons = document.getElementsByClassName('simon-button');

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
    
    function addNumber() {
        document.getElementById('btn3').classList.add('hide')
    };
    
    const computerTimeOut = setInterval(addNumber, 3000)
   
    
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

document.getElementById('btn3').addEventListener('click', function playerChoice() {
    console.log('hello');
    // document.getElementById('btn3').classList.remove('hide')
});


// playerButtons.getElementsById('blue-button').addEventListener('click', () => {
//     console.log('the button clicked!')
// })