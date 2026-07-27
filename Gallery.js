/*=========================================
        NATIVE EXHIBIT GALLERY
=========================================*/

/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

/*=========================================
        GALLERY ELEMENTS
=========================================*/

const galleryGrid = document.getElementById("galleryGrid");
const galleryStats = document.getElementById("galleryStats");

const searchInput = document.getElementById("searchInput");
const tribeFilter = document.getElementById("tribeFilter");
const regionFilter = document.getElementById("regionFilter");
const occasionFilter = document.getElementById("occasionFilter");

const resetBtn = document.getElementById("resetBtn");

const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
const pageNumber = document.getElementById("pageNumber");

/*=========================================
        MODAL
=========================================*/

const modal = document.getElementById("detailsModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalTribe = document.getElementById("modalTribe");
const modalRegion = document.getElementById("modalRegion");
const modalOccasion = document.getElementById("modalOccasion");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

/*=========================================
        LIGHTBOX
=========================================*/

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

/*=========================================
        VARIABLES
=========================================*/

let currentPage = 1;

const cardsPerPage = 4;

let filteredData = [];

/*=========================================
        GALLERY DATA
=========================================*/

const attires = [

{
id:1,
name:"Agbada,fila,and Asooke",
tribe:"Yoruba",
region:"South West",
occasion:"Wedding",
image:"images (60).jpeg",
description:"Elegant flowing Agbada worn during weddings and royal ceremonies."
},

{
id:2,
name:"Aso Oke & ipele and beads.",
tribe:"Yoruba",
region:"South West",
occasion:"Ceremony",
image:"7caf6c95-1649-4973-98c1-2c4b31385a1d.jpeg",
description:"Beautiful handwoven Yoruba fabric symbolizing prestige."
},

{
id:3,
name:"Akwete & George attire",
tribe:"Igbo",
region:"South East",
occasion:"Ceremony",
image:"566bc41a-6e9c-40f0-86bc-1bfe8f358906.jpeg",
description:"Traditional royal attire worn by respected Igbo chiefs."
},

{
id:4,
name:"Babbar Riga, Embroidered Kaftan with turban",
tribe:"Hausa",
region:"North West",
occasion:"Festival",
image:"6e5854a5-8125-4e0f-948e-9a9c12c6cbbf.jpeg",
description:"Traditional northern flowing attire."
},

{
id:5,
name:"Ichafu",
tribe:"Igbo",
region:"South East",
occasion:"Wedding",
image:"Red wedding.jpeg",
description:"Traditional royal attire worn by respected Igbo chiefs."
},

{
id:6,
name:"Eyo",
tribe:"Yoruba",
region:"South West",
occasion:"Festival",
image:"00790d63-1b77-43c1-a2e9-57f1e2a43319.jpeg",
description:"Beautiful handwoven Yoruba fabric symbolizing prestige."
},

{
id:7,
name:"Isi Agu for females",
tribe:"Igbo",
region:"South East",
occasion:"Marriage",
image:"beauty queenn😍😍😍💋.jpeg",
description:"Traditional royal attire worn by respected Igbo chiefs."
},

{
id:8,
name:"Agbada & Aso Oke",
tribe:"Yoruba",
region:"South West",
occasion:"Coronation",
image:"8b9c10c8-6c70-4078-9589-6fadf288d66b.jpeg",
description:"Beautiful handwoven Yoruba fabric symbolizing prestige."
},

{
id:9,
name:"indian Wrapper & coral beads",
tribe:"Kalabari",
region:"South South",
occasion:"Marriage",
image:"Nigerian Ijaw Kalabari traditional wedding.jpeg",
description:"Elegant attire popular across the Niger Delta."
},

{
id:10,
name:"Babbar Riga",
tribe:"Hausa",
region:"North West",
occasion:"Durbar",
image:"Arewa - Nigeria 🇳🇬.jpeg",
description:"Traditional northern flowing attire."
},

{
id:11,
name:"Tiv Fabric",
tribe:"Tiv",
region:"North Central",
occasion:"Coronation",
image:"nigeria-men-in-their-cultural-attires-v0-0f8w7iutxsdf1.jpg",
description:"Traditional striped Tiv attire."
},

{
id:12,
name:"Lace iro & buba",
tribe:"Yoruba",
region:"South West",
occasion:"Marriage",
image:"Yoruba Woman and her Husband in Asooke.jpeg",
description:"Beautiful handwoven Yoruba fabric symbolizing prestige."
},

{
id:13,
name:"Aso-Oke & ipele and beads.",
tribe:"Yoruba",
region:"South West",
occasion:"Ceremony",
image:"images (50).jpeg",
description:"Classic Yoruba women's attire."
},

{
id:14,
name:"Isi Agu & george wrapper",
tribe:"Igbo",
region:"South East",
occasion:"Festival",
image:"Igbos men_ Traditional attire.jpeg",
description:"Traditional royal attire worn by respected Igbo chiefs."
},

{
id:15,
name:"Isi Agu & wrapper with staff",
tribe:"Igbo",
region:"South East",
occasion:"Coronation",
image:"Mr ShawnFaqua_ IGBO MEN.jpeg",
description:"Traditional royal attire worn by respected Igbo chiefs."
},

{
id:16,
name:"Babbar Riga and hula",
tribe:"Hausa",
region:"North West",
occasion:"Wedding",
image:"Hausa Wedding Couple.jpeg",
description:"Traditional northern flowing attire."
},

{
id:17,
name:"Babbar Riga,cap & leather sandals",
tribe:"Hausa",
region:"North West",
occasion:"Marriage",
image:"Arewa - Nigeria 🇳🇬 (1).jpeg",
description:"Traditional northern flowing attire."
},

{
id:18,
name:"Babbar Riga with turban",
tribe:"Hausa",
region:"North West",
occasion:"Coronation",
image:"Nigerian Hausa traditional attire.jpeg",
description:"Traditional northern flowing attire."
},

{
id:19,
name:"Jalabiya or kaftan with hula",
tribe:"Hausa",
region:"North West",
occasion:"Ceremony",
image:"1c0cb45ac031ff6ffb0da0d33b3eae7f.jpg",
description:"Traditional northern flowing attire."
},

{
id:20,
name:"Efik Attire",
tribe:"Efik",
region:"South South",
occasion:"Festival",
image:"Found on Bing from connectnigeria_com.jpeg",
description:"Beautiful embroidered Efik attire."
},

{
id:21,
name:"Efik Attire",
tribe:"Efik",
region:"South South",
occasion:"Wedding",
image:"CRYSTAL (NIGERIAN WEDDING PHOTOGRAPHER) (@crystalmediaphotography) • Instagram photos and videos.jpeg",
description:"Beautiful embroidered Efik attire."
},

{
id:22,
name:"Efik Attire",
tribe:"Efik",
region:"South South",
occasion:"Marriage",
image:"Kalabari.jpeg",
description:"Beautiful embroidered Efik attire."
},

{
id:23,
name:"Tiv Fabric",
tribe:"Tiv",
region:"North Central",
occasion:"Wedding",
image:"images (52).jpeg",
description:"Traditional striped Tiv attire."
},

{
id:24,
name:"Tiv Fabric",
tribe:"Tiv",
region:"North Central",
occasion:"Festival",
image:"84f40c05-b86f-4af6-95a8-e5dfec9b1596.jpeg",
description:"Traditional striped Tiv attire."
},

{
id:25,
name:"Tiv Fabric",
tribe:"Tiv",
region:"North Central",
occasion:"Marriage",
image:"KOU 2022 Wedding collections.jpeg",
description:"Traditional striped Tiv attire."
},

{
id:24,
name:"Tiv Fabric",
tribe:"Tiv",
region:"North Central",
occasion:"Ceremony",
image:"571f1f84a36d611aa38fe8acc325b69d.jpg",
description:"Traditional striped Tiv attire."
},


{
id:25,
name:"Traditional wrapper with headgear",
tribe:"Efik",
region:"South South",
occasion:"Ceremony",
image:"Efik cultural attire.jpeg",
description:"Beautiful embroidered Efik attire."
},

{
id:26,
name:"Indian Wrapper,coral beads and Angara Suon.",
tribe:"Kalabari",
region:"South South",
occasion:"Wedding",
image:"fb12c31f-381f-42ad-849b-f2c7c1773323.jpeg",
description:"Elegant attire popular across the Niger Delta."
},

{
id:27,
name:"Richly beaded wrapper with blouse",
tribe:"Efik",
region:"South South",
occasion:"Coronation",
image:"Akwa Ibom Wedding Styles for Beautiful Couples.jpeg",
description:"Beautiful embroidered Efik attire."
},

{
id:28,
name:"Iriabo dressing",
tribe:"Kalabari",
region:"South South",
occasion:"Festival",
image:"cb8a5050-85e7-4420-a627-0a4b186fdc9b.jpeg",
description:"Elegant attire popular across the Niger Delta."
},

{
id:29,
name:"George Wrapper with Ojubulu cap",
tribe:"Kalabari",
region:"South South",
occasion:"Coronation",
image:"Have yourself the perfect African themed wedding.jpeg",
description:"Elegant attire popular across the Niger Delta."
},

{
id:29,
name:"Inji Wrapper with beads",
tribe:"Kalabari",
region:"South South",
occasion:"Ceremony",
image:"e54bb2bc-2e9b-40fc-a35b-ae994e378fea.jpeg",
description:"Elegant attire popular across the Niger Delta."
}


];

filteredData = [...attires];


/*=========================================
        CREATE GALLERY CARD
=========================================*/

function createCard(attire) {

    const card = document.createElement("div");

    card.className = "gallery-card";

    card.innerHTML = `

        <div class="gallery-image">

            <img class="gallery-img"
                 src="${attire.image}"
                 alt="${attire.name}">

            <div class="favorite">♡</div>

            <div class="image-overlay">

                <button class="quick-view details-btn"
                        data-id="${attire.id}">

                    👁 View Details

                </button>

            </div>

        </div>

        <div class="gallery-content">

            <div class="gallery-top">

                <span class="badge">${attire.tribe}</span>

                <span class="occasion">${attire.occasion}</span>

            </div>

            <h3>${attire.name}</h3>

            <p>${attire.description}</p>

        </div>

    `;

    return card;

}

/*=========================================
        DISPLAY GALLERY
=========================================*/

function displayGallery(data) {

    if (!galleryGrid) return;

    galleryGrid.innerHTML = "";

    const start = (currentPage - 1) * cardsPerPage;

    const end = start + cardsPerPage;

    const pageData = data.slice(start, end);

    pageData.forEach(attire => {

        galleryGrid.appendChild(createCard(attire));

    });

    if (galleryStats) {

        galleryStats.innerHTML = `

            Showing <span>${data.length === 0 ? 0 : start + 1}
            - ${Math.min(end, data.length)}</span>

            of

            <span>${data.length}</span>

            Native Attires

        `;

    }

    if (pageNumber) {

        pageNumber.textContent = currentPage;

    }

    if (prevPage) {

        prevPage.disabled = currentPage === 1;

    }

    if (nextPage) {

        nextPage.disabled = end >= data.length;

    }

    attachGalleryEvents();

}

/*=========================================
        PAGINATION
=========================================*/

if (prevPage) {

    prevPage.addEventListener("click", () => {

        if (currentPage > 1) {

            currentPage--;

            displayGallery(filteredData);

        }

    });

}

if (nextPage) {

    nextPage.addEventListener("click", () => {

        const totalPages = Math.ceil(filteredData.length / cardsPerPage);

        if (currentPage < totalPages) {

            currentPage++;

            displayGallery(filteredData);

        }

    });

}

/*=========================================
        INITIAL LOAD
=========================================*/

displayGallery(filteredData);


/*=========================================
        GALLERY EVENTS
=========================================*/

function attachGalleryEvents() {

    // Favourite Button
    document.querySelectorAll(".favorite").forEach(btn => {

        btn.onclick = function () {

            this.classList.toggle("active");

            this.textContent = this.classList.contains("active")
                ? "❤️"
                : "♡";

        };

    });

    // View Details
    document.querySelectorAll(".details-btn").forEach(btn => {

        btn.onclick = function () {

            const id = Number(this.dataset.id);

            const attire = attires.find(item => item.id === id);

            if (!attire) return;

            modalImage.src = attire.image;
            modalTitle.textContent = attire.name;
            modalTribe.textContent = attire.tribe;
            modalRegion.textContent = attire.region;
            modalOccasion.textContent = attire.occasion;
            modalDescription.textContent = attire.description;

            modal.classList.add("show");

        };

    });

    // Lightbox
    document.querySelectorAll(".gallery-img").forEach(img => {

        img.onclick = function () {

            lightboxImage.src = this.src;

            lightbox.classList.add("show");

        };

    });

}

/*=========================================
        CLOSE MODAL
=========================================*/

if (closeModal) {

    closeModal.onclick = () => {

        modal.classList.remove("show");

    };

}

/*=========================================
        CLOSE LIGHTBOX
=========================================*/

if (lightboxClose) {

    lightboxClose.onclick = () => {

        lightbox.classList.remove("show");

    };

}

/*=========================================
        CLICK OUTSIDE TO CLOSE
=========================================*/

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

    }

});

