(function () {
  var activator = document.querySelector(".page__activator");

  activator.addEventListener("click", function () {
    document.body.classList.add("page_menu");
    document.body.classList.add("page_menu-transition");
  });

  //

  var disactivator = document.querySelector(".page__disactivator");

  disactivator.addEventListener("click", function () {
    document.body.classList.remove("page_menu");
  });
})();
