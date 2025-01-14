// Toggle Background Color
let isAltBackground = false;
function toggleBackground() {
    isAltBackground = !isAltBackground;
    document.body.style.backgroundColor = isAltBackground ? '#f0f0f0' : 'white';
}

// Text Size Slider
function adjustTextSize() {
    const size = document.getElementById('textSize').value;
    document.getElementById('sampleText').style.fontSize = `${size}px`;
}

// Modal Functions
const modal = document.getElementById('modal');
function showModal() {
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target === modal) {
        hideModal();
    }
};

// Form Validation
function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.length < 3) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Show success message if form is valid
    const successMessage = document.getElementById('successMessage');
    if (isValid) {
        successMessage.style.display = 'block';
        document.getElementById('registrationForm').reset();
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    } else {
        successMessage.style.display = 'none';
    }

    return isValid;
}

// Mood Dropdown
function updateMoodMessage() {
    const mood = document.getElementById('mood').value;
    const messageElement = document.getElementById('moodMessage');
    const messages = {
        happy: "That's great! Keep smiling! 😊",
        excited: "Awesome! Channel that energy! 🎉",
        relaxed: "Perfect time to be productive! 😌",
        tired: "Remember to take care of yourself! 💤"
    };
    messageElement.textContent = mood ? messages[mood] : '';
}
