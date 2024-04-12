document.addEventListener('DOMContentLoaded', (event) => {
    var navbarHTML = `
    <nav class="navbar">
    <a href="HomePage.html"><img src="SBS LOGO - PNG.png" alt="SBS Logo" class="logo"></a> 
        <div class="menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li><a href="HomePage.html">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects/Events</a></li>
            <li><a href="#get-involved">Get Involved</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="FAQ.html">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
    </nav>`;

    document.body.insertAdjacentHTML('beforebegin', navbarHTML);

    var footerhtml = `
    <footer>
        <p>&copy; 2024 SBS. All rights reserved. | <a href="privacy.html" class="footerlink">Privacy Policy</a> | <a href="terms.html" class="footerlink">Terms of Service</a></p>
    </footer>
    `;
    document.body.insertAdjacentHTML('afterend', footerhtml);
    
});


document.addEventListener('DOMContentLoaded', function () {
    // Get the menu element
    var Menu = document.querySelector('.menu');
    // Get the ul element containing the links
    var navLinks = document.querySelector('.navbar ul');

    // Toggle an 'active' class on the ul element when the menu is clicked
    Menu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
