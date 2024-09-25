window.onscroll = function () {
    if (window.scrollY >= 560) {
        document.getElementById("span").classList.add("show")    
    }else{
        document.getElementById("span").classList.remove("show")
    }
};

function scrollHome() {
    scrollTo ({
    top: 0,
    behavior :"smooth"
});
};

