import obj from "../objects.js";
const {Obstacle , Finish} = obj

const obstacles = [
  new Obstacle(0 , 0 , 10 , 300),
  new Obstacle(0 , 0 , 300 , 10),
  new Obstacle(300 , 300 , 10 , 60),
  new Obstacle(400 , 400 , 10 , 300),
  new Obstacle(150 , 200 , 300 , 10),
  new Finish(600 , 200),
]



export default obstacles