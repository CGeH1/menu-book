const params = new URLSearchParams(window.location.search);
const totalPrice = parseInt(params.get('total-price'));
const cart = JSON.parse(params.get('cart'));

let content ='';

content += `<div>Terimakasih atas pesanan anda: Rp ${(totalPrice * 1000).toLocaleString()}</div>`;

for (let i = 0; i < cart.length; i++) {
    const e = cart[i];
    
    if(e[0]>1 || e[1] > 1) {
        content += `<div>Menu ${i+1}: ${e} </div>`;
    }


}

document.getElementById('outer').innerHTML = content
