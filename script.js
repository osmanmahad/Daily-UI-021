var search_btn = document.querySelector(".search_btn");
var close_btn = document.querySelector(".close_btn");
var search_box_wrap = document.querySelector(".search_box_wrap");
var input_search = document.querySelector(".input_search");

search_btn.addEventListener("click", function () {
  search_box_wrap.classList.add("active");
  input_search.focus();
});

close_btn.addEventListener("click", function () {
  search_box_wrap.classList.remove("active");
});

window.onbeforeunload = function () {
  document.querySelector(".input_search").value = "";
};
