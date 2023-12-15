let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('navpart2 h2');

window.onscroll = () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('class');
    
    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('navpart2 h2 [href*=' + id + ']').classList.add('active');
        });

    };
});
};

document.querySelectorAll('.button-1').forEach(function(button){
    button.addEventListener('click', function() {
        var filepath = button.getAttribute('data-file');
        if(filepath){
            window.open(filepath, '_blank');
        }
    });
});