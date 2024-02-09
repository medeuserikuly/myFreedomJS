const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('selected'));
        image.classList.add('selected');
        document.body.style.backgroundImage = `url(${image.src})`;
        localStorage.setItem('selectedImage', image.src);
    });

    const selectedImageSrc = localStorage.getItem('selectedImage');
    
    if (selectedImageSrc) {
        const selectedImage = document.querySelector(`.image[src="${selectedImageSrc}"]`);
        if (selectedImage) {
            selectedImage.classList.add('selected');
            document.body.style.backgroundImage = `url(${selectedImageSrc})`;
        }
    }
});