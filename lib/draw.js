import {ctx} from '../index.js'
import motion from './motion.js'

let circle = {
  x: 100,
  y: 75,
  xm: 2,
  ym: 2,
}

export function drawPlayable(){
  console.log("Circle: " , circle)
  ctx.beginPath();
  ctx.arc(circle.x , circle.y , 50, 0 , 2*Math.PI);
  ctx.stroke();
  circle = motion.get(circle)
}

export default "It Worked!"