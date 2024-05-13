const Cards = document.querySelectorAll('.slider');
const dots = document.querySelectorAll('.dot');


let i=0;
const nextFunction = function() {
  Cards[i].classList.remove("showright");
  Cards[i].classList.remove("showleft");
  dots[i].classList.remove("chosen")   // justifying the dot

  i = (i + 1) % Cards.length; // Ensure i ndex stays within bounds
  Cards[i].classList.add("showleft");


  dots[i].classList.add("chosen")   // justifying the dot
};


const prevFunction = function(){
  Cards[i].classList.remove("showright");
  Cards[i].classList.remove("showleft");
  dots[i].classList.remove("chosen")

  i = (i - 1 + Cards.length) % Cards.length; // Ensure index stays within bounds
  Cards[i].classList.add("showright");
  dots[i].classList.add("chosen")
  
  
  
};


// handle touch
let touchstartX = 0;
let touchendX = 0;

Cards.forEach(card => {
  card.addEventListener('touchstart', function(event) {
    touchstartX = event.touches[0].clientX;
    touchstartY = event.touches[0].clientY;
    // console.log(" start X= " + touchstartX);
    // console.log("start Y= "+ touchstartY);
    
  });

  card.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].clientX;
    touchendtY = event.changedTouches[0].clientY;
    // console.log("end X= "+touchendX);
    // console.log("end Y= "+ touchendtY);
    SubX = Math.abs(touchendX - touchstartX)
    SubY = Math.abs(touchstartY - touchendtY)
    // console.log(SubX);
    // console.log(SubY);
    
    
    handleSwipe();
  });
});

function handleSwipe() {

  if (SubX >= SubY){
    if (touchendX < touchstartX) {
      nextFunction(); // Swipe left, move to the next slide
    } else if (touchendX > touchstartX) {
      prevFunction(); // Swipe right, move to the previous slide
    }
  }

  
}

// -=----------------handling
