var i = 0;
var images = [];

images[0] = "src/img/game_img1.png";
images[1] = "src/img/game_img2.png";
images[2] = "src/img/game_img3.png";
images[3] = "src/img/game_img4.png";
images[4] = "src/img/game_img5.png";
images[5] = "src/img/game_img6.png";
images[6] = "src/img/game_img7.png";

function left() {
  if (i == 0) {
    i = 7;
  }
  i = i - 1;
  document.Find_the_Hidden_Number.src = images[i];
}

function right() {
  if (i == 6) {
    i = -1;
  }
  i = i + 1;
  document.Find_the_Hidden_Number.src = images[i];
}

left_arrow = document.querySelector(".left_arrow");
left_arrow.onclick = left;

right_arrow = document.querySelector(".right_arrow");
right_arrow.onclick = right;

let whileOpening = true;

function navtransopen() {
  document
    .querySelector("nav")
    .classList.replace("navtransclose", "navtransopen");
}

function navtransclose() {
  document
    .querySelector("nav")
    .classList.replace("navtransopen", "navtransclose");
}

function menu() {
  if (whileOpening) {
    document.querySelector("nav").classList.toggle("hidden");
    navtransopen();
    whileOpening = false;
  } else if (!whileOpening) {
    navtransclose();
    setTimeout(
      () => document.querySelector("nav").classList.toggle("hidden"),
      400
    );
    // document.querySelector("nav").classList.toggle("hidden");
    whileOpening = true;
  }

  // setTimeout(navtrans, 500);

  // if (menu_open) {
  //   document.querySelector("nav").classList.replace("act", "nav");
  //   menu_open = false;
  // } else if (!menu_open) {
  //   document.querySelector("nav").classList.replace("nav", "act");
  //   menu_open = true;
  // }
}
