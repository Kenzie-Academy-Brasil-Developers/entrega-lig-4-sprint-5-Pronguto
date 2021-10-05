const mainGame = document.querySelector('.main-game')

let map = [
    'BBBBBB',
    'BBBBBB',
    'BBBBBB',
    'BBBBBB',
    'BBBBBB',
    'BBBBBB',
    'BBBBBB'
]

const criandoTabuleiro = () => {
    for (let i = 0; i < map.length; i++) {
        let blocos = document.createElement('div')
        blocos.setAttribute('id', `bloco-${i + 1}`)
        blocos.classList.add('blocos')
        for (let j = 0; j < map[i].length; j++) {
            let linhas = document.createElement('div')
            if (map[i][j] === 'B') {
                linhas.classList.add('linha')
                linhas.setAttribute('id', `${j + 1}`)
                blocos.appendChild(linhas)
            }
        }
        mainGame.appendChild(blocos)
    }
}
criandoTabuleiro()

let contbloco1 = 1
let contbloco2 = 1
let contbloco3 = 1
let contbloco4 = 1
let contbloco5 = 1
let contbloco6 = 1
let contbloco7 = 1
let contColor = 0
let controlDiscs = true

const addDiscos = (evt) => {
    let discColor = ['disco-azul', 'disco-red']
    let discSelected = evt.target
    let select = discSelected.closest(`div .blocos`)
    let disco = document.createElement('div')
    disco.classList.add(`${discColor[contColor]}`)

    if (select.id === 'bloco-1' && contbloco1 < 7) {
        changePlayer(disco, discColor)
        discSelect = select.querySelector(`div:nth-child(${contbloco1})`)
        discSelect.appendChild(disco)
        contbloco1++

    } else if (select.id === 'bloco-2' && contbloco2 < 7) {
        changePlayer(disco, discColor)
        discSelect = select.querySelector(`div:nth-child(${contbloco2})`)
        discSelect.appendChild(disco)
        contbloco2++
    } else if (select.id === 'bloco-3' && contbloco3 < 7) {
        changePlayer(disco, discColor)
        discSelect = select.querySelector(`div:nth-child(${contbloco3})`)
        discSelect.appendChild(disco)
        contbloco3++
    } else if (select.id === 'bloco-4' && contbloco4 < 7) {
        changePlayer(disco, discColor)
        discSelect = select.querySelector(`div:nth-child(${contbloco4})`)
        discSelect.appendChild(disco)
        contbloco4++
    } else if (select.id === 'bloco-5' && contbloco5 < 7) {
        changePlayer(disco, discColor)
        discSelect = select.querySelector(`div:nth-child(${contbloco5})`)
        discSelect.appendChild(disco)
        contbloco5++
    } else if (select.id === 'bloco-6' && contbloco6 < 7) {
        changePlayer(disco, discColor)
        discSelect = select.querySelector(`div:nth-child(${contbloco6})`)
        discSelect.appendChild(disco)
        contbloco6++
    } else if (select.id === 'bloco-7' && contbloco7 < 7) {
        changePlayer(disco, discColor)
        discSelect = select.querySelector(`div:nth-child(${contbloco7})`)
        discSelect.appendChild(disco)
        contbloco7++
    }
}

mainGame.addEventListener('click', addDiscos)

function changePlayer(disco, discColor) {
    if (controlDiscs === true) {
        disco.classList.add(`${discColor[0]}`)
        controlDiscs = false
    } else {
        disco.classList.add(`${discColor[1]}`)
        controlDiscs = true
    }
}