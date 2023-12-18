document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.querySelector('.contact-form input[type="name"]');
            const emailInput = document.querySelector('.contact-form input[type="email"]');
            const mobileInput = document.querySelector('.contact-form input[type="number"]');
            const messageTextarea = document.querySelector('.contact-form textarea');

            if (validateForm(nameInput, emailInput, mobileInput, messageTextarea)) {
                alert('Form submitted successfully!');
            }
        });
    }

    function validateForm(name, email, mobile, message) {
        // Basic validation - check if fields are not empty
        if (name.value.trim() === '' || email.value.trim() === '' || mobile.value.trim() === '' || message.value.trim() === '') {
            alert('Please fill in all required fields.');
            return false;
        }

        // Additional validation logic can be added here (e.g., email format, mobile format)

        return true;
    }
});
