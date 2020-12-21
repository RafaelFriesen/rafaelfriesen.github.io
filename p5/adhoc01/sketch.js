let cx = 400;
let cy = 300;
let cr = 4;
let money = 0;
let menux = 210;
let menuy = 90;

function setup() {
  createCanvas(800, 600);
  button = createButton("Buy Radius");
  button.position(10, 40);
  button.mousePressed(buyRadius);
}

function buyRadius() {
  if (money > 0) {
    money--;
    cr++;
  }
}

function inCircle() {
  let dx = mouseX - cx;
  let dy = mouseY - cy;
  return Math.sqrt(dx * dx + dy * dy) < cr;
}

function draw() {
  background(220);
  if (mouseIsPressed && inCircle()) {
    money++;
    while (inCircle() || (cx < menux - cr && cy < menuy - cr)) {
      cx = random(width - cr * 2) + cr;
      cy = random(height - cr * 2) + cr;
    }
  }
  stroke(100);
  ellipse(cx, cy, cr * 2, cr * 2);
  rect(0, 0, menux, menuy);
  textSize(32);
  text("Money: " + money, 17, 30);
}
