import obj from './objects.js';
export const canvas = document.getElementsByTagName("canvas")[0]
export const ctx = canvas.getContext("2d");
import draw from "./commander.js"
import {keydownHandler , keyupHandler , movePlayer} from "./motion.js";
import ai from './ai.js';
import levelOne from "./levels/levelOne.js"
import levelTwo from "./levels/levelTwo.js"
import {catchPlayer} from "./collisions.js";

const levelArray = [levelOne , levelTwo]
export let currentLevel = levelOne;
export let nextLevel = 1;
// let newLevel = true;
let loopIsRunning = false
// let startButton = document.getElementById("start");
// startButton.onclick = startLoop

function startLoop(){
  loopIsRunning = true
  gameLoop()
}

console.log("Engine Connected...")

//| CONTROLS SUITE |\\
document.addEventListener("keydown" , keydownHandler , false);
document.addEventListener("keyup" , keyupHandler , false);
document.addEventListener("keydown" , (e) => {
  if(e.key == "Enter" && loopIsRunning === false){
    startLoop();
  }
} , false);

function gameLoop(){
  ctx.clearRect(0, 0, canvas.width , canvas.height);
  // if(newLevel){
  //   draw({type: "level" , obstacles: levelOne});
  //   newLevel = false;
  // }
  draw(obj.playable)
  draw(obj.xombie)
  draw({type: "level" , obstacles: currentLevel})
  if(catchPlayer()){
    loopIsRunning = false
    alert("Game Over!");
    document.location.reload();
  }
  movePlayer()
  ai();

  loopIsRunning && requestAnimationFrame(gameLoop)
}

function onWin(){
  alert("Congrats, you win!");
  document.location.reload()
}

export function loadLevel(){
  // console.log("NextLevel: " , nextLevel)
  currentLevel = levelArray[nextLevel]
  nextLevel >= levelArray.length ? onWin() : null
  nextLevel++
}

export default {message: "Ain't nothing here!"}