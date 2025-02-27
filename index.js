const menus = [{
    title: "Avocado Pesto Salad",
    description: "Home-grown vegetables with load of avocado, topped with mouthwatering pesto salad",
    photoUrl: "https://www.google.com",
    prices: [{
        label: "",
        price: 35
    }, {
        label: "+Grilled Salmon",
        price: 55
    }]
}, {
    title: "Triple Cheese Pizza",
    description: "Indulge yourself in this simple yet delicious delicacy",
    photoUrl: "https://www.google.com",
    prices: [{
        label: "1 Slice",
        price: 15
    }, {
        label: "Pan (6 slices)",
        price: 60
    }]
}, {
    title: "Seasonal Wine",
    description: "A great meal becomes perfect when combined with a good wine",
    photoUrl: "https://www.google.com",
    prices: [{
        label: "Glass",
        price: 100
    }, {
        label: "Bottle",
        price: 1500
    }]
}, {
    title: "Coffee",
    description: "The best coffee you can have from the land of Indonesia",
    photoUrl: "https://www.google.com",
    prices: [{
        label: "Americano",
        price: 25
    }, {
        label: "Latte",
        price: 30
    }]
}];

const cart = [
    /// TODO: Create data structure for menu shopping cart
];

function addQty(menuIndex, priceIndex) {
    /// TODO: Access qty of menuIndex and priceIndex in cart, and increment by 1
    document.getElementById("qty" + menuIndex + priceIndex).innerHTML = qty;
}

function substractQty(menuIndex, priceIndex) {
    /// TODO: Access qty of menuIndex and priceIndex in cart, and decrement by 1
    document.getElementById("qty" + menuIndex + priceIndex).innerHTML = qty;
}
let qty = 0;
let qty2 = 0;

function addQty() {
    qty = qty+1
    document.getElementById('qty').innerHTML = qty;
}

function substractQty() {
    qty = qty-1
    document.getElementById('qty').innerHTML = qty;
}

function addQty2() {
    qty2 = qty2+1
    document.getElementById('qty2').innerHTML = qty2;
}

function substractQty2() {
    qty2 = qty2-1
    document.getElementById('qty2').innerHTML = qty2;
}

