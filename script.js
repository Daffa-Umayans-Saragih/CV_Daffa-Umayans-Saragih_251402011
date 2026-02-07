document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");

  function setActiveMenu(id) {
    navItems.forEach((item) => item.classList.remove("active"));

    const activeLink = document.querySelector(`.nav-item[href="#${id}"]`);

    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const targetId = item.getAttribute("href").replace("#", "");
      setActiveMenu(targetId);
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: "-30% 0px -70% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        setActiveMenu(id);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});
