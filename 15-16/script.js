const countryCardTemplate = document.getElementById('countryCardTemplate')
const cardsContainer = document.getElementById('cardsContainer')
const spinner = document.getElementById('spinner')

async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all', {
            method: 'GET'
        })
        const countries = await response.json()
        const cardCountries = countries.map(county => {
            return {
                name: county.name.official,
                flag: county.flags.png,
                capital: Array.isArray(county.capital) ? county.capital[0] : 'No capital', // Была ошибка когда capital был undefined => undefined[0]
                population: county.population,
                currencies: county.currencies,
                languages: county.languages,
            }
        })
        cardCountries.forEach(county => {
            const cardTemplateClone = countryCardTemplate.content.cloneNode(true);
            const newCard = cardTemplateClone.getElementById('countryCard')
            const newCardImg = cardTemplateClone.getElementById('countyImg')
            const countyName = cardTemplateClone.getElementById('countyName')
            const countryCapital = cardTemplateClone.getElementById('countryCapital')
            const population = cardTemplateClone.getElementById('population')
            const money = cardTemplateClone.getElementById('money')
            const languages = cardTemplateClone.getElementById('languages')
            newCardImg.src = county.flag
            countyName.textContent = county.name
            countryCapital.textContent = county.capital
            population.textContent = county.population
            money.innerHTML = `<span>${Object.values(county.currencies)[0].symbol} ${Object.values(county.currencies)[0].name}</span>` 
            languages.textContent = `${Object.values(county.languages)[0]} ${Object.values(county.languages)[1] ? Object.values(county.languages)[1]  : ''}`
            cardsContainer.append(newCard)
            console.log(Object.values(county.languages));
        })

        

    } catch (err) {
        // alert(err)
    }
    finally {
        spinner.style.display = 'none'
    }
}

fetchCountries()