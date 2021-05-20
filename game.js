function Game() {
    let bird = new Bird(50, 0)
    let warps = [
        new Warp(258,242,125,5),
        // new Warp(238,232,125,5)
        // new Warp(228,222,125,5)
    ]

    let addWarp = function () {
        warps.push(
            new Warp(258, Math.floor(Math.round() * 242) - 242, 125, 5)
        )
    }

    setInterval(addWarp, 1000)

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