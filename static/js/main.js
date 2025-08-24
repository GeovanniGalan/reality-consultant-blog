// File Location: static/js/main.js

document.addEventListener('click', function (event) {
    // Check if the clicked element is a concept trigger
    const trigger = event.target.closest('.concept-trigger');

    // If it's not a trigger, close all popups and do nothing else
    if (!trigger) {
        document.querySelectorAll('.concept-popup.is-active').forEach(p => {
            p.classList.remove('is-active');
        });
        return;
    }

    // If it IS a trigger, find its popup
    const wrapper = trigger.closest('.concept-popup-wrapper');
    const popup = wrapper.querySelector('.concept-popup');
    if (!popup) return;

    // Check if the clicked popup is already active
    const isActive = popup.classList.contains('is-active');

    // Close all other popups
    document.querySelectorAll('.concept-popup.is-active').forEach(p => {
        p.classList.remove('is-active');
    });

    // If the clicked popup was not already active, open it
    if (!isActive) {
        popup.classList.add('is-active');
    }

    // Stop the click from bubbling up and closing itself
    event.stopPropagation();
});

// Also handle the close buttons inside the popups
document.querySelectorAll('.popup-close').forEach(button => {
    button.addEventListener('click', function(event) {
        this.closest('.concept-popup').classList.remove('is-active');
        event.stopPropagation();
    });
});