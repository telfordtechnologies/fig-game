import {ctx} from '../index.js'
import motion from './motion.js'

let circle = {
  x: 100,
  y: 75,
  xm: 4,
  ym: 4,
}

let square = {
  x: 300,
  y: 75,
  xm: -4,
  ym: 4
}

export function drawPlayable(){
  console.log("Circle: " , circle)
  ctx.beginPath();
  ctx.arc(circle.x , circle.y , 50, 0 , 2*Math.PI);
  ctx.stroke();
  circle = motion.get(circle)
}

export function drawSquare(){
  ctx.beginPath();
  ctx.rect(square.x , square.y , 100 , 100)
  ctx.stroke()
  square = motion.get(square)
}

export default "It Worked!"