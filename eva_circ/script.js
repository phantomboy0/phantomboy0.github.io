var audio = new Audio("click.mp3");

const Capl1 = document.getElementById("cap_left1");
const Capr1 = document.getElementById("cap_right1");
const txt1 = document.getElementById("txt1");
let is1Dis = false;
let is1trans = false;

Capl1.addEventListener("click", () => {
  toggle1();
});

Capr1.addEventListener("click", () => {
  toggle1();
});
txt1.addEventListener("click", () => {
  toggle1();
});

function toggle1(params) {
  if (is1trans) {
    return;
  }

  is1trans = true;
  if (!is1Dis) {
    txt1.classList.remove("cap_txt1_c");
    txt1.classList.add("cap_txt1_dc");
    setTimeout(() => {
      Capl1.classList.remove("cap_left1_c");
      Capl1.classList.add("cap_left1_dc");

      Capr1.classList.remove("cap_right1_c");
      Capr1.classList.add("cap_right1_dc");

      console.log("toggleOFF");
      audio.play();
      is1Dis = true;
    }, 250);
    setTimeout(() => {
      is1trans = false;
    }, 500);
  } else {
    Capl1.classList.remove("cap_left1_dc");
    Capl1.classList.add("cap_left1_c");

    Capr1.classList.remove("cap_right1_dc");
    Capr1.classList.add("cap_right1_c");

    setTimeout(() => {
      txt1.classList.remove("cap_txt1_dc");
      audio.play();
      is1Dis = false;
    }, 160);
    setTimeout(() => {
      is1trans = false;
    }, 510);
    console.log("toggleON");
  }
}

const Capl2 = document.getElementById("cap_left2");
const Capr2 = document.getElementById("cap_right2");
const txt2 = document.getElementById("txt2");
let is2Dis = false;
let is2trans = false;

Capl2.addEventListener("click", () => {
  toggle2();
});

Capr2.addEventListener("click", () => {
  toggle2();
});
txt2.addEventListener("click", () => {
  toggle2();
});

function toggle2(params) {
  if (is2trans) {
    return;
  }

  is2trans = true;
  if (!is2Dis) {
    txt2.classList.remove("cap_txt2_c");
    txt2.classList.add("cap_txt2_dc");
    setTimeout(() => {
      Capl2.classList.remove("cap_left2_c");
      Capl2.classList.add("cap_left2_dc");

      Capr2.classList.remove("cap_right2_c");
      Capr2.classList.add("cap_right2_dc");

      console.log("toggleOFF");
      audio.play();
      is2Dis = true;
    }, 250);
    setTimeout(() => {
      is2trans = false;
    }, 500);
  } else {
    Capl2.classList.remove("cap_left2_dc");
    Capl2.classList.add("cap_left2_c");

    Capr2.classList.remove("cap_right2_dc");
    Capr2.classList.add("cap_right2_c");

    setTimeout(() => {
      txt2.classList.remove("cap_txt2_dc");
      audio.play();
      is2Dis = false;
    }, 160);
    setTimeout(() => {
      is2trans = false;
    }, 510);
    console.log("toggleON");
  }
}

const Capl3 = document.getElementById("cap_left3");
const Capr3 = document.getElementById("cap_right3");
const txt3 = document.getElementById("txt3");
let is3Dis = false;
let is3trans = false;

Capl3.addEventListener("click", () => {
  toggle3();
});

Capr3.addEventListener("click", () => {
  toggle3();
});
txt3.addEventListener("click", () => {
  toggle3();
});

function toggle3(params) {
  if (is3trans) {
    return;
  }

  is3trans = true;
  if (!is3Dis) {
    txt3.classList.remove("cap_txt3_c");
    txt3.classList.add("cap_txt3_dc");
    setTimeout(() => {
      Capl3.classList.remove("cap_left3_c");
      Capl3.classList.add("cap_left3_dc");

      Capr3.classList.remove("cap_right3_c");
      Capr3.classList.add("cap_right3_dc");

      console.log("toggleOFF");
      audio.play();
      is3Dis = true;
    }, 250);
    setTimeout(() => {
      is3trans = false;
    }, 500);
  } else {
    Capl3.classList.remove("cap_left3_dc");
    Capl3.classList.add("cap_left3_c");

    Capr3.classList.remove("cap_right3_dc");
    Capr3.classList.add("cap_right3_c");

    setTimeout(() => {
      txt3.classList.remove("cap_txt3_dc");
      audio.play();
      is3Dis = false;
    }, 160);
    setTimeout(() => {
      is3trans = false;
    }, 510);
    console.log("toggleON");
  }
}
