let navLinks = document.querySelectorAll('.nav-item a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('#navMenu').checked = false;
    });
});