function Warp(xPos, yPos, size, vX) {
    let topPipeImg = new Image()
    let botPipeImg = new Image()
    topPipeImg.src = "images/ongtren.png"
    botPipeImg.src = "images/ongduoi.png"

    let _size = size
    let _xPos = xPos
    let _yPos = yPos
    let _vX = vX
    let back = function () {
        _xPos -= _vX
    }

    setInterval(back, 1000 / 30)

    let height = 242

    this.getTopPipeImg = function () {
        return topPipeImg
    }
    this.getBotPipeImg = function () {
        return botPipeImg
    }
    this.getX = function () {
        return _xPos
    }
    this.getY = function () {
        return _yPos
    }
    this.getSize = function () {
        return _size
    }
    this.getHeight = function () {
        return height
    }
    this.getTopPipeYPosition = function () {
        return (_yPos - _size / 2) - height
    }
    this.getBotPipeYPosition = function () {
        return (_yPos + _size / 2)
    }
}