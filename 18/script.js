const listGroup = document.querySelector('.list-group');
const cardWrapper = document.querySelector('.card');

async function getUsers() {
    try {
        const response = await fetch(' https://jsonplaceholder.typicode.com/users');
        const usersData = await response.json();
        usersData.forEach(user => {
            createUsers(user.name);
            createCard(user.name, user.username, Object.values(user.address), Object.values(user.company), user.email);
            hideCard();
            showCard();
        });
    } catch (e) {
        console.error(e);
    }

}

getUsers();

listGroup.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('users')) {
        document.querySelectorAll('.users').forEach((item, i) => {
            if (e.target == item) {
                hideCard();
                showCard(i);
            }
        })
    }
})


function createUsers(username) {
    const userElement = document.createElement('a');
    userElement.classList.add('users', 'list-group-item', 'list-group-item-action');
    userElement.innerText = username;
    listGroup.appendChild(userElement);
}

function createCard(name, username, address, company, email) {
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.innerHTML = `
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${username}</h6>
        <p class="card-text">Street: ${address[0]}, Suite: ${address[1]}, City: ${address[2]}, Zipcode: ${address[3]}</p>
        <p class="card-text">${company[0]}</p>
        <a href="mailto:${email}" class="card-link">Написать ему</a>
    `;

    cardWrapper.appendChild(cardBody);
}

function hideCard() {
    document.querySelectorAll('.card-body').forEach(card => {
        card.classList.add('hide');
        document.querySelectorAll('.users').forEach(item => {
            item.classList.remove('active');
        });
    });
}

function showCard(i = 0) {
    const cards = document.querySelectorAll('.card-body');
    cards[i].classList.add('show');
    cards[i].classList.remove('hide');
    document.querySelectorAll('.users')[i].classList.add('active');

}