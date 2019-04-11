import checkCollision from './collisions.js'

const gravity = 1

function get(moveable){
  const p = checkCollision({...moveable})
  let {y, x ,ym , xm} = moveable

  moveable.xm += p.x
  moveable.ym += p.y + gravity
  
  moveable.x += moveable.xm
  moveable.y += moveable.ym

  moveable.y > 300 ? moveable.y = 300 + moveable.ym : null
  moveable.x > 480? moveable.x = 480 + moveable.xm : null


  return moveable
}

export default {
  get
}