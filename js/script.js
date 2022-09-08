let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let secondPlayer

// contador de jogadas
let player1 = 0
let player2 = 0

// adicionando o evento de click aos boxes
for(let i=0; i<boxes.length; i++) {
    // quando o usuario clica na box
    boxes[i].addEventListener('click', function() {

    let el = checkEl(player1, player2) 

    if (this.childNodes.length == 0) {
        let cloneEl = el.cloneNode(true)

        this.appendChild(cloneEl)

        // validar jogada
        if (player1 == player2) {
            player1++

            if (secondPlayer == 'ai-player') {
                // realiza jogada
                computerPlay()
                player2++             
            }
        } else {
            player2++  
        }
        
        // verificando quem venceu
        checkWinCondition()

        }
    })
}

// multiplayer ou contra máquina
for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        secondPlayer = this.getAttribute('id')

        for(let t=0; t<buttons.length; t++) {
            buttons[t].style.display = 'none'
        }

        setTimeout(() => {
            let container = document.querySelector('#container')
            container.classList.remove('hide')
        }, 500);
    })
}

//verifica quem vai jogar
function checkEl(player1, player2) {
        if (player1 == player2) {
            // x
            el = x
        } else {
            // o 
            el = o
        }
    return el
}

// verificar quem ganhou
function checkWinCondition() {
    let b1 = document.querySelector('#block-1')
    let b2 = document.querySelector('#block-2')
    let b3 = document.querySelector('#block-3')
    let b4 = document.querySelector('#block-4')
    let b5 = document.querySelector('#block-5')
    let b6 = document.querySelector('#block-6')
    let b7 = document.querySelector('#block-7')
    let b8 = document.querySelector('#block-8')
    let b9 = document.querySelector('#block-9')

    // verificando horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0)  {
        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x
            declareWinner('x')
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //o
            declareWinner('o')
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0)  {
        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x
            declareWinner('x')
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //o
            declareWinner('o')
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0)  {
        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x
            declareWinner('x')
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //o
            declareWinner('o')
        }
    }

     // verificando vertical
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0)  {
        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //x
            declareWinner('x')
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //o
            declareWinner('o')
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0)  {
        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x
            declareWinner('x')
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //o
            declareWinner('o')
        }
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0)  {
        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x
            declareWinner('x')
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //o
            declareWinner('o')
        }
    }

    // verificando diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0)  {
        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //x
            declareWinner('x')
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //o
            declareWinner('o')
        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0)  {
        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x
            declareWinner('x')
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //o
            declareWinner('o')
        }
    }

    // velha

    let counter = 0

    for(let i=0; i<boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++
        }
    }

    if (counter == 9) {
        // velha
        declareWinner('Deu velha')
    }

}

// limpar o jogo, mostrar o vencedor e atualizar o placar
function declareWinner(winner) {
    let scoreboardX = document.querySelector('#scoreboard-1')
    let scoreboardY = document.querySelector('#scoreboard-2')
    let msg = ''

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
        msg = 'O jogador 1 venceu a rodada!'
    } else if (winner == 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1
        msg = 'O jogador 2 venceu a rodada!'
    } else {
        msg = 'Deu veeelha!'
    }

    // mostrar msg de vitória
    messageText.innerHTML = msg
    messageContainer.classList.remove('hide')

    // time da msg
    setTimeout(() => {
        messageContainer.classList.add('hide')
    }, 1500);

    // zera numero de jogadas
    player1 = 0
    player2 = 0

    // remove x e o
    let boxesToRemove = document.querySelectorAll('.box div')

    for(let i=0; i<boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }
}

// lógica da jogada da máquina
function computerPlay() {
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0

    // preencher os campos somente ser estiverem vazios
    for(let i=0; i<boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5)

        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO)
                counter++
                break;
            } else {
                // checar quantas estão preenchidas
                filled++
            }
        }
    }

    if (counter == 0 && filled < 9) {
        computerPlay()
    }
}