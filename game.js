function Game() {
    let bird = new Bird(50, 0)
    let warps = [
        new Warp(258, 242, 125, 5)
    ]
    let isOver = false

    let addWarp = function () {
        warps.push(
            new Warp(258, Math.round(Math.random() * 200) + 100, 125, 5)
        )
    }
    let checkImpact = function () {
        for (let i = 0; i < warps.length; i++) {
            let warp = warps[i]
            if (bird.getX() >= warp.getX()) {
                isOver = true
            }
        }
    }

    setInterval(addWarp, 1000 / 0.8)

    setInterval(checkImpact, 1000 / 30)

    document.addEventListener("keydown", function () {
        bird.jump()
    })
    this.getBird = function () {
        return bird
    }
    this.getWarps = function () {
        return warps
    }
    this.isOver = function(){
        return isOver
    }
}