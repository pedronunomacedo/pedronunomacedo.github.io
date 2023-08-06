const scrollAnimationsElements = document.querySelectorAll('.scroll-animation');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // 50% visible (appear)
}

let prevScrollY = window.pageYOffset;

const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const element = entry.target;

        if (entry.isIntersecting) {
            element.style.opcaity = 1;
        } else {
            element.style.opacity = 0;
        }
    });
});