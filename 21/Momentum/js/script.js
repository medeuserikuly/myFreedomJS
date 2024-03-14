import Time from "./modules/time.js";
import Greetings from "./modules/greetings.js";    
import Slider from "./modules/slider.js";
import weather from "./modules/weather.js";
import quote from "./modules/quote.js";
import player from "./modules/player.js";

window.addEventListener('DOMContentLoaded', () => {
    // Попробовал поработать с классами
    new Time('.time', '.date').init();
    new Greetings('.greeting', '.name').init();
    new Slider('.slide-next', '.slide-prev').init()

    //Functions
    weather();
    quote();
    player();
});