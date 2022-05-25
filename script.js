
num1 = 0

var cart = document.querySelector('#shoppingCart') 

console.log(shoppingCart)

cart.innerText = num1

function buyBtnA() {
    num1++
    cart.innerText = num1
    console.log(num1)
}

// end of buy buttons

var highlightImage = document.querySelector('#highlightImage')

console.log(highlightImage)

function changeImageL() {
    highlightImage.src = 'images/pixel-ninjas-2.png'

}
function changeImageR() {
    highlightImage.src = '/images/stonepunk.png'

}
