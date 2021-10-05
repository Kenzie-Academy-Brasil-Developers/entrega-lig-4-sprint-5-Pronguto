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

const addDiscos = (evt) => {
    let discSelected = evt.target
    let select = discSelected.closest('div #bloco-1')

    // console.log(discSelected)
    if (select.id === 'bloco-1'){
        disco = document.createElement('div')
        disco.classList.add('disco-azul')
        discSelect = select.firstElementChild
        console.log(discSelect)
        console.log(discSelect.className)
        if (discSelect.className === discSelect.className){
            discSelect.appendChild(disco)
        }
        
    }
}

mainGame.addEventListener('click', addDiscos)