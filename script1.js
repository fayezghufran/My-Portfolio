// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Serialize the form data into JSON
        const formData = new FormData(form);
        const jsonData = {};
        formData.forEach((value, key) => {jsonData[key] = value});

        // Here, you can send the formData to your server using fetch or any other method
        // For demonstration purposes, let's just log the data
        console.log(jsonData);

        // Optionally, you can reset the form after submission
        form.reset();
    });
});
