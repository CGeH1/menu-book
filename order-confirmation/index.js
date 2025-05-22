const params = new URLSearchParams(window.location.search);
const totalPrice = parseInt(params.get('total-price'));
const cart = JSON.parse(params.get('cart'));

let content = '';

content += `<div>Terimakasih atas pesanan anda: Rp ${(totalPrice * 1000).toLocaleString()}</div>`;

for (let i = 0; i < cart.length; i++) {
    const e = cart[i];

    if (e[0] > 0) {
        content += `<div>${e[0]} ${menus[i].title} (${menus[i].prices[0].label}): ${menus[i].prices[0].price}</div>`;
    }

    if (e[1] > 0) {
        content += `<div>${e[1]} ${menus[i].title} (${menus[i].prices[1].label}): ${menus[i].prices[1].price}</div>`;
    }
}

document.getElementById('outer').innerHTML = content

