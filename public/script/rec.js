// a = href id
let a = document.getElementById("gotoresultpg")

//num = inputted value
let num = document.getElementById("randomgenvalue")

//right now since this doesn't update and generates automatically
// it just spits out the num as nothing/no input
//how to update it to change/update the a.href when num changes?

function getresult_link(){
    a.href = "/recommendations/" + num
}

num.addEventListener("input", getresult_link)

// look up for when num value changes, update a.href
// works by redirect --nbut returns [object%20HTMLInputElement] 
//instead of number, and then keeps saving the number
// until updated -- make so when returning to the page
// set to empty input