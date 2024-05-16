// Task-One

function changeImage (img) {
    let image = document.querySelector(".main-img")
    image.setAttribute("src", img)
    let section = document.querySelector(".first-section")
    if(img == './assets/images/laser-Blue.png') {
        section.style.backgroundColor = "#5d6e8b"
    }
    else if (img == './assets/images/yellow.png') {
        section.style.backgroundColor = "rgb(134 130 97)"
    }
    else if (img == './assets/images/laser-Black.png') {
        section.style.backgroundColor = "#373538"
    }
}

// Task-Two
var moonIcon = document.querySelector("#moon")
var sunIcon = document.querySelector("#sun")
let secondSection = document.querySelector(".second-section")
moonIcon.addEventListener("click", () => {
    secondSection.classList.add("dark-theme");
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline"

})
sunIcon.addEventListener("click", () => {
    secondSection.classList.remove("dark-theme");
    moonIcon.style.display = "inline-block";
    sunIcon.style.display = "none"
})

// Task-Three
var question = document.getElementsByClassName("question")
var arrowUp = document.getElementById("#up")
var arrowDown = document.getElementById("#down")
console.log(arrowUp)
for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function(){
        question[i].classList.toggle('active')
        var answer = question[i].nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null
        }
        else {
            answer.style.maxHeight = answer.scrollHeight + "px"
        }
    })
}

// Task-Four
var stars = document.querySelectorAll(".review i")
stars.forEach((item, index) => {
    item.addEventListener("click", () => {

        stars.forEach(s =>
            s.classList.remove("fa-solid")
        )

        for (let i = 0; i <= index; i++) {
            stars[i].classList.add("fa-solid")
        }
    })
})    

// function saveData(i) {
//     localStorage.setItem("data", i);
// }