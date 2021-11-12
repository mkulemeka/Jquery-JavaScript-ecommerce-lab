$(document).ready(function () {
    updateCartItems();
})

function updateCartItems() {
    var gameCartArray = JSON.parse(sessionStorage.getItem('cartItems'))
    var orderArea = document.getElementById('orders');

    //while (orderArea.firstChild) {
    //    orderArea.removeChild(orderArea.firstChild)
    //}

    for (var i = 0; i < gameCartArray.length; i++) {

        var orderItems = `
            <div class='orderContainer'>
                 <img src='${gameCartArray[i].image}'</img>
                 <div>
                    <h3>${gameCartArray[i].gametitle}</h3>
                    <span>$${gameCartArray[i].price}</span>
                 </div>
                <button type='button' class='deleteOrder'>Delete item</button>
            </div>
        `

        orderArea.innerHTML += orderItems;
    }
}

function removeCartItem() {
    var deleteButtons = $('.deleteOrder')
    for (var i = 0; i < deleteButtons.length; i++) {
        var deleteButtonClick = deleteButtons[i];
        deleteButtonClick.click(function () {
            removeItem();
        })
    }
}

function removeItem() {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}
