const cardEl = document.querySelectorAll(".item");
const dragEl = document.querySelectorAll(".box");

cardEl.forEach((elem) => {
  elem.addEventListener("dragstart", (e) => {
    console.log("drag has started");
    elem.classList.add("dragging");
  });
});

cardEl.forEach((elem) => {
  elem.addEventListener("dragend", (e) => {
    console.log("drag has started");
    elem.classList.remove("dragging");
  });
});

dragEl.forEach((elem) => {
  elem.addEventListener("dragover", (e) => {
    e.preventDefault();
    let curr = document.querySelector(".dragging");

    let dragY = e.pageY;
    let pos = helper(elem, dragY);

    if (pos === -1) elem.appendChild(curr);
    else elem.insertBefore(curr, elem.children[pos]);
  });
});

function helper(elem, y) {
  if (elem.children.length === 1) return -1;
  for (let index = 1; index < elem.children.length; index++) {
    if (elem.children[index].offsetTop >= y) return index;
  }
  return -1;
}
