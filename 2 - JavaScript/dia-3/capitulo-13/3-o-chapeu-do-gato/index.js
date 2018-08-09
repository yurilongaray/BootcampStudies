var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");
var angle = 0;
var lastTime = null;

function animate(time) {
  if(lastTime != null) {
		angle += (time - lastTime) * 0.003; //Velocidade
  }
  lastTime = time;
  hat.style.top = (Math.sin(angle) * 200) + "px";
  hat.style.left = (Math.cos(angle) * 200) + "px";

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
