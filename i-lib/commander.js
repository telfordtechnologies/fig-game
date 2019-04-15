import { canvas , ctx } from "./engine.js"

function drawObj(obj){
drawCircle(obj)
}

function drawCircle(t){
  ctx.beginPath();
  ctx.arc(t.x , t.y , t.rad , 0 , Math.PI*2);
  ctx.stroke()
}

function drawSquare(){

}

function drawSVG(){

}

export default drawObj