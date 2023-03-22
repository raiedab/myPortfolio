// Get the navigation menu links
const navLinks = document.querySelectorAll('nav ul li a');

const sections = document

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default behavior of following the link
    event.preventDefault();

    // Get the ID of the section to scroll to
    const sectionID = link.getAttribute('href');

    // Scroll to the section with a smooth animation
    document.querySelector(sectionID).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
