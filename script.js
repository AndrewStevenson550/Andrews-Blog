document.addEventListener('DOMContentLoaded', () => {
    // 1. Get all the card elements on the page
    const cards = document.querySelectorAll('.blog-card');

    // 2. Loop through each card to set up the click listener
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Stop the click from doing anything else unwanted
            event.stopPropagation();

            // 3. Find the full-content div INSIDE the clicked card
            const content = card.querySelector('.full-content');

            // 4. Use the .toggle() method to switch the 'hidden' class
            // If 'hidden' is present, it removes it (showing the content).
            // If 'hidden' is absent, it adds it (hiding the content).
            content.classList.toggle('hidden');

            // Optional: Scroll to the card so the user can see the new content
            card.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
