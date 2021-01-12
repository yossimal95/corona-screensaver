function setTime(_time) {
  time = _time;
}

var time = 90;

document.getElementsByTagName("html")[0].innerHTML +=
  '<div id="container" style="box-sizing: border-box; position: absolute; z-index:9999; top: 0; left: 0; width:' +
  window.innerWidth +
  "px ;height:" +
  window.innerHeight +
  'px; overflow: hidden; display: none;" ></div>';
document
  .getElementsByTagName("html")[0]
  .addEventListener("mousemove", mouseMove);

var corona = `
  <label class="corona-virus">
  <div class="scalp">
  <span class="hair1"></span>
  <span class="hair2"></span>
  <span class="hair3"></span>
  <span class="hair4"></span>
  <span class="hair5"></span>
  <span class="hair6"></span>
  <span class="hair7"></span>
  <span class="hair8"></span>
  <span class="hair9"></span>
  <span class="hair10"></span>
  <span class="hair11"></span>
  <span class="hair12"></span>
  </div>
  <div class="eye1"></div>
  <div class="eye2"></div>
  </label>
  `;

var stop = false;

function mouseMove() {
  if (i > 0) {
    stop = true;
    count = 0;
  }
  count = 0;
}

var count = 0;

var x = setInterval(function () {
  count++;

  if (count >= time) {
    count = 0;
    if (i == 0) {
      myLoop();
    }
  }
}, 1000);

var i = 0;

function myLoop() {
  setTimeout(function () {
    if (stop) {
      document.getElementById("container").innerHTML = "";
      document.getElementById("container").style.display = "none";
      i = 0;
      stop = false;
      return;
    }
    document.getElementById("container").style.display = "block";
    document.getElementById("container").innerHTML += corona;

    document.getElementsByClassName("corona-virus")[i].style.top =
      Math.random() * 90 + "%";

    document.getElementsByClassName("corona-virus")[i].style.left =
      Math.random() * 90 + "%";

    document.getElementsByClassName("corona-virus")[i].style.zoom =
      i * 10 + "%";

    i++;
    if (i < 45) {
      myLoop();
    } else {
      document.getElementById("container").innerHTML = "";
      i = 0;
      myLoop();
    }
  }, 1000);
}
