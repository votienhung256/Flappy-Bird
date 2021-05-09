let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")

let game = new Game()
let bird = new Bird()
let pipe = new Pipe()

bird.src = "images/bird.png"

function Game() {
    this.game = new Bird()
    this.pipes = []
    this.score = 0

}

function Bird() {
    this.x = 10
    this.y = 150
    this.gravity = 1.5

}