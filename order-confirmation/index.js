const params = new URLSearchParams(window.location.search);
const totalPrice = parseInt(params.get('total-price')) * 1000;
const cart = JSON.parse(params.get('cart'));

const serviceCharge = totalPrice * 0.05;
const pb1 = totalPrice * 0.1;
const total = totalPrice + serviceCharge + pb1;

const date = new Date().toLocaleString('id-ID');

let orderQty = 0;

let content = '';

for (let i = 0; i < cart.length; i++) {
    const e = cart[i];

    if (e[0] > 0) {
        orderQty += e[0];
        content += `
        <div class="row">
            <div>${e[0]} ${menus[i].title} (${menus[i].prices[0].label})</div>
            <div>${(e[0] * menus[i].prices[0].price * 1000).toLocaleString()}</div>
        </div>
        `;
    }

    if (e[1] > 0) {
        orderQty += e[1];
        content += `
        <div class="row">
            <div>${e[1]} ${menus[i].title} (${menus[i].prices[1].label})</div>
            <div>${(e[1] * menus[i].prices[1].price * 1000).toLocaleString()}</div>
        </div>
        `;
    }
}

document.getElementById('ordered-menus').innerHTML = content;

document.getElementById('subtotal').innerHTML = `
    <div class="subtotal">
        <div>Subtotal</div>
        <div>${totalPrice.toLocaleString()}</div>
    </div>
`;

document.getElementById('service').innerHTML = `
    <div class="service">
        <div>Serv 5%</div>
        <div>${serviceCharge.toLocaleString()}</div>
    </div>
`;

document.getElementById('PB').innerHTML = ` 
    <div class="PB">
        <div>PB 1 10%</div>
        <div>${pb1.toLocaleString()}</div>
    </div>
`;

document.getElementById('total').innerHTML = ` 
    <div class="total">
        <div>${orderQty} TOTAL</div>
        <div>${total.toLocaleString()}</div>
    </div>
`;


document.getElementById('time').innerHTML = date;
