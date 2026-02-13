const profileImg = document.querySelector('.profile-img');
const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');
const socialLinks = document.querySelector('.social-links');

const images = ['devprofile.jpeg', 'devtajpuriya.jpg'];
let currentImageIndex = 0;

profileImg.style.opacity = '0';
heading.style.opacity = '0';
socialLinks.style.opacity = '0';

profileImg.style.transform = 'scale(0.5)';
heading.style.transform = 'translateY(-20px)';
socialLinks.style.transform = 'translateY(20px)';

profileImg.style.transition = 'all 0.8s ease';
heading.style.transition = 'all 0.8s ease';
socialLinks.style.transition = 'all 0.8s ease';

setTimeout(() => {
    profileImg.style.opacity = '1';
    profileImg.style.transform = 'scale(1)';
}, 100);

setTimeout(() => {
    heading.style.opacity = '1';
    heading.style.transform = 'translateY(0)';
}, 400);

const text = 'Developer';
let index = 0;
paragraph.textContent = '';
paragraph.style.opacity = '1';

function typeWriter() {
    if (index < text.length) {
        paragraph.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            paragraph.textContent = '';
            index = 0;
            typeWriter();
        }, 2000);
    }
}

setTimeout(typeWriter, 700);

setTimeout(() => {
    socialLinks.style.opacity = '1';
    socialLinks.style.transform = 'translateY(0)';
}, 1500);

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    profileImg.src = images[currentImageIndex];
}, 3000);
