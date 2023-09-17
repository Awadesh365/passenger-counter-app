// document.getElementById("count-el").innerText = 5;

//-----------PeopleCounter Logic-------------

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let total = 0,
  count = 0;

let Total = document.getElementById("total-el");

function increment() {
  count++;
  total++;

  countEl.innerText = count;
}

function save() {
  let previousEntries = " " + count + " " + " - ";

  saveEl.innerText += previousEntriese;

  console.log(total);

  count = 0;
}

function showTotal() {
  document.getElementById("total-el").innerText =
    "Total People On Platform:-" + total;
  count = 0;
}
