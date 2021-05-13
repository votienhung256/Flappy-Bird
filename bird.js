function Bird(x, y) {
    let _x = x
    let _y = y
    this.getX = function () {
        return _x
    }
    this.getY = function () {
        return _y
    }
    this.fall = function () {
        _y += 3
    }
    this.fly = function () {
        _y -= 60
    }
}