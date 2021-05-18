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

        // for (let i = 0; i < game.getPipe().pipes.length; i++) {
        //     context.drawImage(game.getPipe().getImagePipeUp(), game.getPipe().pipes[i].x, game.getPipe().pipes[i].y)
        //     context.drawImage(game.getPipe().getImagePipeUp(), game.getPipe().pipes[i].x, game.getPipe().pipes[i].y + game.getPipe().khoangCachDenOngduoi())

        //     game.getPipe().pipes[i].x -= 5

        //     if (game.getPipe().pipes[i].x == 144) {
        //         game.getPipe().pipes.push({
        //             x: 288,
        //             y: Math.floor(Math.random() * 242) - 242
        //         })
        //     }
        //     if (game.getPipe().pipes[i].x == 0) {
        //         game.getPipe().pipes.splice(0, 1)
        //     }
        // }

        //ve pipe 
        context.drawImage(warp.getTopPipeImg(), warp.getX(), warp.getTopPipeYPosition())
        context.drawImage(warp.getBotPipeImg(), warp.getX(), warp.getTopPipeYPosition() + warp.getHeight() + warp.getSize())
        
        // ve pipe co chieu cao tuy y
        // ve pipe co toa do tuy y
        // ong lien tuc chay lui
        requestAnimationFrame(drawFrame)
    }
}