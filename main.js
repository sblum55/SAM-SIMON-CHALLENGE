// console.log('hello')
let board;
let btnId = null


document.getElementById('start-button').addEventListener('click', () => {
    // console.log('start the game!')
});


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

function winSequence (){
    for(let i = 0; i < winArrays.length; i++) {
        let sequence = winArrays[i]
        for(let num of sequence) {
          let elem = document.querySelector('#btn' + num)
          elem.classList.remove('hide')  
        }
        
    }

}

btnId = setInterval(winSequence, 1000)


