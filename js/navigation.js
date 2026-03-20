export const initNavigation = () => {

  const navLinks = document.querySelectorAll(".nav-list a");

  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }
  });
};
