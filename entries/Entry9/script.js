window.onload = function(){
      /* 实现黑眼珠跟随鼠标经过的效果 */
      let face = document.getElementsByClassName('face')[0]
      face.addEventListener('mousemove', eyeBall)
      function eyeBall(event){
        /* 遍历两个黑眼珠 */
        document.querySelectorAll('.eye').forEach(function(eye){
          let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
          // 黑眼珠左侧 + 黑眼珠宽度一半
          let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
          // 黑眼珠上侧 + 黑眼珠高度一半
          /* x和y即为黑色眼珠的圆心坐标位置 */
          let radian = Math.atan2(event.clientX - x, event.clientY - y);
          // Math.atan2函数接受鼠标位置和黑眼珠圆心坐标的差，返回结果为二者形成的弧度
          let angle = radian * 180 /Math.PI;
          // 将上面的弧度转行为角度
          eye.style.transform = `rotate(${angle}deg)`;
          // 设置鼠标经过，黑眼珠跟随移动的角度
        })
      }
    }

function changeColor() {
    const moodSelector = document.getElementById("mood");
    const colorDisplay = document.getElementById("color-display");

    const selectedMood = moodSelector.value;

    let color;

    switch (selectedMood) {
        case "love":
            color = "#F699CD";
            break;
        case "calm":
            color = "#FDA4BA";
            break;
        case "energetic":
            color = "#FF1694";
            break;
        case "barbie":
            color = "#FC46AA";
            break;
        case "soft":
            color = "#FDAB9F";
            break;
        case "vivid":
            color = "#FE7D6A";
            break;
        case "timeless":
            color = "#9E4244";
            break;
        case "baby":
            color = "#F2B8C6";
            break;
        case "spirited":
            color = "#FC9483";
            break;
        case "youth":
            color = "#F79AC0";
            break;
 
    }

    colorDisplay.style.backgroundColor = color;
}

let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);
