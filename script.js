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
    console.log(cardsList);

    for (let i = 0; i < numCards; i++){
        let imprimeCards = document.querySelector('ul')
        imprimeCards.innerHTML = imprimeCards.innerHTML + `
        <li>
            <img src="/imgs/back.png">
            <img class="escondido" src=${cardsList[i]}>
        </li>`
    }

}

distribuiCards()