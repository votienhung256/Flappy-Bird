function ViewEngine(game) {
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext("2d")

    let hinhNen = new Image()
    let widthOfCanvas = 288
    let heightOfCanvas = 512
    let widthOfBird = 38
    let heightOfBird = 26

    hinhNen.src = "images/hinhnen.png"

    drawFrame()
    function drawFrame() {
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

            // // xoa mang
            // if (warp.getX() == 0) {
            //     warps.splice(0, 1)
            // }

            //kiem tra va cham
            if (bird.getY() + heightOfBird == heightOfCanvas){
                
            }

            //tinh diem
        }

        requestAnimationFrame(drawFrame)
    }
}