// import obj from './objects.js';
import { currentLevel , loadLevel } from "./engine.js";

export default function checkCollision(mobile){
  const xPath = mobile.x + mobile.xm;
  const yPath = mobile.y + mobile.ym;
  return currentLevel.filter((obstacle) => {
    const {x , y , width , height} = obstacle;
    if(xPath > x && xPath < x + width && yPath > y && yPath < y + height){
      if(obstacle.finish){loadLevel()}
      mobile.xm = 0
      mobile.ym = 0
      return true
    }
    return false
  }).length
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