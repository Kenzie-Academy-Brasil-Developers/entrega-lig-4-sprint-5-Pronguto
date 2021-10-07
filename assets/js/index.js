const mainGame = document.querySelector('.main-game')

let map = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

let contLine = 1
const criandoTabuleiro = () => {

    for (let i = 0; i < map[0].length; i++) {
        let coluna = document.createElement('div')
        coluna.classList.add('coluna')
        coluna.setAttribute('id', `${i + 1}`)
        for (let j = 0; j < map.length; j++) {
            let linhas = document.createElement('div')
            linhas.classList.add('linha')
            linhas.setAttribute('id', `${contLine++}`)
            coluna.appendChild(linhas)
        }
        mainGame.appendChild(coluna)
    }
}
criandoTabuleiro()

let count = [1, 1, 1, 1, 1, 1, 1]
let contColor = 0
let controlDiscs = true

let jogadaPlayerAzul = []
let jogadaPlayerRed = []

let jogadorSelecionou

const validaDisco = (select, disco, count, i) => {
    discSelect = select.querySelector(`div:nth-child(${count[i]})`)
    disco.setAttribute('id', `${discSelect.id}`)
    discSelect.appendChild(disco)
    count[i]++
    if (discSelect.firstElementChild.className === 'disco-azul') {
        jogadaPlayerAzul.push(parseInt(disco.id))
        jogadorSelecionou = jogadaPlayerAzul
    } else {
        jogadaPlayerRed.push(parseInt(disco.id))
        jogadorSelecionou = jogadaPlayerRed
    }
    if (condicaoVitoria(jogadorSelecionou)) {
        
        setTimeout(()=>{
            document.location.reload()
        }, 3000)
    }
}

let contId = 1

const addDiscos = (evt) => {
    let discColor = ['disco-azul', 'disco-red']
    let discSelected = evt.target
    let select = discSelected.closest(`div .coluna`)
    let disco = document.createElement('div')
    if (select.id === '1' && count[0] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 0)
    } else if (select.id === '2' && count[1] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 1)
    } else if (select.id === '3' && count[2] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 2)
    } else if (select.id === '4' && count[3] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 3)
    } else if (select.id === '5' && count[4] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 4)
    } else if (select.id === '6' && count[5] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 5)
    } else if (select.id === '7' && count[6] < 7) {
        changePlayer(disco, discColor)
        validaDisco(select, disco, count, 6)
    }
}

mainGame.addEventListener('click', addDiscos)

const changePlayer = (disco, discColor) => {
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

const condicaoVitoria = (jogadoresSelecionou) => {
    for (let i = 0; i < combinacaoTabuleiro.length; i++) {
        combinacao = 0
        for (let j = 0; j < combinacaoTabuleiro[i].length; j++) {
            if (jogadoresSelecionou.includes(combinacaoTabuleiro[i][j])) {
                combinacao++
            } else break
            if (combinacao === 4) {
                return true
            }
        }
    }
    return false
}