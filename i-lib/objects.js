let playable = {
  x: 100,
  y: 100,
  xm: 0,
  ym: 0,
  rad: 10,
  type: "circle",
  speed: 2,
}

let xombie = {
  x: 300,
  y: 200,
  xm: 0,
  ym: 0,
  rad: 10,
  type: "circle",
  speed: 1,
}

class Obstacle{
  constructor(x = 0 , y = 0 , width = 10, height = 10){
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height,
    this.type = "square";
  }
}

class Finish extends Obstacle{
  constructor(x , y){
    super(x , y , 30 , 30)
    this.finish = true
    this.fillStyle = "Green"
  }
}

// let wall = new Obstacle(200, 200, 10 , 400)

export default {
  playable,
  xombie,
  Obstacle,
  Finish,
  // wall,
}