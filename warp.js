function Warp(xPos, yPos, size) {
    let topPipeImg = new Image()
    let botPipe = new Image()
    topPipeImg.src = "images/ongtren.png"
    botPipe.src = "images/ongduoi.png"

    let _size = size
    let _xPos = xPos
    let _yPos = yPos

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
    this.getTopPipeYPosition = function () {
        return (_yPos - _size / 2) - height
    }
    this.getBotPipeYPosition = function () {
        return (_yPos + _size / 2)
    }
}