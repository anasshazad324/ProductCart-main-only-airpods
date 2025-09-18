
let count = 1
document.getElementById("count").innerHTML = count
const increase = () => {
    if (count < 9) {
        count++
        document.getElementById("count").innerHTML = count
    }
    else {
        console.log("limit exceed");
    }
}
const decrease = () => {
    if (count > 1) {
        count--
        document.getElementById("count").innerHTML = count
    }
    else {
        console.log("limit exceed");
    }

}
const buynow = () => {
    alert("Your order place now!!!")
    window.location.reload()
}
const addtocart = () => {
    alert("Your order added successfully😊")
    window.location.reload()
}


let darkmode = () => {
    document.getElementById("body").style.backgroundColor = "black"
    document.getElementById("body").style.color = "black"
}

let lightmode = () => {
    document.getElementById("body").style.background = "lightblue"
    document.getElementById("body").style.color = "black"

}