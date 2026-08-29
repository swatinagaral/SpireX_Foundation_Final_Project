/* =========================
   MISSION / VISION / VALUES
========================= */

const tabs = document.querySelectorAll(".tab");

const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.target;


        tabs.forEach(item => {
            item.classList.remove("active");
        });


        contents.forEach(content => {
            content.classList.remove("active");
        });


        tab.classList.add("active");

        document
            .getElementById(target)
            .classList.add("active");

    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const animatedElements = document.querySelectorAll(
    ".about-text, .about-right, .value-card, .journey-card"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.classList.add("animate");

    observer.observe(element);

});