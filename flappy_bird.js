let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")
let scoreShow = document.getElementById("score")

let birdImg = new Image()
let hinhNen = new Image()
let ongTren = new Image()
let ongDuoi = new Image()

birdImg.src = "images/bird.png"
hinhNen.src = "images/hinhnen.png"
ongTren.src = "images/ongtren.png"
ongDuoi.src = "images/ongduoi.png"

let sore = 0
let khoangCachHaiOng = 140
let khongCachDenOngDuoi

let bird = {
    x: hinhNen.width / 5,
    y: hinhNen.width / 2
}

let ong = []
ong[0] = {
    x: canvas.width,
    y: 0
}

function run() {
    context.drawImage(hinhNen, 0, 0)
    context.drawImage(birdImg, bird.x, bird.y)

    for (let i = 0; i < ongDuoi.lenngth; i++) {
        khoangCachDenOngDuoi = ongTren.height + khoangCachHaiOng
        context.drawImage(ongTren, ong[i].x, ong[i].y)
        context.drawImage(ongDuoi, ong[i].x, ong[i].y + khoangCachHaiOng)
        ong[i].x -= 5

        if (ong[i].x == canvas.width / 2) {
            ong.push({
                x: canvas.width,
                y: Math.florr(Math.random() * ongTren.height) - ongTren.height
            })
        }
        if (ong[i].x == bird.x) {
            score++
        }
        if (ong[i].x == 0) {
            ong.splice(0, 1)
        }
        // if (bird.y + birdImg.height == canvas.height ||
        //     bird.x + birdImg.width >= ong[i].x && bird.x <= ong[i].x + ongTren.width
        //     && (bird.y <= ong[i].y + ongTren.height || bird.y + birdImg.height >= ong[i].y + khoangCachDenOngDuoi)
        // ) {
        //     return
        // }
    }
    // đk 1 là đụng đất
    // đk 2 là ss vị trí x của chim vs cái ống
    // đk 3 là ss vị trí y

    scoreShow.innerHTML = "score: " + score
    bird.y += 3
    requestAnimationFrame(run)
}

document.addEventListener("keydown", function () {
    bird.y -= 60
})

run()
