let menuIcon=document.querySelector("#menu-icon"),navbar=document.querySelector(".navbar");menuIcon.onclick=()=>{menuIcon.classList.toggle("bx-x"),navbar.classList.toggle("active")},ScrollReveal({reset:!0,distance:"80px",duration:2e3,delay:200}),ScrollReveal().reveal(".about-content",{origin:"top"});