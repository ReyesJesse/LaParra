document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list ul').classList.toggle('show');
    document.querySelector('#menuBurger').classList.toggle('active'); // Toggle active class on the menu toggle icon
    console.log('Menu toggled');
});


function fadeIn(element) {
    element.style.opacity = 1; // Set opacity to 1 to trigger the transition
}

// Call fadeIn function for the h1 and p elements after a delay
setTimeout(function() {

    var heading = document.getElementById('heading');
    var paragraph = document.getElementById('paragraph');
    
    fadeIn(heading);
    fadeIn(paragraph);
}, 300); // Adjust the delay (in milliseconds) as needed

$(document).ready(function() {
    $('.landing-page').addClass('fade-in');
});

   // Intersection Observer setup
   const photos = document.querySelectorAll('.photo');

   const observer = new IntersectionObserver((entries, observer) => {
       entries.forEach((entry, index) => {
           if (entry.isIntersecting) {
               setTimeout(() => {
                   entry.target.style.opacity = 1;
               }, index * 300); // Adjust the delay as needed
               observer.unobserve(entry.target);
           }
       });
   });

   photos.forEach(photo => {
       observer.observe(photo);
   });

   