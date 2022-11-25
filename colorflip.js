let colors = ["green", "red", "blue", "#fff", "#ccc", "#ddd", "grey"]

let btn = document.getElementById("btn")

let color = document.getElementById("color")

btn.addEventListener("click", function flip(){
    let randomColor = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = colors[randomColor]
    //console.log("clicked");
})