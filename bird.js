function Bird(x, y) {
    let _x = x
    let _y = y
    let fall = function () {
        _y += 3
    }

    setInterval(fall, 1000 / 30)

    this.getX = function () {
        return _x
    }

    this.getY = function () {
        return _y
    }

    this.fly = function () {
        _y -= 60
    }
}