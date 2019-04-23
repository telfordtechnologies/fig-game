import obj from './objects.js';

export default function checkCollision(mobile){
  const {x , y , width , height} = obj.wall;
  const xPath = mobile.x + mobile.xm;
  const yPath = mobile.y + mobile.ym;
  
  if(xPath > x && xPath < x + width && yPath > y && yPath < y + height){
    mobile.xm = 0
    mobile.ym = 0
    return true
  }
  return false
}