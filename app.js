const colors = ["green", "blue", "pink", "red", "orange", "magenta", "violet", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    // get random number between 0 -3 colours[3]

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber() {


    return Math.floor(Math.random() * 8);

}

//console.log(document.body);