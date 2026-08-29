
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
        });
    });
}
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        const targetId = tab.getAttribute("data-target");
        tabs.forEach(function (item) {
            item.classList.remove("active");
        });
        tabContents.forEach(function (content) {
            content.classList.remove("active");
        });
        tab.classList.add("active");

        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add("active");
        }
    });
});

function generateRoadmap() {
    const interest = document.getElementById("interest");
    const level = document.getElementById("level");
    const output = document.getElementById("roadmapOutput");
    if (!interest || !level || !output) {
        return;
    }
    const selectedInterest = interest.value;
    const selectedLevel = level.value;
    let roadmap = "";
    
    if (selectedInterest === "Front-End Development") {
        if (selectedLevel === "Beginner") {
            roadmap =
                "<strong>Your Roadmap:</strong><br>" +
                "1. Learn HTML fundamentals<br>" +
                "2. Learn CSS and responsive design<br>" +
                "3. Learn JavaScript basics<br>" +
                "4. Build small web projects<br>" +
                "5. Create a portfolio website";
        }
        else if (selectedLevel === "Intermediate") {
            roadmap =
                "<strong>Your Roadmap:</strong><br>" +
                "1. Improve JavaScript skills<br>" +
                "2. Learn DOM manipulation<br>" +
                "3. Learn APIs and JSON<br>" +
                "4. Build advanced projects<br>" +
                "5. Learn Git and GitHub";
        }
        else {
            roadmap =
                "<strong>Your Roadmap:</strong><br>" +
                "1. Build production-level applications<br>" +
                "2. Improve JavaScript architecture<br>" +
                "3. Learn modern frameworks<br>" +
                "4. Optimize performance<br>" +
                "5. Build a professional portfolio";
        }
    }
   
    else if (selectedInterest === "UI/UX Design") {
        if (selectedLevel === "Beginner") {
            roadmap =
                "<strong>Your Roadmap:</strong><br>" +
                "1. Learn UI/UX fundamentals<br>" +
                "2. Learn typography and colors<br>" +
                "3. Learn layout and spacing<br>" +
                "4. Practice wireframing<br>" +
                "5. Create your first design";
        }
        else if (selectedLevel === "Intermediate") {
            roadmap =
                "<strong>Your Roadmap:</strong><br>" +
                "1. Improve Figma skills<br>" +
                "2. Create responsive designs<br>" +
                "3. Learn design systems<br>" +
                "4. Conduct usability testing<br>" +
                "5. Build a design portfolio";
        }
        else {
            roadmap =
                "<strong>Your Roadmap:</strong><br>" +
                "1. Create advanced design systems<br>" +
                "2. Improve UX research<br>" +
                "3. Perform usability analysis<br>" +
                "4. Design complex applications<br>" +
                "5. Build a professional case-study portfolio";
        }
    }
  
    else if (selectedInterest === "Full-Stack Development") {
        if (selectedLevel === "Beginner") {
            roadmap =
                "<strong>Your Roadmap:</strong><br>" +
                "1. Learn HTML and CSS<br>" +
                "2. Learn JavaScript<br>" +
                "3. Learn Git and GitHub<br>" +
                "4. Learn basic backend concepts<br>" +
                "5. Build simple full-stack projects";
        }
        else if (selectedLevel === "Intermediate") {
            roadmap =
                "<strong>Your Roadmap:</strong><br>" +
                "1. Improve JavaScript<br>" +
                "2. Learn frontend frameworks<br>" +
                "3. Learn Node.js and Express<br>" +
                "4. Learn databases<br>" +
                "5. Build full-stack applications";
        }
        else {
            roadmap =
                "<strong>Your Roadmap:</strong><br>" +
                "1. Build scalable applications<br>" +
                "2. Improve backend architecture<br>" +
                "3. Work with databases and APIs<br>" +
                "4. Add authentication and security<br>" +
                "5. Deploy production-ready applications";
        }
    }
    output.innerHTML = roadmap;
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you, " +name +"! Your message has been submitted successfully.");

        contactForm.reset();
    });
}

const faqQuestions =document.querySelectorAll(".faq-question");
faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const currentItem =question.closest(".faq-item");
        document.querySelectorAll(".faq-item").forEach(function (item) {
            if (item !== currentItem) {
                item.classList.remove("active");
            }
        });
        currentItem.classList.toggle("active");
    });
});

const programButtons =document.querySelectorAll(".m5-program-card button");
programButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.getElementById("internship").scrollIntoView({ behavior: "smooth" });
    });
});

const projectButtons = document.querySelectorAll(".m5-project-card button");
projectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert(
            "Project details will be available soon."
        );
    });
});

window.addEventListener("scroll", function () {
    const navbar =document.querySelector(".navbar");
    if (!navbar) {
        return;
    }
    if (window.scrollY > 50) {
        navbar.style.boxShadow ="0 6px 20px rgba(0, 0, 0, 0.22)";
    }
    else {
        navbar.style.boxShadow ="0 4px 18px rgba(0, 0, 0, 0.15)";
    }
});

const footerYear =document.querySelector(".footer-bottom p");
if (footerYear) {
    const currentYear =new Date().getFullYear();
    footerYear.innerHTML ="© " +currentYear +" SpireX Foundation. All rights reserved.";
}

console.log(
    "SpireX Foundation website loaded successfully."
);