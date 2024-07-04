/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >=50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews= document.querySelectorAll('.services__modal'), 
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click',() =>{
        modal(i)
    })
})

modalClose.forEach((mc)=>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})





/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const ScrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bc bc-moon' ? 'add' : 'remove'](iconTheme) 
}

themeButton.addEventListener('click' , () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})






/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal('.home__data', {delay: 700})
sr.reveal('.home__handle', {delay: 700})
sr.reveal('.home__social, .home__scroll', {delay: 1000, origin: 'bottom'})

/*contact form js*/


// const btn = document.querySelector('button')
// const inputs = document.querySelector('form')
// btn.addEventListener('click', () =>{
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "kshitijmahajan.ngp@gmail.com",
//         Password : "3178F4F507CF2B08DE8C38BAC2BF407C4F66",
//         To : 'kshitijmahajan.ngp@gmail.com',
//         From : inputs.elements["email"].value,
//         Subject : "New Form Submission",
//         Body : inputs.elements["name"].value + "<br>" + inputs.elements["idea"].value
//     }).then(
//       message => alert("The email is successfully sent")
//     );
// })

const fname = document.getElementById('nn');
const em = document.getElementById('ee');
const mssg = document.getElementById('mm');


const sub = document.getElementsByClassName('contact__form')[0];

SubmitEvent.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Clicked");

    //email code

    Email.send({
        SecureToken : "20f3cd1c-5779-46af-af74-bf27e26c92bb",
        To : 'kshitijmahajan.ngp@gmail.com',
        From : "mahajankshitij.ngp@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
})

