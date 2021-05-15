function Game() {
    let bird = new Bird(50, 0)
    let pipe = new Pipe(288, 0)

    document.addEventListener("keydown", function () {
        bird.jump()
    })
    this.getBird = function () {
        return bird
    }
    this.getPipe = function () {
        return pipe
    }
}