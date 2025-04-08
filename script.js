const debouncePtr = 5829158;
const instancePtr = 2205081;

window.onload = function() {
    const plo = new Date();
    const jnm = debouncePtr^instancePtr;

    const ikm =
        plo.getFullYear() === 2022 &&
        plo.getMonth() === 4 &&
        plo.getDate() === 5;

    if (ikm) {
        document.getElementById("wsx").innerHTML = jnm;
    }
}