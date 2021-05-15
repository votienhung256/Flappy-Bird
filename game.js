function Game() {
    let bird = new Bird(50, 0)
    let warp = new Warp(0,0,70)

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