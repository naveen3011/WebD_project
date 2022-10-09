let num=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

document.querySelector('#check').addEventListener('click',function(){
    const inpt=Number(document.querySelector('#block').value);
    if(!inpt)
    document.querySelector('#content').textContent='Enter a valid number';
    else if(inpt===num)
    {
        document.querySelector('#content').textContent='Correct Number!!';
        document.querySelector('body').style.backgroundColor='green';
        if(score>highscore)
        highscore=score;
        document.querySelector('#high').textContent=highscore;
    }
    else if(inpt>num)
    {
        if(score>1)
        {
            document.querySelector('#content').textContent='Too high input';
            score--;
            document.querySelector('#c').textContent=score;
        }
        else{
            document.querySelector('#content').textContent='You Lost';
            document.querySelector('#c').textContent=0;
            document.querySelector('body').style.backgroundColor='red';
        }

    }
    else 
    {
        if(score>1)
        {
            document.querySelector('#content').textContent='Too low input';
            score--;
            document.querySelector('#c').textContent=score;
        }
        else{
            document.querySelector('#content').textContent='You Lost';
            document.querySelector('#c').textContent=0;
            document.querySelector('body').style.backgroundColor='red';
        }

    }
    
})

document.querySelector('.ag').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor='black';
    num=Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('#c').textContent=score;
    document.querySelector('#content').textContent='Start Guessing...';
    document.querySelector('#block').value='';
})