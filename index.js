const menus = [{
    title: "Avocado Pesto Salad",
    description: "Home-grown vegetables with load of avocado, topped with mouthwatering pesto salad",
    photoUrl: "assets/salad.jpg",
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
    photoUrl: "assets/pizza.jpg",
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
    photoUrl: "assets/wine.jpg",
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
    photoUrl: "assets/coffee.jpg",
    prices: [{
        label: "Americano",
        price: 25
    }, {
        label: "Latte",
        price: 30
    }]
}];

const cart = [
    [0,0],
    [0,0],
    [0,0],
    [0,0]
];

let menuArea = "";

for (let i=0; i< menus.length; i++) {
    const e = menus [i]

    menuArea += `
        <div class="menu-tile">
            <div class="menu-photo">
                <img src="${e.photoUrl}" alt="${e.title}">
            </div>
            <div class="menu-tile-name">${e.title}</div>
            <div class="menu-tile-description">${e.description}</div>
            <div class="menu-price-row">
                <span class="price-description"></span>
                <div class="price-and-qty">
                    <span class="price">35</span>
                    <button onclick="substractQty(0,0)">
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty00">0</span>
                    <button onclick="addQty(0,0)">
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>

            <div class="menu-price-row">
                <span class="price-description">+ Grilled Salmon</span>
                <div class="price-and-qty">
                    <span class="price">55</span>
                    <button onclick='substractQty(0,1)'>
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty01">0</span>
                    <button onclick='addQty(0,1)'>
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>
        </div>

        <div class="menu-tile">
            <div class="menu-photo">
                <img src="assets/pizza.jpg" alt="pizza">
            </div>
            <div class="menu-tile-name">Triple Cheese Pizza</div>
            <div class="menu-tile-description">“Indulge yourself in this simple yet delicious delicacy”</div>
            <div class="menu-price-row">
                <span class="price-description">1 Slice</span>
                <div class="price-and-qty">
                    <span class="price">15</span>
                    <button onclick='substractQty(1,0)'>
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty10">0</span>
                    <button onclick='addQty(1,0)'>
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>
            <div class="menu-price-row">
                <span class="price-description">Pan (6 slices)</span>
                <div class="price-and-qty">
                    <span class="price">60</span>
                    <button onclick='substractQty(1,1)'>
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty11">0</span>
                    <button onclick='addQty(1,1)'>
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>
        </div>

        <div class="menu-tile">
            <div class="menu-photo">
                <img src="assets/wine.jpg" alt="wine">
            </div>
            <div class="menu-tile-name">Seasonal Wine</div>
            <div class="menu-tile-description">“A great meal becomes perfect when combined with a good wine”
            </div>
            <div class="menu-price-row">
                <span class="price-description">Glass</span>
                <div class="price-and-qty">
                    <span class="price">100</span>
                    <button onclick='substractQty(2,0)'>
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty20">0</span>
                    <button onclick='addQty(2,0)'>
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>
            <div class="menu-price-row">
                <span class="price-description">Bottle</span>
                <div class="price-and-qty">
                    <span class="price">1500</span>
                    <button onclick='substractQty(2,1)'>
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty21">0</span>
                    <button onclick='addQty(2,1)'>
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>
        </div>

        <div class="menu-tile">
            <div class="menu-photo">
                <img src="assets/coffee.jpg" alt="coffee">
            </div>
            <div class="menu-tile-name">Coffee</div>
            <div class="menu-tile-description">“The best coffee you can have from the land of Indonesia”
            </div>
            <div class="menu-price-row">
                <span class="price-description">Americano</span>
                <div class="price-and-qty">
                    <span class="price">25</span>
                    <button onclick='substractQty(3,0)'>
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty30">0</span>
                    <button onclick='addQty(3,0)'>
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>
            <div class="menu-price-row">
                <span class="price-description">Latte</span>
                <div class="price-and-qty">
                    <span class="price">30</span>
                    <button onclick='substractQty(3,1)'>
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty31">0</span>
                    <button onclick='addQty(3,1)'>
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>
        </div>
    `
            

}

function addQty(menuIndex, priceIndex) {
    cart [menuIndex][priceIndex] = cart [menuIndex][priceIndex] + 1;
    document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart [menuIndex][priceIndex] = cart [menuIndex][priceIndex];
}

function substractQty(menuIndex, priceIndex) {
    cart [menuIndex][priceIndex] = cart [menuIndex][priceIndex] - 1;
    document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart [menuIndex][priceIndex] = cart [menuIndex][priceIndex];
}
