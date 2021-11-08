let item = document.querySelector(".item");
let placeholders = document.querySelectorAll(".placeholder");

placeholders.forEach(element => {
    element.addEventListener("dragover", dragOver);
    element.addEventListener("dragenter", dragEnter);
    element.addEventListener("dragleave", dragLeave);
    element.addEventListener("drop", dragDrop);
});

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);

function dragStart(e) {
    e.target.classList.add('hold');
    setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragEnd(e) {
    e.target.classList.remove('hold', 'hide');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.target.classList.add('hovered');
}

function dragLeave(e) {
    e.target.classList.remove('hovered');
}

function dragDrop(e) {
    e.target.classList.remove('hovered');
    e.target.append(item);
}