import obj from "./objects.js";
import checkCollision from "../i-lib/collisions.js";
let { playable , xombie } = obj

export default function moveXombie(){
  chasePlayer(xombie);
  console.log(xombie)
  checkCollision(xombie)
  xombie.x += xombie.xm
  xombie.y += xombie.ym
}

function chasePlayer(mobile){
  let xDiff = (mobile.x - playable.x)
  mobile.xm = xDiff === 0 ? xDiff : xDiff / Math.abs(xDiff) * -mobile.speed
  let yDiff = (mobile.y - playable.y)
  mobile.ym = yDiff === 0 ? yDiff : yDiff / Math.abs(yDiff) * -mobile.speed
}