const originalTitle = document.title;

// Tab wechseln erkennen
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "Come Back!";
  } else {
    document.title = originalTitle;
  }
});

async function loadStats() {
  const res = await fetch("/api/Skills");
  const data = await res.json();

  console.log("CHARACTER:", data);
}

async function loadQuests() {
  const res = await fetch("/api/Projects");
  const quests = await res.json();

  console.log("QUESTS:", quests);
}

loadStats();
loadQuests();