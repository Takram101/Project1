// Responsive Navigation
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('show');
});

// Form validation
const form = document.querySelector('form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!email || !email.includes('@') || !message){
            alert('Please provide a valid email and message.');
        } else {
            alert('Thank you 😁 Your message has been sent to Talha!');
            form.reset();
        }
});
}


