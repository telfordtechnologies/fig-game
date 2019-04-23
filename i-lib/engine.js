import obj from './objects.js';
export const canvas = document.getElementsByTagName("canvas")[0]
export const ctx = canvas.getContext("2d");
import draw from "./commander.js"
import {keydownHandler , keyupHandler , movePlayer} from "./motion.js";
import ai from './ai.js';

gameLoop()

console.log("Engine Connected...")

//| CONTROLS SUITE |\\
document.addEventListener("keydown" , keydownHandler , false);
document.addEventListener("keyup" , keyupHandler , false);

function gameLoop(){
  ctx.clearRect(0, 0, canvas.width , canvas.height);
  draw(obj.playable)
  draw(obj.xombie)
  draw(obj.wall)

  movePlayer()
  ai();

  requestAnimationFrame(gameLoop)
}