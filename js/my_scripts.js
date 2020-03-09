// When the user scrolls down 50px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (window.screen.width > 768) {
    return;
  }
  // if (window.location.pathname == '/' || window.location.pathname == 'index.html') {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-100px";

  //     var navbarBtn = document.getElementById("navbarResponsive");
  //     navbarBtn.classList.remove('show');
  //   }
  // }
}

$('#navbarResponsive').on('hide.bs.collapse', function () {
  document.getElementById("navbar").classList.add("transparent-md-down");
})

$('#navbarResponsive').on('show.bs.collapse', function () {
  document.getElementById("navbar").classList.remove("transparent-md-down");
})

function updateNavbarSection(currentSection) {
  document.getElementById("nbSectionHome").classList.remove('nv-section-selected');
  document.getElementById("nbSectionAbout").classList.remove('nv-section-selected');
  document.getElementById("nbSectionTreatment").classList.remove('nv-section-selected');
  document.getElementById("nbSectionContact").classList.remove('nv-section-selected');

  if (currentSection == 'home') {
    document.getElementById("nbSectionHome").classList.add('nv-section-selected');
  } else if (currentSection == 'treatment') {
    document.getElementById("nbSectionTreatment").classList.add('nv-section-selected');
  } else if (currentSection == 'about') {
    document.getElementById("nbSectionAbout").classList.add('nv-section-selected');
  } else if (currentSection == 'contact') {
    document.getElementById("nbSectionContact").classList.add('nv-section-selected');
  }
}