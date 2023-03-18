const hamberger=document.querySelector('.hamberger');
const side=document.querySelector(".side");
const spans=hamberger.querySelectorAll('span');
const premierSpan=spans[0];
const dernierSpan=spans[spans.length-1];
const selectionerUl=document.querySelector("ul")

hamberger.addEventListener('click',()=>{
    side.classList.toggle('hambergerClick');
    premierSpan.classList.toggle('hambergerHover1');
    dernierSpan.classList.toggle('hambergerHover2');
    hamberger.classList.toggle("hambergerClick2");
    selectionerUl.classList.toggle("hambergerActiveUl");

})