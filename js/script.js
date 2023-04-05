const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const clouds2 = document.querySelector('.clouds2')
const clouds3 = document.querySelector('.clouds3')
const gameOver = document.querySelector('.game-over-gif')
const deathSong = document.getElementById('deathSong')
const soundTrack = document.getElementById('soundTrack')

soundTrack.play()


setTimeout(() => {
    mario.src ='../images/mario.gif'
    pipe.classList.add('pipeAnimation')
    clouds.classList.add('cloudsAnimation')
    clouds2.classList.add('cloudsAnimation2')
    clouds3.classList.add('cloudsAnimation3')
}, 2300)

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

        mario.style.bottom = `${marioPositon}px`

        mario.src ='../images/game-over.png'
        mario.style.width = '90px'
        mario.style.height = '130px'
        mario.style.marginLeft = '38px'
        mario.style.bottom = '-180px'

        clouds.style.animation = 'none'
        clouds.style.right = `${cloudsPositon}px`

        clouds2.style.animation = 'none'
        clouds2.style.right = `${clouds2Positon}px`
        
        clouds3.style.animation = 'none'
        clouds3.style.right = `${clouds3Positon}px`

        mario.classList.add('death')

        soundTrack.pause()
        deathSong.play()

        gameOver.style.display = 'flex'

        clearInterval(loop)

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