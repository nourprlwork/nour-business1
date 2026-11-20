
// =====================================
// 1. MOBILE NAVIGATION MENU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// CLOSE MOBILE MENU WHEN A LINK IS CLICKED

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// =====================================
// 2. TYPING ANIMATION
// =====================================

const typingText = document.getElementById("typingText");

const headingText =
    "Building Better Businesses Through Innovation";

let letterIndex = 0;

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

function typeHeading() {

    if (letterIndex < headingText.length) {

        typingText.textContent +=
            headingText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeHeading, 65);

    }

}

if (reducedMotion) {

    typingText.textContent = headingText;

} else {

    typeHeading();

}


// =====================================
// 3. SCROLL REVEAL ANIMATIONS
// =====================================

const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !reducedMotion) {

    const observer = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

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

    revealElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("show");

    });

}


// =====================================
// 4. SERVICE SEARCH
// =====================================

const serviceSearch =
    document.getElementById("serviceSearch");

const serviceCards =
    document.querySelectorAll(".service-card");

const noResults =
    document.getElementById("noResults");

serviceSearch.addEventListener("input", function () {

    const searchValue =
        serviceSearch.value.toLowerCase().trim();

    let visibleCards = 0;

    serviceCards.forEach(function (card) {

        const serviceName =
            card.textContent.toLowerCase();

        if (serviceName.includes(searchValue)) {

            card.style.display = "block";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });

    if (visibleCards === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});


// =====================================
// 5. FAQ ACCORDION
// =====================================

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem = question.closest(".faq-item");

        const isCurrentlyOpen =
            faqItem.classList.contains("active");

        // Close all FAQ items

        document.querySelectorAll(".faq-item").forEach(
            function (item) {

                item.classList.remove("active");

                const button =
                    item.querySelector(".faq-question");

                button.setAttribute("aria-expanded", "false");

                button.querySelector(".faq-symbol")
                    .textContent = "+";

            }
        );

        // Open the selected item if it was closed

        if (!isCurrentlyOpen) {

            faqItem.classList.add("active");

            question.setAttribute("aria-expanded", "true");

            question.querySelector(".faq-symbol")
                .textContent = "−";

        }

    });

});


// =====================================
// 6. CONTACT FORM ELEMENTS
// =====================================

const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const response =
    document.getElementById("response");

const charCount =
    document.getElementById("charCount");


// =====================================
// 7. MESSAGE CHARACTER COUNTER
// =====================================

messageInput.addEventListener("input", function () {

    const length = messageInput.value.length;

    charCount.textContent =
        length + " / 500 characters";

});


// =====================================
// 8. CONTACT FORM VALIDATION
// =====================================

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const message = messageInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // CHECK NAME

    if (name.length < 2) {

        response.textContent =
            "Please enter a valid name.";

        response.style.color = "#b42318";

        nameInput.focus();

        return;

    }


    // CHECK EMAIL

    if (!emailPattern.test(email)) {

        response.textContent =
            "Please enter a valid email address.";

        response.style.color = "#b42318";

        emailInput.focus();

        return;

    }


    // CHECK MESSAGE

    if (message.length === 0) {

        response.textContent =
            "Please enter your message.";

        response.style.color = "#b42318";

        messageInput.focus();

        return;

    }


    // CHECK MESSAGE LENGTH

    if (message.length > 500) {

        response.textContent =
            "Your message is too long.";

        response.style.color = "#b42318";

        messageInput.focus();

        return;

    }


    // SUCCESS MESSAGE

    response.textContent =
        "Thank you, " + name +
        "! Your enquiry has been received.";

    response.style.color = "#245c3a";


    // RESET FORM

    contactForm.reset();

    charCount.textContent = "0 / 500 characters";

});


// =====================================
// 9. BACK TO TOP BUTTON
// =====================================

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


// SCROLL TO TOP

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: reducedMotion ? "instant" : "smooth"

    });

});


// =====================================
// 10. CURRENT YEAR IN FOOTER
// =====================================

const copyright =
    document.querySelector(".copyright");

copyright.textContent =
    "© " + new Date().getFullYear() +
    " NOUR Business Solutions. All Rights Reserved.";

    // NOUR Backend API
const API_URL = "https://5000-m-s-use4a1-1hvcnhqhdtp29-a.us-east4.prod.r.colab.dev";

// Chatbot Function
async function sendMessage(message) {
    const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });

    const data = await response.json();
    console.log(data);
}

