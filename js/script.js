const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const placar = document.querySelector('.placar');
var controle_ponto = false;
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePositionPX = window.getComputedStyle(pipe).left;
    const pipePosition = +pipePositionPX.replace('px','');
    const marioPositionPx = window.getComputedStyle(mario).bottom;
    const marioPosition = +marioPositionPx.replace('px','');
    console.log(pipePosition);
    if(pipePosition > 0){
        controle_ponto = false;
    }
   
    if(pipePosition > 0 && pipePosition <= 83 && marioPosition <= 90){
        pipe.style.animation = 'none';
        pipe.style.left = pipePositionPX;
        mario.style.animation = 'none';
        mario.style.bottom = marioPositionPx;
        mario.src = "imagens/game-over.png";
        mario.style.width = '50px';
        mario.style.marginLeft = '40px'; 
        clearInterval(loop);
    }else if(pipePosition < 0 && controle_ponto == false){
        var pontos = +placar.innerHTML;
        pontos = pontos + 1;
        placar.innerHTML = pontos;
        controle_ponto = true;
       
    }
}, 10);

document.addEventListener('keydown',jump);