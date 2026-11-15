// Random mode. random.html opens one of these games with ?random. After the
// treasure chest, the game's Restart button becomes "Next" and opens a
// different game, which keeps the current language.
const GAMES = ["shapes", "animals", "guess", "fruits", "things"];
const RANDOM = new URLSearchParams(location.search).has("random");
const NEXT_GAME = {en:"Next", ru:"Дальше"};

function nextGame(lang){
  const current = location.pathname.split("/").pop().replace(".html", "");
  const others = GAMES.filter(g => g !== current);
  const next = others[Math.floor(Math.random() * others.length)];
  // Each game keeps its language in localStorage under "<game>-lang".
  if (lang) try { localStorage.setItem(next + "-lang", lang); } catch(e){}
  location.replace(next + ".html?random");
}
