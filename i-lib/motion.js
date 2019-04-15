import obj from "./objects.js";
let { playable } = obj;
let playerSpeed = 2

let right = false;
let left = false;
let up = false;
let down = false;



export function keydownHandler(e){
  if(e.key == "ArrowRight" && right === false){
    right = true;
    playable.xm += playerSpeed;
  };
  if(e.key == "ArrowLeft" && left === false){
    left = true;
    playable.xm -= playerSpeed;
  };
  if(e.key == "ArrowUp" && up === false){
    up = true;
    playable.ym -= playerSpeed;
  };
  if(e.key == "ArrowDown" && down === false){
    down = true;
    playable.ym += playerSpeed;
  };
}

export function keyupHandler(e){
  if(e.key == "ArrowRight" && right === true){playable.xm -= playerSpeed; right = false}
  if(e.key == "ArrowLeft" && left === true){playable.xm += playerSpeed; left = false}
  if(e.key == "ArrowUp" && up === true){playable.ym += playerSpeed; up = false}
  if(e.key == "ArrowDown" && down === true){playable.ym -= playerSpeed; down = false}
}

export function movePlayer(){
  // console.log(playable)
  playable.x += playable.xm;
  playable.y += playable.ym;
}