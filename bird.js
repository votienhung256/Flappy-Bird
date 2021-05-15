function Bird(x, y) {
    let birdImg = new Image()
    birdImg.src = "images/bird.png"
    
    let _x = x
    let _y = y
    let _vY = 3
    let fall = function () {
        _y += _vY
        _vY++
    }

    setInterval(fall, 1000 / 30)

    this.getX = function () {
        return _x
    }

    this.getY = function () {
        return _y
    }

    this.jump = function () {
        _vY = -15
    }
    this.getImage=function(){
        return birdImg
    }
}