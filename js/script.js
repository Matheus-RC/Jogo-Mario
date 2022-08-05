const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const placar = document.querySelector('.placar');
const game_over = document.querySelector('.game-over');
const game_board = document.querySelector('.game-board');
const placar_final = document.querySelector('.placar-final');
var controle_ponto = false;
var flag_reload = true;

const jump = () => {
    if(flag_reload == true){
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }
    , 500);
    }
}

function start_loop(){
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
            pipe.classList.remove('animation-pipe');
            pipe.style.left = pipePositionPX;
            mario.style.bottom = marioPositionPx;
            mario.src = "imagens/game-over.png";
            mario.style.width = '50px';
            mario.style.marginLeft = '40px'; 
            game_over.style.display = "inherit";
            game_board.style.opacity = '60%';
            placar_final.innerHTML = placar.innerHTML;
            flag_reload = false;
            clearInterval(loop);
            
        }else if(pipePosition < 0 && controle_ponto == false){
            var pontos = +placar.innerHTML;
            pontos = pontos + 1;
            placar.innerHTML = pontos;
            controle_ponto = true;
        
        }
    }, 5);
}
start_loop();

document.addEventListener('keydown',jump);

function reload(){
    flag_reload = true;
    mario.src = "imagens/mario.gif";
    mario.style.bottom = "";
    mario.style.width = '';
    game_board.style.opacity = '100%';
    pipe.style.left = "";
    pipe.classList.add('animation-pipe');
    game_over.style.display = "none";
    placar.innerHTML = 0;
    controle_ponto = false;
    start_loop();
    
}