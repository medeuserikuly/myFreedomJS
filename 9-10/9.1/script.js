const container = document.querySelector('.container'),
      btn = document.querySelector('.btn'),
      input = document.querySelector('.form-control');

btn.addEventListener('click', () => {
    const inputValue = input.value;
    const newCheckboxElement = document.createElement('li');

    newCheckboxElement.classList.add('border', 'rounded-3', 'p-3'); 
    newCheckboxElement.innerHTML = `
            <input id="checkbox" type="checkbox">
            <label for="checkbox">${inputValue}</label>
            <button type="button" class="btn btn-outline-danger">Удалить</button>
    `;
    input.value = '';

    const checkbox = newCheckboxElement.querySelector('#checkbox');
    checkbox.addEventListener('change', () => newCheckboxElement.style.backgroundColor = checkbox.checked ? 'aqua' : '');


    const deleteBtn = newCheckboxElement.querySelector('.btn-outline-danger');
    deleteBtn.addEventListener('click', () => {
        newCheckboxElement.remove();
    });

    if (inputValue !== '') {
        container.appendChild(newCheckboxElement);
    }
}); 
      

