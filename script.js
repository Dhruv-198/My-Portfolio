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
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  
  // Toggle visibility of icons
  if (menuIcon.style.display === "none") {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  } 
  else {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
}

// Header-Portion
function setActive(index) {
  var navLinks = document.getElementsByClassName("nav-link");

  // Remove 'active' class from all links
  for (var j = 0; j < navLinks.length; j++) {
    navLinks[j].className = navLinks[j].className.replace("active", "");
  }

  // Add 'active' class to the clicked link
  navLinks[index].className += " active";
}