/*=========================================
        SEARCH & FILTER
=========================================*/

function filterGallery() {

    const search = searchInput.value.toLowerCase();

    const tribe = tribeFilter.value.toLowerCase();

    const region = regionFilter.value.toLowerCase();

    const occasion = occasionFilter.value.toLowerCase();

    filteredData = attires.filter(attire => {

        const matchSearch =
            attire.name.toLowerCase().includes(search);

        const matchTribe =
            tribe === "all" ||
            attire.tribe.toLowerCase() === tribe;

        const matchRegion =
            region === "all" ||
            attire.region.toLowerCase() === region;

        const matchOccasion =
            occasion === "all" ||
            attire.occasion.toLowerCase() === occasion;

        return (
            matchSearch &&
            matchTribe &&
            matchRegion &&
            matchOccasion
        );

    });

    currentPage = 1;

    displayGallery(filteredData);

}

if (searchInput) searchInput.addEventListener("input", filterGallery);

if (tribeFilter) tribeFilter.addEventListener("change", filterGallery);

if (regionFilter) regionFilter.addEventListener("change", filterGallery);

if (occasionFilter) occasionFilter.addEventListener("change", filterGallery);

/*=========================================
        RESET FILTER
=========================================*/

if (resetBtn) {

    resetBtn.onclick = () => {

        searchInput.value = "";

        tribeFilter.value = "all";

        regionFilter.value = "all";

        occasionFilter.value = "all";

        filteredData = [...attires];

        currentPage = 1;

        displayGallery(filteredData);

    };

}

