let button = document.querySelector(".button");
let colors = ["#614817", "#9e4d06", "#632f02", "#852d04", "#ad4b1d", "#543a2d", "#3d1a09", "#875832", "#874932", "#632b16"];
let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundColor = randColor;
}

button.addEventListener("click", newColor);

 let blobs = document.querySelectorAll(".blob");
  let container = document.querySelector(".wrapper");
  // place our blobs randomly
  blobs.forEach(function (blob) {
    blob.style.right = (100 * Math.random()) + '%';
    blob.style.top = (100 * Math.random()) + '%';
  });
  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("blob")) {
      event.target.remove();
    }
  });

const langs = [
  "▾ nworB etalocohC",
  "▾ ▾ tnegludnI & hciR",
  "▾ suoixuL & yzoC",
  "▾▾▾ htmraW",
  "▾▾▾▾▾▾ trofmoC",
  "▾ nworB tuntsehC",
  "▾▾ nmutuA",
  "▾ erutaN",
  "▾ yhtraE",
  "▾▾▾ ytilibatS fo esneS",
  "▾ epuaT",
  "▾▾▾▾▾ sselemiT & detacitsihpoS",
  "▾▾▾ erehpsomtA tnagelE & gnimlaC",
  "▾▾ nredoM",
  "▾ noitidarT",
  "▾ nworB anneiS",
  "▾▾ citegrenE & tnarbiV",
  "▾▾▾ gnitivnI & yleviL fo gnileeF",
  "▾▾ nworB rebmU",
  "▾ yretsyM & htpeD fo esneS",
  "erehpsomtA suoireS & deudbuS",
  "egieB",
  "yticilpmiS",
  "ssenilnaelC",
  "ssennepO",
  "nworB ahcoM",
  "ecnaibmA gnitivnI & elbatrofmoC",
  "anneiS tnruB",
  "aiglatsoN fo sgnileeF",
  "cimanyD",
  "色棕力克巧",
  "华奢而富丰",
  "围氛的华豪而馨温造营",
  "暖温",
  "适舒",
  "▾▾▾ 色栗",
  "▾▾ 觉感的然自大和天秋起唤",
  "▾▾ 地大有富又适舒既",
  "▾ 色褐灰",
  "恒永而致精",
  "▾▾▾ 围氛的雅优和静宁造营",
  "▾ 境环统传和代现于用适",
  "色赭",
  "▾▾▾ 量能和力活满充",
  "感暖温添增间空为",
  "人诱而动生",
  "▾ 恒永而致精",
  "▾▾ 色褐土",
  "▾▾▾ 秘神又邃深",
  "稳沉",
  "肃严",
  "色棕卡摩",
  "胜入人引",
  "色赭焦烧",
  "系色棕红暖温",
  "感情的旧怀",
  "感动",
];

let charSize = 18;
let fallRate = charSize / 1;
let streams = [];

// -------------------------------
class Char {
  constructor(value, x, y, speed) {
    this.value = value;
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  draw() {
    const flick = random(70);
    // 10 percent chance of flickering a number instead
    if (flick < 10) {
      fill(20, 15, 200);
      text(round(random(7)), this.x, this.y);
    } else {
      text(this.value, this.x, this.y);
    }

    // fall down
    this.y = this.y > height ? 0 : this.y + this.speed;
  }
}

// -------------------------------------
class Stream {
  constructor(text, x) {
    const y = random(text.length * 4);
    const speed = random(1, 7);
    this.chars = [];

    for (let i = text.length; i >= 0; i--) {
      this.chars.push(
        new Char(text[i], x, (y + text.length - i) * charSize, speed)
      );
    }
  }

  draw() {
    fill(20, 100, 100);
    this.chars.forEach((c, i) => {
      // 30 percent chance of lit tail
      const lit = random(100);
      if (lit < 30) {
        if (i === this.chars.length - 1) {
          fill(20, 130, 100);
        } else {
          fill(40, 100, 90);
        }
      }

      c.draw();
    });
  }
}

function createStreams() {
  // create random streams from langs that span the width
  for (let i = 0; i < width; i += charSize) {
    streams.push(new Stream(random(langs), i));
  }
}

function reset() {
  streams = [];
  createStreams();
}


function setup() {
  createCanvas(innerWidth, innerHeight * 0.3).parent('canvas-container');
  reset();
  frameRate(20);
  colorMode(HSB);
  noStroke();
  textSize(charSize);
  textFont("monospace");
  background(0);
}

function draw() {
  background(0, 0.4);
  streams.forEach((s) => s.draw());
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
  background(0);
  reset();
}


