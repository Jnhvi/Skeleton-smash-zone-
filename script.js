const skeleton = document.getElementById("skeleton");
const skull = document.getElementById("skull");
let skeletonPos = 130;
let falling = false;

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft" && skeletonPos > 10) {
    skeletonPos -= 40;
  } else if (e.key === "ArrowRight" && skeletonPos < 250) {
    skeletonPos += 40;
  }
  skeleton.style.left = skeletonPos + "px";
});

function dropSkull() {
  if (falling) return;
  falling = true;
  let top = 0;
  let skullX = Math.random() > 0.5 ? 90 : 170;
  skull.style.left = skullX + "px";

  let fall = setInterval(() => {
    if (top >= 370) {
      clearInterval(fall);
      falling = false;
      let skeletonX = skeleton.offsetLeft;
      let skullXNow = skull.offsetLeft;

      if (Math.abs(skeletonX - skullXNow) < 40) {
        alert("💀 BONK! Game Over!");
        location.reload();
      }
    } else {
      top += 5;
      skull.style.top = top + "px";
    }
  }, 50);
}

setInterval(dropSkull, 1500);
