function display(val) {
    document.getElementById("screen").value += val
}
function clear() {
    document.getElementById("screen").value = "";
}
function backspace() {
    let screenval = ducument.getElementById("screen").value;
    screenval = screenval.substring(0, screenval.length - 1);
    screen.value = screenval;
    return screen.value;
}
function result() {
    let x = document.getElementById("screen").value;
    let y = eval(x);
    document.getElementById("screen").value = y;
}

