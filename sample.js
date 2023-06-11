function change() {

    let welcomeEL = document.getElementById("welcome-el");

    let Name = "Awadesh", greeting = "Welcome to the Front Page";
    let ans = greeting + ", " + Name + "     ";

    welcomeEL.innerText = ans;

    welcomeEL.innerText += "\n" + "\n😘\n"
        + "🎈🎈🎈" + "\n🎈🎈🎈🎈" + "\n🎈🎈🎈🎈" + "🎈🎈🎈" + "\n🌳🌹🏫🌳🏢🏢_🏢🏢🌳🌳";
}


let firstName = "awadesh", lastName = "Nautiyal";
let fullName = firstName + " " + lastName;
console.log(fullName);

let Name = "Linda";
let greeting = "Hi there";

function myFunction() {
    console.log(greeting + ", " + Name + "!");
}

myFunction();

let myPoints = 3;

function add3points() {
    myPoints += 3;
}
function remove1Point() {
    myPoints--;
}
for (let i = 0; i < 3; i++)
    add3points();

for (let i = 0; i < 2; i++)
    remove1Point();

console.log(myPoints);

// 22
// 18
//65
//my points: 59 
//4
// 1114 
