// this worked in devTools. not in live server
// error darkMode is null
window.onload = function () {
  // event handlers here
  let page = document.querySelector('.page');
  let darkMode = document.querySelector('.button-dark');

  darkMode.onclick = function () {
    console.log('Dark button is clicked!');
    page.classList.remove('light-mode');
    page.classList.add('dark-mode');
  };
  
  let lightMode = document.querySelector('.button-light');

  lightMode.onclick = function () {
    console.log('Light button clicked!');
    // this .remove worked with 2 options. adding 3rd make blank?
    page.classList.remove('dark-mode');
    page.classList.add('light-mode');
  };

  let prettyMode = document.querySelector('.button-pretty');

  prettyMode.onclick = function () {
    console.log('Pretty mode engaged');
    page.classList.remove();
    page.classList.add('pretty-mode');
  };
};


// to make Toggle button-works but as toggle.
// function darkMode() {
//   const element = document.body;
//   element.classList.toggle("button-dark");
// }

