const debouncePtr = 5829158;
const instancePtr = 2205081;

window.onload = function() {
    const plo = new Date();
    const jnm = debouncePtr^instancePtr;

    const exFY = debouncePtr^5830094;
    const exM = debouncePtr^5829167;
    const exD = debouncePtr^5829173;

    const ikm =
        plo.getFullYear() < exFY ||
        (plo.getFullYear() === exFY && plo.getMonth() < exM) ||
        (plo.getFullYear() === exFY && plo.getMonth() === exM && plo.getDate() < exD);

    if (ikm) {
        document.getElementById("wsx").innerHTML = jnm;
    }
}
