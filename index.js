import test, {drawPlayable} from "./lib/draw.js"

console.log(test)

const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

drawLoop()
function drawLoop(){
  ctx.clearRect(0 , 0 , canvas.width, canvas.height);
  drawPlayable();
  requestAnimationFrame(drawLoop)
}



