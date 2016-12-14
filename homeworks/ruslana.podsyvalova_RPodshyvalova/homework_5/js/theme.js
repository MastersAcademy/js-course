/* 
 * darkTheme.addEventListener saves original style of page elements
 * in arrays of objects - stateBlockObjects and stateTxtObjects and changes 
 * them style in dark way;
 * lightTheme.addEventListener recovers original style of page elements
 */
document.addEventListener("DOMContentLoaded", function () {
    var stateBlockObjects = [];
    var stateTxtObjects = [];
    var wrappersChildr = document.querySelector(".wrapper").children;
    var mainChildr = document.querySelector(".main").children;
    var arrOfBlockElemts = Array.prototype.slice.call(wrappersChildr)
        .concat(Array.prototype.slice.call(mainChildr));
    arrOfBlockElemts.push(document.querySelector("body"));

    var textElemts = document.querySelectorAll("h1, h2, h3, p");
    var arrOfTextElemts = Array.prototype.slice.call(textElemts);
    
    var darkTheme = document.querySelector("#darktheme");
    darkTheme.addEventListener("click", function () {
        if (arrOfBlockElemts.length > 0) {
            stateBlockObjects = [];
            arrOfBlockElemts.forEach(function(currNode) {
                stateBlockObjects.push({
                    tag: currNode, 
                    val: currNode.style.background
                });
                currNode.style.background = "gray";
            });
        }
        if (arrOfTextElemts.length > 0) { 
            stateTxtObjects = [];
            arrOfTextElemts.forEach(function(currNode) {
                stateTxtObjects.push({
                    tag: currNode, 
                    val: currNode.style.color
                }); 
                currNode.style.color = "white";
            });
        }
    });

    var lightTheme = document.querySelector("#lighttheme");
    lightTheme.addEventListener("click", function () {
        stateBlockObjects.forEach(function(currNode) {
            currNode["tag"].style.background = currNode["val"];
        });
        stateTxtObjects.forEach(function(currNode) {
            currNode["tag"].style.color = currNode["val"];
        });
    });
});
