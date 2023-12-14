let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Fetch voices when the page loads
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // Populate the voice selection dropdown
    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voiceSelect.options.add(option);
    });
};

// Event listener for voice selection
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Event listener for button click
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;

    // If there is text to speak, initiate speech synthesis
    if (speech.text.trim() !== "") {
        window.speechSynthesis.speak(speech);
    }
});
