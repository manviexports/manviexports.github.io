if (document.getElementById("body")!=null){
  document.getElementById("body").onscroll = function myFunction() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("parallax");
    var xvalue = "center";
    var factor = 0.8;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById('newsLetter');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("You have been successfully added to our mailing list!");
    })
  });
});

window.addEventListener("load", function() {
  const form = document.getElementById('formid');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("We will we be in touch soon!");
    })
  });
});

function contactSuccess(){
  
}

//-----------------------------Smooth-Scroll--------------------------------
function init(){
  new SmoothScroll(document,120,20)
}

function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target = (document.scrollingElement 
              || document.documentElement 
              || document.body.parentNode 
              || document.body) // cross browser support for document scrolling
      
  var moving = false
  var pos = target.scrollTop
  var frame = target === document.body 
              && document.documentElement 
              ? document.documentElement 
              : target // safari is the new IE
  
  target.addEventListener('mousewheel', scrolled, { passive: false })
  target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    var delta = normalizeWheelDelta(e)

    pos += -delta * speed
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

    if (!moving) update()
  }

  function normalizeWheelDelta(e){
    if(e.detail){
      if(e.wheelDelta)
        return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
      else
        return -e.detail/3 // Firefox
    }else
      return e.wheelDelta/120 // IE,Safari,Chrome
  }

  function update() {
    moving = true
    
    var delta = (pos - target.scrollTop) / smooth
    
    target.scrollTop += delta
    
    if (Math.abs(delta) > 0.5)
      requestFrame(update)
    else
      moving = false
  }

  var requestFrame = function() { // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  }()
}

  function openCreds() {
    document.getElementById("cred-cont").style.display = "flex";
  }
  function closeCreds() {
    document.getElementById("cred-cont").style.display = "none";
  }

  function hamburgFunc() {
    var x = document.getElementById("nav2");
    var w = window.matchMedia( "(max-width: 1000px)" );

    if ((x.style.display != "flex" && w.matches)) {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

function submitAlert(){
  document.getElementById("formid").reset();
  alert("Your form has been submitted!");
}

function mensDisplay(){
  var w = document.getElementById("womens-link");
  var wGrid = document.getElementById("womens-grid");
  var m = document.getElementById("mens-link");
  var mGrid = document.getElementById("mens-grid");


  if (m.style.display = "flex"){
    m.style.display = "flex";
    w.style.display = "none";
    wGrid.style.display = "none";
    mGrid.style.display = "grid";
  } else{
    return(0);
  }
}
function womensDisplay(){
  var w = document.getElementById("womens-link");
  var wGrid = document.getElementById("womens-grid");
  var m = document.getElementById("mens-link");
  var mGrid = document.getElementById("mens-grid");

  if (w.style.display = "none"){
    w.style.display = "flex";
    m.style.display = "none";
    wGrid.style.display = "grid";
    mGrid.style.display = "none";
  } else{
    w.style.display = "none";
    m.style.display = "flex";
    wGrid.style.display = "none";
    mGrid.style.display = "grid";
  }
}

var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var slideId = [ "slide1",
                "slide2", 
                "slide3", 
                "slide4", 
                "slide5", 
                "slide6",
                "slide7",
                "slide8",
                "slide9",
                "slide10",
                "slide11",
                "slide12",
                "slide13",
                "slide14",
                "slide15",
                "slide16",
                "slide17",
                "slide18",
                "slide19"
              ]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
showSlides(1, 16);
showSlides(1, 17);
showSlides(1, 18);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if(n > x.length){
    slideIndex[no] = 1;
  }    
  if(n < 1){
    slideIndex[no] = x.length;
  }
  for(i = 0; i < x.length; i++){
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "flex";  
}

window.addEventListener("load", function() {
  const form = document.getElementById('formid');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success!");
    })
  });
});

var wal1 = document.getElementById("mensWallets1");
var wal2 = document.getElementById("mensWallets2");
var wal3 = document.getElementById("mensWallets3");
var wal4 = document.getElementById("mensWallets4");
var wal5 = document.getElementById("mensWallets5");
var wal6 = document.getElementById("mensWallets6");

var lap = document.getElementById("laptopBag");
var bri = document.getElementById("briefCase");
var bac = document.getElementById("backPack");
var cro = document.getElementById("crossBody");
var bel = document.getElementById("leatherBelt");
var sha = document.getElementById("shavingKit");

var wom = document.getElementById("womensWallet");
var sli = document.getElementById("slingBag");
var fas = document.getElementById("fashionBag");
var tot = document.getElementById("laptopTote");


var tra = document.getElementById("travelBag");
var key = document.getElementById("keyPurse");


let menuBtn = document.querySelectorAll('.nav-item')

    menuBtn.forEach((li) => {
        li.addEventListener("click", (e) => {
            menuBtn.forEach((el) => el.classList.remove("nav-active"));
            li.classList.add("nav-active");
        });
    });


function mensWallets(){
  if (wal1.style.display = "none"){
    wal1.style.display = "block";wal2.style.display = "block";wal3.style.display = "block";
    wal4.style.display = "block";wal5.style.display = "block";wal6.style.display = "block";
    lap.style.display= "none";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "none";
  }
}
function laptopBag(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display= "block";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "none";
  }
}
function briefCase(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "block";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "none";
  }
}

function backPack(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "none";
    bac.style.display = "block";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "none";
  }
}

function crossBody(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "block";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "none";
  }
}
function leatherBelt(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "block";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "none";
  }
}
function shavingKit(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "block";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "none";
  }
}
function womensWallet(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "block";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "none";
  }
}
function slingBag(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "block";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "none";
  }
}
function fashionBag(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "block";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "none";
  }
}
function laptopTote(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "block";
    tra.style.display = "none";
    key.style.display = "none";
  }
}
function travelBag(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "block";
    key.style.display = "none";
  }
}
function keyPurse(){
  if (lap.style.display = "none"){
    wal1.style.display = "none";wal2.style.display = "none";wal3.style.display = "none";
    wal4.style.display = "none";wal5.style.display = "none";wal6.style.display = "none";
    lap.style.display = "none";
    bri.style.display= "none";
    bac.style.display = "none";
    cro.style.display = "none";
    bel.style.display = "none";
    sha.style.display = "none";
    wom.style.display = "none";
    sli.style.display = "none";
    fas.style.display = "none";
    tot.style.display = "none";
    tra.style.display = "none";
    key.style.display = "block";
  }
}