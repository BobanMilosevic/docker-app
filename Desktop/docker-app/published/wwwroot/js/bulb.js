document.addEventListener("DOMContentLoaded", () => {
    var bulb = document.querySelector("#bulb");
    var switchButton = document.querySelector("#switchButton");
    var paragraph = document.querySelector("p"); // Den <p>-Tag auswählen
    
    // Set initial state: bulb is ON and paragraph is white
    var current = 0; // 0 means ON

    // Initial styling
    switchButton.innerHTML = "OFF";
    switchButton.style.padding = "20px 7.5px";
    bulb.style.backgroundColor = "yellow"; // Glühbirne an
    paragraph.style.color = "white"; // Textfarbe weiß

    switchButton.addEventListener("click", () => {
        if (current === 0) {
            switchButton.innerHTML = "ON";
            switchButton.style.padding = "20px 12px";
            bulb.style.backgroundColor = "grey"; // Glühbirne aus
            paragraph.style.color = "black"; // Textfarbe schwarz
            current = 1; // 1 means OFF
        } else {
            switchButton.innerHTML = "OFF";
            switchButton.style.padding = "20px 7.5px";
            bulb.style.backgroundColor = "yellow"; // Glühbirne an
            paragraph.style.color = "white"; // Textfarbe wieder weiß
            current = 0; // 0 means ON
        }
    });
});
