// ===============================
// GLOBAL MODAL FLAG (shared)
// ===============================
window.modalOpen = window.modalOpen || false;

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("modeToggle");
  const icon = document.getElementById("modeIcon");
  const popup = document.getElementById("modePopup");
  const popupOk = document.getElementById("popupOk");

  if (!toggle || !icon) return;

  // ---------- INITIAL MODE ----------
  let mode = localStorage.getItem("mode") || "light";
  body.classList.remove("light-mode", "dark-mode");
  body.classList.add(mode + "-mode");
  icon.className = mode === "dark"
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";

  // ---------- TOGGLE CLICK ----------
  toggle.addEventListener("click", () => {

    // 🚫 BLOCK WHEN PREVIEW OPEN
    if (window.modalOpen) {
      if (popup) popup.style.display = "flex";
      return;
    }

    // ✅ SWITCH MODE
    const isDark = body.classList.contains("dark-mode");
    mode = isDark ? "light" : "dark";

    body.classList.remove("light-mode", "dark-mode");
    body.classList.add(mode + "-mode");

    icon.className = mode === "dark"
      ? "fa-solid fa-sun"
      : "fa-solid fa-moon";

    localStorage.setItem("mode", mode);
  });

  // ---------- POPUP CLOSE ----------
  if (popupOk) {
    popupOk.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
});
