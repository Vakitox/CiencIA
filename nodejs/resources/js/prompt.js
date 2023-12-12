const btnPromptBrecha1= document.getElementById("copiarPrompt1");
const btnPromptBrecha2= document.getElementById("copiarPrompt2");
const btnPromptBrecha3= document.getElementById("copiarPrompt3");
const btnPromptBrecha4= document.getElementById("copiarPrompt4");
const btnPromptBrecha5= document.getElementById("copiarPrompt5");

const promptBrecha1 = document.getElementById("prompt-brecha-1");
const promptBrecha2 = document.getElementById("prompt-brecha-2");
const promptBrecha3 = document.getElementById("prompt-brecha-3");
const promptBrecha4 = document.getElementById("prompt-brecha-4");
const promptBrecha5 = document.getElementById("prompt-brecha-5");

btnPromptBrecha1.addEventListener("click", () => {
    promptBrecha1.select();
    document.execCommand('copy');
});

btnPromptBrecha2.addEventListener("click", () => {
    promptBrecha2.select();
    document.execCommand('copy');
});

btnPromptBrecha3.addEventListener("click", () => {
    promptBrecha3.select();
    document.execCommand('copy');
});

btnPromptBrecha4.addEventListener("click", () => {
    promptBrecha4.select();
    document.execCommand('copy');
});

btnPromptBrecha5.addEventListener("click", () => {
    promptBrecha5.select();
    document.execCommand('copy');
});