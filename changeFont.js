function changeFont() {
    // Get the dropdown element
    var selector = document.getElementById('fontSelector');

    // Get the selected font from the dropdown
    var selectedFont = selector.options[selector.selectedIndex].value;

    // Create a new style element
    var style = document.createElement('style');

    // Add a @font-face rule to the style element
    style.innerHTML = `
        @font-face {
            font-family: "${selectedFont}";
            src: url("./assets/CascadiaCode/${selectedFont}.ttf");
        }
    `;

    // Append the style element to the document head
    document.head.appendChild(style);

    // Change the font-family of the body element
    document.body.style.fontFamily = selectedFont;
}