/*=========================================
        TESTIMONIAL SLIDER
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("testimonialTrack");
    const prevBtn = document.getElementById("testPrev");
    const nextBtn = document.getElementById("testNext");

    if (!track || !prevBtn || !nextBtn) return;

    const cards = Array.from(track.children);

    let currentIndex = 0;
    let autoSlide;

    function getCardsPerView() {

        if (window.innerWidth <= 768) return 1;

        if (window.innerWidth <= 992) return 2;

        return 3;

    }

    function getGap() {

        return 25;

    }

    function updateSlider() {

        const visible = getCardsPerView();

        const cardWidth = cards[0].offsetWidth + getGap();

        const maxIndex = Math.max(0, cards.length - visible);

        if (currentIndex > maxIndex) {

            currentIndex = maxIndex;

        }

        track.style.transform =
            `translateX(-${currentIndex * cardWidth}px)`;

    }

    function nextSlide() {

        const visible = getCardsPerView();

        const maxIndex = Math.max(0, cards.length - visible);

        if (currentIndex >= maxIndex) {

            currentIndex = 0;

        } else {

            currentIndex++;

        }

        updateSlider();

    }

    function prevSlide() {

        const visible = getCardsPerView();

        const maxIndex = Math.max(0, cards.length - visible);

        if (currentIndex <= 0) {

            currentIndex = maxIndex;

        } else {

            currentIndex--;

        }

        updateSlider();

    }

    nextBtn.addEventListener("click", () => {

        nextSlide();

        restartAuto();

    });

    prevBtn.addEventListener("click", () => {

        prevSlide();

        restartAuto();

    });

    function restartAuto() {

        clearInterval(autoSlide);

        autoSlide = setInterval(nextSlide, 4000);

    }

    window.addEventListener("resize", updateSlider);

    updateSlider();

    restartAuto();

});


/*=========================================
        STATISTICS COUNTER
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    let started = false;

    function startCounters() {

        if (started) return;

        const section = document.querySelector(".stats-section");

        if (!section) return;

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            started = true;

            counters.forEach(counter => {

                const target = Number(counter.dataset.target);

                let current = 0;

                const increment = Math.max(1, Math.ceil(target / 100));

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.textContent = current.toLocaleString();

                }, 20);

            });

        }

    }

    startCounters();

    window.addEventListener("scroll", startCounters);

});

/*=========================================
        VISITOR COMMENTS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("commentForm");
    const nameInput = document.getElementById("commentName");
    const messageInput = document.getElementById("commentMessage");
    const commentsContainer = document.getElementById("commentsContainer");
    const commentCount = document.getElementById("commentCount");

    if (!form || !nameInput || !messageInput || !commentsContainer || !commentCount) return;

    function updateCommentCount() {

        commentCount.textContent =
            commentsContainer.querySelectorAll(".comment-card").length;

    }

    function getInitials(name) {

        const words = name.trim().split(" ");

        if (words.length === 1) {

            return words[0].substring(0,2).toUpperCase();

        }

        return (
            words[0][0] +
            words[words.length - 1][0]
        ).toUpperCase();

    }

    function getCurrentTime() {

        return new Date().toLocaleString("en-NG",{

            dateStyle:"medium",

            timeStyle:"short"

        });

    }

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name = nameInput.value.trim();

        const message = messageInput.value.trim();

        if(name==="" || message===""){

            alert("Please enter your name and comment.");

            return;

        }

        const card=document.createElement("div");

        card.className="comment-card";

        card.innerHTML=`

            <div class="comment-avatar">

                ${getInitials(name)}

            </div>

            <div class="comment-content">

                <div class="comment-header">

                    <h4>${name}</h4>

                    <span>${getCurrentTime()}</span>

                </div>

                <p>${message}</p>

            </div>

        `;

        commentsContainer.prepend(card);

        updateCommentCount();

        form.reset();

    });

    updateCommentCount();

});


/*=========================================
        BACK TO TOP
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});


/*=========================================
        SCROLL REVEAL
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(

        ".hero-content, .gallery-section, .culture-section, .testimonials, .stats-section, .comments-section, .footer"

    );

    function revealSections() {

        const trigger = window.innerHeight * 0.85;

        reveals.forEach(section => {

            const top = section.getBoundingClientRect().top;

            if (top < trigger) {

                section.classList.add("show-section");

            }

        });

    }

    revealSections();

    window.addEventListener("scroll", revealSections);

});


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav ul li a");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    activeMenu();

});