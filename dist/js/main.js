"use strict";
var contents = document.querySelectorAll('.content');
var listItems = document.querySelectorAll('nav ul li');
function hideAllContents() {
    contents.forEach(function (content) { return content.classList.remove('show'); });
}
function hideAllItems() {
    listItems.forEach(function (item) { return item.classList.remove('active'); });
}
listItems.forEach(function (item, idx) {
    item.addEventListener('click', function () {
        hideAllContents();
        hideAllItems();
        item.classList.add('active');
        contents[idx].classList.add('show');
    });
});
