function ViewEngine() {
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext("2d")
    let birdImg = new Image()
    let hinhNen = new Image()
    let width = 288

    birdImg.src = "images/bird.png"
    hinhNen.src = "images/hinhnen.png"
    drawFrame()
    function drawFrame() {
        context.drawImage(hinhNen, 0, 0)
        context.drawImage(birdImg, bird.getX(), bird.getY())
        requestAnimationFrame(drawFrame)
    }
}