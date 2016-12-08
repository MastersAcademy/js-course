/**
 * Changes the theme of the page.
 * @param theme CSS class with the theme of page.
 */
function changeTheme(theme) {
    document.body.className = theme;
}
/**
 *
 */
function showPopup() {
    var element = document.getElementById("popup");
    element.className = "visible-popup";
    var op = 0.1;
    var timer = setInterval(function () {
        if(op > 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 25);
}
/**
 *
 */
function hidePopup() {
    var element = document.getElementById("popup");
    element.className = "invisible-popup";
    element.style.opacity = 0;
}
document.onclick = function(e) {
    e = e || event;
    var target = e.target || e.srcElement;
    if (target.id === "popup") {
        hidePopup();
    }
};