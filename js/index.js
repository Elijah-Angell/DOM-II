// Your code goes here


// number 1
let hoover = document.querySelector('.nav')

hoover.addEventListener('mouseover', function (event) {
    event.target.style.color = "red";

    setTimeout(function () {
        event.target.style.color = "";

    }, 500);
}, false);




// number 2

window.addEventListener('load', (event) => {
    alert('Are you having Fun yet')
})



// number 3
window.addEventListener("resize", function () {
    document.querySelector(".text-content").innerHTML = Math.random();
});


// number 4
let p = 3;
let d = 7;

document.querySelector(".nav-link").addEventListener("click", function () {
    myFunction(p, d)
});

function myFunction(p, d) {
    document.querySelector('h2').innerHTML = p * d;
}



// number 5
document.querySelector('p').innerHTML = document.querySelector('h4').innerHTML;



// number 6
let c = "dude";
let x = "whats up";

document.querySelector(".btn").addEventListener("click", function () {
    myWord(c, x)
})

function myWord(c, x) {
    document.querySelector("footer p").innerHTML = c + x;
}


// number 7

document.querySelector('.destination p').innerHTML = document.querySelector('h4').nodeName
