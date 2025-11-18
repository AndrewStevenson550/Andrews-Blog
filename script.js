document.addEventListener("DOMContentLoaded", () => {
  // 1. Get all the card elements on the page
  const cards = document.querySelectorAll(".blog-card");

  // 2. Loop through each card to set up the click listener
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      // Stop the click from doing anything else unwanted
      event.stopPropagation();

      // 3. Find the full-content div INSIDE the clicked card
      const content = card.querySelector(".full-content");

      // 4. Use the .toggle() method to switch the 'hidden' class
      // If 'hidden' is present, it removes it (showing the content).
      // If 'hidden' is absent, it adds it (hiding the content).
      content.classList.toggle("hidden");

      // Optional: Scroll to the card so the user can see the new content
      card.scrollIntoView({ behavior: "smooth" });
    });
  });

  // --- Search Functionality ---

  // 1. Get the search input element
  const searchInput = document.getElementById("search-input");

  // 2. Add an event listener that fires when the user types
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    // 3. Loop through each card to check for a match
    cards.forEach((card) => {
      // Get the text from the card's title and summary
      const title = card.querySelector("h2").textContent.toLowerCase();
      const summary = card.querySelector(".summary").textContent.toLowerCase();

      // 4. Check if the card's text includes the search term
      const isMatch =
        title.includes(searchTerm) || summary.includes(searchTerm);

      // 5. Show or hide the card based on whether it's a match
      card.style.display = isMatch ? "block" : "none";
    });
  });
});
