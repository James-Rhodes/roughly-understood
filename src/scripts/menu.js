const toggle = document.querySelector(".hamburger");
const menu = document.querySelector("#site-nav");

if (toggle && menu) {
  const desktop = window.matchMedia("(min-width: 780px)");

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  const setOpen = (open) => {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => {
    setOpen(!isOpen());
  });

  // Close the menu as soon as one of its links is followed.
  menu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setOpen(false);
    }
  });

  // Clicking outside the menu or the toggle closes it.
  document.addEventListener("click", (event) => {
    if (!isOpen() || !(event.target instanceof Node)) return;
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      setOpen(false);
    }
  });

  // Escape closes the menu and returns focus to the toggle.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset state when the layout switches to the desktop nav.
  desktop.addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
}
