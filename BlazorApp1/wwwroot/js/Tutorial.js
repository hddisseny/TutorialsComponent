 
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

    //console.log(document.getElementsByClassName(h));
    //console.log(getOffset(document.getElementsByClassName(h)))
//}
var snapToClassCursor;

function OnWindowResize() {
    console.log(snapToClassCursor);

    var elementSelected = document.getElementsByClassName(snapToClassCursor);
    var viewportOffset = elementSelected[0].getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var top = viewportOffset.top;
    var left = viewportOffset.left;
    var bottom = viewportOffset.bottom;
    var right = viewportOffset.right;
    var elementStep = document.getElementsByClassName("tt-step");
    console.log("------");
    console.log("elementSelected");
    console.log(elementSelected);
    console.log("viewportOffset");
    console.log(viewportOffset);
    console.log("top");
    console.log(top);
    console.log("left");
    console.log(left);
    console.log("bottom");
    console.log(bottom);
    console.log("right");
    console.log(right);
    console.log("------");

    var fright = right + 65;
    elementStep[0].style.left = fright + "px";
    var ftop = top - 30;
    elementStep[0].style.top = ftop + "px";
    return snapToClassCursor;
} window.addEventListener('resize', OnWindowResize);


window.OnBlazorCall = (snapToClass ) => {
    snapToClassCursor = snapToClass;
    OnWindowResize();
};
 