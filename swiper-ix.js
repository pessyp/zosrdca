var swiper = new Swiper(".slide-content", {
    // slidesPerView: 3,
    spaceBetween: 25,
    loop: false,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBulletts: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// 2. Get the container and the template
const container = document.getElementById("swiper-wrapper");
const template = document.querySelector("#item-template");
const type = document.querySelector("#card");

// 3. Loop through data and append cloned templates
items.forEach((item) => {
    // Clone the template content
    const clone = template.content.cloneNode(true);
    // const type = document.querySelector('div').dataset.type; // Returns "user-profile"
    clone.querySelector(".card").dataset.type = item.type;
    // Populate the cloned element
    clone.querySelector(".item-date").textContent = item.date;
    clone.querySelector(".item-text").textContent = item.text;
    clone.querySelector(".item-greeting").textContent = item.greeting;
    clone.querySelector(".item-author").textContent = item.author;

    // Append to the container
    container.appendChild(clone);
});

// Clone and store all original slides on page load
const allSlides = Array.from(document.querySelectorAll(".swiper-slide"));
const wrapper = document.getElementById("swiper-wrapper");

// Filter Button Click Event
document.querySelectorAll(".filter-buttons .btn").forEach((button) => {
    button.addEventListener("click", function () {
        // Toggle active class on buttons
        document
            .querySelector(".filter-buttons .btn.active")
            .classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        // Filter slides array
        const filteredSlides = allSlides.filter((slide) => {
            return (
                filterValue === "all" ||
                slide.getAttribute("data-type") === filterValue
            );
        });

        // Clear wrapper and append filtered slides
        wrapper.innerHTML = "";
        filteredSlides.forEach((slide) => wrapper.appendChild(slide));

        // Force Swiper to recalculate dimensions and layout
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        swiper.slideTo(0, 0); // Reset to first slide instantly
    });
});
