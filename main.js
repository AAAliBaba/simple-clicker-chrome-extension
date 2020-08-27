document.addEventListener('DOMContentLoaded', function() {
    //adding event listeners to the buttons
    document.getElementById("btn_add").addEventListener('click', onAddClick, false);
    document.getElementById("btn_sub").addEventListener('click', onSubClick, false);

    //adding storage listener
    chrome.storage.onChanged.addListener(setCount);

    //initializing "count" in storage if it is not already
    chrome.storage.sync.get('count', function(data) {
        data == undefined ? chrome.storage.sync.set({'count': 0}) : chrome.storage.sync.set({'count': data['count']});
        setCount();
    })
}, false);

function onAddClick () {
    //gets current count and increments by one
    chrome.storage.sync.get('count', function(data) {
        chrome.storage.sync.set({'count': data['count'] + 1});
    });
}

function onSubClick () {
    //gets current count and decrements by one
    chrome.storage.sync.get('count', function(data) {
        chrome.storage.sync.set({'count': data['count'] - 1});
    });
}

function setCount () {
    //updates the counter
    chrome.storage.sync.get('count', function(data) {
        document.getElementById("cnt").innerText = `${data['count']}`;
    })
}