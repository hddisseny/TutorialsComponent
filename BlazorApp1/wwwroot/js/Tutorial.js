 
// Manages the registered event listeners so they can be disposed later
//let windowEventListeners = {};

//function AddWindowWidthListener(objReference, classElement) {
//    let eventListener = () => UpdateWindowWidth(objReference, classElement);
//    window.addEventListener("resize", eventListener);
//    windowEventListeners[objReference] = eventListener;
//}

//function RemoveWindowWidthListener(objReference) {
//    window.removeEventListener("resize", windowEventListeners[objReference]);
//}

//function UpdateWindowWidth(objReference, classElement) {
//    console.log(classElement);
//    objReference.invokeMethodAsync("UpdateWindowWidth", window.innerWidth);

//}


//function GetClassElementPosition(classElement) {

//}

window.addEventListener('resize', start);
var h;

function start() {
    console.log(document.getElementsByClassName(h));
    console.log(getOffset(document.getElementsByClassName(h)))
   console.log(h)
}
window.sdsd = (symbol, m) => {
    h = symbol
    start()
};

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}