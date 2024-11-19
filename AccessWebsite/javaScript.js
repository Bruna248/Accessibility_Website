//change the font
function changeFontFamily(font) {
    document.body.style.fontFamily = font;
}

//
function openPopup() {
    document.getElementById('settingsPopup').classList.add('open');
}

function closePopup() {
    document.getElementById('settingsPopup').classList.remove('open');
}

function adjustFontSize(size) {
    document.body.style.fontSize = size + 'px';
}



function changeBgColor(color) {
    document.body.style.backgroundColor = color;

    // Display the selected color on the closed dropdown
    const selectedColorDisplay = document.getElementById('selectedColorDisplay');
    selectedColorDisplay.style.backgroundColor = color;
}

function changePersonaTextColor(color) {
    var main = document.getElementById('main');
    main.style.color = color;
}


document.querySelectorAll('.palette-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});


function adjustMarginSize(value) {
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach(item => {
        item.style.marginBottom = value + 'px';
    });
}

function adjustLetterSpacing(value) {
    document.body.style.letterSpacing = value + 'px';
}


function toggleShemeOptions(selection) {
    if (selection === 'manually') {
        document.getElementById('backgroundColorSelection').style.display = 'block';
        document.getElementById('colorSchemeSelection').style.display = 'none';
    } else {
        document.getElementById('backgroundColorSelection').style.display = 'none';
        document.getElementById('colorSchemeSelection').style.display = 'block';
    }
}

// Run the function on page load to activate the default option
document.addEventListener('DOMContentLoaded', () => {
    toggleShemeOptions('manually');
});




var popup = document.getElementById('settingsPopup');
const listItems = document.querySelectorAll('.item');
const listRoundClickable = document.querySelectorAll('.roundClickable');

// Helper function to reset to default color scheme
function resetColorScheme() {
    document.body.style.filter = '';
    document.body.style.backgroundColor = '#f9f2f0';
    document.body.style.color = '#000';
    popup.style.filter = '';
    popup.style.backgroundColor = '#f9f2f0';
    popup.style.color = '#000';
    document.body.style.height = '100vh';
    popup.style.height = '100vh';
    
    listItems.forEach(item => {
        item.style.backgroundColor = '#fff';
    });
    resetHoverStyles();
}

// Helper function to set hover styles
function setHoverStyles(color) {
    listRoundClickable.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = color;
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '';
        });
    });
}

// Reset hover styles to default
function resetHoverStyles() {
    setHoverStyles('');
}

function changeColorScheme(scheme) {
    console.log(`Color scheme changed to: ${scheme}`);
    resetColorScheme();

    // Reference to the span to update the selected option text
    const selectedOptionSpan = document.getElementById('selectedOption');
    

    // Update the span text based on the chosen scheme
    switch (scheme) {
        case 'highContrast':
            selectedOptionSpan.textContent = 'High Contrast';
            document.body.style.backgroundColor = '#000';
            document.body.style.color = '#fff';
            popup.style.backgroundColor = '#000';
            popup.style.color = '#fff';
            listItems.forEach(item => {
                item.style.backgroundColor = '#000';
            });
            setHoverStyles('#fff');
            break;
        
        case 'darkMode':
            selectedOptionSpan.textContent = 'Dark Mode';
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#ccc';
            popup.style.backgroundColor = '#333';
            popup.style.color = '#ccc';
            listItems.forEach(item => {
                item.style.backgroundColor = '#333';
            });
            setHoverStyles('#fff');
            break;
        
        case 'greyScale':
            selectedOptionSpan.textContent = 'Grey Scale';
            document.body.style.backgroundColor = '';
            popup.style.backgroundColor = '';
            document.body.style.filter = 'grayscale(100%)';
            popup.style.filter = 'grayscale(100%)';
            break;
        
        case 'deuteranopia':
            selectedOptionSpan.textContent = 'Deuteranopia';
            document.body.style.backgroundColor = '';
            popup.style.backgroundColor = '';
            document.body.style.filter = 'url(#deuteranopiaFilter)';
            break;
        
        case 'protanopia':
            selectedOptionSpan.textContent = 'Protanopia';
            document.body.style.backgroundColor = '';
            popup.style.backgroundColor = '';
            document.body.style.filter = 'url(#protanopiaFilter)';
            break;
        
        case 'tritanopia':
            selectedOptionSpan.textContent = 'Tritanopia';
            document.body.style.backgroundColor = '';
            popup.style.backgroundColor = '';
            document.body.style.filter = 'url(#tritanopiaFilter)';
            break;
        
        case 'default':
        default:
            selectedOptionSpan.textContent = 'Default';
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    changeColorScheme('default');
});