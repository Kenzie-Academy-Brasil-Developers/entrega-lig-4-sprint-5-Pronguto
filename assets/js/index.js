const mainGame = document.querySelector('.main-game')

let map = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
]

const criandoTabuleiro = () => {
    for (let i = 0; i < map.length; i++) {
        let blocos = document.createElement('div')
        blocos.setAttribute('id', `bloco-${i + 1}`)
        blocos.classList.add('blocos')
        for (let j = 0; j < map[i].length; j++) {
            let linhas = document.createElement('div')
            if (map[i][j] === 0) {
                linhas.classList.add('linha')
                linhas.setAttribute('id', `${j + 1}`)
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

function validaDisco (select, disco, count, i){
    discSelect = select.querySelector(`div:nth-child(${count[i]})`)
    discSelect.appendChild(disco)
    count[i]++
}

const addDiscos = (evt) => {
    let discColor = ['disco-azul', 'disco-red']
    let discSelected = evt.target
    let select = discSelected.closest(`div .blocos`)
    let disco = document.createElement('div')
    disco.classList.add(`${discColor[contColor]}`)

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
        disco.classList.add(`${discColor[0]}`)
        controlDiscs = false
    } else {
        disco.classList.add(`${discColor[1]}`)
        controlDiscs = true
    }
}