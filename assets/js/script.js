const container = document.querySelector(".color-container");
const group = document.querySelector("#group");
const colorInput = document.querySelector("#color-input");
const sizeInput = document.querySelector("#size-input");
let currentColor, currentSize, svgWidth, svgHeight, initialX, initialY;
let circles = [];
let deviceType = "";
let events = {
  mouse: {
    click: "click",
  },
  touch: {
    click: "touchstart",
  },
};

container.addEventListener(events.mouse.click, (e) => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let relativeX = mouseX - container.getBoundingClientRect().left;
  let relativeY = mouseY - container.getBoundingClientRect().top;

  // Inside the dino part
  let finalX = relativeX;
  let finalY = relativeY;
  circles.push(
    `<circle cx="${finalX}" cy="${finalY}" fill="${currentColor}" r="${currentSize}"/>`
  );
  group.innerHTML = circles.join("");
});

//Choose color
colorInput.addEventListener("input", () => {
  currentColor = colorInput.value;
});

//Choose size
sizeInput.addEventListener("input", () => {
  currentSize = sizeInput.value;
});

isTouchDevice();

container.addEventListener(events[deviceType].click, (e) => {
  let mouseX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  let mouseY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  let relativeX = mouseX - container.getBoundingClientRect().left;
  let relativeY = mouseY - container.getBoundingClientRect().top;

  //Inside the dino part
  let finalX = relativeX;
  let finalY = relativeY;
  circles.push(
    `<circle cx="${finalX}" cy="${finalY}" fill="${currentColor}" r="${currentSize}"/>`
  );
  group.innerHTML = circles.join("");
});

window.onload = () => {
  currentColor = "#0075ff";
  colorInput.value = currentColor;
  currentSize = 5;
  sizeInput.value = currentSize;
  [svgHeight, svgWidth] = [500, 500];
  initialX = svgWidth / container.clientWidth;
  initialY = svgHeight / container.clientHeight;
  circles = [];
};
