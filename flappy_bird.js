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
    context.drawImage(birdImg, bird.x, bird.y)

    
    bird.y += 3
    requestAnimationFrame(run)
}

document.addEventListener("keydown", function () {
    bird.y -= 60
})

run()
