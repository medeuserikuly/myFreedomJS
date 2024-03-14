import playList from "./playList.js";

function player() {
    const playBtn = document.querySelector('.play');
    const playPrev = document.querySelector('.play-prev');
    const playNext = document.querySelector('.play-next');

    const ulElement = document.querySelector('.play-list');

    let isPlay = false;
    let playNum = 0;

    const audio = new Audio();

    function playAudio() {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        if (!isPlay) {
            isPlay = true;
            playBtn.classList.add('pause');
            audio.play();
        } else {
            isPlay = false;
            playBtn.classList.remove('pause');
            audio.pause();
        }
        updateActiveItem();
    }

    function nextSound(n) {
        playNum += n;
        if (playNum > 3) {
            playNum = 0;
        }
        if (playNum < 0) {
            playNum = 3;
        }
        return playNum;
    }



    function buildPlayList() {
        playList.forEach((item, i) => {
            const li = document.createElement('li');
            li.textContent = item.title;
            li.classList.add('play-item');
            ulElement.appendChild(li);
        });
    }
    buildPlayList();


    function updateActiveItem() {
        const liElements = document.querySelectorAll('.play-item');
        liElements.forEach((li, i) => {
            li.classList.remove('item-active')
            if (i === playNum) {
                li.classList.add('item-active');
            }
        });
    }

    function handleButtonClick(n) {
        isPlay = false;
        nextSound(n);
        playAudio();
    }

    playBtn.addEventListener('click', playAudio);
    playPrev.addEventListener('click', () => handleButtonClick(-1));
    playNext.addEventListener('click', () => handleButtonClick(1));

    updateActiveItem();
}

export default player;