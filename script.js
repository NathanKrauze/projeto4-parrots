let baseDados = ['/imgs/bobrossparrot.gif',
'/imgs/bobrossparrot.gif',
'/imgs/explodyparrot.gif',
'/imgs/explodyparrot.gif',
'/imgs/fiestaparrot.gif',
'/imgs/fiestaparrot.gif',
'/imgs/metalparrot.gif',
'/imgs/metalparrot.gif',
'/imgs/revertitparrot.gif',
'/imgs/revertitparrot.gif',
'/imgs/tripletsparrot.gif',
'/imgs/tripletsparrot.gif',
'/imgs/unicornparrot.gif',
'/imgs/unicornparrot.gif']

let numCards=0

function distribuiCards(){
    while (numCards < 4 || numCards > 14) {
        numCards = Number(prompt("Com quantas cartas deseja jogar?"));
        if (numCards === NaN) {
            numCards = 0;
        }
        if (numCards % 2 !== 0 || numCards < 4 || numCards > 14){
            numCards = 0
            alert('Por favor, digite números pares entre 4 e 14!')
        }
    }
    let cardsList = [];

    function comparador(){
        return Math.random() -0.5;
    }

    for(let i = 0 ; i < numCards ; i++){
        cardsList.push(baseDados[i]);
    }
    cardsList = cardsList.sort(comparador);

    for (let i = 0; i < numCards; i++){
        let imprimeCards = document.querySelector('ul')
        imprimeCards.innerHTML = imprimeCards.innerHTML + `
        <li onclick="clickCard(this)">
            <div class="front-face face">
                <img src="/imgs/back.png">
            </div>
            <div class="back-face face flipped-back">
                <img src=${cardsList[i]}>
            </div>
        </li>`
    }

}

distribuiCards()


function removeFlip (){
    play1.querySelector('.back-face').classList.remove('flip-back');
    play1.querySelector('.front-face').classList.remove('flip-front');
    play2.querySelector('.back-face').classList.remove('flip-back');
    play2.querySelector('.front-face').classList.remove('flip-front');
    play1 = undefined;
    play2 = undefined;
}
let play1;
let play2;

function verifyCards(cartaClicada){
    if (play1 == undefined){
        play1 = cartaClicada;
    }
    else{
        if(play2 == undefined){
            play2 = cartaClicada;
            if (play1.innerHTML == play2.innerHTML){
                play1.classList.add('playCorreta');
                play2.classList.add('playCorreta');
                play1 = undefined;
                play2 = undefined;
            }
            else{
                setTimeout(removeFlip, 1000);
            }
        }
    }
}

function clickCard (cartaClicada){
    if(cartaClicada.querySelector('.back-face').classList.contains('flip-back')){
        return;
    }
    else if (play1 !== undefined && play2 !== undefined){
        return;
    }
    else{
        cartaClicada.querySelector('.front-face').classList.add('flip-front');
        cartaClicada.querySelector('.back-face').classList.add('flip-back');
        verifyCards(cartaClicada);
    }
    
}