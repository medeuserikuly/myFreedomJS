function quote() {
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const btn = document.querySelector('.change-quote');

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    async function getQuotes() {
        try {
            const response = await fetch('./quotes.json');
            const data = await response.json();
            let i = getRandomInteger(0, data.length);
            quote.textContent = data[i].text;
            author.textContent = data[i].author;
        } catch(e) {
            console.log(e);
        }
    }

    getQuotes();

    btn.addEventListener('click', () => {
        getQuotes()
    })

}

export default quote;