function Pipe(x, y) {
    let pipeUp = new Image()
    let pipeDown = new Image()
    pipeUp.src = "images/ongtren.png"
    pipeDown.src = "images/ongduoi.png"

    let _x = x
    let _y = y
    let chieuCaoOngTren = 242
    let khoangCachHaiOng = 70

    this.pipes = []
    pipes[0] = {
        x: _x,
        y: _y
    }

    this.getX = function () {
        return _x
    }
    this.getY = function () {
        return _y
    }
    this.khoangCachDenOngDuoi = function () {
        return chieuCaoOngTren + khoangCachHaiOng
    }
    this.getImagePipeUp = function () {
        return pipeUp
    }
    this.getImagePipeDown = function () {
        return pipeDown
    }
}