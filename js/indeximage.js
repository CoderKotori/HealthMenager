var i = 1;

function f() {
    i++;
    if (i > 5) i = 1;
    document.getElementById('ad1').style.backgroundPosition = 'left ' + (-1 * i * 20) + 'px';
    document.getElementById('ad2').src = 'image/health' + i + '.gif';
}
window.setInterval(f, 3000);