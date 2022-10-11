let empties;
let doesExist;
let swapElement;
let parentOfFill;
let dragItem;

empties = document.querySelectorAll(".empty")

const fill = document.querySelectorAll(".fill");
console.log(fill);
for(i of fill){
    i.addEventListener('dragstart', dragStart)
    i.addEventListener('dragend', dragEnd)
}

function dragStart() {
    dragItem= this;
    parentOfFill = dragItem.parentNode;
    setTimeout(()=> (this.style.visibility = 'hidden'), 0)
}
function dragEnd() {
    this.className = "fill";
if(dragItem.style.visibility === "hidden"){
dragItem.style.visibility = "visible"
}
}

for(empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', Drop)
}

function Drop() {
    this.className = "empty";
    dragItem.style.visibility = "visible";
    if(doesExist){
        parentOfFill.append(swapElement)
    }
    parentOfFill.children[1].value = "";
   this.append(dragItem) 
}
function dragOver(e) {
    e.preventDefault();
    if(!this.className.includes("hovered")){
this.className += "hovered";
}
}

function dragLeave() {
    this.className = "empty"
}
function dragEnter(e) {
    e.preventDefault()
    if(this.querySelector(".fill") !== null){
        doesExist = true;
        const elements = this.querySelectorAll(".fill")
        swapElement = elements[0]
    }
}


