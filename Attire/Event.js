/*=========================================
        MOBILE MENU TOGGLE
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}


/*=========================================
        CLOSE MENU ON LINK CLICK
=========================================*/

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.background = "rgba(5,5,5,.98)";

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.35)";

    }

    else{

        header.style.background =
        "rgba(5,5,5,.96)";

        header.style.boxShadow = "none";

    }

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================
        EVENT CARD ANIMATION
=========================================*/

const eventCards = document.querySelectorAll(".event-card");

const eventCardsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

eventCards.forEach(card=>{

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "all .8s ease";

    eventCardsObserver.observe(card);

});

/*=========================================
        EVENT BUTTON EFFECT
=========================================*/

const eventButtons = document.querySelectorAll(".event-btn");

eventButtons.forEach(button=>{

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        const eventTitle = button
        .closest(".event-content")
        .querySelector("h3")
        .textContent;

        alert(eventTitle + " details coming soon!");

    });

});

/*=========================================
        FESTIVAL CARD ANIMATION
=========================================*/

const festivalCards = document.querySelectorAll(".festival-card");

const festivalCardsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

            festivalCardsObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

festivalCards.forEach(card=>{

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "all .8s ease";

    festivalCardsObserver.observe(card);

});

/*=========================================
        FESTIVAL CARD CLICK EFFECT
=========================================*/

festivalCards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform = "scale(.98)";

        setTimeout(()=>{

            card.style.transform = "";

        },150);

    });

});

/*=========================================
        TIMELINE ANIMATION
=========================================*/

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineItemsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

            timelineItemsObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

timelineItems.forEach(item=>{

    item.style.opacity = "0";

    item.style.transform = "translateY(50px)";

    item.style.transition = "all .8s ease";

    timelineItemsObserver.observe(item);

});

/*=========================================
        TIMELINE CARD EFFECT
=========================================*/

const timelineCards = document.querySelectorAll(".timeline-content");

timelineCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.borderColor = "#D4AF37";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.borderColor = "rgba(212,175,55,.15)";

    });

});

/*=========================================
        CTA ANIMATION
=========================================*/

const ctaSection = document.querySelector(".cta-section");

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

if(ctaSection){

    ctaSection.style.opacity = "0";

    ctaSection.style.transform = "translateY(50px)";

    ctaSection.style.transition = "all .8s ease";

    ctaObserver.observe(ctaSection);

}

/*=========================================
        CTA BUTTON EFFECT
=========================================*/

const ctaButtons = document.querySelectorAll(".cta-btn");

ctaButtons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform = "translateY(0)";

    });

});