const Other_Cards = document.querySelectorAll('.slider2');


const dots2 = document.querySelectorAll('.dot2');








let j=0;
const nextF = function() {
  Other_Cards[j].classList.remove("showright2");
  Other_Cards[j].classList.remove("showleft2");
  dots2[j].classList.remove("chosen")   // justifying the dot

  j = (j + 1) % Other_Cards.length; // Ensure i ndex stays within bounds
  Other_Cards[j].classList.add("showleft2");


  dots2[j].classList.add("chosen")   // justifying the dot
};

const prevF = function() {
  Other_Cards[j].classList.remove("showright2");
  Other_Cards[j].classList.remove("showleft2");
  dots2[j].classList.remove("chosen")   // justifying the dot

  j = (j - 1 + Other_Cards.length) % Other_Cards.length; // Ensure i ndex stays within bounds
  Other_Cards[j].classList.add("showright2");


  dots2[j].classList.add("chosen")   // justifying the dot
};




// handing swipe by mobile
let touchstartX2 = 0;
let touchendX2 = 0;

Other_Cards.forEach(card => {
  card.addEventListener('touchstart', function(event) {
    touchstartX2 = event.touches[0].clientX;
    touchstartY2 = event.touches[0].clientY;
  });

  card.addEventListener('touchend', function(event) {
    touchendX2 = event.changedTouches[0].clientX;
    touchendtY2 = event.changedTouches[0].clientY;
    SubX2 = Math.abs(touchendX2 - touchstartX2)
    SubY2 = Math.abs(touchstartY2 - touchendtY2)
    handleSwipe2();
  });
});

function handleSwipe2() {

  if (SubX2 >= SubY2){

    if (touchendX2 < touchstartX2) {
      nextF(); // Swipe left, move to the next slide
    } else if (touchendX2 > touchstartX2) {
      prevF(); // Swipe right, move to the previous slide
    }
  }

  
}