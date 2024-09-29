document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset(); 
        }
    });

    function validateForm() {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const inquiryType = document.getElementById('inquiryType').value;
        const message = document.getElementById('message').value.trim();

        // first name
        if (firstName === "") {
            alert("First name must be filled out");
            return false;
        }
        if (containsNumber(firstName)) {
            alert("First name cannot contain numbers");
            return false;
        }

        // last name
        if (lastName === "") {
            alert("Last name must be filled out");
            return false;
        }
        if (containsNumber(lastName)) {
            alert("Last name cannot contain numbers");
            return false;
        }

        // email
        if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            alert("Please enter a valid email address");
            return false;
        }

        // phone number
        if (phone === "" || isNaN(phone) || phone.length < 10) {
            alert("Please enter a valid phone number with at least 10 digits");
            return false;
        }

        // inquiry type
        if (inquiryType === "") {
            alert("Please select an inquiry type");
            return false;
        }

        // message
        if (message === "") {
            alert("Please enter your message");
            return false;
        }

        // Udah bener semua
        return true;
    }

    function containsNumber(input) {
        return /\d/.test(input);
    }
});
