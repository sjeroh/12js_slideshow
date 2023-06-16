let slideIndex = 1;
showSlides(slideIndex)

function showSlides(n){
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  // console.log(slides,dots)
  if(n>slides.length){
    slideIndex = 1;
  }
  if(n<1){
    slideIndex = slides.length;

  }
  console.log(slideIndex)

  for(let i=0; i<slides.length ; i++){
    slides[i].style.display='none'
  }
  for(let i=0;i < dots.length; i++){
    dots[i].classList.remove('active')
  }

  slides[slideIndex - 1].style.display='block'
  dots[slideIndex -1].classList.add('active')

}


function plusSlides(n){
  showSlides(slideIndex += n)
  //slideindex = slideindex + 1
}

function currentSlide(n){
  showSlides(slideIndex = n)
  
}

// setInterval(()=>{plusSlides(1)},3500)
let stopslide= setInterval(()=>{plusSlides(1)},3500);

let sildeshowCon=document.getElementById('slideshow-container');
sildeshowCon.addEventListener('mouseenter',function(){
  //setInterval 멈추기
  clearInterval(stopslide)
});