import { canvas , ctx } from "./engine.js"

function drawObj(obj){
  switch(obj.type){
    case "circle":
      return drawCircle(obj);
    case "square":
      return drawSquare(obj);
    default:
      return console.log("Could not draw:" , obj)
  }
}

function drawCircle(t){
  ctx.beginPath();
  ctx.arc(t.x , t.y , t.rad , 0 , Math.PI*2);
  ctx.stroke()
}

function drawSquare(t){
  ctx.beginPath();
  ctx.rect(t.x , t.y , t.width , t.height);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawSVG(){

}

export default drawObj