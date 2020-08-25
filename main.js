var count = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn_add").addEventListener('click', onAddClick, false);
    document.getElementById("btn_sub").addEventListener('click', onSubClick, false);
}, false);

function onAddClick () {
    count++;
    setCount(count);
}

function onSubClick () {
    count--;
    setCount(count);
}

function setCount (res) {
    document.getElementById("cnt").innerText = ` ${res} `;
}