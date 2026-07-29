/*=========================================
            MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if(navLinks.classList.contains("active")){

            menuBtn.textContent = "✕";

        }else{

            menuBtn.textContent = "☰";

        }

    });

}

/*=========================================
        CLOSE MENU ON LINK CLICK
=========================================*/

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});

/*=========================================
        OUR STORY ANIMATION
=========================================*/

const storySection = document.querySelector(".our-story");

if(storySection){

    const storyObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },{
        threshold:0.2
    });

    storySection.style.opacity = "0";

    storySection.style.transform = "translateY(50px)";

    storySection.style.transition = "all .8s ease";

    storyObserver.observe(storySection);

}

/*=========================================
    MISSION & VISION ANIMATION
=========================================*/

const mvCards = document.querySelectorAll(".mv-card");

const mvObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

mvCards.forEach(card=>{

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "all .8s ease";

    mvObserver.observe(card);

});

/*=========================================
        WHY NATIVE EXHIBIT ANIMATION
=========================================*/

const whyCards = document.querySelectorAll(".why-card");

const whyObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

whyCards.forEach(card=>{

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "all .8s ease";

    whyObserver.observe(card);

});

/*=========================================
        CTA ANIMATION
=========================================*/

const ctaSection = document.querySelector(".about-cta");

if(ctaSection){

    const ctaObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },{
        threshold:0.2
    });

    ctaSection.style.opacity = "0";

    ctaSection.style.transform = "translateY(50px)";

    ctaSection.style.transition = "all .8s ease";

    ctaObserver.observe(ctaSection);

}