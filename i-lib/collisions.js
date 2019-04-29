// import obj from './objects.js';
import { currentLevel , loadLevel } from "./engine.js";
import obj from "./objects.js";

export default function checkCollision(mobile){
  const xPath = mobile.x + mobile.xm;
  const yPath = mobile.y + mobile.ym;
  return currentLevel.filter((obstacle) => {
    const {x , y , width , height} = obstacle;
    if(xPath > x && xPath < x + width && yPath > y && yPath < y + height){
      // console.log("Wall" , obstacle)
      if(obstacle.finish){loadLevel()}
      if(mobile.x > x && mobile.x < x + width){mobile.ym = 0}
      if(mobile.y > y && mobile.y < y + height){mobile.xm = 0}
      // mobile.xm = 0
      // mobile.ym = 0
      return true
    }
    return false
  }).length
}

export function catchPlayer(){
  const {xombie , playable} = obj
  if(Math.abs(xombie.x - playable.x) < playable.rad + xombie.rad && Math.abs(xombie.y - playable.y) < playable.rad + xombie.rad){
    return true
  } else {
    return false
  }
}

// export default function checkCollision(mobile){
//   const {x , y , width , height} = obj.wall;
//   const xPath = mobile.x + mobile.xm;
//   const yPath = mobile.y + mobile.ym;
  
//   if(xPath > x && xPath < x + width && yPath > y && yPath < y + height){
//     mobile.xm = 0
//     mobile.ym = 0
//     return true
//   }
//   return false
// }