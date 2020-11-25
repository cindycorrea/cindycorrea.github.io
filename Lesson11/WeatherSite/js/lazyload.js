//Lazy Load Start
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
}

const image = document.querySelectorAll("[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);
image.forEach(image => {
    imgObserver.observe(image);
});

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -200px 0px"

};

WebFont.load({
    google: {
        families: [
            "Life Savers", "Raleway"
        ]
    }
});

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
//Lazy Load End