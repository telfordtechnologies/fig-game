

export default function checkCollision(moveable){
  if(moveable.y > 300){
    return {x: 0, y: moveable.ym * -2 + 1}
  } else if (moveable.y < 0){
    return {x: 0, y: moveable.ym * -2 + 1}
  } else if (moveable.x > 480){
    return {x: moveable.xm * -2, y: 0}
  } else if (moveable.x < 0){
    return {x: moveable.xm * -2, y: 0}
  } else {
    return {x: 0, y: 0}
  }
}



