function Game() {
    let bird = new Bird(50, 0)
    let warps = [
        new Warp(258,242,125,5),
        // new Warp(238,232,125,5)
        // new Warp(228,222,125,5)
    ]

    document.addEventListener("keydown", function () {
        bird.jump()
    })
    this.getBird = function () {
        return bird
    }
    this.getWarps = function () {
        return warps
    }
}