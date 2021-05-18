function ViewEngine(game) {
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext("2d")

    let hinhNen = new Image()
    let width = 288

    hinhNen.src = "images/hinhnen.png"

    drawFrame()
    function drawFrame() {
        let bird = game.getBird()
        let warp = game.getWarp()

        context.drawImage(hinhNen, 0, 0)

        context.drawImage(bird.getImage(), bird.getX(), bird.getY())

        context.drawImage(warp.getTopPipeImg(), warp.getX(), warp.getTopPipeYPosition())
        context.drawImage(warp.getBotPipeImg(), warp.getX(), warp.getTopPipeYPosition() + warp.getHeight() + warp.getSize())
        
        requestAnimationFrame(drawFrame)
    }
}