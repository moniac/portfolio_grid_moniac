var changePlus = function () {
  var plus = document.querySelector("body>section span"),
      filter = document.querySelector("body>section>section");
      plus.addEventListener("click", function () {
        filter.classList.toggle("geen-display");
      });
};

changePlus();

plusToVinkje = function () {
  var plusje = document.querySelector("body section ul li section span");
   plusje.addEventListener('click', function () {
    if (plusje.innerHTML === "+") {
      plusje.innerHTML = "+&#10003";

    }
    else {
      plusje.innerHTML = "+";
    }
  });
};
plusToVinkje();

// var image = document.querySelectorAll("body section ul li section img");
//
//
// var change = function (that) {
//         if(that.getAttribute("src") == "/img/empty.png"){
//             that.src = "img/fill.png";
//
//         }
//         else{
//             that.src = "/img/empty.png";
//
//         }
// }
//
// for (var i = 0; i < image.length; i++){
//     image[i].addEventListener("click", function(){
//         change(this);
//     });
// }

// var changeDoof = function () {
//   var section = document.querySelector(".paranoia"),
//       filter = document.querySelector("body"),
//       doof = document.querySelector(".doof"),
//       dialoog = document.querySelector(".dialoog");
//       section.addEventListener("mouseenter", function () {
//         filter.classList.toggle("paranoia");
//       });
// section.addEventListener("mouseleave", function () {
//   filter.classList.toggle("paranoia");
// });
// doof.addEventListener("mouseenter", function () {
//   filter.classList.toggle("doof");
// });
// doof.addEventListener("mouseleave", function () {
//   filter.classList.toggle("doof");
// });
// dialoog.addEventListener("mouseenter", function () {
//   filter.classList.toggle("dialoog");
// });
// dialoog.addEventListener("mouseleave", function () {
//   filter.classList.toggle("dialoog");
// });
// };
//
// changeDoof();

var labelOpen = function () {
  var box = document.querySelector('.heart'),
  label = document.querySelector('.label');
  box.addEventListener("click", function () {
  label.classList.add("open");
  });
};

labelOpen();
