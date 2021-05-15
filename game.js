function Game() {
    let bird = new Bird(50, 0)
    let warp = new Warp(0,50,0)

    document.addEventListener("keydown", function () {
        bird.jump()
    })
    this.getBird = function () {
        return bird
    }
    this.getWarp = function () {
        return warp
    }
}