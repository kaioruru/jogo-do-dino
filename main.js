const el_dino = document.querySelector('.el_dino');
const backgraund = document.querySelector('.backgraund')
let tapulando = false;
let posicao = 0;
function teclao(event){
    if (event.keyCode === 32){
        if(!tapulando){
            pulo()
        }
    }
}

function pulo(){
    tapulando = true;
    let subidinha = setInterval(() => {
        if(posicao >=150){
            clearInterval(subidinha)
            let desidinha = setInterval(() => {
                if (posicao <= 0){
                    clearInterval(desidinha)
                    tapulando = false;
                }else{
                    posicao -= 20
                    el_dino.style.bottom = `${posicao}px`;
                }
            }, 20);
        }else{
            posicao += 20;
            el_dino.style.bottom = `${posicao}px`;
        }      
    }, 20);
}
document.addEventListener('keydown',teclao)

function criarCaquitos(){
    const caquitos = document.createElement('div');
    let possicao_do_caquitus = 1199
    let caquito_aleatorio = Math.random() * 6000 ;
    caquitos.classList.add('caquitus')
    caquitos.style.left = `${possicao_do_caquitus}px`
    backgraund.appendChild(caquitos)
    let irpraesquerda = setInterval(() => {
        if(possicao_do_caquitus< -60){
            clearInterval(irpraesquerda);
            backgraund.removeChild(caquitos);
        }else if (possicao_do_caquitus > 0 && possicao_do_caquitus < 60  && posicao < 60){  
            clearInterval(irpraesquerda)
            document.body.innerHTML =   '<h1 class="perdeu"> fim de jogo</h1>';
        }else{
            possicao_do_caquitus -= 10;
            caquitos.style.left = possicao_do_caquitus +'px';
        }
    }, 20);
     
    setTimeout(criarCaquitos , caquito_aleatorio)
}
criarCaquitos()