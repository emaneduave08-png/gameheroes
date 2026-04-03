// For index.html buttons
<!DOCTYPE html>
<html>
<head>
  <title>Game Heroes Hub</title>
  <link rel="stylesheet" href="style-main.css">
</head>
<body>

  <h1>Game Heroes Hub</h1>
  <p>Heroes info and strategy from multiple games in an interactive web page.</p>

  <h3>About This Site</h3>
  <p>Welcome to Game Heroes Hub! Here you’ll find tips, strategies, and guides for a variety of games.</p>

  <h2>Choose a Game</h2>
  <button id="mlBtn" class="game-btn" onclick="goToGame('ml')">MOBILE LEGENDS</button>
  <button id="hokBtn" class="game-btn" onclick="goToGame('hok')">HONOR OF KINGS</button>

  <script src="script.js"></script>
</body>
</html>

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
