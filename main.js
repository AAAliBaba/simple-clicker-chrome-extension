document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn_add").addEventListener('click', onAddClick, false);
    document.getElementById("btn_sub").addEventListener('click', onSubClick, false);
    chrome.storage.sync.set({'count': 0});
    chrome.storage.onChanged.addListener(setCount);
}, false);

function onAddClick () {
    chrome.storage.sync.get('count', function(data) {
        let c = data['count'] + 1;
        console.log(c);
        chrome.storage.sync.set({'count': c});
    });
}

function onSubClick () {
    chrome.storage.sync.get('count', function(data) {
        let c = data['count'] - 1;
        chrome.storage.sync.set({'count': c});
        console.log(c);
    });
}

function setCount () {
    chrome.storage.sync.get('count', function(data) {
        document.getElementById("cnt").innerText = `${data['count']}`;
        console.log(data['count']);
    })
}