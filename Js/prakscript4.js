const inputField = document.getElementById("inputField");
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    key.addEventListener("click", () => {
        const keyText = key.textContent;

        if (keyText === "←") {
            inputField.value = inputField.value.slice(0, -1);
        } else if (keyText === "Пробіл") {
            inputField.value += " ";
        } else if (keyText === "Enter") {
            inputField.value += "\n";
        } else if (keyText !== "Shift" && keyText !== "Caps Lock" && keyText !== "Tab") {
            inputField.value += keyText;
        }
    });
});
