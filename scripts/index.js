const topLeftInput = document.getElementById("top-left");
const topRightInput = document.getElementById("top-right");
const bottomRightInput = document.getElementById("bottom-right");
const bottomLeftInput = document.getElementById("bottom-left");

const topLeftOutput = document.getElementById("top-left-output");
const topRightOutput = document.getElementById("top-right-output");
const bottomRightOutput = document.getElementById("bottom-right-output");
const bottomLeftOutput = document.getElementById("bottom-left-output");

const shape = document.getElementById("shape");

const codeOutput = document.getElementById("code-output");

const updatePreview = () => {
    const values = `${topLeftInput.value}% ${topRightInput.value}% ${bottomRightInput.value}% ${bottomLeftInput.value}%`;

    shape.style.borderRadius = values;

    codeOutput.textContent = `border-radius: ${values};`;

    topLeftOutput.textContent = `${topLeftInput.value}%`;
    topRightOutput.textContent = `${topRightInput.value}%`;
    bottomRightOutput.textContent = `${bottomRightInput.value}%`;
    bottomLeftOutput.textContent = `${bottomLeftInput.value}%`;
}

//Calling once at start to initialize code-output element
updatePreview();

const sliders = document.querySelectorAll('input[type="range"]');
sliders.forEach(slider => {
    slider.addEventListener("input", updatePreview);
});

const copyButton = document.getElementById("copy");
copyButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(codeOutput.textContent);
        alert("Copied code to clipboard!");
    }

    catch {
        alert("Failed to copy code to clipboard!");
    }
});