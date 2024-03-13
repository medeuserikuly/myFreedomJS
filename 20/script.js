const selectElement = document.getElementById('currency');
const inputElement = document.getElementById('inputElement');
const result = document.querySelector('.result');
let selectedCurrency = 'USD';
let data;

async function convert() {
    const response = await fetch('https://open.er-api.com/v6/latest/KZT');
    data = await response.json();
    for (const key in data.rates) {
        const optionsElement = document.createElement('option');
        optionsElement.value = key;
        optionsElement.textContent = key;
        if (key === selectedCurrency) {
            optionsElement.selected = true;
        }
        selectElement.appendChild(optionsElement);
    }

    selectElement.addEventListener('change', () => {
        selectedCurrency = selectElement.value;
        updateResult();
    });

    inputElement.addEventListener('input', () => {
        updateResult();
    });
}

function updateResult() {
    const inputValue = inputElement.value;
    result.textContent = `${Math.floor(inputValue * data.rates[selectedCurrency])} ${selectedCurrency}`;
}

convert();