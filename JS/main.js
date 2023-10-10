/* =================Typed js ================== */
var typed = new Typed('.auto-type', {
    strings: ["Programmer", "Front-end Developer"],
    typeSpeed: 150,
    backSpeed: 30,
    loop : true
  });

/*==================== menu show y hidden ==================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle =document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    /*============= menu show ==========*/
    /* validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    /*=========== menu hidden ========= */
    if(navToggle){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

    /*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    // When we click on each nav__link, we remove the show-menu class
}
navLink.forEach(n => n.addEventListener('click', linkAction))

 
/*================== Accordion skills =============*/

const skillsContent = document.querySelectorAll(".skills__content"),
      skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className ='skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*============== Qualification Tab =============================== */
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qualification__active')
            })
            target.classList.add('qualification__active')

            tabs.forEach(tab => {
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
        })
      })


      /*=============== Project swiper ==================== */

      let swiper = new Swiper('.project__container', {
        cssMode : true,
        loop: true,

      
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
       
      });

      /* ============ scroll section active link =================== */

      const sections = document.querySelectorAll('section[id]')

      function scrollActive() {
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight =current.offsetHeight
            const sectionTop= current.offsetTop - 50;
            sectionId =current.getAttribute("id")

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

            }
        })
      }

      window.addEventListener('scroll', scrollActive)



      /* ============== Change background header ========== */

      function scrollHeader() {
        const nav = document.getElementById('header')

        /// When the scroll is greater than 200 viewport height,
        /// add the scroll-header 

        if (this.scrollY >= 80 ) nav.classList.add('scroll-header');
        else nav.classList.remove('scroll-header')
      }

      window.addEventListener('scroll', scrollHeader)

    /*  =============== dark theme ================= */

      const themeButton = document.getElementById('theme-button')
      const darkTheme = 'dark-theme'
      const iconTheme = 'uil-sun'
      
      // if user selected
      const selectedTheme = localStorage.getItem('selected-theme')
      const selectedIcon = localStorage.getItem('selected-icon')

      const getCurrentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light'
      const getCurrentIcon = document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

      if (selectedTheme) {

        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        document.body.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
      }

        //// active / deactive the theme 
      themeButton.addEventListener('click', () => {

        // add or remove dark / icon
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        // save theme 
        localStorage.setItem('selected-theme', getCurrentTheme)
        localStorage.setItem('selected-icon', getCurrentIcon)


      })




