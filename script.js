const animals = ["Elephant", "Giraffe", "Zebra", "Lion", "Rhino", "Kudu", "Warthog"];
const quotes = [
  "Live simply so that others may simply live.",
  "The bush speaks to those who listen.",
  "Small steps every day lead to big dreams.",
  "Silence is the bushveld's loudest voice.",
  "Work hard now, rest with the impalas later."
];

document.getElementById("animal").textContent = animals[Math.floor(Math.random() * animals.length)];
document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];
