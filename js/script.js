const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const clouds2 = document.querySelector('.clouds2')
const clouds3 = document.querySelector('.clouds3')
const gameOver = document.querySelector('.game-over-gif')


const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500)

}

const loop = setInterval(() => {

    const pipePositon = pipe.offsetLeft
    const marioPositon = window.getComputedStyle(mario).bottom.replace('px','')
    const cloudsPositon = window.getComputedStyle(clouds).right.replace('px','')
    const clouds2Positon = window.getComputedStyle(clouds2).right.replace('px','')
    const clouds3Positon = window.getComputedStyle(clouds3).right.replace('px','')

    if (pipePositon <= 120 && pipePositon > 0 && marioPositon < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePositon}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPositon}px`

        mario.src = '../images/game-over.png'
        mario.style.width = '90px'
        mario.style.height = '130px'
        mario.style.marginLeft = '38px'

        clouds.style.animation = 'none'
        clouds.style.right = `${cloudsPositon}px`

        clouds2.style.animation = 'none'
        clouds2.style.right = `${clouds2Positon}px`
        
        clouds3.style.animation = 'none'
        clouds3.style.right = `${clouds3Positon}px`

        gameOver.style.display = 'block'

        clearInterval(loop)

        const reload = setInterval(() => {
            //window.location.reload()
        }, 2500)

    }

}, 10)

document.addEventListener('keydown', function(e) {
    if(e.key === ' ') {
        jump()
    }
})

document.addEventListener('keydown', function(e) {
    if(e.key === 'r') {
        window.location.reload()
    }
})