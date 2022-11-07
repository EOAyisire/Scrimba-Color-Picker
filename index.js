const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  // click event to select el
  select.addEventListener("click", () => {
    // add clicked select style to selected element
    select.classList.toggle("select-clicked");
    //  add rotat to caret
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    // add click event to option el
    option.addEventListener("click", () => {
      // change selected inner text to clicked option
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      // remove active class from all options el
      options.forEach((option) => {
        option.classList.remove("active");
      });
      //   add active class to clicked option el
      option.classList.add("active");
    });
  });
});
