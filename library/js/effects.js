let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("menu__header_brand").style.top = "0";
    } else {
        document.getElementById("menu__header_brand").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}

// modal video