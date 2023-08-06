import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const scrollAnimationsElements = document.querySelectorAll('.scroll-animation');

// console.log('Elements with class "scroll-animation":', scrollAnimationsElements);

// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.5, // 50% visible (appear)
// }

// let prevScrollY = window.prevScrollY;

// const intersectionObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const element = entry.target;
//     console.log(element);

//     if (entry.isIntersecting) {
//       element.style.opacity = 1;
//     } else {
//       element.style.opacity = 0;
//     }
//   });
// }, options);

// scrollAnimationsElements.forEach(element => {
//   intersectionObserver.observe(element);
// });