'use strict';

let number = Math.trunc(Math.random()*21);
console.log(number);
let score =20;
let highScore=0;

document.querySelector('.check').addEventListener('click', function(){
    //debugger;
    let guess = document.querySelector('.guess').value;

    if(!guess){
        if (score >1){
            document.querySelector('.message').textContent = '😢 No Number!';            
            score--;
            document.querySelector('.score').textContent = score;
            return false;
        }
        else{
            document.querySelector('.message').textContent = '😭 You Lose!';
        }
    }
    if(guess>number){
        if (score >1){
            document.querySelector('.message').textContent = '👆 Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😭 You Lose!';
        }
    }
    if(guess<number){
        if (score >1){
            document.querySelector('.message').textContent = '👇 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '😭 You Lose!';
        }
    }
    if(guess==number){
        document.querySelector('.message').textContent = '🏆 You Win! 🏆';
        document.querySelector('body').style.backgroundColor='#33cc33';
        document.querySelector('.number').textContent = number;
        document.querySelector('.number').style.width = '50rem';
        if(score>highScore){
            highScore = score;
        }
        document.querySelector('.highscore').textContent = highScore;
    }
}
);


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    number = Math.trunc(Math.random()*21);
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});