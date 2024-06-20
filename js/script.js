document.addEventListener('DOMContentLoaded', function() {
    const konversiButton = document.getElementById('Konversi');
    const resetButton = document.getElementById('Reset');
    const reverseButton = document.getElementById('Reverse');
    const celciusTextarea = document.querySelector('.celcius textarea');
    const fahrenheitTextarea = document.getElementById('Fahrenheit');
    const calculatorTextarea = document.getElementById('Calculator');

    konversiButton.addEventListener('click', function() {
        const celcius = parseFloat(celciusTextarea.value);
        if (!isNaN(celcius)) {
            const fahrenheit = (celcius * 1.8) + 32;
            fahrenheitTextarea.value = fahrenheit.toFixed(2);
            calculatorTextarea.value = `${celcius}°Cx1.8+32=${fahrenheit.toFixed(2)}°F`;
        } else {
            alert('Masukkan nilai valid');
        }
    });

    resetButton.addEventListener('click', function() {
        celciusTextarea.value = '';
        fahrenheitTextarea.value = '';
        calculatorTextarea.value = '';
    });

    

});
