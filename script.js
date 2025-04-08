const debouncePtr = 5829158;
const instancePtr = 2205081;

window.onload = function() {
    const plo = new Date();
    const jnm = debouncePtr^instancePtr;

    const exFY = debouncePtr^5830080;
    const exM = debouncePtr^5829154;
    const exD = debouncePtr^5829155;

    const ikm =
        plo.getFullYear() === exFY &&
        plo.getMonth() === exM &&
        plo.getDate() === exD;

    if (ikm) {
        document.getElementById("wsx").innerHTML = jnm;
    }
}