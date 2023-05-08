// Select DOM elements
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const features = document.querySelector('.features');
const pricePlans = document.querySelectorAll('.price');

// Add event listener for mobile navigation
navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Add event listeners for feature accordion
features.addEventListener('click', e => {
    if (e.target.classList.contains('feature-header')) {
        const featureBody = e.target.nextElementSibling;
        featureBody.classList.toggle('active');
    }
});

// Add event listener for pricing plan accordion
pricePlans.forEach(plan => {
    const planHeader = plan.querySelector('.price-header');
    const planBody = plan.querySelector('.price-body');

    planHeader.addEventListener('click', () => {
        plan.classList.toggle('active');

        if (plan.classList.contains('active')) {
            planBody.style.maxHeight = planBody.scrollHeight + 'px';
        } else {
            planBody.style.maxHeight = null;
        }
    });
});
