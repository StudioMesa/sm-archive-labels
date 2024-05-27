document.addEventListener("DOMContentLoaded", function() {
var archiveLinks = document.querySelectorAll('.archive-block-wrapper .archive-group-name-link');
var buttonWrap = document.getElementById('button-wrap');
archiveLinks.forEach(function(link) {
var text = link.textContent.trim();
if (text) {
var button = document.createElement('div');
button.className = 'filter-button';
button.textContent = text;
buttonWrap.appendChild(button);
}
});
});
