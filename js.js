'use strict'

let cells = document.querySelectorAll('#field td');
let parent = document.querySelector('#field')
let container = document.querySelector('.container')


function start(cells){
    let i=0;
    for(let cell of cells){
        cell.addEventListener('click',function step(){
            this.textContent = ['X','O'][i%2]
            this.removeEventListener('click',step)

            if(isVictory(cells)){
                parent.classList.add('finish')
                let p = document.createElement('p')
                p.textContent = 'Выиграл ' + ['X','O'][i%2]
                container.appendChild(p)

                reload()

            }else if(i == 8){
                parent.classList.add('finish')
                let p = document.createElement('p')
                p.textContent = 'Ничья'
                container.appendChild(p)

                reload()
            }
            i++ 
        })
    }
    
}

function reload(){
    let btn = document.createElement('button');
    btn.textContent = 'Сыграть еще раз?'
    btn.classList.add('btnAgain')
    container.appendChild(btn)
    btn.addEventListener('click',function(){
        location.reload()
    })
}

start(cells)

function isVictory(cells){
    let combs = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let comb of combs){
        if(
            cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[2]].textContent !== ''){
                return true
            }
    }
    return false
}


