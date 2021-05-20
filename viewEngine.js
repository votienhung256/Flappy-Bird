function ViewEngine(game) {
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext("2d")

    let hinhNen = new Image()
    let width = 288

    hinhNen.src = "images/hinhnen.png"

    drawFrame()
    function drawFrame() {
        let bird = game.getBird()
        let warps = game.getWarps()

        context.drawImage(hinhNen, 0, 0)

        context.drawImage(bird.getImage(), bird.getX(), bird.getY())

        for (let i = 0; i < warps.length; i++) {
            let warp = warps[i]
            context.drawImage(warp.getTopPipeImg(), warp.getX(), warp.getTopPipeYPosition())
            context.drawImage(warp.getBotPipeImg(), warp.getX(), warp.getBotPipeYPosition())          
        }

        requestAnimationFrame(drawFrame)
    }
}