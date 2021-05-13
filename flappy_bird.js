let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")

let birdImg = new Image()
let hinhNen = new Image()
let width = 450

birdImg.src = "images/bird.png"
hinhNen.src = "images/hinhnen.png"

let bird = new Bird(0,0)

function run() {
    context.drawImage(hinhNen, 0, 0)
    context.drawImage(birdImg, bird.getX(), bird.getY())

    
    bird.fall()
    requestAnimationFrame(run)
}

document.addEventListener("keydown", function () {
    bird.fly()
})

run()
