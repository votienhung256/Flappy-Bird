let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")

let birdImg = new Image()
let hinhNen = new Image()

birdImg.src = "images/bird.png"
hinhNen.src = "images/hinhnen.png"

let bird = {
    x: hinhNen.width / 5,
    y: hinhNen.width / 2
}


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
