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
        CONTACT FORM ANIMATION
=========================================*/

const contactForm = document.querySelector(".contact-form");

if(contactForm){

    const formObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },{
        threshold:0.2
    });

    contactForm.style.opacity = "0";

    contactForm.style.transform = "translateY(50px)";

    contactForm.style.transition = "all .8s ease";

    formObserver.observe(contactForm);

}

/*=========================================
    CONTACT INFO ANIMATION
=========================================*/

const infoCards = document.querySelectorAll(".info-card");

const infoObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

infoCards.forEach(card=>{

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "all .8s ease";

    infoObserver.observe(card);

});


/*=========================================
            FAQ ANIMATION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

const faqObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

faqItems.forEach(item=>{

    item.style.opacity = "0";

    item.style.transform = "translateY(50px)";

    item.style.transition = "all .8s ease";

    faqObserver.observe(item);

});


/*=========================================
            CTA ANIMATION
=========================================*/

const ctaSection = document.querySelector(".contact-cta");

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