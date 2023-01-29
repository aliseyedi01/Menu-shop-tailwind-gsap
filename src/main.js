// Dark Mode
// variable button
var DarkIcon = document.getElementById("dark-icon");
var LightIcon = document.getElementById("light-icon");
var themeToggle = document.getElementById("theme-toggle");
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme : dark").matches;
// theme check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    DarkIcon.classList.add("display-none");
    return;
  }
  LightIcon.classList.add("display-none");
};
// call theme switch on clicking buttons
themeToggle.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    DarkIcon.classList.toggle("display-none");
    LightIcon.classList.toggle("display-none");
    return;
  }
  {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    DarkIcon.classList.toggle("display-none");
    LightIcon.classList.toggle("display-none");
  }
});
themeCheck();

// change Menu
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const firstItem = document.querySelector(".items").firstElementChild;
const endItem = document.querySelector(".items").lastElementChild;
const numberOfItem = document.querySelector(".items").childElementCount;
// animation load with Page
gsap
  .timeline()
  .fromTo(".darkBtn", { opacity: 0.4 }, { opacity: 1, duration: 0.4 })
  .fromTo(".main", { opacity: 0 }, { opacity: 1 }, "<")
  .fromTo(".leftSide", { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
  .fromTo(
    ".mainMenu",
    { opacity: 0, scale: 1.1 },
    { opacity: 1, scale: 1, duration: 0.8 },
    "<1"
  )
  .fromTo(
    ".mainText",
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.5 },
    "+=0.1"
  )
  .fromTo(
    ".info",
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.8 },
    "+=0.1"
  )
  .fromTo(
    ".infoIcon",
    { opacity: 0, scale: 1.2 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.3,
      ease: "back",
      yoyo: "true",
      repeat: -1,
    },
    "+=0.2"
  )
  .fromTo(
    ".changeBtnUp",
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "bounce" },
    "+=0.01"
  )
  .fromTo(
    ".changeBtnDown",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "bounce" },
    "<"
  )
  .to(
    ".changeBtnUp",
    { y: -5, duration: 0.5, ease: "back", yoyo: "true", repeat: 3 },
    "+=0.01"
  );
// function : when clicked on up Button
const transformToUp = () => {
  const activeItem = document.querySelector(".slide-active");
  let nextItem = activeItem.nextElementSibling;
  if (!nextItem) nextItem = firstItem;
  let nextItemTxt1 = nextItem.getElementsByTagName("h2");
  let nextItemTxt2 = nextItem.getElementsByTagName("p");
  let nextItemTxt3 = nextItem.getElementsByTagName("span");
  if (activeItem.classList.contains("opacity-0"))
    activeItem.classList.remove("opacity-0");
  gsap
    .timeline({ defaults: { duration: 1.2 } })
    .to(".changeBtnUp", { y: -5, duration: 0.5, ease: "back", duration: 0.2 })
    .to(".changeBtnUp", { y: 0, duration: 0.5, ease: "back", duration: 0.2 })
    .fromTo(
      activeItem,
      { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      { opacity: 0, clipPath: "polygon(0 52%, 100% 38%, 100% 46%, 0 60%)" }
    )
    .fromTo(
      nextItem,
      { opacity: 0.1, clipPath: "polygon(0 89%, 100% 78%, 100% 100%, 0 100%)" },
      {
        opacity: 1,
        clipPath: "polygon(-1% -1% , 102% -9%, 102% 102%, -1% 102%)",
        duration: 3.2,
      },
      "< +=7%"
    )
    .fromTo(nextItemTxt1, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "<1")
    .fromTo(nextItemTxt2, { opacity: 0, y: 35 }, { opacity: 1, y: 0 }, "<")
    .fromTo(nextItemTxt3, { opacity: 0, x: 35 }, { opacity: 1, x: 0 }, "<");
  nextItem.classList.add("slide-active");
  activeItem.classList.remove("slide-active");
};
// function : when clicked on down Button
const transformToDown = () => {
  const activeItem = document.querySelector(".slide-active");
  let prevItem = activeItem.previousElementSibling;
  if (!prevItem) prevItem = endItem;
  let prevItemTxt1 = prevItem.getElementsByTagName("h2");
  let prevItemTxt2 = prevItem.getElementsByTagName("p");
  let prevItemTxt3 = prevItem.getElementsByTagName("span");
  if (activeItem.classList.contains("opacity-0"))
    activeItem.classList.remove("opacity-0");
  gsap
    .timeline({ defaults: { duration: 1.2 } })
    .to(".changeBtnDown", { y: 5, duration: 0.5, ease: "back", duration: 0.2 })
    .to(".changeBtnDown", { y: 0, duration: 0.5, ease: "back", duration: 0.2 })
    .fromTo(
      activeItem,
      { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      { opacity: 0, clipPath: "polygon(0 52%, 100% 38%, 100% 46%, 0 60%)" }
    )
    .fromTo(
      prevItem,
      { opacity: 0.1, clipPath: "polygon(0 89%, 100% 78%, 100% 100%, 0 100%)" },
      {
        opacity: 1,
        clipPath: "polygon(-1% -1% , 102% -9%, 102% 102%,-1% 102%)",
        duration: 3.2,
      },
      "< +=7%"
    )
    .fromTo(prevItemTxt1, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "<1")
    .fromTo(prevItemTxt2, { opacity: 0, y: 35 }, { opacity: 1, y: 0 }, "<")
    .fromTo(prevItemTxt3, { opacity: 0, x: 35 }, { opacity: 1, x: 0 }, "<");
  prevItem.classList.add("slide-active");
  activeItem.classList.remove("slide-active");
};
// Event : on Buttons change Items
upButton.addEventListener("click", transformToUp);
downButton.addEventListener("click", transformToDown);
