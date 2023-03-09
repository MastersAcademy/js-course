/**
 * Get list elements.
 */
var allElements = (function() {
    return document.querySelector(".list");
})();
/**
 * Pressed "preview".
 */
function clickPrev() {
    for(var i = allElements.childElementCount - 1; i > 0 ; --i) {
        // If found 3 elements in series:
        if (threeInARow(i, "up")) {
            // If not the start of list:
            if (i - 3 >= 0) {
                // Hide and show elements.
                allElements.children[i].className = "hide";
                allElements.children[i - 3].className = "show";
                // Exit.
                break;
            }
            else {
                // If start of list turn over list elements from bottom to top.
                for(var j = allElements.childElementCount - 1; j > 0 ; --j) {
                    allElements.insertBefore(allElements.children[j], allElements.children[j - 1]);
                }
                clickPrev();
            }
        }
    }
}
/**
 * Pressed "next".
 */
function clickNext() {
    for(var i = 0; i < allElements.childElementCount; ++i) {
        // If found 3 elements in series:
        if(threeInARow(i, "down")) {
            if(i + 3 < allElements.childElementCount){
                // Hide and show elements.
                allElements.children[i].className = "hide";
                allElements.children[i + 3].className = "show";
                // Exit.
                break;
            }
            else {
                // If end of list turn over list elements form top to bottom.
                var k = 0;
                for(var j = i; j < allElements.childElementCount; ++j) {
                    allElements.insertBefore(allElements.children[j], allElements.children[k]);
                    ++k;
                }
                clickNext();
            }
        }
    }
}
/**
 * Checks is there a three elements one by one.
 * @param i Element which begins the sequence.
 * @param direction Direction for checks(up(i-) or down(i+)).
 * @returns {boolean} true - if sequence found, false - if sequence not found.
 */
function threeInARow(i, direction) {
    try {
        switch(direction) {
            case "down":
                if(allElements.children[i].className === "show" &&
                    allElements.children[i + 1].className === "show" &&
                    allElements.children[i + 2].className === "show") {
                    return true;
                }
                break;
            case "up":
                if(allElements.children[i].className === "show" &&
                    allElements.children[i - 1].className === "show" &&
                    allElements.children[i - 2].className === "show") {
                    return true;
                }
                break;
        }
    }
    catch(e) {
        return false;
    }
    return false;
}