// console.dir(document);
// console.log(document.body);

var btnContainer = document.querySelector(".buttons");

var btns = btnContainer.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.querySelectorAll(".active");

    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
  });
}
