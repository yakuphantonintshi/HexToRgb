document.getElementById('rgbForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const red = parseInt(document.getElementById('red').value);
    const green = parseInt(document.getElementById('green').value);
    const blue = parseInt(document.getElementById('blue').value);

    const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const hexColor = '#' + toHex(red) + toHex(green) + toHex(blue);

    document.getElementById('hexColor').textContent = hexColor;
    document.getElementById('colorPreview').style.backgroundColor = hexColor;
});