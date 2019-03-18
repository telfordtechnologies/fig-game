
function draw(){
  // const canvasTest = document.getElementById('canvas');
  // const ctx = canvas.getContext('2d');

  // ctx.fillStyle = 'green';
  // ctx.fillRect(25,25,100,100);
  // ctx.clearRect(45,45,60,60);
  // ctx.strokeRect(50,50,50,50);



  var canvas = document.getElementById('canvas')
  if(canvas.getContext){
    console.log("Hit")
    var ctx = canvas.getContext('2d')
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(70,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill()
  } 
}