// Task 1
// async function getUsers(url) {
//     const response = await fetch(url);
//     return await response.json();
// }

// getUsers('https://jsonplaceholder.typicode.com/users')
//     .then(res => {
//         res.forEach(element => {
//             const ul = document.createElement('ul');
//             document.body.appendChild(ul);
//             const li = document.createElement('li');
//             li.innerText = element.name;
//             ul.appendChild(li);
//         });
//     })
//     .catch(err => console.log(err));

// Task 2
let inputElement = document.getElementById('inputElement');
const mainBlock = document.querySelector('main');
const footerBlock = document.querySelector('footer');
const btn = document.querySelector('.btn');


btn.addEventListener('click', search);
inputElement.addEventListener('keypress',  (e) => {
    if (e.key === 'Enter') {
       search();
    }
});

async function search() {
    const API = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${inputElement.value}&type=video`;
    
    try {
        const response = await fetch(API);
        const data = await response.json();
        getVideos(data.items)
    } catch (e) {
        console.error(e);
    }
}

async function getVideos(videos) {
        mainBlock.innerHTML = '';
        footerBlock.innerHTML = '';

        videos.forEach((item, i) => {
            const videoId = item.id.videoId;
            const parent = i === 0 ? mainBlock : footerBlock;
            createIframe(videoId, parent)
        });
}


function createIframe(videoId, parent) {
    const iframeElement = document.createElement('iframe')
    iframeElement.width = '560';
    iframeElement.height = '315';
    iframeElement.src = `https://www.youtube.com/embed/${videoId}`;
    iframeElement.frameborder = '0';
    iframeElement.allow = 'autoplay; encrypted-media';
    iframeElement.allowFullscreen = true;

    parent.appendChild(iframeElement);
}