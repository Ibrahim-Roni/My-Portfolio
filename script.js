// scroll icon navbar
    let menuIcon = document.querySelector('#menu-icon')
    let navbar = document.querySelector('.navbar')

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

//scroll sections

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            // active navbar links

            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
            });
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // remove navbar while click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');    
}




// Reseting Contact Form

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Add event listener to the form

form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Show success message


    successMessage.style.display = "block";
  
    // Disable the submit button to prevent multiple clicks
    

    const submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
  

    // Reset the form after 5 seconds
    setTimeout(() => {
      form.reset();
      successMessage.style.display = "none";
      submitButton.disabled = false;
    }, 5000);
  });