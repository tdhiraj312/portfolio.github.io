window.modalOpen = false;


const projects = [
  { name: "Character Counter", path: "Project/char-counter/char-counter.html" },
  { name: "Form Validator", path: "Project/form-validator/form-validator.html" },
  { name: "Grade Calculator", path: "Project/grade/grade.html" },
  { name: "Password Checker", path: "Project/password-checker/password-checker.html" },
  { name: "Quiz App", path: "Project/quiz/quiz.html" },
  { name: "Quote Generator", path: "Project/quote-generator/quote-generator.html" },
  { name: "Shopping Cart", path: "Project/shopping-cart/Shoppingcart.html" },
  { name: "Stopwatch", path: "Project/stopwatch/stopwatch.html" },
  { name: "Temperature Converter", path: "Project/temp/temp.html" },
  { name: "To-Do List", path: "Project/to_do/todo.html" },
  { name: "Weather App", path: "Project/weather/weather.html" },
  { name: "Word Counter", path: "Project/word-counter/word-counter.html" },
  { name: "bank", path: "Project/bank/bank.html"},
  { name: "Calculator", path: "Project/Calculator/calculator.html"},
  { name: "Number-Guessing-Game", path: "Project/Number-Guessing-Game/index.html"}
];


const container = document.getElementById("project-container");
const modal = document.getElementById("modal");
const iframe = document.getElementById("preview-frame");
const closeBtn = document.getElementById("close-btn");
const search = document.getElementById("search");

function loadProjects(list) {
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <button class="preview" onclick="openPreview('${p.path}')">Live Preview</button>
      <button class="github" onclick="openGit()">GitHub</button>
    `;
    container.appendChild(card);
  });
}

function openPreview(path) {
  const iframe = document.getElementById("preview-frame");
  iframe.src = path;
  document.getElementById("modal").style.display = "block";
  modal.classList.add("show");

 window.modalOpen = true;
document.body.classList.add("modal-open");



}


function openGit() {
  window.open("https://github.com/tdhiraj312/JavaScript_Small_Projects_Practice", "_blank");
}

closeBtn.onclick = () => {
  modal.style.display = "none";
  modal.classList.remove("show");

 window.modalOpen = false;
document.body.classList.remove("modal-open");
  iframe.src = "";
};

search.addEventListener("input", () => {

  const value = search.value.toLowerCase();
  const filtered = projects.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  loadProjects(filtered);
});

loadProjects(projects);
