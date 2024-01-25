const contentnav = document.querySelectorAll(".navcontent");
const navinput = document.querySelectorAll(".hamburgermenu input");
const initSlider = () => {
  const slidebutton = document.querySelectorAll(".hobbiesbox .slidebutton");
  const slidebutton1 = document.querySelectorAll(
    ".hobbiesbox .slidebutton #prevslide"
  );
  const slidebutton2 = document.querySelectorAll(
    ".hobbiesbox .slidebutton #nextslide"
  );
  const imglist = document.querySelector(".hobbiesbox .imglist");
  const maxscrollleft = imglist.scrollWidth - imglist.clientWidth;
  slidebutton.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prevslide" ? -1 : 1;
      const scrollamout = imglist.clientWidth * direction;
      imglist.scrollBy({ left: scrollamout, behavior: "smooth" });
    });
  });
  //test
};
window.addEventListener("load", initSlider);
//ham
navinput.addEventListener("click", () => {
  contentnav.classList.toggle("active");
});

// SCROLLANIM
//

//

const sections = document.querySelectorAll(".hobbiessec");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sections.classList.toggle("animate");
    } else {
      sec.classList.remove("animate");
    }
  });
};

const H1 = document.querySelectorAll(".h-1");
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerbottom = (window.innerHeight / 5) * 4;

  H1.forEach((box) => {
    const BoxTop = box.getBoundingClientRect().top;

    if (BoxTop < triggerbottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
