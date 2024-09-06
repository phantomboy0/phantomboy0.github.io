document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");

  function checkVisibility() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    projects.forEach((project) => {
      const projectTop = project.getBoundingClientRect().top;

      if (projectTop < triggerBottom) {
        project.classList.add("visible");
      } else {
        project.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check
});
