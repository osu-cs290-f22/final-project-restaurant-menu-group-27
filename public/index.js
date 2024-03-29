var allItems = document.querySelectorAll('.menu-items')


/*      BUTTON VARIABLES AND EVENT LISTENERS        */
var cartButton = document.getElementById("customer-cart-button")
var buyButton = document.getElementById("modal-buy-button")
var exitButton = document.getElementById("modal-exit-button")
var breakfastButton = document.getElementById("breakfast-menu-button")
var lunchButton = document.getElementById("lunch-menu-button")
var dinnerButton = document.getElementById("dinner-menu-button")
var specialButton = document.getElementById("specials-menu-button")
var addButtons = document.querySelectorAll("#addto-cart-button")
var clearButton = document.getElementById("modal-clear-button")

//display modal to user
function customerCartButtonHandler(event) {
    console.log("== Customer Cart Button was clicked")

    document.getElementById("modal-backdrop").style.display = "block"
    document.getElementById("customer-cart-modal").style.display = "block"

    event.stopPropagation()
}

//exit modal, clear items in cart
function buyButtonHandler(event) {
    console.log("The buy button within the modal was clicked")

    document.getElementById("modal-backdrop").style.display = "none"
	document.getElementById("customer-cart-modal").style.display = "none"

    alert("Please remember to pay upon delivery!")

    var cartItems = document.querySelectorAll('.cart-item')
    for (var x = 0; x < cartItems.length; x++)
        cartItems[x].remove()

    event.stopPropagation()
}

//exit modal, keep items in cart
function exitButtonHandler(event) {
    console.log("The cancel button within the modal was clicked")

    document.getElementById("modal-backdrop").style.display = "none"
	document.getElementById("customer-cart-modal").style.display = "none"

    event.stopPropagation()
}

//shows breakfast items
function breakfastButtonHandler(event) {
    console.log("The breakfast button was clicked")

    window.scroll(0, 465)

    event.stopPropagation()
}

//shows lunch items
function lunchButtonHandler(event) {
    console.log("The lunch button was clicked")

    window.scroll(0, 1060)

    event.stopPropagation()
}

//shows dinner items
function dinnerButtonHandler(event) {
    console.log("The dinner button was clicked")

    window.scroll(0, 1650)

    event.stopPropagaon()
}

//show special items
function specialButtonHandler(event) {
    console.log("The specials button was clicked")

    window.scroll(0, 2200)

    event.stopPropagation()
}

//adds a menu item to the customer's cart
function addButtonHandler(event) {
    console.log("An add button was clicked")
   
    //get all data of clicked menu item
    var url = event.target.parentNode.childNodes[1].src
    var name = event.target.parentNode.childNodes[1].alt
    var price = event.target.parentNode.childNodes[3].childNodes[3].innerText
    var ingredients = event.target.parentNode.childNodes[3].childNodes[5].innerText
    var reviews = event.target.parentNode.childNodes[3].childNodes[7].innerText

    addToCart(name, url, price, ingredients, reviews)

    event.stopPropagation()
}

//this function will clear the items in the cart
function clearButtonHandler(event) {
    console.log("The clear cart button was clicked")

    var cartItems = document.querySelectorAll('.cart-item')
    for (var x = 0; x < cartItems.length; x++)
        cartItems[x].remove()

    event.stopPropagation()
}

cartButton.addEventListener("click", customerCartButtonHandler)
buyButton.addEventListener("click", buyButtonHandler)
exitButton.addEventListener("click", exitButtonHandler)
breakfastButton.addEventListener("click", breakfastButtonHandler)
lunchButton.addEventListener("click", lunchButtonHandler)
dinnerButton.addEventListener("click", dinnerButtonHandler)
specialButton.addEventListener("click", specialButtonHandler)
clearButton.addEventListener("click", clearButtonHandler)

for (var x = 0; x < addButtons.length; x++) 
    addButtons[x].addEventListener("click", addButtonHandler)
/*************************************************************/

//this function will add a specific menu item to the customer cart
function addToCart(name, url, price, ingredients, reviews) {

    var newItem = Handlebars.templates.modalCart({
        name: name,
        url: url,
        price: price,
        ingredients: ingredients,
        reviews: reviews
    })

    var itemContainer = document.querySelector(".cart-item")
    itemContainer.insertAdjacentHTML("beforeend", newItem)
}