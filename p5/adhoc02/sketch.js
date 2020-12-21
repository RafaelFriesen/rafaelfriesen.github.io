let field,
  q = Math.cos(Math.PI / 6), // Quotient for row height
  w = 4,
  h = 4,
  offx = 0,
  offy = 0,
  zoom = 100,
  fix = w * zoom,
  fiy = h * zoom * q;

function setup() {
  w = 6;
  h = 6;
  field = [...Array(w)].map((a, i) =>
    [...Array(h)].map((b, j) => {
      return { x: i, y: j };
    })
  );
  console.log(field);
  createCanvas(800, 600);
}

function mouseDragged(e) {
  offx = (offx + e.movementX + fix) % fix;
  offy = (offy + e.movementY + fiy) % fiy;
}

function mouseWheel(e) {
  zoom *= Math.pow(1.1, Math.sign(e.delta));
  fix = w * zoom;
  fiy = h * zoom * q;
}
function getf(x, y) {
  return field[x % w][y % h];
}

function draw() {
  background(220);
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < w; i++) {
      x = (i + j / 2) * zoom + offx;
      y = j * q * zoom + offy;
      ellipse(x % (w * zoom), y % (h * zoom * q), zoom, zoom);
    }
  }

  if (mouseIsPressed) {
    // whatever
  }
  stroke(100);
  //ellipse(cx, cy, cr * 2, cr * 2);
  //rect(0, 0, menux, menuy);
  textSize(32);
  text("Money: " + 0, 17, 30);
}
