function updatePrices() {
    document.getElementById("brent").innerText = "$" + (80 + Math.random()*5).toFixed(2);
    document.getElementById("diesel").innerText = "$" + (650 + Math.random()*30).toFixed(2);
    document.getElementById("jet").innerText = "$" + (700 + Math.random()*40).toFixed(2);
}

setInterval(updatePrices, 3000);
window.onload = updatePrices;