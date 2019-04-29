import obj from "../objects.js";
const { Obstacle , Finish } = obj

export default [
  new Obstacle(20 , 30 , 10 , 200) ,
  new Obstacle(600 , 300 , 10 , 200) ,
  new Obstacle(400 , 0 , 10 , 50) ,
  new Obstacle(50 , 250 , 300 , 10) ,
  new Obstacle(20 , 30 , 200 , 10) ,
  new Finish(0 , 0),
]