// For index.html buttons
function goToGame(game) {
  const btnId = game + 'Btn';
  const btn = document.getElementById(btnId);
  
  // Add active class to enlarge button
  btn.classList.add('active');

  // Delay para makita ang effect bago mag redirect
  setTimeout(() => {
    window.location.href = game + '.html';
  }, 300);
}

// For ml.html and hok.html - initialize hero search and suggestion
function initSearch(heroes) {
  const searchInput = document.getElementById('heroSearch');
  const suggestionsDiv = document.getElementById('suggestions');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionsDiv.innerHTML = '';
    if (query.length === 0) return;

    const matched = heroes.filter(h => h.name.toLowerCase().includes(query));
    matched.forEach(hero => {
      const div = document.createElement('div');
      div.textContent = hero.name;
      div.classList.add('suggestion');
      div.addEventListener('click', () => {
        window.location.href = hero.page;
      });
      suggestionsDiv.appendChild(div);
    });
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const hero = heroes.find(h => h.name.toLowerCase() === searchInput.value.toLowerCase());
      if (hero) {
        window.location.href = hero.page;
      }
    }
  });
}
