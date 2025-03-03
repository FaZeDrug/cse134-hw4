document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true; // Track form validity
        let errorMessages = []; // Store all errors
        let successMessage = "Successfully submitted!"; // Success message

        // get form fields
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const subjectInput = document.getElementById("subject");
        const messageInput = document.getElementById("message");

        // get output elements
        const errorOutput = document.getElementById("error-message");
        const infoOutput = document.getElementById("info-message");

        // this is resetting previous messages
        errorOutput.textContent = "";
        infoOutput.textContent = "";

        // validating name field
        if (!nameInput.value.trim()) {
            errorMessages.push("Name field required");
            isValid = false;
        }

        // validate emai
        if (!emailInput.value.trim()) {
            errorMessages.push("Email field required");
            isValid = false;
        } else if (!emailInput.value.includes("@")) {
            errorMessages.push("Enter a valid email!");
            isValid = false;
        }

        // validateing sub
        if (!subjectInput.value.trim()) {
            errorMessages.push("Subject field required");
            isValid = false;
        }

        // validate msg field
        if (!messageInput.value.trim()) {
            errorMessages.push("Message field required");
            isValid = false;
        }

        // showing error msgs
        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            errorOutput.textContent = errorMessages.join("\n");
        } else {
            infoOutput.textContent = successMessage;
        }
    });
});
