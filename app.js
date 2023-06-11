let count = 0;
let cntElement = document.getElementById("count-el");
console.log(cntElement);

function increment() {
    count++;
    console.log(count);
    document.getElementById("count-el").textContent = count;
}

function save() {
    let savedVariable = document.getElementById("count-el").textContent;
    console.log(savedVariable);

    let saveEl = document.getElementById("save-el");

    saveEl.textContent += " " + savedVariable + " - ";

    let setToZero = document.getElementById("count-el").textContent = 0;
    count = 0;
}



