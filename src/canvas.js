//import Sort from "./Sort";
let algorithm,
  clock,
  /*  steps = 0,
  width, */
  height = 500,
  stg = new Object(),
  arr = new Array();

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#e6951c";
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
/* const barWidth = canvas.width / arr.length;
const barHeightScale = canvas.height / Math.max(...arr);
const randomArr = Array(100)
  .fill(0)
  .map(Math.random);
const userArray = document.getElementById("input").value; */

arr.fillRandomly = function(length) {
  let a = new Array();
  for (let i = 0; i < length; i++) {
    a[i] = i + 1;
  }
  this.length = 0;
  for (let i = length; i > 0; i--) {
    let rand = Math.floor(Math.random() * i);
    let r = a.splice(rand, 1);
    this.push(r[0]);
  }
};
arr.swap = function(a, b) {
  let memory = this[b];
  this[b] = this[a];
  this[a] = memory;
};
arr.draw = function() {
  for (let i = 0; i < this.length; i++) {
    this.drawValue(i, "lightblue");
  }
};

arr.drawValue = function(i, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.rect(i * 10 + 1, height, 8, (-this[i] / (this.length + 1)) * height);
  ctx.stroke();
  ctx.fill();
};

let insertionSort = {
  setup: function() {
    stg.i = 0;
    stg.j = 0;
  },
  step: function() {
    arr.drawValue(stg.i, "green");
    arr.drawValue(stg.j, "yellow");
    if (stg.j == 0 || arr[stg.j - 1] < arr[stg.j]) {
      if (stg.i == arr.length - 1) {
        clearInterval(clock);
        return;
      }
      stg.j = ++stg.i;
    } else {
      arr.swap(stg.j, stg.j - 1);
      stg.j--;
    }
    //steps++;
  },
};

document.getElementById("slider").addEventListener("input", slide, false);

export function start() {
  arr.fillRandomly(75);
  //width = arr.length * 10;
  algorithm = insertionSort;
  slide();
  algorithm.setup();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function main() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arr.draw();
  algorithm.step();
}

function slide() {
  let slider = document.getElementById("slider");
  let position = slider.value;
  let minp = slider.min;
  let maxp = slider.max;
  let minv = Math.log(1);
  let maxv = Math.log(100);
  let scale = (maxv - minv) / (maxp - minp);
  let fps = Math.exp(minv + scale * (position - minp));
  let time = 1000 / fps;
  clearInterval(clock);
  let label = document.getElementById("sliderLabel");
  label.innerHTML = Math.round(fps * 10) / 10 + "fps";
  clock = setInterval(main, time);
}

/* export function drawGraphFromArray(array) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const barWidth = canvas.width / array.length;
  const barHeightScale = canvas.height / Math.max(...array);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";

  array.forEach((value, i) =>
    ctx.fillRect(i * barWidth, 0, barWidth, barHeightScale * value)
  );
}

export function renderLoop() {
  const yieldedArray = sortGenerator.next();
  let fps = 20;

  drawGraphFromArray(yieldedArray);

  function animate(arr) {
    setTimeout(requestAnimationFrame(renderLoop), 1000 / fps);
  }
  animate(yieldedArray);
} */
