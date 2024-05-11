// =================the typing title================
var typed = new Typed(".typed1", {
  strings: ["Hi there! I'm"],
  typeSpeed: 25,
  startDelay: 1100,
  backSpeed: 5,
  loop: false,
  // loopCount: Infinity,
  showCursor: false,
})

var typed = new Typed(".typed2", {
  strings: ["Karim Habbal"],
  typeSpeed: 25,
  startDelay: 3000,
  backSpeed: 5,
  loop: false,
  // loopCount: Infinity,
  showCursor: false,
})



var typed = new Typed(".typed", {
  strings: ["Front-end developer^1000", "Web designer^3000", "Front-end developer^2000"],
  typeSpeed: 20,
  startDelay: 1100,
  backSpeed: 2,
  loop: false,
  // loopCount: Infinity,
  showCursor: true,
})


///////////////////////////////////////////////the observation scrolle/////////////////////////////////////


window.onload = () => {

  
  const hideUpelements = document.querySelectorAll('.hideUP');



 
  
  const hideLeftelements = document.querySelectorAll('.hideleft:not(.personal-img1):not(.hero-dots)');
const hideRightelements = document.querySelectorAll('.hideright:not(.personal-img1):not(.hero-dots)'); 
 const imageright = document.querySelectorAll('.personal-img1');
const dotleftTop = document.querySelectorAll('.hero-dots');
  
  
  
  
  
  // applying the scrolling
  let repeatCountUp=0;
  let repeatCountleft=0;
  let repeatCountright=0;
  let repeatCountrightimage=0;
  let repeatCountleftimage=0;

  
  const observerScrollUp = new IntersectionObserver((entries) => {
  
    
    entries.forEach(entry =>{ 
        if (entry.isIntersecting){
          repeatCountUp++;
        entry.target.classList.add('showUP')
        entry.target.classList.remove( 'hideUP' )  
      
        }
  
        else { entry.target.classList.add('hideUP')
        entry.target.classList.remove( 'showUP' ) }
      
  
        if (repeatCountUp>=2 && entry.target.classList.contains("showUP")){
            observerScrollUp.disconnect();
        }
    })
   
  }, {threshold:0.4});
  
  const observerScrollLeft = new IntersectionObserver((entries) => {
  
    
    entries.forEach(entry =>{ 
        if (entry.isIntersecting){
        repeatCountleft++;
        entry.target.classList.add('showX')
        entry.target.classList.remove( 'hideleft' )  
        
        }

        else { entry.target.classList.add('hideleft')
        entry.target.classList.remove( 'showX' ) }
  
   
        if (repeatCountleft>=2 && entry.target.classList.contains("showX")){
          observerScrollLeft.disconnect();
      }

    })
   
  }, {threshold:0.15});
  
  const observerScrollRight = new IntersectionObserver((entries) => {
  
    
    entries.forEach(entry =>{ 
        if (entry.isIntersecting){
        repeatCountright++;
        entry.target.classList.add('showX')
        entry.target.classList.remove( 'hideright' )  
        
        }

        else { entry.target.classList.add('hideright')
        entry.target.classList.remove( 'showX' ) }
  
   
        if (repeatCountright>=2 && entry.target.classList.contains("showX")){
          observerScrollRight.disconnect();
      }

    })
   
  }, {threshold:0.15});
  
  const observerScrollLeftimage = new IntersectionObserver((entries) => {
  
    
    entries.forEach(entry =>{ 
        if (entry.isIntersecting){
        repeatCountleftimage++;
        entry.target.classList.add('showX')
        entry.target.classList.remove( 'hideleft' )  
        
        }

        else { entry.target.classList.add('hideleft')
        entry.target.classList.remove( 'showX' ) }
  
   
        if (repeatCountleftimage>=2 && entry.target.classList.contains("showX")){
          observerScrollLeftimage.disconnect();
      }

    })
   
  }, {threshold:0.15});
  
  const observerScrollRightimage = new IntersectionObserver((entries) => {
  
    
    entries.forEach(entry =>{ 
        if (entry.isIntersecting){
        repeatCountrightimage++;
        entry.target.classList.add('showX')
        entry.target.classList.remove( 'hideright' )  
        
        }

        else { entry.target.classList.add('hideright')
        entry.target.classList.remove( 'showX' ) }
  
   
        if (repeatCountrightimage>=2 && entry.target.classList.contains("showX")){
          observerScrollRightimage.disconnect();
      }

    })
   
  }, {threshold:0.15});
  


  hideUpelements.forEach(elemnt=>{
    observerScrollUp.observe(elemnt);
  })
  
  hideLeftelements.forEach(elemnt=>{
    observerScrollLeft.observe(elemnt);
  })
  
  hideRightelements.forEach(elemnt=>{
    observerScrollRight.observe(elemnt);
  })


   imageright.forEach(elemnt=>{
    observerScrollRightimage.observe(elemnt);
  })


  dotleftTop.forEach(elemnt=>{
    observerScrollLeftimage.observe(elemnt);
  })

///////////////////////////////////////////////navbar observation /////////////////////////////////////

  const HomeLink = document.querySelector('.home-link');
const SkillsLink = document.querySelector('.skills-link');
const ProjectsLink = document.querySelector('.projects-link');
const OtherProjectLink = document.querySelector('.other-projects-link');
const sections = document.querySelectorAll('section');
console.log(sections);




const observationNav = new IntersectionObserver((entries) => {
  
    
  entries.forEach(entry =>{ 
      if (entry.isIntersecting){
      
      if (entry.target.classList.contains('hero-section')){HomeLink.classList.add('white' ,'w600')}
      else {HomeLink.classList.remove('white' ,'w600')}

      if (entry.target.classList.contains('skills')){SkillsLink.classList.add('white' , 'w600')}
      else {SkillsLink.classList.remove('white' , 'w600')}

      if (entry.target.classList.contains('projects' )){ProjectsLink.classList.add('white' , 'w600')}
      else {ProjectsLink.classList.remove('white' , 'w600')}

      if (entry.target.classList.contains('other_projects')){OtherProjectLink.classList.add('white' , 'w600')}
      else {OtherProjectLink.classList.remove('white' , 'w600')}
        
    
      }

    
    

      
  } )
 
}, {threshold:0.4});

sections.forEach(elemnt=>{
  observationNav.observe(elemnt);
})

  }

 


// =================the navbar================
const header = document.querySelector(".header");
let listBtn = document.querySelector(".list-btn");
let OpenBtn = document.querySelector('open-btn');
let closeBtn = document.querySelector('.close-btn');

listBtn.addEventListener('click', function() {
  header.classList.toggle("nav-open");
//   if(header.classList.contains("nav-open")){
//     console.log("done");
//     OpenBtn.classList.remove(".open-now")
// }
})






// =================the smooth effect================
const allLinks = document.querySelectorAll("a");
allLinks.forEach(function(link){
  const header = document.querySelector("header");
  link.addEventListener('click', function(event){
    
    
    const href = link.getAttribute("href");
    
    if (href!="#" && href.startsWith("#")){
      event.preventDefault(); 
      const section = document.querySelector(href);
      const offset = section.offsetTop - header.offsetHeight -50;
     

      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });

      
      if (header.classList.contains("nav-open")){
        header.classList.toggle("nav-open");
      }
}


    
 

  })


})

// ========================================scrolling==================

