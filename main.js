let p = document.querySelector('.random-num')
let random = Math.floor(Math.random() *100   )
console.log(random);
p.innerHTML = random

let body = document.querySelector('body')


body.style.backgroundColor ="black"
p.style.color = "red"
p.style.fontSize = "90px"
p.style.textAlign = "center"
p.style.marginTop = "250px"