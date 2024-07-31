let count = 0;
let filledBags = [];

const counterEl = document.getElementById("counter-el");
const saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    counterEl.textContent = count;
}

function save() {
    if (count > 0) {
        filledBags.push(count);
        saveEl.textContent = "Filled-bags: " + filledBags.join(", ");
        count = 0;
        counterEl.textContent = count;
    }
}

function clean() {
    count = 0;
    counterEl.textContent = count;
    filledBags = [];
    saveEl.textContent = "Filled-bags: ";
}
