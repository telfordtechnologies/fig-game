import obj from "./objects.js";
import checkCollisions from "./collisions.js";

let { playable , xombie } = obj;

let right = false;
let left = false;
let up = false;
let down = false;



export function keydownHandler(e){
  if(e.key == "ArrowRight" && right === false){
    right = true;
    playable.xm += playable.speed;
  };
  if(e.key == "ArrowLeft" && left === false){
    left = true;
    playable.xm -= playable.speed;
  };
  if(e.key == "ArrowUp" && up === false){
    up = true;
    playable.ym -= playable.speed;
  };
  if(e.key == "ArrowDown" && down === false){
    down = true;
    playable.ym += playable.speed;
  };
}

export function keyupHandler(e){
  if(e.key == "ArrowRight" && right === true){playable.xm -= playable.speed; right = false}
  if(e.key == "ArrowLeft" && left === true){playable.xm += playable.speed; left = false}
  if(e.key == "ArrowUp" && up === true){playable.ym += playable.speed; up = false}
  if(e.key == "ArrowDown" && down === true){playable.ym -= playable.speed; down = false}
}

export function movePlayer(){
  // console.log(playable)
  if(checkCollisions(playable)){
    // NOTE: had to add this bit because if xm and ym are not both reset, you can double speed by running into a wall.
    playable.xm = 0;
    playable.ym = 0;
    //
    left = false;
    right = false;
    up = false;
    down = false;
  }
  playable.x += playable.xm;
  playable.y += playable.ym;
}