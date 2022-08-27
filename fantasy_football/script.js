async function main() {
  const page = document.getElementsByTagName("h1")[0];
  addClickListeners();

  switch (page.innerText) {
    case "Overall":
      if (!doesCacheExist()) {
        console.log("Setting up");
        setupCache();
      } else {
        console.log(getCache());
      }
      document.getElementById("reset").addEventListener('click', () => {
        setupCache();
      });
    default:
        categorizeByPosition();
      removeTakenPlayers(getTitle());
  }

  
}

function addClickListeners() {
    document.querySelectorAll("input").forEach((checkbox) => {
        checkbox.addEventListener("click", function () {
            const player = this.nextSibling.textContent;
          if (this.checked) {
            const cache = getCache();
            cache[extractPosition(player)][player].available = false;
            updateCache(cache);
            removeTakenPlayers(getTitle());
          }
        });
      });

    
}

function removeTakenPlayers(position) {
    const players = getItems();
    const cache = getCache();

    for (let i =0; i < players.length; i ++) {
        const playerHTML = players[i];
        const player = playerHTML.innerText;
        const pos = position === "" ? extractPosition(player) : position;

        if (!cache[pos][player].available) {
            playerHTML.style.display = 'none';
        }
    }
    
   
}

function getTitle() {
  const POSITION_TITLES = {
    "Quarter Backs": "QB",
    "Running Backs": "RB",
    "Wide Receivers": "WR",
    "Tight Ends": "TE",
    Kickers: "K",
    Overall: "",
  };

  const h1 = document.getElementsByTagName("h1")[0];
  return POSITION_TITLES[h1.innerText];
}

function getItems() {
  const ol = document.getElementsByTagName("ol")[0];
  return ol.getElementsByTagName("li");
}

function doesCacheExist() {
  const players = localStorage.getItem("players");
  return players !== null;
}

function getCache() {
  return JSON.parse(localStorage.getItem("players"));
}

function updateCache(cache) {
  localStorage.setItem("players", JSON.stringify(cache));
}

function setupCache() {
  const items = getItems(); //TODO: make it read from seed data

  const players = {};

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const position = extractPosition(item.innerText);
    const details = {
      rank: i + 1,
      available: true,
    };

    if (players.hasOwnProperty(position)) {
      players[position][item.innerText] = details;
    } else {
      players[position] = {};
      players[position][item.innerText] = details;
    }
  }
  updateCache(players);
}

/**
 *
 * @param {string} innerText
 * @returns string
 */
function extractPosition(innerText) {
  const parts = innerText.split(" ");
  const last_part = parts[parts.length - 1];
  return last_part.split("-")[0];
}

/**
 *
 * @param {string} innerText
 * @returns string
 */
function extractTeam(innerText) {
  const parts = innerText.split(" ");
  const last_part = parts[parts.length - 1];
  return last_part.split("-")[1];
}

/**
 *
 * @param {string} innerText
 * @returns string
 */
function extractName(innerText) {
  const parts = innerText.split(" ");
  parts.pop();

  return parts.join(" ");
}

function categorizeByPosition() {
  const POSITIONS = {
    RB: "red",
    WR: "blue",
    QB: "green",
    TE: "orange",
    DST: "black",
    K: "black",
  };

  const items = getItems();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.innerText;
    const position = extractPosition(text);

    item.style.color = POSITIONS[position];
  }
}

function categorizeItem(position) {
    
}

main();
