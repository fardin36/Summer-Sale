let x = 0;
let couponCode = "";

function getInnerPrice(params) {
    const amount = parseFloat(document.getElementById(params).innerText);
    return amount;
}

function discountFunction() {
    let discount = (x / 100) * 20;
    document.getElementById('discount').innerText = discount.toFixed(2);
    document.getElementById('discounted-price').innerText = (x - discount).toFixed(2);
}

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.addEventListener('click', function () {
        const productName = card.children[1].children[1].innerText;
        const productPrice = parseFloat(card.children[1].children[2].children[0].innerText);
        const newListItem = document.createElement("li");
        newListItem.textContent = productName;
        document.getElementById('cart-products').appendChild(newListItem);
        const newTotalPrice = getInnerPrice('total-price') + productPrice;
        document.getElementById('total-price').innerText = newTotalPrice.toFixed(2);
        x = newTotalPrice;
        console.log(x);
        if (newTotalPrice >= 200) {
            document.getElementById('coupon-apply').removeAttribute('disabled');
        }
        if (newTotalPrice > 0) {
            document.getElementById('make-purchase').removeAttribute('disabled');
        }
        if (couponCode == 'SELL200') {
            discountFunction();
        }
        if (couponCode != 'SELL200') {
            document.getElementById('discounted-price').innerText = newTotalPrice.toFixed(2);
        }
    })
}


document.getElementById('coupon-apply').addEventListener('click', function () {
    let a = document.getElementById('coupon-field').value;
    if (a == 'SELL200') {
        couponCode = a;
        discountFunction();
    }
    else {
        alert('Invalid Coupon Code!!');
    }
    document.getElementById('coupon-field').value = '';
})

document.getElementById('make-purchase').addEventListener('click', function () {
    document.getElementById('cart-products').innerHTML = '';
    document.getElementById('total-price').innerText = '00.00';
    document.getElementById('discount').innerText = '00.00';
    document.getElementById('discounted-price').innerText = '00.00';
    document.getElementById('coupon-apply').setAttribute('disabled', 'true');
    document.getElementById('make-purchase').setAttribute('disabled', 'true');
    couponCode = "";
})

document.getElementById('coupon-button').addEventListener('click', function(){
    if (getInnerPrice('total-price') >= 200.00) {
        document.getElementById('coupon-field').value = 'SELL200';
        alert('Coupon code entered.')
    }
    else
    alert('Please! make purchase more than 199tk.');
})