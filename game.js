function Game() {
    let bird = new Bird(50, 0)
    let warps = [
        new Warp(258,242,125,5)
    ]

    let addWarp = function () {
        warps.push(
            new Warp(258, Math.round(Math.random() * 200) + 100, 125, 5)
        )
    }

    setInterval(addWarp, 1000/0.8)

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