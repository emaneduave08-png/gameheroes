// Example list of Mobile Legends heroes
const heroes = [
  { name: 'Aldous', url: 'aldous.html' },
  { name: 'Layla', url: 'layla.html' },
  { name: 'Lancelot', url: 'lancelot.html' },
  { name: 'Gusion', url: 'gusion.html' },
  // Add more heroes here
];

// Get the elements from the page
const searchBar = document.getElementById('search-bar');
const suggestionsList = document.getElementById('suggestions-list');

// Function to handle search and show suggestions
searchBar.addEventListener('input', function() {
  const searchTerm = searchBar.value.toLowerCase();
  suggestionsList.innerHTML = '';

  if (searchTerm.length > 0) {
    // Filter the heroes based on search term
    const filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(searchTerm));

    // Display suggestions
    filteredHeroes.forEach(hero => {
      const listItem = document.createElement('li');
      listItem.textContent = hero.name;
      listItem.onclick = () => window.location.href = hero.url; // Navigate to hero page
      suggestionsList.appendChild(listItem);
    });
  }
});

// Optional: If no results, show a message
searchBar.addEventListener('blur', function() {
  if (!suggestionsList.hasChildNodes()) {
    const noResults = document.createElement('li');
    noResults.textContent = "No heroes found";
    suggestionsList.appendChild(noResults);
  }
});