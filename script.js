// PROJECTS FILTERING......
function filterProjects(category) {
  var projects = document.getElementsByClassName("project");

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } 
    else {
      project.style.display = "none";
    }
  }
}

// Show all projects by default on page load
window.onload = function () {
  filterProjects("all");
};


// Navbar toggler logic
function toggleMenu() {
  let menuIcon = document.getElementById("menu-icon");
  let closeIcon = document.getElementById("close-icon");
  let navbarToggler = document.querySelector(".navbar-toggler");

  // Use setTimeout to wait for Bootstrap to toggle the menu
  setTimeout(() => {
    let isOpen = navbarToggler.classList.contains("collapsed"); // Bootstrap adds 'collapsed' when menu is closed

    // Toggle icons based on navbar state
    menuIcon.classList.toggle("d-none", !isOpen);
    closeIcon.classList.toggle("d-none", isOpen);
  }, 10); // Small delay to let Bootstrap update the state
}


// Header-Portion
function setActive(link) {
  var navLinks = document.getElementsByClassName("nav-link");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }
  link.classList.add("active");
}

// Get the button
var mybutton = document.getElementById("myBtn");

// Show button when scrolling down 20px, hide it otherwise
window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
