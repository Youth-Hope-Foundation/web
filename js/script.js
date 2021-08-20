//making the mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header")

btnNavEl.addEventListener('click', function () {
    headerEL.classList.toggle("nav-open");
    // document.body.classList.toggle("not-visible");
});

//smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        //e.preventDefault();
        const href = link.getAttribute('href');

        //scroll to other links
        if (href !== "#" && href.startsWith("#")) {

            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behaviour: "smooth" });
        } else {
            e.currentTarget();
        }

        //scroll back to top
        if (href === '#') {
            console.log('mambooooo')

            window.scrollTo({
                top: 0,
                // behaviour: smooth,
            })
        }

        //close mobile navigation
        if (link.classList.contains('main-nav-link')) {
            headerEL.classList.toggle("nav-open");
        }
    })
})

/////////////////////////////////////

//sticky navigation
const sectionHeroEl = document.querySelector('.hero-section')
const observer = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);
        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        } else {
            document.body.classList.remove("sticky");
        }
    },
    {
        //in the viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px'
    })
observer.observe(sectionHeroEl);

/////////////////////////////////////

// ///////////////////////////////////////////////////////////
// // Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//     var flex = document.createElement("div");
//     flex.style.display = "flex";
//     flex.style.flexDirection = "column";
//     flex.style.rowGap = "1px";

//     flex.appendChild(document.createElement("div"));
//     flex.appendChild(document.createElement("div"));

//     document.body.appendChild(flex);
//     var isSupported = flex.scrollHeight === 1;
//     flex.parentNode.removeChild(flex);
//     console.log(isSupported);

//     if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();
