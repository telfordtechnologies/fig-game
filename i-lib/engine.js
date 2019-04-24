import obj from './objects.js';
export const canvas = document.getElementsByTagName("canvas")[0]
export const ctx = canvas.getContext("2d");
import draw from "./commander.js"
import {keydownHandler , keyupHandler , movePlayer} from "./motion.js";
import ai from './ai.js';
import levelOne from "./levels/levelOne.js"
import levelTwo from "./levels/levelTwo.js"

const levelArray = [levelOne , levelTwo]
export let currentLevel = levelOne;
export let nextLevel = 1;
// let newLevel = true;

gameLoop()

console.log("Engine Connected...")

//| CONTROLS SUITE |\\
document.addEventListener("keydown" , keydownHandler , false);
document.addEventListener("keyup" , keyupHandler , false);

function gameLoop(){
  ctx.clearRect(0, 0, canvas.width , canvas.height);
  // if(newLevel){
  //   draw({type: "level" , obstacles: levelOne});
  //   newLevel = false;
  // }
  draw(obj.playable)
  draw(obj.xombie)
  draw({type: "level" , obstacles: currentLevel})
  movePlayer()
  ai();

  requestAnimationFrame(gameLoop)
}

export function loadLevel(){
  currentLevel = levelArray[nextLevel]
  nextLevel++
  nextLevel >= levelArray.length ? nextLevel = 0 : null
}

export default {message: "Ain't nothing here!"}