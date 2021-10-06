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
    for (let i = 0; i < map.length; i++){
        let blocos = document.createElement('div')
        blocos.setAttribute('id', `bloco-${i+1}`)
        blocos.classList.add('blocos')
        for (let j = 0; j < map[i].length; j++){
            let linhas = document.createElement('div')
            if (map[i][j] === 'B'){
                linhas.classList.add('linha')
                linhas.setAttribute('id', `${j+1}`)
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
    let discColor = ['disco-azul','disco-red']
    let discSelected = evt.target
    let select = discSelected.closest(`div .blocos`)    
    let discoAzul = document.createElement('div')
    discoAzul.classList.add(`${discColor[contColor]}`)
    

    if(controlDiscs === true){
        discoAzul.classList.add(`${discColor[0]}`)
        controlDiscs = false
    }else{
        discoAzul.classList.add(`${discColor[1]}`)
        controlDiscs = true
    }

    if (select.id === 'bloco-1'){  
        discSelect = select.querySelector(`div:nth-child(${contbloco1})`)
        discSelect.appendChild(discoAzul)
        contbloco1++

    }else if (select.id === 'bloco-2'){
        discSelect = select.querySelector(`div:nth-child(${contbloco2})`)
        discSelect.appendChild(discoAzul)
        contbloco2++  
    }
    if (select.id === 'bloco-3'){
        discSelect = select.querySelector(`div:nth-child(${contbloco3})`)
        discSelect.appendChild(discoAzul)
        contbloco3++  
    }
    if (select.id === 'bloco-4'){
        discSelect = select.querySelector(`div:nth-child(${contbloco4})`)
        discSelect.appendChild(discoAzul)
        contbloco4++  
    }
    if (select.id === 'bloco-5'){
        discSelect = select.querySelector(`div:nth-child(${contbloco5})`)
        discSelect.appendChild(discoAzul)
        contbloco5++  
    }
    if (select.id === 'bloco-6'){
        discSelect = select.querySelector(`div:nth-child(${contbloco6})`)
        discSelect.appendChild(discoAzul)
        contbloco6++  
    }
    if (select.id === 'bloco-7'){
        discSelect = select.querySelector(`div:nth-child(${contbloco7})`)
        discSelect.appendChild(discoAzul)
        contbloco7++  
    }
}

mainGame.addEventListener('click', addDiscos)