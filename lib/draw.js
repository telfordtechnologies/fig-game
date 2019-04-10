import {ctx} from '../index.js'

export function drawPlayable(){
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0 , 2*Math.PI);
  ctx.stroke();
}

export default "It Worked!"