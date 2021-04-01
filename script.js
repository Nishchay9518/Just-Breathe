const container = document.querySelector('.container');
const text = document.querySelector('#text');
const pointerContainer = document.querySelector('.pointer-container');
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime/5;
const btn = document.querySelector('#btn');


breatheAnimation();


function breatheAnimation(){
    text.innerText = 'Breath In !'
    pointerContainer.className = 'pointer-container rotate'
    container.className = 'container grow'

    setTimeout(()=>{
        text.innerText='Hold';

        setTimeout(() => {
            text.innerText='Breathe Out !'
            container.className='container shrink'
        },holdTime)
    },breatheTime)
}

setInterval(breatheAnimation,totalTime);
