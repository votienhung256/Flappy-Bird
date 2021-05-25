function ViewEngine(game) {
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext("2d")

    let hinhNen = new Image()
    let widthOfCanvas = 288
    let heightOfCanvas = 512
    let widthOfBird = 38
    let heightOfBird = 26
    let widthOfPipe = 52
    let heightOfPipe = 242

    hinhNen.src = "images/hinhnen.png"

    drawFrame()
    function drawFrame() {
        if(game.isOver()){
            return
        }
        //xoa canvas
        context.clearRect(0, 0, 288, 512)

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
// if (bird.getY() + heightOfBird == heightOfCanvas 
// ) {
                
// }|| bird.getX() + widthOfBird >= warp.getX() &&
//                 bird.getX() <= warp.getX() + widthOfPipe && (bird.getY() <= warp.getTopPipeYPosition() + heightOfPipe ||
//                     bird.getY() + heightOfBird >= warp.getBotPipeYPosition())