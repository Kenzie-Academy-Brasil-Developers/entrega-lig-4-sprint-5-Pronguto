const mainGame = document.querySelector('.main-game')


let map = [
    [0,0,0,0,0,0],  
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
]

let contLine = 1
const criandoTabuleiro = () => {
    
    for (let i = 0; i < map.length; i++) {
        let blocos = document.createElement('div')
        blocos.setAttribute('id', `bloco-${i + 1}`)
        blocos.classList.add('blocos')
        for (let j = 0; j < map[i].length; j++) {
            let linhas = document.createElement('div')
            if (map[i][j] === 0) {
                linhas.classList.add('linha')
                linhas.setAttribute('id', `${contLine++}`)
                blocos.appendChild(linhas)
            } if (map[i][j] === 1) {
                linhas.classList.add('linha')
                linhas.setAttribute('id', `teste`)
                blocos.appendChild(linhas)
            }
        }
        mainGame.appendChild(blocos)
    }
}
criandoTabuleiro()

let count = [1,1,1,1,1,1,1]
let contColor = 0
let controlDiscs = true

let jogadaPlayerAzul = []
let jogadaPlayerRed = []

let jogadorSelecionou

function validaDisco (select, disco, count, i){
    discSelect = select.querySelector(`div:nth-child(${count[i]})`)
    disco.setAttribute('id', `${discSelect.id}`)
    discSelect.appendChild(disco)
    count[i]++
    
    if (discSelect.firstElementChild.className === 'disco-azul'){
        jogadaPlayerAzul.push(parseInt(disco.id))
        jogadorSelecionou = jogadaPlayerAzul
         
    }else{
        jogadaPlayerRed.push(parseInt(disco.id))
        jogadorSelecionou = jogadaPlayerRed
    }

       
    if (condicaoVitoria(jogadorSelecionou)){
        alert(`jogador ${disco.className} ganhou`)        
    }

}


let contId = 1
const addDiscos = (evt) => {
    
    let discColor = ['disco-azul', 'disco-red']
    let discSelected = evt.target
    let select = discSelected.closest(`div .blocos`)
    let disco = document.createElement('div')

    if (select.id === 'bloco-1' && count[0] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 0)

    } else if (select.id === 'bloco-2' && count[1] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 1)

    } else if (select.id === 'bloco-3' && count[2] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 2)
        
    } else if (select.id === 'bloco-4' && count[3] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 3)

    } else if (select.id === 'bloco-5' && count[4] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 4)

    } else if (select.id === 'bloco-6' && count[5] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 5)

    } else if (select.id === 'bloco-7' && count[6] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 6)

    }
}

mainGame.addEventListener('click', addDiscos)

function changePlayer(disco, discColor) {
    if (controlDiscs === true) {
        jogadoresSelecionou = jogadaPlayerAzul
        disco.classList.add(`${discColor[0]}`)
        controlDiscs = false
    } else {
        jogadoresSelecionou = jogadaPlayerAzul
        disco.classList.add(`${discColor[1]}`)
        controlDiscs = true
    }
}

const condicaoVitoria = (jogadoresSelecionou) =>{
    // console.log(jogadoresSelecionou)
    for (let i = 0; i < combinacaoTabuleiro.length; i++){
        combinacao = 0
        for (let j = 0; j < combinacaoTabuleiro[i].length; j++){
            if (jogadoresSelecionou.includes(combinacaoTabuleiro[i][j])){
                combinacao++
            }else break
            if (combinacao === 4){
                return true
            }
            
        }
    }
    return false
}
