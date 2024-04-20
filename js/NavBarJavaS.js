document.addEventListener('DOMContentLoaded', (event) => {
    var navbarHTML = `
    <nav class="navbar">
    <a href="index.html">
    <img src="img/SBSLOGO.png" alt="SBS Logo" class="logo">
    </a>
        <div class="menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="projects(2).html">Projects/Events</a></li>
            <li><a href="#get-involved">Get Involved</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="FAQ.html">FAQ</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    </nav>`;

    document.body.insertAdjacentHTML('beforebegin', navbarHTML);

    var footerhtml = `
    <footer>
    <p>Contact Us!</p>
    <div class="links">
 <p>
    <a href="sbsstudentactivity@gmail.com" target="_blank" title="SBS Student Activity Gmail Link">SBS Gmail</a>
</p>
<p>
    <a href="https://www.facebook.com/SBS.Student.Activity?mibextid=ZbWKwL" target="_blank" title="SBS Student Activity Facebook Page Link">SBS Facebook Page</a>     
</p>
<p>
    <a href="https://www.facebook.com/groups/716098337079680/?ref=share" target="_blank" title="SBS Student Activity Facebook Groub Link">SBS Facebook Groub</a>
</p>
<p>
    <a href="https://www.linkedin.com/company/sbs-student-activity/" target="_blank" title="SBS Student Activity LinkedIn Link">SBS LinkedIn Account</a>
</p>
<p>
    <a href="https://www.tiktok.com/@sbs.student.activity?_t=8lSRVSqM5m1&_r=1" target="_blank" title="SBS Student Activity TikTok Link">SBS TikTok Account</a>
</p>
<p>
    <a href="https://www.instagram.com/sbs_student_activity?igsh=MzRlODBiNWFlZA==" target="_blank" title="SBS Student Activity Instagram Link"> SBS Instagram Account</a>
</p>
</div>
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
