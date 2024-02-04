document.getElementById('settingsButton').onclick = function() {
    document.getElementById('settingsDialog').showModal();
};

document.getElementById('closeButton').onclick = function() {
    document.getElementById('settingsDialog').close();
};

function liveSettings() {
    // Get the selected font, text color, and background color
    let selectedFont = document.getElementById('fontSelector').value;
    let guestColor = document.getElementById('guestColorSelector').value;
    let hostnameColor = document.getElementById('hostnameColorSelector').value;

    // Apply the selected font and colors
    applySettings(selectedFont, guestColor, hostnameColor);

    // Change the color of the labels
    document.getElementById('labelGuestColor').style.color = guestColor;
    document.getElementById('labelHostnameColor').style.color = hostnameColor;
}

// Add event listeners to the form controls
fontSelector.addEventListener('change', liveSettings);
guestColorSelector.addEventListener('input', liveSettings);
hostnameColorSelector.addEventListener('input', liveSettings);

function resetSettings() {
    // Set the default font and colors
    let defaultFont = 'CaskaydiaCoveNerdFont-Bold';
    let defaultGuestColor = '#2fbb4f';
    let defaultHostnameColor = '#b026ff';

    // Update the form inputs to the default values
    document.getElementById('fontSelector').value = defaultFont;
    document.getElementById('guestColorSelector').value = defaultGuestColor;
    document.getElementById('hostnameColorSelector').value = defaultHostnameColor;

    // Apply the default settings
    applySettings(defaultFont, defaultGuestColor, defaultHostnameColor);

    // Store the default settings in localStorage
    localStorage.setItem('selectedFont', defaultFont);
    localStorage.setItem('guestColor', defaultGuestColor);
    localStorage.setItem('hostnameColor', defaultHostnameColor);
}

function changeSettings() {
    // Get the selected font, text color, and background color
    let selectedFont = document.getElementById('fontSelector').value;
    let guestColor = document.getElementById('guestColorSelector').value;
    let hostnameColor = document.getElementById('hostnameColorSelector').value;

    // Store the selected font in localStorage
    localStorage.setItem('selectedFont', selectedFont);
    localStorage.setItem('selectedGuestColor', guestColor);
    localStorage.setItem('selectedHostnameColor', hostnameColor);

    applySettings(selectedFont, guestColor, hostnameColor);
}

// Prevent setting reset onload
window.onload = function() {
    // Check if a font has been stored in localStorage
    let selectedFont = localStorage.getItem('selectedFont');
    let selectedGuestColor = localStorage.getItem('selectedGuestColor');
    let selectedHostnameColor = localStorage.getItem('selectedHostnameColor');

    applySettings(selectedFont, selectedGuestColor, selectedHostnameColor);
};

function applySettings(font, guestColor, hostnameColor) {
    // Create a new style element
    let style = document.createElement('style');

    // Add a @font-face rule and color rules to the style element
    style.innerHTML = `
        @font-face {
            font-family: "${font}";
            src: url("./assets/CascadiaCode/${font}.ttf");
        }
        #guest {
            color: ${guestColor};
        }
        #hostname {
            color: ${hostnameColor};
        }
    `;

    // Append the style element to the document head
    document.head.appendChild(style);

    // Change the font-family of the body element
    document.body.style.fontFamily = font;
}
